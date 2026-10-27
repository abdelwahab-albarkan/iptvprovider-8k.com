import React from "react";

export default function TrustBanner() {
  const pillars = [
    {
      title: "8K UHD & 4K Architecture",
      desc: "Native HEVC (H.265) and AVC compression support delivering crystal clarity on high-resolution screens without excessive buffering.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      ),
      badge: "HEVC / AV1"
    },
    {
      title: "US Edge Low Latency",
      desc: "Routed through major US regional cloud edge nodes to reduce transit hops and latency for American viewers.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      badge: "US CDN"
    },
    {
      title: "Industry Standard Formats",
      desc: "Full compatibility with Xtream Codes API, secure M3U8 playlists, and EPG (Electronic Program Guide) XMLTV schedules.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      badge: "M3U & Xtream"
    },
    {
      title: "Multi-Screen Freedom",
      desc: "Seamlessly switch playback between your living room Fire TV Stick, bedroom Smart TV, tablet, or smartphone.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      badge: "Cross-Device"
    }
  ];

  return (
    <div className="grid-4" style={{ marginTop: "1.5rem" }}>
      {pillars.map((p, idx) => (
        <div key={idx} className="card" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "var(--bg-orange-soft)",
              border: "1px solid var(--border-highlight)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-orange-dark)"
            }}>
              {p.icon}
            </div>
            <span className="badge badge-orange">{p.badge}</span>
          </div>
          <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{p.title}</h3>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", marginTop: "auto" }}>
            {p.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
