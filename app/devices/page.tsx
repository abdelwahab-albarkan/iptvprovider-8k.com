import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

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
    <>
      <PageHero
        crumbs={[{ label: "Supported Devices" }]}
        badges={
          <>
            <span className="badge badge-orange">Universal Media Compatibility</span>
            <span className="badge badge-emerald">Zero Hardware Lock-In</span>
          </>
        }
        title={
          <>
            Supported <span className="text-gradient">IPTV Devices</span> &amp; Hardware Matrix
          </>
        }
        lead="IPTVProvider8K operates on open standard streaming protocols (M3U, Xtream Codes API, and HLS). You are never forced to buy a proprietary locked box. Enjoy your favorite streams across television sticks, smart TVs, mobile screens, and home theater setups."
        actions={
          <>
            <Link href="/plans" className="btn btn-primary">
              View Subscription Options
            </Link>
            <Link href="/setup/firestick" className="btn btn-secondary">
              Firestick Setup Guide
            </Link>
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Chat on WhatsApp
            </a>
          </>
        }
      />

      {/* Visual Showcase Banner */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="section-tag">Cross-Platform Ecosystem</span>
            <h2>Stream Effortlessly On Any Screen You Own</h2>
            <p className="mb-6">
              Whether you are watching live 4K NFL football in your living room, catching evening news on an iPad in the kitchen, or traveling with your Firestick, your subscription activates seamlessly across all your devices.
            </p>
            <div className="stat-row">
              <div><strong>4K &amp; 8K</strong> Resolution Ready</div>
              <div><strong>HEVC / H.265</strong> Hardware Acceleration</div>
              <div><strong>Anti-Freeze</strong> Edge Routing</div>
            </div>
          </div>
          <div className="media-frame">
            <Image
              src="/images/iptv-heimkino.jpg"
              alt="IPTVProvider8K Home Theater and Living Room Compatibility"
              width={580}
              height={360}
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Hardware Categories Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-3">
            {hardwareCategories.map((cat, idx) => (
              <div key={idx} className="card card-hover card-flex">
                <div className="card-head">
                  <span className="badge badge-orange">{cat.badge}</span>
                  <span className="logo-box">
                    <Image src={cat.image} alt={cat.title} width={40} height={40} className="logo-img" />
                  </span>
                </div>
                <h2 className="h-card">{cat.title}</h2>
                <p className="small mb-6">{cat.desc}</p>
                <ul className="dot-list mb-8">
                  {cat.devices.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
                <Link href={cat.setupLink} className="btn btn-secondary btn-sm btn-block push">
                  {cat.setupText} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended IPTV Players */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Player Applications</span>
            <h2>Recommended IPTV Player Software</h2>
            <p>
              Our service connects seamlessly to all industry-standard media players. Here are the top software applications tested for maximum performance and stability.
            </p>
          </div>

          <div className="grid-2">
            {recommendedPlayers.map((player, idx) => (
              <div key={idx} className="card card-hover">
                <div className="card-title-row">
                  <h3>{player.name}</h3>
                  <span className="badge badge-orange">{player.platform}</span>
                </div>
                <p className="small mb-6">{player.pros}</p>
                <div className="small">
                  <strong className="text-brand">Recommended For:</strong> {player.recommendedFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Minimum Requirements */}
      <section className="section section-alt">
        <div className="container">
          <div className="callout">
            <h2>Recommended Technical Specifications for 8K &amp; 4K Streaming</h2>
            <div className="grid-3 mt-8">
              <div className="tip">
                <h3>Network Bandwidth</h3>
                <ul className="dot-list">
                  <li>1080p Full HD: 12 Mbps download</li>
                  <li>4K Ultra HD: 25 Mbps download</li>
                  <li>8K Ultra HD: 50+ Mbps download</li>
                  <li>Latency (Ping): Sub-50ms to US hubs</li>
                </ul>
              </div>
              <div className="tip success">
                <h3>Hardware Processing</h3>
                <ul className="dot-list">
                  <li>Quad-core 1.5 GHz+ SoC</li>
                  <li>2 GB+ system RAM for smooth EPG caching</li>
                  <li>Dedicated GPU video decoding block</li>
                  <li>Modern OS: Fire OS 6+, Android 9+, tvOS 14+</li>
                </ul>
              </div>
              <div className="tip">
                <h3>Supported Video Codecs</h3>
                <ul className="dot-list">
                  <li>HEVC (High Efficiency Video Coding / H.265)</li>
                  <li>AVC (Advanced Video Coding / H.264)</li>
                  <li>AV1 Hardware Decoding (where supported)</li>
                  <li>Audio: AAC, AC3 (Dolby Digital Passthrough)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Links */}
      <CtaBand
        title="Ready to Configure Your Hardware?"
        text="Explore our comprehensive, verified device setup tutorials with screenshots and step-by-step instructions."
      >
        <Link href="/setup/firestick" className="btn btn-primary">
          Firestick Setup Tutorial
        </Link>
        <Link href="/setup/smart-tv" className="btn btn-ghost">
          Smart TV Setup Tutorial
        </Link>
        <Link href="/setup/android" className="btn btn-ghost">
          Android TV Setup Tutorial
        </Link>
        <a href="mailto:support@streamb4.com" className="btn btn-ghost">
          Email Support
        </a>
      </CtaBand>
    </>
  );
}
