import React from "react";
import { Link } from "react-router-dom";

/* ── Shared style helpers ── */
const accent = "#A66FF0";
const card: React.CSSProperties = {
  background: "#1E2538",
  borderRadius: "14px",
  padding: "32px",
  border: "1px solid #2F2B52",
  marginBottom: "24px",
};
const sectionBar: React.CSSProperties = {
  width: "50px",
  height: "4px",
  background: accent,
  borderRadius: "2px",
  marginBottom: "14px",
};
const heading2: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: 700,
  color: "#FFFFFF",
  marginBottom: "24px",
};
const heading3: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 700,
  color: "#FFFFFF",
  marginBottom: "12px",
};
const body: React.CSSProperties = {
  fontSize: "17px",
  color: "#D8D8D8",
  lineHeight: 1.7,
};
const listItem: React.CSSProperties = {
  ...body,
  marginBottom: "8px",
  paddingLeft: "8px",
};
const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  background: accent,
  color: "#FFFFFF",
  fontSize: "13px",
  fontWeight: 700,
  padding: "4px 14px",
  borderRadius: "20px",
  marginBottom: "10px",
};

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
    <div
      style={{
        display: "flex",
        gap: "32px",
        marginBottom: "48px",
        flexDirection: side === "right" ? "row-reverse" : "row",
      }}
    >
      {/* Content card */}
      <div style={{ flex: 1, ...card, marginBottom: 0 }}>
        <div style={badgeStyle}>{weeks}</div>
        <h3 style={heading3}>{title}</h3>
        <div style={body}>{children}</div>
      </div>

      {/* Center timeline dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "48px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: accent,
            border: "3px solid #1E2538",
            boxShadow: `0 0 0 3px ${accent}40`,
          }}
        />
        <div style={{ width: "2px", flex: 1, background: "#2F2B52" }} />
      </div>

      {/* Screenshot / info card */}
      <div
        style={{
          flex: 1,
          ...card,
          marginBottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#232C40",
          minHeight: "120px",
        }}
      >
        <div style={{ ...body, textAlign: "center", opacity: 0.7, fontSize: "14px" }}>
          {side === "left" ? "📸 Example screenshot" : "📸 Example screenshot"}
        </div>
      </div>
    </div>
  );
}

