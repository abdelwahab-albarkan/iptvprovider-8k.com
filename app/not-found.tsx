import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section" style={{ paddingTop: "5rem", paddingBottom: "5rem", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: "var(--bg-orange-soft)",
          border: "1px solid var(--border-highlight)",
          color: "var(--accent-orange-dark)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "800",
          marginBottom: "1.5rem"
        }}>
          404
        </div>
        <h1 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>Page Not Found</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2rem" }}>
          The page you are looking for does not exist or may have been moved. Explore our core streaming resources below:
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            Return to Homepage
          </Link>
          <Link href="/plans" className="btn btn-secondary">
            View Subscription Plans
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Support Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
