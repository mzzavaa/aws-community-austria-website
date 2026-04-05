import { useState, useEffect } from "react";
import { USER_GROUPS, ORGANIZERS } from "../data/groups";

interface MeetupEvent {
  title: string;
  link: string;
  date: string;
  venue: string;
  group: string;
  groupUrl: string;
  saveTheDate?: boolean;
}

const SAVE_THE_DATES: MeetupEvent[] = [
  {
    title: "AWS UG Vienna Meetup — hosted by bytesource",
    date: "2026-04-22T18:00:00.000Z",
    venue: "bytesource, Vienna",
    group: "AWS UG Vienna",
    groupUrl: "https://www.meetup.com/amazon-web-services-aws-vienna/",
    link: "https://www.meetup.com/amazon-web-services-aws-vienna/",
    saveTheDate: true,
  },
  {
    title: "AWS Women's UG Vienna — Next Meetup",
    date: "",
    venue: "Vienna",
    group: "AWS WUG Vienna",
    groupUrl: "https://www.meetup.com/aws-womens-user-group-vienna/",
    link: "https://www.meetup.com/aws-womens-user-group-vienna/",
    saveTheDate: true,
  },
];

const COMMUNITY_DAYS = [
  { name: "AWS Community Day Türkiye",  date: "May 9, 2026",         location: "Istanbul, Turkey", url: "https://aws.cloudturkey.io",     status: "Coming Soon" },
  { name: "AWS Community Day Athens",   date: "April 28, 2026",      location: "Athens, Greece",   url: "https://awscommunity.gr",        status: "Coming Soon" },
  { name: "AWS Community Day DACH",     date: "September 15, 2026",  location: "Berlin, Germany",  url: "https://aws-community-day.de",   status: "Coming Soon" },
];