/* ── Agenda Row ── */
function AgendaRow({ time, label, highlight }: { time: string; label: string; highlight?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "14px 0",
        borderBottom: "1px solid #2F2B52",
      }}
    >
      <div style={{ width: "180px", fontSize: "16px", fontWeight: 600, color: accent }}>{time}</div>
      <div style={{ fontSize: "16px", color: highlight ? "#FFFFFF" : "#D8D8D8", fontWeight: highlight ? 600 : 400 }}>
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
      <section
        style={{
          padding: "70px 48px 60px",
          background: "linear-gradient(180deg, #1E2538 0%, #161E2D 100%)",
          borderBottom: `3px solid ${accent}`,
        }}
      >
        <Link to="/" style={{ fontSize: "14px", color: accent, textDecoration: "none", marginBottom: "20px", display: "inline-block" }}>
          &larr; Back to home
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "16px", flexWrap: "wrap" }}>
          <h1 style={{ fontSize: "44px", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1 }}>
            AWS User Group Meetup<br />
            <span style={{ color: accent }}>Preparation Guide</span>
          </h1>
          <img
            src={`${import.meta.env.BASE_URL}assets/logos/ug-vienna-logo-wide.png`}
            alt="AWS UG Vienna"
            style={{ height: "80px", borderRadius: "8px" }}
          />
        </div>
        <p style={{ ...body, fontSize: "20px", maxWidth: "700px" }}>
          Who needs to do what &amp; when — a complete guide for meetup hosts,
          sponsors, and organizers.
        </p>
        <p style={{ fontSize: "14px", color: "#999", marginTop: "8px" }}>
          <a href="https://www.meetup.com/amazon-web-services-aws-vienna/" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>
            meetup.com/amazon-web-services-aws-vienna
          </a>
        </p>
      </section>

      {/* ── Thank You Note ── */}
      <section style={{ padding: "40px 48px 0", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ ...card, textAlign: "center", borderColor: accent + "40" }}>
          <p style={{ ...body, fontSize: "19px" }}>
            Thank you for supporting <strong style={{ color: "#FFFFFF" }}>AWS Community Austria</strong>!
          </p>
          <p style={{ ...body, marginTop: "8px" }}>
            We use <a href="https://sessionize.com/aws-community-austria" target="_blank" rel="noopener noreferrer" style={{ color: accent, textDecoration: "underline" }}>Sessionize</a> for
            speaker submissions and <a href="https://www.meetup.com/amazon-web-services-aws-vienna/" target="_blank" rel="noopener noreferrer" style={{ color: accent, textDecoration: "underline" }}>Meetup.com</a> for
            event management.
          </p>
        </div>
      </section>

      {/* ── The Timeline ── */}
      <section style={{ padding: "60px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={sectionBar} />
        <h2 style={{ ...heading2, textAlign: "center", marginBottom: "16px" }}>
          <span style={{ color: accent }}>The Timeline</span>
        </h2>
        <p style={{ ...body, textAlign: "center", marginBottom: "48px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
          Here's the recommended timeline for organizing an AWS Meetup from start to finish.
        </p>

        {/* Timeline Steps */}
        <TimelineStep weeks="2 months to go" title="Pick a Date & a Venue" side="left">
          <p>Our meetups usually take place at the end of the month on a Tuesday, Wednesday or Thursday, preferably Wednesday.</p>
          <p style={{ marginTop: "10px" }}>Doors are open from 5pm and we start the introduction at 6pm.</p>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#999", fontStyle: "italic" }}>
            💡 If you don't have a venue, we can find one for you.
          </p>
        </TimelineStep>

        <TimelineStep weeks="4–6 weeks to go" title="Pick a Topic and Find Speakers" side="right">
          <p>We usually have one topic per meetup, which means that both of the talks should cover a similar topic with another perspective.</p>
          <p style={{ marginTop: "10px" }}>There are usually two short talks (~20-25 minutes) and a short Q&amp;A session (~5-10 minutes) at the end of each talk planned.</p>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#999", fontStyle: "italic" }}>
            💡 If you don't know any speakers, we can also help.
          </p>
        </TimelineStep>

        <TimelineStep weeks="3–4 weeks to go" title="Prepare Promotion & Schedule Meetup" side="left">
          <p>The promotion graphics will be done by us — if you are using Canva, we can share the template with you.</p>
          <p style={{ marginTop: "10px" }}>Please prepare all the information we need to schedule the meetup — see the details below.</p>
        </TimelineStep>

        <TimelineStep weeks="2 weeks to go" title="Spread the Word on Social Media" side="right">
          <p>We usually schedule the meetup with 40 seats and expand the number of participants to 60, one week before the meetup happens.</p>
          <p style={{ marginTop: "10px" }}>To get the seats full we start promoting the meetup 1-2 weeks before it happens.</p>
        </TimelineStep>

        {/* Final dot */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: accent,
              border: "3px solid #1E2538",
              boxShadow: `0 0 0 3px ${accent}40`,
            }}
          />
        </div>
        <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 700, color: accent, marginTop: "16px" }}>
          🎉 Meetup Day!
        </p>
      </section>

      {/* ── What You Handle / What We Handle ── */}
      <section style={{ padding: "60px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={sectionBar} />
        <h2 style={heading2}>Responsibilities Breakdown</h2>
        <p style={{ ...body, marginBottom: "36px" }}>
          Below is a clear breakdown of responsibilities between the hosting company and the AWS Community organizers.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
          {/* What You Handle */}
          <div style={card}>
            <div style={badgeStyle}>What You Handle</div>

            <h3 style={{ ...heading3, marginTop: "12px" }}>Venue &amp; Catering</h3>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li style={listItem}>Provide a space for 40–60+ participants (please send photos for confirmation)</li>
              <li style={listItem}>
                Arrange catering and drinks, preferably:
                <ul style={{ paddingLeft: "20px", marginTop: "6px" }}>
                  <li style={{ ...listItem, fontSize: "15px" }}>Cold finger food (30% mix of vegan, vegetarian, fish/meat)</li>
                  <li style={{ ...listItem, fontSize: "15px" }}>Fresh fruit</li>
                  <li style={{ ...listItem, fontSize: "15px" }}>Alcoholic and soft drinks, coffee, and tea if possible</li>
                </ul>
              </li>
            </ul>

            <h3 style={{ ...heading3, marginTop: "20px" }}>Marketing &amp; Hosting</h3>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li style={listItem}>Promote the event in your audience</li>
              <li style={listItem}>Be available at the meetup as Host</li>
            </ul>
          </div>

          {/* What We Handle */}
          <div style={card}>
            <div style={badgeStyle}>What We Handle</div>

            <h3 style={{ ...heading3, marginTop: "12px" }}>Event Registration</h3>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li style={listItem}>Schedule the meetup and manage registration</li>
              <li style={listItem}>Assign you as a Co-Host (if applicable) for event edits and participant insights</li>
              <li style={listItem}>Create event visuals with sponsor logos</li>
              <li style={listItem}>Promote the event on our LinkedIn Page</li>
              <li style={listItem}>Welcome attendees and introduce AWS Community Vienna</li>
              <li style={listItem}>Coordinate speakers and talks via Sessionize</li>
              <li style={listItem}>Optional: Record talks (raw files only, no editing)</li>
            </ul>

            <h3 style={{ ...heading3, marginTop: "20px" }}>Speaker &amp; Content</h3>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li style={listItem}>Organize two speakers for technical breakout sessions ~30 minutes</li>
              <li style={listItem}>Submit your session via Sessionize, if you have a speaker from your company</li>
            </ul>

            <h3 style={{ ...heading3, marginTop: "20px" }}>Optional</h3>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li style={listItem}>AWS Credits giveaway (typically via a quiz)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Agenda ── */}
      <section style={{ padding: "60px 48px", background: "#1E2538" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={sectionBar} />
          <h2 style={heading2}>
            <span style={{ color: accent }}>Agenda Overview</span>
          </h2>
          <div style={{ ...card, background: "#232C40" }}>
            <AgendaRow time="17:00 – 18:00" label="Entry & networking" />
            <AgendaRow time="18:00 – 18:10" label="Welcome & introduction (AWS Community Vienna)" highlight />
            <AgendaRow time="18:10 – 18:20" label="Sponsor introduction" highlight />
            <AgendaRow time="18:20 – 19:00" label="Talk 1" highlight />
            <AgendaRow time="19:20 – 20:00" label="Talk 2" highlight />
            <AgendaRow time="20:00 – Open End" label="Networking" />
          </div>
          <p style={{ ...body, marginTop: "16px" }}>
            We manage the welcome and community introduction, while the sponsor introduction is your opportunity to present your company.
          </p>
        </div>
      </section>

      {/* ── Promotion ── */}
      <section style={{ padding: "60px 48px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={sectionBar} />
        <h2 style={heading2}>
          <span style={{ color: accent }}>Promotion</span>
        </h2>
        <div style={card}>
          <p style={body}>
            We share meetup promotions on our channels. You will also receive a promotional video for your own use.
          </p>
          <p style={{ ...body, marginTop: "12px" }}>
            Examples of past promotions:{" "}
            <a href="https://www.linkedin.com/company/aws-user-group-vienna/" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>LinkedIn Page</a>
          </p>
          <p style={{ ...body, marginTop: "16px", fontWeight: 600, color: "#FFFFFF" }}>
            Meetup language: English
          </p>
        </div>
      </section>

      {/* ── The Meetup Event (screenshots section) ── */}
      <section style={{ padding: "60px 48px", background: "#1E2538" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={sectionBar} />
          <h2 style={heading2}>
            <span style={{ color: accent }}>What a Meetup Looks Like</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {[
              { emoji: "🎤", title: "Technical Talks", desc: "Two 30-minute breakout sessions on AWS topics with live Q&A" },
              { emoji: "🍕", title: "Food & Drinks", desc: "Catering provided by the host company — finger food, drinks, and good vibes" },
              { emoji: "🤝", title: "Networking", desc: "Open networking before and after talks — the best part of every meetup" },
              { emoji: "📸", title: "Community Photos", desc: "We capture the moments — photos shared on LinkedIn and with hosts" },
              { emoji: "🏆", title: "AWS Credits Quiz", desc: "Optional quiz with AWS credits as prizes — always a crowd favorite" },
              { emoji: "📢", title: "Sponsor Spotlight", desc: "10-minute slot for the hosting company to present themselves" },
            ].map((item) => (
              <div key={item.title} style={{ ...card, marginBottom: 0, textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.emoji}</div>
                <h3 style={{ ...heading3, fontSize: "18px" }}>{item.title}</h3>
                <p style={{ ...body, fontSize: "15px" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impressions / Past Sponsors ── */}
      <section style={{ padding: "60px 48px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={sectionBar} />
        <h2 style={heading2}>
          Past Hosts &amp; Sponsors
        </h2>
        <p style={{ ...body, marginBottom: "24px" }}>
          Thanks a lot to our hosts, sponsors and speakers for making these experiences possible!
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            "ebcont", "APA Tech", "Red Hat", "Public Cloud Group",
            "Warrify", "Raiffeisen Informatik", "LocalStack",
            "Reply ML", "Orbit", "tecRACER", "PGS Software",
            "Auvaria", "Trend Micro", "bytesource",
          ].map((name) => (
            <div
              key={name}
              style={{
                background: "#1E2538",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 500,
                color: "#D8D8D8",
                border: "1px solid #2F2B52",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section
        style={{
          padding: "60px 48px",
          background: `linear-gradient(135deg, ${accent}22 0%, #161E2D 100%)`,
          textAlign: "center",
          borderTop: `2px solid ${accent}40`,
        }}
      >
        <h2 style={{ ...heading2, marginBottom: "16px" }}>
          Happy Building &amp; See You at the Meetup!
        </h2>
        <p style={{ ...body, fontSize: "18px", marginBottom: "28px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
          For any additional details, feel free to reach out.
        </p>
        <a
          href="mailto:linda.mohamed@icloud.com"
          style={{
            display: "inline-block",
            background: accent,
            color: "#FFFFFF",
            padding: "14px 36px",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
        <p style={{ marginTop: "24px", fontSize: "13px", color: "#999" }}>
          For more information about sponsorship options contact <strong style={{ color: "#D8D8D8" }}>linda.mohamed@icloud.com</strong>
        </p>
        <p style={{ marginTop: "12px", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", letterSpacing: "0.5px" }}>
          AWS USER GROUP LEADERS AUSTRIA
        </p>
        <p style={{ fontSize: "13px", color: "#D8D8D8" }}>
          Linda, Philipp, Dima, Jakob, Roman and Matthias
        </p>
      </section>
    </>
  );
}
