import React from "react";
import { Link } from "react-router-dom";
import { USER_GROUPS } from "../data/groups";

export function HomePage() {
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
            padding: "80px 40px 70px",
            maxWidth: "860px",
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
              maxWidth: "640px",
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
          padding: "48px 40px",
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
            maxWidth: "900px",
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
              <div style={{ fontSize: "15px", color: "#D8D8D8", marginTop: "8px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── User Groups — big clickable logos ── */}
      <section style={{ padding: "70px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
        <h2
          style={{
            fontSize: "36px",
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
                  maxWidth: "340px",
                  height: "auto",
                  marginBottom: "20px",
                  borderRadius: "8px",
                }}
              />
              <div style={{ fontSize: "14px", color: "#A66FF0", fontWeight: 600, marginBottom: "12px" }}>
                {group.city}, Austria
              </div>
              <div style={{ fontSize: "16px", color: "#D8D8D8", lineHeight: 1.6, marginBottom: "16px" }}>
                {group.description}
              </div>
              <span style={{ fontSize: "15px", color: "#A66FF0", fontWeight: 600 }}>
                Join on Meetup &rarr;
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Sessionize ── */}
      <section
        style={{
          padding: "70px 40px",
          background: "#1E2538",
          textAlign: "center",
        }}
      >
        <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
        <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
          Want to speak at a meetup?
        </h2>
        <p style={{ fontSize: "20px", color: "#D8D8D8", maxWidth: "620px", margin: "0 auto 28px", lineHeight: 1.5 }}>
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
      </section>

      {/* ── Slack ── */}
      <section style={{ textAlign: "center", padding: "70px 40px" }}>
        <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
        <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
          Stay Connected
        </h2>
        <p style={{ fontSize: "20px", color: "#D8D8D8", maxWidth: "620px", margin: "0 auto 28px", lineHeight: 1.5 }}>
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
      </section>

      {/* ── Sponsors ── */}
      <section style={{ padding: "50px 40px", textAlign: "center" }}>
        <div style={{ width: "60px", height: "4px", background: "#A66FF0", margin: "0 auto 16px", borderRadius: "2px" }} />
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "28px" }}>
          Supported by
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[
            "Raiffeisen Informatik", "Red Hat", "Public Cloud Group",
            "APA Tech", "Warrify", "tecRACER", "bytesource",
            "Reply ML", "Orbit", "ebcont", "PGS Software",
            "Auvaria", "Trend Micro", "LocalStack",
          ].map((name) => (
            <div
              key={name}
              style={{
                background: "#1E2538",
                padding: "12px 22px",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#D8D8D8",
                border: "1px solid #2F2B52",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
