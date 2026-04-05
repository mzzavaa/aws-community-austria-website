/**
 * Fetches upcoming events from Meetup RSS feeds for all AWS UG Austria groups
 * and saves the result to public/data/meetups.json.
 * Runs via GitHub Actions on a schedule.
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = resolve(__dirname, "../public/data/meetups.json");

const GROUPS = [
  { name: "AWS UG Vienna",   urlname: "amazon-web-services-aws-vienna" },
  { name: "AWS WUG Vienna",  urlname: "aws-womens-user-group-vienna" },
  { name: "AWS UG Linz",     urlname: "aws-user-group-linz" },
];

function extractCdata(xml, tag) {
  const re = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i");
  const plain = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i");
  return (xml.match(re) || xml.match(plain))?.[1]?.trim() ?? "";
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function parseItems(xml) {
  const items = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const title = extractCdata(block, "title");
    const link  = block.match(/<link>(.*?)<\/link>/)?.[1]?.trim() ?? "";
    const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1]?.trim() ?? "";
    const desc  = extractCdata(block, "description");

    const venueMatch = desc.match(/Where:<\/b>\s*([\s\S]*?)(?:<br|<\/p|\n)/i);
    const venue = venueMatch ? stripHtml(venueMatch[1]) : "";

    if (!title || !link) continue;

    const date = pubDate ? new Date(pubDate).toISOString() : "";
    if (!date) continue;

    if (new Date(date) < new Date()) continue;

    items.push({ title, link, date, venue });
  }
  return items;
}

async function fetchGroup(group) {
  const url = `https://www.meetup.com/${group.urlname}/events/rss/`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "aws-community-austria-website/1.0" },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    return parseItems(xml).map((e) => ({ ...e, group: group.name, groupUrl: `https://www.meetup.com/${group.urlname}/` }));
  } catch (err) {
    console.error(`Failed to fetch ${group.name}: ${err.message}`);
    return [];
  }
}

const all = (await Promise.all(GROUPS.map(fetchGroup))).flat();

all.sort((a, b) => new Date(a.date) - new Date(b.date));
const events = all.slice(0, 6);

const output = { lastUpdated: new Date().toISOString(), events };
writeFileSync(OUT_FILE, JSON.stringify(output, null, 2));
console.log(`Wrote ${events.length} events to ${OUT_FILE}`);
