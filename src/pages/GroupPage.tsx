import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { USER_GROUPS } from "../data/groups";
import { UPCOMING_EVENTS } from "../data/events";

interface SessionizeSession {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  speakers: { id: string; name: string }[];
}

const AGENDA = [
  { time: "17:00 - 18:00", label: "Entry & networking" },
  { time: "18:00 - 18:10", label: "Welcome & introduction" },
  { time: "18:10 - 18:20", label: "Sponsor introduction", highlight: true },
  { time: "18:20 - 19:00", label: "Talk 1" },
  { time: "19:20 - 20:00", label: "Talk 2" },
  { time: "20:00+",        label: "Networking" },
];

export function GroupPage() {
  const { groupId } = useParams<{ groupId: string }>();
  const group = USER_GROUPS.find((g) => g.id === groupId);
  const nextEvent = UPCOMING_EVENTS.find((e) => e.groupId === groupId);
  const [sessions, setSessions] = useState<SessionizeSession[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!group?.sessionizeApiId) return;
    setLoading(true);
    fetch(`https://sessionize.com/api/v2/${group.sessionizeApiId}/view/Sessions`)
      .then((res) => res.json())
      .then((data) => {
        const all: SessionizeSession[] = [];
        for (const section of data) {
          if (section.sessions) all.push(...section.sessions);
        }
        setSessions(all);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [group?.sessionizeApiId]);

  if (!group) {
    return (
      <div className="section-center" style={{ padding: "100px 40px", fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)" }}>
        <p>User group not found.</p>
        <Link to="/" className="text-link">Back to home</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)",
        borderBottom: "3px solid var(--color-accent)",
        padding: "60px 0",
      }}>
        <div className="container">
          <Link to="/" className="back-link">&larr; Back to all groups</Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "start" }}>
            <div>
              <img
                src={group.logoWide}
                alt={group.name}
                style={{ height: "64px", objectFit: "contain", marginBottom: "var(--space-5)", display: "block" }}
              />
              <h1 style={{ fontSize: "var(--font-size-3xl)", fontWeight: 900, color: "var(--color-text)", marginBottom: "var(--space-2)", lineHeight: 1.1 }}>
                {group.name}
              </h1>
              <div className="text-accent" style={{ fontSize: "var(--font-size-md)", fontWeight: 600, marginBottom: "var(--space-4)" }}>
                {group.city}, Austria
              </div>
              <p className="text-secondary" style={{ fontSize: "var(--font-size-base)", lineHeight: 1.7, maxWidth: "640px", marginBottom: "var(--space-7)" }}>
                {group.description}
              </p>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <a href={group.meetupUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-md">
                  Join on Meetup
                </a>
                <a href="https://sessionize.com/aws-community-austria" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-md">
                  Submit a Talk
                </a>
              </div>
            </div>

            {/* Next event card */}
            {nextEvent && (
              <div className={`card-dark${nextEvent.saveTheDate ? " event-card-highlight" : ""}`} style={{ minWidth: "260px", flexShrink: 0 }}>
                <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-2)" }}>
                  <div>
                    <span className="label">
                      {nextEvent.date
                        ? new Date(nextEvent.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
                        : "Date TBA"}
                    </span>
                    <div style={{ fontSize: "var(--font-size-base)", fontWeight: 700, color: "var(--color-text)" }}>Next Meetup</div>
                  </div>
                  {nextEvent.saveTheDate && <span className="badge">SAVE THE DATE</span>}
                </div>
                <div className="card-body-flex">
                  <div className="text-secondary" style={{ fontSize: "var(--font-size-sm)" }}>{nextEvent.title}</div>
                  {nextEvent.venue && (
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", fontSize: "var(--font-size-sm)" }} className="text-muted">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {nextEvent.venue}
                    </div>
                  )}
                </div>
                <div className="card-footer">
                  <a href={nextEvent.link} target="_blank" rel="noopener noreferrer"
                    className={`event-btn ${!nextEvent.date ? "event-btn-outline" : nextEvent.saveTheDate ? "event-btn-filled" : "event-btn-outline"}`}>
                    {!nextEvent.date ? "Join our Meetup group" : nextEvent.saveTheDate ? "Coming Soon on Meetup" : "RSVP on Meetup"}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Typical Agenda + Sessions */}
      <section className="section-sm">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "48px", alignItems: "start" }}>

          {/* Agenda */}
          <div>
            <div className="accent-bar-sm" />
            <h2 className="subsection-title">Typical Meetup Agenda</h2>
            <div className="card" style={{ borderRadius: "var(--radius-lg)" }}>
              {AGENDA.map((item, i) => (
                <div key={i} className={`agenda-row${item.highlight ? " agenda-row-highlight" : ""}`}>
                  <div className="agenda-time">{item.time}</div>
                  <div style={{
                    fontSize: "var(--font-size-sm)",
                    color: item.highlight ? "var(--color-text)" : "var(--color-text-secondary)",
                    fontWeight: item.highlight ? 600 : 400,
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sessions */}
          <div>
            <div className="accent-bar-sm" />
            <h2 className="subsection-title">Upcoming Sessions</h2>

            {loading && (
              <p className="section-center text-secondary" style={{ padding: "40px var(--space-5)" }}>
                Loading sessions...
              </p>
            )}

            {!loading && sessions.length === 0 && (
              <div className="card" style={{ padding: "40px var(--space-6)", textAlign: "center", borderRadius: "var(--radius-lg)" }}>
                <p className="text-muted" style={{ fontSize: "var(--font-size-base)" }}>
                  {group.sessionizeApiId
                    ? "No upcoming sessions found."
                    : "Sessionize integration will be connected soon. Check back for upcoming sessions!"}
                </p>
              </div>
            )}

            {sessions.map((session) => (
              <div key={session.id} className="card" style={{ padding: "var(--space-5) var(--space-6)", marginBottom: "var(--space-3)", borderRadius: "var(--radius-lg)" }}>
                <div style={{ fontSize: "var(--font-size-md)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-1)" }}>{session.title}</div>
                <div className="text-accent" style={{ fontSize: "var(--font-size-sm)", fontWeight: 600, marginBottom: "var(--space-2)" }}>
                  {session.speakers.map((s) => s.name).join(", ")}
                </div>
                {session.description && (
                  <div className="text-secondary" style={{ fontSize: "var(--font-size-sm)", lineHeight: 1.6 }}>
                    {session.description.slice(0, 200)}{session.description.length > 200 ? "..." : ""}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="section-sm bg-surface border-top-subtle section-center">
        <div className="container" style={{ maxWidth: "600px" }}>
          <div className="accent-bar" />
          <h2 className="subsection-title">Want to host a meetup?</h2>
          <p className="text-secondary" style={{ fontSize: "var(--font-size-base)", marginBottom: "var(--space-6)", lineHeight: 1.7 }}>
            We are always looking for companies to host our meetups. Provide a venue for 50-100 people with food and drinks, and we handle the rest.
          </p>
          <a href="/sponsors" className="btn btn-primary btn-lg">
            Learn about sponsorship
          </a>
        </div>
      </section>
    </>
  );
}