export function HomePage() {
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/meetups.json`)
      .then((r) => r.json())
      .then((d) => { setEvents(d.events ?? []); setLoadingEvents(false); })
      .catch(() => setLoadingEvents(false));
  }, []);

  return (
    <>
      {/* ── Hero with Video Background ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={`${import.meta.env.BASE_URL}assets/hero-bg.mp4`} type="video/mp4" />
        </video>

        {/* Dark overlay for opacity effect */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(22, 30, 45, 0.78)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "100px 100px 80px",
            maxWidth: "1100px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            AWS <span style={{ color: "#A66FF0" }}>Community</span> Austria
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#E0E0E0",
              lineHeight: 1.6,
              maxWidth: "820px",
              margin: "0 auto 36px",
            }}
          >
            Join the largest AWS community in Austria. Three user groups, one
            mission: learn, share, and build together on AWS.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://sessionize.com/aws-community-austria"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#A66FF0",
                color: "#fff",
                padding: "14px 36px",
                borderRadius: "8px",
                fontSize: "17px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Submit a Talk
            </a>
            <a
              href="https://join.slack.com/t/awscommunitydach"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#A66FF0",
                padding: "14px 36px",
                borderRadius: "8px",
                fontSize: "17px",
                fontWeight: 600,
                textDecoration: "none",
                border: "2px solid #A66FF0",
              }}
            >
              Join Slack
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        style={{
          padding: "60px 40px",
          background: "#1E2538",
          borderTop: "2px solid #2F2B52",
          borderBottom: "2px solid #2F2B52",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {[
            { n: "3", l: "User Groups" },
            { n: "47+", l: "Meetups Hosted" },
            { n: "2000+", l: "Community Members" },
            { n: "100+", l: "Speakers" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontSize: "46px", fontWeight: 900, color: "#A66FF0", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "17px", color: "#D8D8D8", marginTop: "8px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── User Groups — big clickable logos ── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Our User Groups
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {USER_GROUPS.map((group) => (
            <a
              key={group.id}
              href={group.meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#1E2538",
                borderRadius: "16px",
                padding: "36px 28px",
                border: "1px solid #2F2B52",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#A66FF0";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2F2B52";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <img
                src={group.logoWide}
                alt={group.name}
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  height: "180px",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                {group.shortName}
              </div>
              <div style={{ fontSize: "16px", color: "#A66FF0", fontWeight: 600, marginBottom: "12px" }}>
                {group.city}, Austria
              </div>
              <div style={{ fontSize: "18px", color: "#D8D8D8", lineHeight: 1.6, marginBottom: "16px" }}>
                {group.description}
              </div>
              <span style={{ fontSize: "17px", color: "#A66FF0", fontWeight: 600 }}>
                Join on Meetup &rarr;
              </span>
            </a>
          ))}
        </div>
        </div>
      </section>

      {/* ── Upcoming Meetups ── */}
      <section style={{ padding: "80px 40px", background: "#1E2538", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
        <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF", marginBottom: "40px" }}>Upcoming Meetups</h2>
        {(() => {
          const allEvents = [
            ...SAVE_THE_DATES,
            ...(loadingEvents ? [] : events),
          ].filter((e, i, arr) => arr.findIndex(x => x.title === e.title) === i);
          return (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "32px" }}>
              {allEvents.map((e) => (
                <div key={e.title} style={{ background: "#161E2D", border: `1px solid ${e.saveTheDate ? "#A66FF0" : "#2F2B52"}`, borderRadius: "12px", overflow: "hidden", textAlign: "left", display: "flex", flexDirection: "column" }}>
                  <div style={{ background: "#2F2B52", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <div>
                      <div style={{ fontSize: "11px", color: "#A66FF0", fontWeight: 600, marginBottom: "4px" }}>
                        {e.date
                          ? new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
                          : "Date TBA"}
                      </div>
                      <div style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF" }}>{e.title}</div>
                    </div>
                    {e.saveTheDate && (
                      <span style={{ flexShrink: 0, fontSize: "10px", fontWeight: 700, background: "#A66FF0", color: "#FFFFFF", borderRadius: "4px", padding: "2px 7px", marginTop: "2px", whiteSpace: "nowrap" }}>
                        SAVE THE DATE
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "16px", flexGrow: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {e.venue && (
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "17px", color: "#D8D8D8" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A66FF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {e.venue}
                      </div>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#A66FF0" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      {e.group}
                    </div>
                  </div>
                  <div style={{ padding: "0 16px 16px" }}>
                    <a href={e.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "transparent", border: "1px solid #A66FF0", color: "#A66FF0", borderRadius: "8px", padding: "8px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
                      {e.saveTheDate ? "Coming Soon" : "RSVP on Meetup"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
        <a href="https://www.meetup.com/pro/awsugaustria/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#A66FF0", color: "#FFFFFF", padding: "12px 28px", borderRadius: "8px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
          View All Events on Meetup
        </a>
        </div>
      </section>

      {/* ── Upcoming Community Days ── */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
          <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF", marginBottom: "40px" }}>Upcoming Community Days</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
            {COMMUNITY_DAYS.map((c) => (
              <div key={c.name} style={{ background: "#1E2538", border: "1px solid #2F2B52", borderRadius: "12px", overflow: "hidden", textAlign: "left", width: "320px", display: "flex", flexDirection: "column" }}>
                <div style={{ background: "#2F2B52", padding: "10px 16px" }}>
                  <div style={{ fontSize: "11px", color: "#A66FF0", fontWeight: 600, marginBottom: "4px" }}>{c.date}</div>
                  <div style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF" }}>{c.name}</div>
                </div>
                <div style={{ padding: "16px", flexGrow: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "17px", color: "#D8D8D8" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A66FF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {c.location}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "17px", color: "#D8D8D8" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A66FF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: "#A66FF0", textDecoration: "none" }}>{c.url.replace("https://", "")}</a>
                  </div>
                </div>
                <div style={{ padding: "0 16px 16px" }}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "transparent", border: "1px solid #A66FF0", color: "#A66FF0", borderRadius: "8px", padding: "8px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
                    Community Event
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sessionize ── */}
      <section style={{ padding: "80px 40px", background: "#1E2538", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
          <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
            Want to speak at a meetup?
          </h2>
          <p style={{ fontSize: "22px", color: "#D8D8D8", maxWidth: "800px", margin: "0 auto 28px", lineHeight: 1.5 }}>
            We use Sessionize for speaker submissions. Submit your talk proposal and
            we will match you with an upcoming meetup.
          </p>
          <a
            href="https://sessionize.com/aws-community-austria"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#A66FF0",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: "8px",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Submit via Sessionize
          </a>
        </div>
      </section>

      {/* ── Sponsors carousel ── */}
      <section style={{ padding: "50px 0", textAlign: "center", background: "#F0F2F7" }}>
        <style>{`
          @keyframes scroll-sponsors {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .sponsor-track {
            animation: scroll-sponsors 70s linear infinite;
            display: flex;
            width: max-content;
          }
          .sponsor-track:hover { animation-play-state: paused; }
        `}</style>

        <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#161E2D", marginBottom: "32px" }}>
          Our Sponsors
        </h2>

        <div style={{ overflow: "hidden" }}>
          <div className="sponsor-track">
            {(() => {
              const sponsors = [
                { name: "EBCONT",                logo: "ebcont.png",                url: "https://www.ebcont.com" },
                { name: "SQUER",                 logo: "squer.png",                 url: "https://www.squer.io" },
                { name: "Cloudflight",           logo: "cloudflight.png",           url: "https://www.cloudflight.io" },
                { name: "Dynatrace",             logo: "dynatrace.png",             url: "https://www.dynatrace.com" },
                { name: "Raiffeisen Informatik", logo: "raiffeisen_informatik.png", url: "https://www.raiffeiseninformatik.at" },
                { name: "APA Tech",              logo: "apa_tech.png",              url: "https://www.apa.at" },
                { name: "Nordcloud",             logo: "nordcloud.png",             url: "https://nordcloud.com" },
                { name: "Labyrinth Labs",        logo: "labyrinth_labs.png",        url: "https://www.labyrinth-labs.com" },
                { name: "ML Reply",              logo: "mlreply.png",               url: "https://www.reply.com/machine-learning-reply" },
                { name: "Red Hat",               logo: "red_hat.png",               url: "https://www.redhat.com" },
                { name: "tecRacer",              logo: "tecracer.png",              url: "https://www.tecracer.com" },
                { name: "Adverity",              logo: "adverity.png",              url: "https://www.adverity.com" },
                { name: "Auvaria",               logo: "auvaria.png",               url: "https://www.auvaria.com" },
                { name: "Trend Micro",           logo: "trend_micro.png",           url: "https://www.trendmicro.com" },
                { name: "VMware",                logo: "vmware.png",                url: "https://www.vmware.com" },
                { name: "Viesure",               logo: "viesure.png",               url: "https://www.viesure.com" },
              ];
              return [...sponsors, ...sponsors].map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "10px",
                    padding: "16px 20px",
                    marginRight: "20px",
                    minWidth: "220px",
                    height: "150px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
                    <img
                      src={`${import.meta.env.BASE_URL}assets/sponsors/${s.logo}`}
                      alt={s.name}
                      style={{ maxHeight: "72px", maxWidth: "160px", objectFit: "contain" }}
                    />
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 500, color: "#555", marginTop: "8px" }}>{s.name}</span>
                </a>
              ));
            })()}
          </div>
        </div>

        <div style={{ marginTop: "40px", maxWidth: "1200px", margin: "40px auto 0", padding: "0 40px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#161E2D", marginBottom: "12px" }}>Interested in Sponsoring?</h3>
          <p style={{ fontSize: "17px", color: "#444", maxWidth: "700px", margin: "0 auto 24px" }}>
            Support the AWS community in Vienna and gain visibility among AWS enthusiasts and professionals. Sponsorship includes venue hosting, catering, and promotional opportunities.
          </p>
          <a
            href="mailto:linda.mohamed@icloud.com"
            style={{ display: "inline-block", background: "#A66FF0", color: "#FFFFFF", padding: "12px 28px", borderRadius: "8px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
          >
            Contact Us About Sponsorship
          </a>
        </div>
      </section>

      {/* ── Meet Our Organizers ── */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
          <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF", marginBottom: "40px" }}>
            Meet Our Organizers
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
            {ORGANIZERS.map(({ name, photo, email, linkedin }) => (
              <div
                key={name}
                style={{
                  background: "#1E2538",
                  border: "1px solid #2F2B52",
                  borderRadius: "12px",
                  padding: "28px 20px",
                  width: "160px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${photo!.replace(/^\//, "")}`}
                  alt={name}
                  style={{ width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover", border: "2px solid #A66FF0" }}
                />
                <div style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", textAlign: "center" }}>
                  {name.split(" ")[0]}
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  {email && (
                    <a href={`mailto:${email}`} style={{ color: "#A66FF0", display: "flex", alignItems: "center" }} title={email}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                  )}
                  {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#A66FF0", display: "flex", alignItems: "center" }} title="LinkedIn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resources ── */}
      <section style={{ padding: "80px 40px", background: "#1E2538", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
          <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF", marginBottom: "40px" }}>
            Resources
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>

            {/* Box 1 */}
            <div style={{ background: "#161E2D", border: "1px solid #2F2B52", borderLeft: "4px solid #A66FF0", borderRadius: "12px", padding: "28px 32px", flex: "1 1 340px", textAlign: "left" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", marginBottom: "20px" }}>Questions? Here's how to reach us:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A66FF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF" }}>Join our Slack Channel!</span>
                  </div>
                  <a href="https://join.slack.com/t/awscommunitydach" target="_blank" rel="noopener noreferrer" style={{ fontSize: "18px", color: "#A66FF0", textDecoration: "none", paddingLeft: "24px" }}>
                    AWS Community DACH Slack
                  </a>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A66FF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF" }}>Organizers contact:</span>
                  </div>
                  <a href="mailto:linda.mohamed@icloud.com" style={{ fontSize: "18px", color: "#A66FF0", textDecoration: "none", paddingLeft: "24px" }}>
                    linda.mohamed@icloud.com
                  </a>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div style={{ background: "#161E2D", border: "1px solid #2F2B52", borderLeft: "4px solid #A66FF0", borderRadius: "12px", padding: "28px 32px", flex: "1 1 340px", textAlign: "left" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", marginBottom: "20px" }}>Useful information:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A66FF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
                    </svg>
                    <span style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF" }}>Meetup Prep Guide:</span>
                  </div>
                  <a href="/prep-guide" style={{ fontSize: "18px", color: "#A66FF0", textDecoration: "none", paddingLeft: "24px" }}>
                    Open Prep Guide
                  </a>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A66FF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                    <span style={{ fontSize: "18px", fontWeight: 600, color: "#FFFFFF" }}>Submit a Talk:</span>
                  </div>
                  <a href="https://sessionize.com/aws-community-austria" target="_blank" rel="noopener noreferrer" style={{ fontSize: "18px", color: "#A66FF0", textDecoration: "none", paddingLeft: "24px" }}>
                    Sessionize — AWS Community Austria
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stay Connected ── */}
      <section style={{ textAlign: "center", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
          <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
            Stay Connected
          </h2>
          <p style={{ fontSize: "22px", color: "#D8D8D8", maxWidth: "800px", margin: "0 auto 28px", lineHeight: 1.5 }}>
            Join the AWS Community DACH Slack workspace to connect with other AWS
            enthusiasts, get notified about upcoming events, and share knowledge.
          </p>
          <a
            href="https://join.slack.com/t/awscommunitydach"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#A66FF0",
              padding: "14px 36px",
              borderRadius: "8px",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
              border: "2px solid #A66FF0",
            }}
          >
            Join Slack
          </a>
        </div>
      </section>
    </>
  );
}
