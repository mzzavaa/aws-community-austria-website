import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#161E2D",
        color: "#FFFFFF",
        fontFamily: "'Inter', 'Calibri', 'Arial', sans-serif",
      }}
    >
      {/* ── Nav ── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 100px",
          height: "64px",
          background: "rgba(30, 37, 56, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #2F2B52",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/logos/awscommunityaustria.png`}
            alt="AWS Community Austria"
            style={{ height: "36px" }}
          />
          <span
            style={{
              fontSize: "17px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.3px",
            }}
          >
            AWS Community <span style={{ color: "#A66FF0" }}>Austria</span>
          </span>
        </Link>

        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {[
            { to: "/", label: "Home" },
            { to: "/group/aws-ug-vienna", label: "UG Vienna" },
            { to: "/group/aws-wug-vienna", label: "WUG Vienna" },
            { to: "/group/aws-ug-linz", label: "UG Linz" },
            { to: "/prep-guide", label: "Prep Guide" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={{
                color: "#D8D8D8",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FFFFFF")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#D8D8D8")}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://sessionize.com/aws-community-austria"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFFFFF",
              background: "#A66FF0",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: "6px",
              transition: "background 0.2s",
            }}
          >
            Submit a Talk
          </a>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#A66FF0",
          padding: "20px 100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ fontSize: "12px", color: "#FFFFFF" }}>
          For more information contact<br />
          linda.mohamed@icloud.com
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.5px" }}>
            AWS USER GROUP LEADERS AUSTRIA
          </div>
          <div style={{ fontSize: "12px", color: "#FFFFFF" }}>
            Linda, Philipp, Dima, Jakob, Roman and Matthias
          </div>
        </div>
        <div style={{ fontSize: "12px", color: "#FFFFFF" }}>
          aws-community.at
        </div>
      </footer>
    </div>
  );
}
