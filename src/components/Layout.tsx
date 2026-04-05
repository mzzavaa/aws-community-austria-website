import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/group/aws-ug-vienna", label: "UG Vienna" },
  { to: "/group/aws-wug-vienna", label: "WUG Vienna" },
  { to: "/group/aws-ug-linz", label: "UG Linz" },
  { to: "/prep-guide", label: "Prep Guide" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/team", label: "Team" },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", color: "var(--color-text)" }}>

      {/* Nav */}
      <nav style={{
        background: "rgba(30, 37, 56, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "var(--nav-height)",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img
              src={`${import.meta.env.BASE_URL}assets/logos/awscommunityaustria.png`}
              alt="AWS Community Austria"
              style={{ height: "36px" }}
            />
            <span style={{ fontSize: "var(--font-size-md)", fontWeight: 700, color: "var(--color-text)", letterSpacing: "-0.3px" }}>
              AWS Community <span className="text-accent">Austria</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links" style={{ gap: "28px", alignItems: "center" }}>
            {NAV_LINKS.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
            <a
              href="https://sessionize.com/aws-community-austria"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Submit a Talk
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text)",
              padding: "var(--space-2)",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown - only render when open */}
        {mobileOpen && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            background: "rgba(22, 30, 45, 0.98)",
            borderTop: "var(--border)",
            padding: "var(--space-4) var(--space-5)",
            gap: "4px",
          }}>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "var(--font-size-base)",
                  fontWeight: 500,
                  padding: "10px 0",
                  borderBottom: "var(--border)",
                  display: "block",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://sessionize.com/aws-community-austria"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ textAlign: "center", marginTop: "var(--space-3)" }}
            >
              Submit a Talk
            </a>
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface border-top-subtle">
        {/* Main footer grid */}
        <div className="container" style={{
          paddingTop: "60px",
          paddingBottom: "48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px",
        }}>

          {/* Col 1: Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-4)" }}>
              <img
                src={`${import.meta.env.BASE_URL}assets/logos/awscommunityaustria.png`}
                alt="AWS User Groups Austria"
                style={{ height: "40px", objectFit: "contain" }}
              />
              <span style={{ fontSize: "var(--font-size-base)", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.3 }}>
                AWS User Groups<br />Austria
              </span>
            </div>
            <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "var(--space-5)" }}>
              A community for AWS enthusiasts and professionals in Austria. Join us to learn, share, and network with fellow cloud practitioners.
            </p>
            <div style={{ display: "flex", gap: "14px" }}>
              <a href="https://www.linkedin.com/groups/8995348/" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/aws-usergroup-vienna" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://join.slack.com/t/awscommunitydach" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Our User Groups */}
          <div>
            <h3 className="footer-col-heading">Our User Groups</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "AWS User Group Vienna",         url: "https://www.meetup.com/amazon-web-services-aws-vienna/",  logo: `${import.meta.env.BASE_URL}assets/logos/ug-vienna-small.png` },
                { label: "AWS Women's User Group Vienna", url: "https://www.meetup.com/aws-womens-user-group-vienna/",    logo: `${import.meta.env.BASE_URL}assets/logos/wug-vienna-small.png` },
                { label: "AWS User Group Linz",           url: "https://www.meetup.com/aws-user-group-linz/",            logo: `${import.meta.env.BASE_URL}assets/logos/ug-linz-logo-wide.png` },
                { label: "AWS User Group Graz",           url: "https://www.meetup.com/aws-user-group-graz/",            logo: null },
              ].map(g => (
                <li key={g.label}>
                  <a href={g.url} target="_blank" rel="noopener noreferrer" className="footer-link">
                    {g.logo
                      ? <img src={g.logo} alt={g.label} style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                      : <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-accent" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                    }
                    {g.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h3 className="footer-col-heading">Resources</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <div style={{ background: "var(--color-accent-dim)", border: "var(--border)", borderRadius: "var(--radius-md)", padding: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-2)" }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="text-accent" style={{ flexShrink: 0 }}><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>
                  <span style={{ fontSize: "var(--font-size-sm)", fontWeight: 700, color: "var(--color-text)" }}>User Group Toolkit</span>
                </div>
                <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", marginBottom: "var(--space-2)", lineHeight: 1.5 }}>Access resources and materials for AWS User Group organizers and members.</p>
                <a href="https://aws.amazon.com/developer/community/usergroups/resources/" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "var(--font-size-xs)", display: "flex", alignItems: "center", gap: "4px" }} className="text-link">
                  Learn more
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18"/></svg>
                </a>
              </div>
              <div style={{ background: "var(--color-accent-dim)", border: "var(--border)", borderRadius: "var(--radius-md)", padding: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="text-accent" style={{ flexShrink: 0 }}><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
                  <span style={{ fontSize: "var(--font-size-sm)", fontWeight: 700, color: "var(--color-text)" }}>Useful Information</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  <div style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>
                    <strong style={{ color: "var(--color-text-secondary)" }}>Meetup Prep Guide:</strong><br />
                    <a href="https://drive.google.com/file/d/1c0GqUhp8kFLHAIOGp4LSbKKwath6ZXcV/view" target="_blank" rel="noopener noreferrer" className="text-link">Download PDF Guide</a>
                  </div>
                  <div style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>
                    <strong style={{ color: "var(--color-text-secondary)" }}>Submit a Talk:</strong><br />
                    <a href="https://sessionize.com/aws-community-austria" target="_blank" rel="noopener noreferrer" className="text-link">Sessionize - AWS Community Austria</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Community */}
          <div>
            <h3 className="footer-col-heading">Community</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "AWS Community Builders",      url: "https://aws.amazon.com/developer/community/community-builders/", icon: <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/> },
                { label: "AWS Heroes",                  url: "https://aws.amazon.com/developer/community/heroes/",            icon: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/> },
                { label: "AWS User Group Program",      url: "https://aws.amazon.com/developer/community/usergroups/",        icon: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/> },
                { label: "AWS Community DE/AT/CH Slack", url: "https://join.slack.com/t/awscommunitydach", icon: <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/> },
                { label: "AWS Community Days",          url: "https://aws.amazon.com/events/community-day/",                 icon: <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/> },
                { label: "Submit a Talk",               url: "https://sessionize.com/aws-community-austria",                 icon: <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"/> },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="footer-link">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" className="text-accent" style={{ flexShrink: 0 }}>{item.icon}</svg>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ background: "var(--color-bg)", borderTop: "var(--border)" }}>
          <div className="container" style={{
            paddingTop: "18px",
            paddingBottom: "18px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "var(--space-3)",
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              {[
                { label: "Contact Us",  href: "mailto:linda.mohamed@icloud.com",          icon: <><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></> },
                { label: "Join Meetup", href: "https://www.meetup.com/pro/awsugaustria/", icon: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/> },
                { label: "Join Slack",  href: "https://join.slack.com/t/awscommunitydach", icon: <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/> },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", fontSize: "var(--font-size-sm)" }}
                  className="footer-link">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">{item.icon}</svg>
                  {item.label}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>
              <span>&copy; 2026 AWS User Groups Austria</span>
              <span style={{ color: "var(--color-surface-2)" }}>|</span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                Made with
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--color-danger)" }}><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>
                by the AWS community
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
