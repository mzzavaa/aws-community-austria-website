import React from "react";
import { Link } from "react-router-dom";
import { SPONSORS } from "../data/sponsors";

/* ── Timeline Step Component ── */
function TimelineStep({
  weeks,
  title,
  children,
  side,
}: {
  weeks: string;
  title: string;
  children: React.ReactNode;
  side: "left" | "right";
}) {
  return (
    <div style={{
      display: "flex",
      gap: "var(--space-8)",
      marginBottom: "48px",
      flexDirection: side === "right" ? "row-reverse" : "row",
    }}>
      {/* Content card */}
      <div className="card" style={{ flex: 1, padding: "var(--space-8)", borderRadius: "var(--radius-lg)" }}>
        <span className="badge" style={{ borderRadius: "var(--radius-full)", marginBottom: "10px", display: "inline-block" }}>{weeks}</span>
        <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-3)" }}>{title}</h3>
        <div className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7 }}>{children}</div>
      </div>

      {/* Center timeline dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "48px", flexShrink: 0 }}>
        <div className="timeline-dot" />
        <div style={{ width: "2px", flex: 1, background: "var(--color-surface-2)" }} />
      </div>

      {/* Info placeholder card */}
      <div className="card" style={{
        flex: 1,
        padding: "var(--space-8)",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-surface-3)",
        minHeight: "120px",
      }}>
        <div className="text-secondary section-center" style={{ opacity: 0.7, fontSize: "var(--font-size-sm)" }}>
          Example screenshot
        </div>
      </div>
    </div>
  );
}

/* ── Agenda Row ── */
function AgendaRow({ time, label, highlight }: { time: string; label: string; highlight?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "14px 0", borderBottom: "var(--border)" }}>
      <div className="agenda-time" style={{ width: "180px" }}>{time}</div>
      <div style={{
        fontSize: "var(--font-size-base)",
        color: highlight ? "var(--color-text)" : "var(--color-text-secondary)",
        fontWeight: highlight ? 600 : 400,
      }}>
        {label}
      </div>
    </div>
  );
}

