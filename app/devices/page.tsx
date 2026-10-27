import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Supported IPTV Devices & Players | Hardware Compatibility Guide",
  description: "Check supported streaming hardware for IPTVProvider8K. Compatible with Amazon Fire TV Stick, Samsung & LG Smart TVs, Android TV, Apple TV, PC, and top IPTV players.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/devices",
  },
};

export default function DevicesPage() {
  const hardwareCategories = [
    {
      title: "Amazon Fire TV Ecosystem",
      badge: "Most Popular",
      image: "/images/firestick.png",
      desc: "Optimized for all Amazon streaming hardware with smooth hardware-accelerated HEVC decoding.",
      devices: [
        "Amazon Fire TV Stick 4K & 4K Max",
        "Amazon Fire TV Stick (3rd Gen & Lite)",
        "Amazon Fire TV Cube",
        "Insignia & Toshiba Fire TV Edition TVs"
      ],
      setupLink: "/setup/firestick",
      setupText: "View Firestick Setup Guide"
    },
    {
      title: "Smart TVs (Samsung & LG)",
      badge: "Direct Playback",
      image: "/images/samsungsmarttv.png",
      desc: "Stream directly through your television without external dongles using certified app store players.",
      devices: [
        "Samsung Smart TVs (Tizen OS 2018–Present)",
        "LG Smart TVs (webOS 3.5–Present)",
        "Sony Bravia Google TVs",
        "TCL & Hisense Android/Google TVs"
      ],
      setupLink: "/setup/smart-tv",
      setupText: "View Smart TV Setup Guide"
    },
    {
      title: "Android TV & Streaming Boxes",
      badge: "High Performance",
      image: "/images/nvidiashield.png",
      desc: "Experience fluid 60fps playback with support for premier IPTV applications like TiviMate.",
      devices: [
        "NVIDIA Shield TV & Shield TV Pro",
        "Chromecast with Google TV (HD & 4K)",
        "Xiaomi Mi Box S & TV Stick",
        "Formuler Z-Series & BuzzTV Media Boxes"
      ],
      setupLink: "/setup/android",
      setupText: "View Android TV Guide"
    },
    {
      title: "Apple Ecosystem (tvOS & iOS)",
      badge: "AirPlay Ready",
      image: "/images/appletv.png",
      desc: "Stream with responsive interface design on Apple hardware using App Store IPTV clients.",
      devices: [
        "Apple TV 4K (1st, 2nd & 3rd Gen)",
        "Apple TV HD",
        "iPhone (iOS 14+)",
        "iPad & iPad Pro (iPadOS 14+)"
      ],
      setupLink: "/contact?subject=apple-setup",
      setupText: "Request Apple Instructions"
    },
    {
      title: "Desktop & Personal Computers",
      badge: "Workstation Ready",
      image: "/images/windowspc.png",
      desc: "Direct M3U8 and HLS playlist playback using cross-platform desktop media players.",
      devices: [
        "Windows 11 & Windows 10 (IPTV Smarters / VLC)",
        "macOS Apple Silicon & Intel (VLC / IINA)",
        "Linux (VLC Media Player)"
      ],
      setupLink: "/contact?subject=desktop-setup",
      setupText: "Request Desktop Config"
    },
    {
      title: "Open-Source & Network Hardware",
      badge: "Power Users",
      image: "/images/mag.png",
      desc: "Integrate stream URLs into personal home theater software and media center setups.",
      devices: [
        "Kodi (PVR IPTV Simple Client Add-on)",
        "MAG 300/400/500 Series Linux Set-Top Boxes",
        "Enigma2 / Dreambox Receivers"
      ],
      setupLink: "/contact?subject=hardware-setup",
      setupText: "Request Setup Parameters"
    }
  ];

  const recommendedPlayers = [
    {
      name: "TiviMate IPTV Player",
      platform: "Fire TV / Android TV",
      pros: "Modern cable-style UI, multi-screen viewing, fast EPG catch-up, channel grouping.",
      recommendedFor: "Living Room Big Screen Experience"
    },
    {
      name: "IPTV Smarters Pro",
      platform: "Fire TV / Samsung / LG / iOS / Android / PC",
      pros: "Universal compatibility, easy Xtream Codes login, parental controls, multi-user.",
      recommendedFor: "General Household & Multi-Platform"
    },
    {
      name: "XCIPTV Player",
      platform: "Fire TV / Android TV / Mobile",
      pros: "Built-in dual media players (ExoPlayer & VLC), customizable interface, lightweight.",
      recommendedFor: "Reliable Backup & Mobile Streaming"
    },
    {
      name: "VLC Media Player",
      platform: "Windows / Mac / Linux / Mobile",
      pros: "100% open-source, robust codec library, perfect for diagnostic playlist testing.",
      recommendedFor: "Troubleshooting & Computer Viewing"
    }
  ];

  return (
    <div className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Breadcrumbs items={[{ label: "Supported Devices" }]} />

        {/* Hero Section */}
        <div style={{ maxWidth: "860px", marginBottom: "3rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span className="badge badge-orange">Universal Media Compatibility</span>
            <span className="badge badge-emerald">Zero Hardware Lock-In</span>
          </div>

          <h1>
            Supported <span className="text-gradient">IPTV Devices</span> & Hardware Matrix
          </h1>

          <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
            IPTVProvider8K operates on open standard streaming protocols (M3U, Xtream Codes API, and HLS). You are never forced to buy a proprietary locked box. Enjoy your favorite streams across television sticks, smart TVs, mobile screens, and home theater setups.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.75rem" }}>
            <Link href="/plans" className="btn btn-primary">
              View Subscription Options
            </Link>
            <Link href="/setup/firestick" className="btn btn-secondary">
              Firestick Setup Guide
            </Link>
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Visual Showcase Banner */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          alignItems: "center",
          marginBottom: "4rem",
          padding: "2rem",
          background: "var(--bg-secondary)",
          borderRadius: "16px",
          border: "1px solid var(--border-subtle)"
        }}>
          <div>
            <span className="section-tag">Cross-Platform Ecosystem</span>
            <h2 style={{ fontSize: "1.65rem", marginBottom: "1rem" }}>Stream Effortlessly On Any Screen You Own</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1rem" }}>
              Whether you are watching live 4K NFL football in your living room, catching evening news on an iPad in the kitchen, or traveling with your Firestick, your subscription activates seamlessly across all your devices.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.875rem" }}>
              <div><strong style={{ color: "var(--accent-orange-dark)" }}>4K & 8K</strong> Resolution Ready</div>
              <div><strong style={{ color: "var(--accent-orange-dark)" }}>HEVC / H.265</strong> Hardware Acceleration</div>
              <div><strong style={{ color: "var(--accent-orange-dark)" }}>Anti-Freeze</strong> Edge Routing</div>
            </div>
          </div>
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
            <Image
              src="/images/iptv-heimkino.jpg"
              alt="IPTVProvider8K Home Theater and Living Room Compatibility"
              width={580}
              height={360}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Hardware Categories Grid */}
        <div className="grid-3" style={{ marginBottom: "4.5rem" }}>
          {hardwareCategories.map((cat, idx) => (
            <div key={idx} className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className="badge badge-orange">{cat.badge}</span>
                <div style={{ width: "48px", height: "48px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={44}
                    height={44}
                    style={{ objectFit: "contain", maxHeight: "44px" }}
                  />
                </div>
              </div>
              <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                {cat.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
                {cat.desc}
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {cat.devices.map((d, dIdx) => (
                  <li key={dIdx}>{d}</li>
                ))}
              </ul>
              <Link href={cat.setupLink} className="btn btn-secondary btn-sm" style={{ marginTop: "auto", width: "100%" }}>
                {cat.setupText} &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* Recommended IPTV Players */}
        <div style={{ marginBottom: "4.5rem" }}>
          <div className="section-header">
            <span className="section-tag">Player Applications</span>
            <h2>Recommended IPTV Player Software</h2>
            <p>
              Our service connects seamlessly to all industry-standard media players. Here are the top software applications tested for maximum performance and stability.
            </p>
          </div>

          <div className="grid-2">
            {recommendedPlayers.map((player, idx) => (
              <div key={idx} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", margin: 0 }}>
                    {player.name}
                  </h3>
                  <span className="badge badge-orange">{player.platform}</span>
                </div>
                <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
                  {player.pros}
                </p>
                <div style={{ fontSize: "0.85rem", color: "var(--accent-orange-dark)", fontWeight: "600" }}>
                  Recommended For: <span style={{ color: "var(--text-primary)", fontWeight: "400" }}>{player.recommendedFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Minimum Requirements */}
        <div className="card" style={{ padding: "2.5rem", background: "var(--bg-orange-soft)", borderColor: "var(--border-highlight)", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
            Recommended Technical Specifications for 8K & 4K Streaming
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", marginTop: "1.5rem" }}>
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Network Bandwidth</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                • 1080p Full HD: 12 Mbps download<br />
                • 4K Ultra HD: 25 Mbps download<br />
                • 8K Ultra HD: 50+ Mbps download<br />
                • Latency (Ping): Sub-50ms to US hubs
              </p>
            </div>
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-emerald)", marginBottom: "0.5rem" }}>Hardware Processing</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                • Quad-core 1.5 GHz+ SoC<br />
                • 2 GB+ system RAM for smooth EPG caching<br />
                • Dedicated GPU video decoding block<br />
                • Modern OS: Fire OS 6+, Android 9+, tvOS 14+
              </p>
            </div>
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Supported Video Codecs</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                • HEVC (High Efficiency Video Coding / H.265)<br />
                • AVC (Advanced Video Coding / H.264)<br />
                • AV1 Hardware Decoding (where supported)<br />
                • Audio: AAC, AC3 (Dolby Digital Passthrough)
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Links */}
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", background: "var(--bg-orange-soft)", borderRadius: "16px", border: "1px solid var(--border-highlight)" }}>
          <h2 style={{ fontSize: "1.85rem", marginBottom: "0.75rem" }}>Ready to Configure Your Hardware?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 1.75rem auto", color: "var(--text-secondary)" }}>
            Explore our comprehensive, verified device setup tutorials with screenshots and step-by-step instructions.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/setup/firestick" className="btn btn-primary">
              Firestick Setup Tutorial
            </Link>
            <Link href="/setup/smart-tv" className="btn btn-secondary">
              Smart TV Setup Tutorial
            </Link>
            <Link href="/setup/android" className="btn btn-secondary">
              Android TV Setup Tutorial
            </Link>
            <a href="mailto:support@streamb4.com" className="btn btn-secondary">
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
