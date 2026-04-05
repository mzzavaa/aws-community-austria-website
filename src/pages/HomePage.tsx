import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { USER_GROUPS, ORGANIZERS, CLOUD_CLUBS } from "../data/groups";
import { SponsorsCarousel } from "../components/SponsorsCarousel";
import { UPCOMING_EVENTS, type MeetupEvent } from "../data/events";

const COMMUNITY_DAYS = [
  { name: "AWS Community Day Turkiye",  date: "May 9, 2026",         location: "Istanbul, Turkey", url: "https://aws.cloudturkey.io",     status: "Coming Soon" },
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
      {/* ── Hero ── */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={`${import.meta.env.BASE_URL}assets/hero-bg.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            AWS <span className="text-accent">Community</span> Austria
          </h1>
          <p className="hero-subtitle">
            Join the largest AWS community in Austria. Three user groups, one mission: learn, share, and build together on AWS.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://sessionize.com/aws-community-austria" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-xl">
              Submit a Talk
            </a>
            <a href="https://join.slack.com/t/awscommunitydach" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-xl">
              Join Slack
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {[
            { n: "3",     l: "User Groups" },
            { n: "47+",   l: "Meetups Hosted" },
            { n: "2000+", l: "Community Members" },
            { n: "100+",  l: "Speakers" },
          ].map((s) => (
            <div key={s.l}>
              <div className="stat-number">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── User Groups ── */}
      <section className="section">
        <div className="container">
          <div className="accent-bar" />
          <h2 className="section-title">Our User Groups</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-8)" }}>
            {USER_GROUPS.map((group) => (
              <a key={group.id} href={group.meetupUrl} target="_blank" rel="noopener noreferrer" className="group-card">
                <img
                  src={group.logoWide}
                  alt={group.name}
                  style={{ width: "100%", maxWidth: "380px", height: "180px", objectFit: "contain", marginBottom: "var(--space-5)" }}
                />
                <div style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-1)" }}>
                  {group.shortName}
                </div>
                <div className="text-accent" style={{ fontSize: "var(--font-size-base)", fontWeight: 600, marginBottom: "var(--space-3)" }}>
                  {group.city}, Austria
                </div>
                <div className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.6, marginBottom: "var(--space-4)" }}>
                  {group.description}
                </div>
                <span className="text-accent" style={{ fontSize: "var(--font-size-md)", fontWeight: 600 }}>
                  Join on Meetup &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── User Groups vs Cloud Clubs ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="accent-bar" />
          <h2 className="section-title">The AWS Community in Austria</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "var(--space-8)" }}>

            {/* User Groups */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: "var(--color-accent-dim)", border: "var(--border-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text)" }}>AWS User Groups</h3>
              </div>
              <p className="text-secondary" style={{ fontSize: "var(--font-size-base)", lineHeight: 1.7, marginBottom: "var(--space-5)" }}>
                AWS User Groups are community-run meetups open to everyone - professionals, students, and anyone curious about AWS. They are not affiliated with Amazon. Organizers are volunteers who run events out of passion for the community. Meetups typically feature two technical talks, food and drinks provided by a sponsor, and open networking.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {USER_GROUPS.map(g => (
                  <a key={g.id} href={g.meetupUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", textDecoration: "none" }}
                    className="footer-link">
                    <svg width="16" height="16" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-base)", fontWeight: 500 }}>{g.name}</span>
                    <span className="text-muted" style={{ fontSize: "var(--font-size-sm)" }}>{g.city}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Cloud Clubs */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: "var(--color-accent-dim)", border: "var(--border-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text)" }}>AWS Cloud Clubs</h3>
              </div>
              <p className="text-secondary" style={{ fontSize: "var(--font-size-base)", lineHeight: 1.7, marginBottom: "var(--space-5)" }}>
                AWS Cloud Clubs are student-led communities at universities and colleges. They are part of the official AWS Educate program and focus on helping students build cloud skills through hands-on learning, workshops, and peer-to-peer knowledge sharing. Cloud Clubs are campus communities - User Groups are open to everyone in the professional world.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {CLOUD_CLUBS.map(c => (
                  <a key={c.id} href={c.meetupUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", textDecoration: "none" }}
                    className="footer-link">
                    <svg width="16" height="16" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                    <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-base)", fontWeight: 500 }}>{c.name}</span>
                    <span className="text-muted" style={{ fontSize: "var(--font-size-sm)" }}>{c.city}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Upcoming Meetups ── */}
      <section className="section section-center">
        <div className="container">
          <div className="accent-bar" />
          <h2 className="section-title">Upcoming Meetups</h2>
          {(() => {
            const allEvents = [
              ...UPCOMING_EVENTS,
              ...(loadingEvents ? [] : events),
            ].filter((e, i, arr) => arr.findIndex(x => x.title === e.title) === i);
            return (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-5)", marginBottom: "var(--space-8)" }}>
                {allEvents.map((e) => (
                  <div key={e.title} className={`event-card${e.saveTheDate ? " event-card-highlight" : ""}`}>
                    {/* Card header */}
                    <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-2)" }}>
                      <div>
                        <span className="label">
                          {e.date
                            ? new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
                            : "Date TBA"}
                        </span>
                        <div style={{ fontSize: "var(--font-size-base)", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.3 }}>{e.title}</div>
                      </div>
                      {e.saveTheDate && <span className="badge">SAVE THE DATE</span>}
                    </div>
                    {/* Card body */}
                    <div className="card-body-flex">
                      {e.venue && (
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "var(--font-size-sm)" }} className="text-secondary">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                          </svg>
                          {e.venue}
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "var(--font-size-sm)" }} className="text-muted">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        {e.group}
                      </div>
                    </div>
                    {/* Button */}
                    <div className="card-footer">
                      <a href={e.link} target="_blank" rel="noopener noreferrer"
                        className={`event-btn ${!e.date ? "event-btn-outline" : e.saveTheDate ? "event-btn-filled" : "event-btn-outline"}`}>
                        {!e.date ? "Join our Meetup group" : e.saveTheDate ? "Coming Soon on Meetup" : "RSVP on Meetup"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
          <a href="https://www.meetup.com/pro/awsugaustria/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            View All Events on Meetup
          </a>
        </div>
      </section>

      {/* ── Upcoming Community Days ── */}
      <section className="section section-center">
        <div className="container">
          <div className="accent-bar" />
          <h2 className="section-title">Upcoming Community Days</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-6)" }}>
            {COMMUNITY_DAYS.map((c) => (
              <div key={c.name} className="card-dark" style={{ width: "320px", display: "flex", flexDirection: "column" }}>
                <div className="card-header">
                  <div className="label">{c.date}</div>
                  <div style={{ fontSize: "var(--font-size-md)", fontWeight: 700, color: "var(--color-text)" }}>{c.name}</div>
                </div>
                <div className="card-body-flex" style={{ gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", fontSize: "var(--font-size-md)" }} className="text-secondary">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {c.location}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", fontSize: "var(--font-size-md)" }} className="text-secondary">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-link">{c.url.replace("https://", "")}</a>
                  </div>
                </div>
                <div className="card-footer">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="event-btn event-btn-outline">
                    Community Event
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sessionize ── */}
      <section className="section bg-surface section-center">
        <div className="container">
          <div className="accent-bar" />
          <h2 className="section-title" style={{ marginBottom: "var(--space-4)" }}>
            Want to speak at a meetup?
          </h2>
          <p className="section-desc">
            We use Sessionize for speaker submissions. Submit your talk proposal and we will match you with an upcoming meetup.
          </p>
          <a href="https://sessionize.com/aws-community-austria" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-xl">
            Submit via Sessionize
          </a>
        </div>
      </section>

      {/* ── Sponsors ── */}
      <SponsorsCarousel />
      <div className="bg-light section-center" style={{ paddingBottom: "var(--space-12)" }}>
        <Link to="/sponsors" className="btn btn-primary btn-lg">
          Become a Sponsor
        </Link>
      </div>

      {/* ── Meet Our Organizers ── */}
      <section className="section section-center">
        <div className="container">
          <div className="accent-bar" />
          <h2 className="section-title">Meet Our Organizers</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-6)", marginBottom: "var(--space-9)" }}>
            {ORGANIZERS.map(({ name, photo, focus, email, linkedin }) => (
              <div key={name} className="organizer-card">
                <img
                  src={`${import.meta.env.BASE_URL}${photo!.replace(/^\//, "")}`}
                  alt={name}
                  className="avatar avatar-md"
                />
                <div className="organizer-name">{name.split(" ")[0]}</div>
                <div className="organizer-focus">{focus}</div>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                  {email && (
                    <a href={`mailto:${email}`} className="icon-link" title={email}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                  )}
                  {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Link to="/team" className="btn btn-outline btn-lg">
            Meet the full team
          </Link>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="section bg-surface section-center">
        <div className="container">
          <div className="accent-bar" />
          <h2 className="section-title">Resources</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-6)" }}>

            {/* Contact box */}
            <div style={{ background: "var(--color-bg)", border: "var(--border)", borderLeft: "4px solid var(--color-accent)", borderRadius: "var(--radius-lg)", padding: "28px var(--space-8)", flex: "1 1 340px", textAlign: "left" }}>
              <h3 style={{ fontSize: "var(--font-size-md)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-5)" }}>Questions? Here's how to reach us:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span style={{ fontSize: "var(--font-size-md)", fontWeight: 600, color: "var(--color-text)" }}>Join our Slack Channel!</span>
                  </div>
                  <a href="https://join.slack.com/t/awscommunitydach" target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: "var(--font-size-md)", paddingLeft: "24px" }}>
                    AWS Community DACH Slack
                  </a>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span style={{ fontSize: "var(--font-size-md)", fontWeight: 600, color: "var(--color-text)" }}>Organizers contact:</span>
                  </div>
                  <a href="mailto:linda.mohamed@icloud.com" className="text-link" style={{ fontSize: "var(--font-size-md)", paddingLeft: "24px" }}>
                    linda.mohamed@icloud.com
                  </a>
                </div>
              </div>
            </div>

            {/* Useful links box */}
            <div style={{ background: "var(--color-bg)", border: "var(--border)", borderLeft: "4px solid var(--color-accent)", borderRadius: "var(--radius-lg)", padding: "28px var(--space-8)", flex: "1 1 340px", textAlign: "left" }}>
              <h3 style={{ fontSize: "var(--font-size-md)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-5)" }}>Useful information:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
                    </svg>
                    <span style={{ fontSize: "var(--font-size-md)", fontWeight: 600, color: "var(--color-text)" }}>Meetup Prep Guide:</span>
                  </div>
                  <a href="/prep-guide" className="text-link" style={{ fontSize: "var(--font-size-md)", paddingLeft: "24px" }}>
                    Open Prep Guide
                  </a>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                    <span style={{ fontSize: "var(--font-size-md)", fontWeight: 600, color: "var(--color-text)" }}>Submit a Talk:</span>
                  </div>
                  <a href="https://sessionize.com/aws-community-austria" target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: "var(--font-size-md)", paddingLeft: "24px" }}>
                    Sessionize - AWS Community Austria
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stay Connected ── */}
      <section className="section section-center">
        <div className="container">
          <div className="accent-bar" />
          <h2 className="section-title" style={{ marginBottom: "var(--space-4)" }}>Stay Connected</h2>
          <p className="section-desc">
            Join the AWS Community DACH Slack workspace to connect with other AWS enthusiasts, get notified about upcoming events, and share knowledge.
          </p>
          <a href="https://join.slack.com/t/awscommunitydach" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-xl">
            Join Slack
          </a>
        </div>
      </section>
    </>
  );
}