/* ── Main Page ── */
export function PrepGuidePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        padding: "70px 0 60px",
        background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)",
        borderBottom: "3px solid var(--color-accent)",
      }}>
        <div className="container">
          <Link to="/" className="back-link">&larr; Back to home</Link>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", marginBottom: "var(--space-4)", flexWrap: "wrap" }}>
            <h1 style={{ fontSize: "var(--font-size-4xl)", fontWeight: 900, color: "var(--color-text)", lineHeight: 1.1 }}>
              AWS User Group Meetup<br />
              <span className="text-accent">Preparation Guide</span>
            </h1>
            <img
              src={`${import.meta.env.BASE_URL}assets/logos/ug-vienna-logo-wide.png`}
              alt="AWS UG Vienna"
              style={{ height: "80px", borderRadius: "var(--radius-md)" }}
            />
          </div>
          <p className="text-secondary" style={{ fontSize: "var(--font-size-lg)", lineHeight: 1.7, maxWidth: "700px" }}>
            Who needs to do what &amp; when - a complete guide for meetup hosts, sponsors, and organizers.
          </p>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)", marginTop: "var(--space-2)" }}>
            <a href="https://www.meetup.com/amazon-web-services-aws-vienna/" target="_blank" rel="noopener noreferrer" className="text-link">
              meetup.com/amazon-web-services-aws-vienna
            </a>
          </p>
        </div>
      </section>

      {/* ── Thank You Note ── */}
      <section style={{ padding: "40px 0 0" }}>
        <div className="container">
          <div className="card section-center" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)" }}>
            <p className="text-secondary" style={{ fontSize: "var(--font-size-md)" }}>
              Thank you for supporting <strong className="text-white">AWS Community Austria</strong>!
            </p>
            <p className="text-secondary" style={{ marginTop: "var(--space-2)", fontSize: "var(--font-size-md)" }}>
              We use <a href="https://sessionize.com/aws-community-austria" target="_blank" rel="noopener noreferrer" className="text-link">Sessionize</a> for
              speaker submissions and <a href="https://www.meetup.com/amazon-web-services-aws-vienna/" target="_blank" rel="noopener noreferrer" className="text-link">Meetup.com</a> for
              event management.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Timeline ── */}
      <section className="section">
        <div className="container">
          <div className="accent-bar-sm" />
          <h2 className="section-title-left section-center">
            <span className="text-accent">The Timeline</span>
          </h2>
          <p className="text-secondary section-center" style={{ marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px", fontSize: "var(--font-size-md)", lineHeight: 1.7 }}>
            Here's the recommended timeline for organizing an AWS Meetup from start to finish.
          </p>

          <TimelineStep weeks="2 months to go" title="Pick a Date & a Venue" side="left">
            <p>Our meetups usually take place at the end of the month on a Tuesday, Wednesday or Thursday, preferably Wednesday.</p>
            <p style={{ marginTop: "10px" }}>Doors are open from 5pm and we start the introduction at 6pm.</p>
            <p style={{ marginTop: "10px", fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)", fontStyle: "italic" }}>
              If you don't have a venue, we can find one for you.
            </p>
          </TimelineStep>

          <TimelineStep weeks="4-6 weeks to go" title="Pick a Topic and Find Speakers" side="right">
            <p>We usually have one topic per meetup, which means that both of the talks should cover a similar topic with another perspective.</p>
            <p style={{ marginTop: "10px" }}>There are usually two short talks (~20-25 minutes) and a short Q&amp;A session (~5-10 minutes) at the end of each talk planned.</p>
            <p style={{ marginTop: "10px", fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)", fontStyle: "italic" }}>
              If you don't know any speakers, we can also help.
            </p>
          </TimelineStep>

          <TimelineStep weeks="3-4 weeks to go" title="Prepare Promotion & Schedule Meetup" side="left">
            <p>The promotion graphics will be done by us - if you are using Canva, we can share the template with you.</p>
            <p style={{ marginTop: "10px" }}>Please prepare all the information we need to schedule the meetup - see the details below.</p>
          </TimelineStep>

          <TimelineStep weeks="2 weeks to go" title="Spread the Word on Social Media" side="right">
            <p>We usually schedule the meetup with 40 seats and expand the number of participants to 60, one week before the meetup happens.</p>
            <p style={{ marginTop: "10px" }}>To get the seats full we start promoting the meetup 1-2 weeks before it happens.</p>
          </TimelineStep>

          <div className="section-center">
            <div className="timeline-dot" style={{ display: "inline-block" }} />
          </div>
          <p className="section-center text-accent" style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, marginTop: "var(--space-4)" }}>
            Meetup Day!
          </p>
        </div>
      </section>

      {/* ── Responsibilities Breakdown ── */}
      <section className="section">
        <div className="container">
          <div className="accent-bar-sm" />
          <h2 className="section-title-left">Responsibilities Breakdown</h2>
          <p className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "var(--space-9)" }}>
            Below is a clear breakdown of responsibilities between the hosting company and the AWS Community organizers.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            {/* What You Handle */}
            <div className="card" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)" }}>
              <span className="badge" style={{ borderRadius: "var(--radius-full)", marginBottom: "var(--space-3)", display: "inline-block" }}>What You Handle</span>
              <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-3)", marginTop: "var(--space-3)" }}>Venue &amp; Catering</h3>
              <ul style={{ paddingLeft: "var(--space-5)", margin: 0 }}>
                <li className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "var(--space-2)", paddingLeft: "var(--space-2)" }}>Provide a space for 40-60+ participants (please send photos for confirmation)</li>
                <li className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "var(--space-2)", paddingLeft: "var(--space-2)" }}>
                  Arrange catering and drinks, preferably:
                  <ul style={{ paddingLeft: "var(--space-5)", marginTop: "var(--space-1)" }}>
                    <li className="text-secondary" style={{ fontSize: "var(--font-size-base)", lineHeight: 1.7 }}>Cold finger food (30% mix of vegan, vegetarian, fish/meat)</li>
                    <li className="text-secondary" style={{ fontSize: "var(--font-size-base)", lineHeight: 1.7 }}>Fresh fruit</li>
                    <li className="text-secondary" style={{ fontSize: "var(--font-size-base)", lineHeight: 1.7 }}>Alcoholic and soft drinks, coffee, and tea if possible</li>
                  </ul>
                </li>
              </ul>
              <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-3)", marginTop: "var(--space-5)" }}>Marketing &amp; Hosting</h3>
              <ul style={{ paddingLeft: "var(--space-5)", margin: 0 }}>
                <li className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "var(--space-2)", paddingLeft: "var(--space-2)" }}>Promote the event in your audience</li>
                <li className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, paddingLeft: "var(--space-2)" }}>Be available at the meetup as Host</li>
              </ul>
            </div>

            {/* What We Handle */}
            <div className="card" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)" }}>
              <span className="badge" style={{ borderRadius: "var(--radius-full)", marginBottom: "var(--space-3)", display: "inline-block" }}>What We Handle</span>
              <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-3)", marginTop: "var(--space-3)" }}>Event Registration</h3>
              <ul style={{ paddingLeft: "var(--space-5)", margin: 0 }}>
                {[
                  "Schedule the meetup and manage registration",
                  "Assign you as a Co-Host (if applicable) for event edits and participant insights",
                  "Create event visuals with sponsor logos",
                  "Promote the event on our LinkedIn Page",
                  "Welcome attendees and introduce AWS Community Vienna",
                  "Coordinate speakers and talks via Sessionize",
                  "Optional: Record talks (raw files only, no editing)",
                ].map(item => (
                  <li key={item} className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "var(--space-2)", paddingLeft: "var(--space-2)" }}>{item}</li>
                ))}
              </ul>
              <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-3)", marginTop: "var(--space-5)" }}>Speaker &amp; Content</h3>
              <ul style={{ paddingLeft: "var(--space-5)", margin: 0 }}>
                <li className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "var(--space-2)", paddingLeft: "var(--space-2)" }}>Organize two speakers for technical breakout sessions ~30 minutes</li>
                <li className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "var(--space-2)", paddingLeft: "var(--space-2)" }}>Submit your session via Sessionize, if you have a speaker from your company</li>
              </ul>
              <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-3)", marginTop: "var(--space-5)" }}>Optional</h3>
              <ul style={{ paddingLeft: "var(--space-5)", margin: 0 }}>
                <li className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, paddingLeft: "var(--space-2)" }}>AWS Credits giveaway (typically via a quiz)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Agenda ── */}
      <section className="section-sm bg-surface">
        <div className="container">
          <div className="accent-bar-sm" />
          <h2 className="section-title-left">
            <span className="text-accent">Agenda Overview</span>
          </h2>
          <div className="card" style={{ background: "var(--color-surface-3)", borderRadius: "var(--radius-lg)", maxWidth: "720px" }}>
            <AgendaRow time="17:00 - 18:00" label="Entry & networking" />
            <AgendaRow time="18:00 - 18:10" label="Welcome & introduction (AWS Community Vienna)" highlight />
            <AgendaRow time="18:10 - 18:20" label="Sponsor introduction" highlight />
            <AgendaRow time="18:20 - 19:00" label="Talk 1" highlight />
            <AgendaRow time="19:20 - 20:00" label="Talk 2" highlight />
            <AgendaRow time="20:00 - Open End" label="Networking" />
          </div>
          <p className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginTop: "var(--space-4)", maxWidth: "720px" }}>
            We manage the welcome and community introduction, while the sponsor introduction is your opportunity to present your company.
          </p>
        </div>
      </section>

      {/* ── Promotion ── */}
      <section className="section-sm">
        <div className="container">
          <div className="accent-bar-sm" />
          <h2 className="section-title-left">
            <span className="text-accent">Promotion</span>
          </h2>
          <div className="card" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)" }}>
            <p className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7 }}>
              We share meetup promotions on our channels. You will also receive a promotional video for your own use.
            </p>
            <p className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginTop: "var(--space-3)" }}>
              Examples of past promotions:{" "}
              <a href="https://www.linkedin.com/company/aws-user-group-vienna/" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn Page</a>
            </p>
            <p style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginTop: "var(--space-4)", fontWeight: 600, color: "var(--color-text)" }}>
              Meetup language: English
            </p>
          </div>
        </div>
      </section>

      {/* ── What a Meetup Looks Like ── */}
      <section className="section-sm bg-surface">
        <div className="container">
          <div className="accent-bar-sm" />
          <h2 className="section-title-left">
            <span className="text-accent">What a Meetup Looks Like</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-5)" }}>
            {[
              {
                icon: <svg width="28" height="28" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
                title: "Technical Talks",
                desc: "Two 30-minute breakout sessions on AWS topics with live Q&A",
              },
              {
                icon: <svg width="28" height="28" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
                title: "Food & Drinks",
                desc: "Catering provided by the host company - finger food, drinks, and good vibes",
              },
              {
                icon: <svg width="28" height="28" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "Networking",
                desc: "Open networking before and after talks - the best part of every meetup",
              },
              {
                icon: <svg width="28" height="28" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
                title: "Community Photos",
                desc: "We capture the moments - photos shared on LinkedIn and with hosts",
              },
              {
                icon: <svg width="28" height="28" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
                title: "AWS Credits Quiz",
                desc: "Optional quiz with AWS credits as prizes - always a crowd favorite",
              },
              {
                icon: <svg width="28" height="28" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
                title: "Sponsor Spotlight",
                desc: "10-minute slot for the hosting company to present themselves",
              },
            ].map((item) => (
              <div key={item.title} className="card section-center" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)" }}>
                <div style={{ marginBottom: "var(--space-4)" }}>{item.icon}</div>
                <h3 style={{ fontSize: "var(--font-size-md)", fontWeight: 700, color: "var(--color-text)", marginBottom: "var(--space-3)" }}>{item.title}</h3>
                <p className="text-secondary" style={{ fontSize: "var(--font-size-base)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Hosts & Sponsors ── */}
      <section className="section-sm">
        <div className="container">
          <div className="accent-bar-sm" />
          <h2 className="section-title-left">Past Hosts &amp; Sponsors</h2>
          <p className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "var(--space-6)" }}>
            Thanks a lot to our hosts, sponsors and speakers for making these experiences possible!
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", alignItems: "stretch" }}>
            {SPONSORS.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="card-on-light"
                style={{ minWidth: "140px", height: "80px", gap: "var(--space-1)" }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/sponsors/${s.logo}`}
                  alt={s.name}
                  style={{ maxHeight: "40px", maxWidth: "110px", objectFit: "contain" }}
                />
                <span style={{ fontSize: "var(--font-size-xs)", color: "#555", fontWeight: 500 }}>{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section style={{
        padding: "60px 0",
        background: "linear-gradient(135deg, var(--color-accent-dim) 0%, var(--color-bg) 100%)",
        borderTop: "2px solid var(--color-accent-glow)",
        textAlign: "center",
      }}>
        <div className="container">
          <h2 className="section-title-left section-center" style={{ marginBottom: "var(--space-4)" }}>
            Happy Building &amp; See You at the Meetup!
          </h2>
          <p className="text-secondary" style={{ fontSize: "var(--font-size-md)", lineHeight: 1.7, marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
            For any additional details, feel free to reach out.
          </p>
          <a href="mailto:linda.mohamed@icloud.com" className="btn btn-primary btn-xl">
            Contact Us
          </a>
          <p style={{ marginTop: "var(--space-6)", fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>
            For more information about sponsorship options contact <strong className="text-secondary">linda.mohamed@icloud.com</strong>
          </p>
          <p style={{ marginTop: "var(--space-3)", fontWeight: 700, fontSize: "var(--font-size-sm)", color: "var(--color-text)", letterSpacing: "0.5px" }}>
            AWS USER GROUP LEADERS AUSTRIA
          </p>
          <p className="text-secondary" style={{ fontSize: "var(--font-size-sm)" }}>
            Linda, Philipp, Dima, Jakob, Roman and Matthias
          </p>
        </div>
      </section>
    </>
  );
}
