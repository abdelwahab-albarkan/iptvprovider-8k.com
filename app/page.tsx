import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TrustBanner from "@/components/TrustBanner";
import FaqAccordion from "@/components/FaqAccordion";
import SchemaJsonLd from "@/components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "IPTV Provider USA | Premium 8K & 4K IPTV Service",
  description: "Explore IPTVProvider8K, the premier US IPTV service provider. Experience crystal-clear 8K and 4K UHD streaming, fast US servers, and seamless setup on Firestick, Smart TVs, and Android.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/",
  },
};

export default function HomePage() {
  const orgAndWebSiteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "IPTVProvider8K",
      "url": "https://iptvprovider-8k.com",
      "logo": "https://iptvprovider-8k.com/favicon.ico",
      "description": "Authorized high-performance IPTV service provider delivering 8K and 4K ultra-high-definition streaming infrastructure in the United States.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+212625218443",
        "email": "support@streamb4.com",
        "url": "https://iptvprovider-8k.com/contact",
        "availableLanguage": ["English"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "IPTVProvider8K",
      "url": "https://iptvprovider-8k.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://iptvprovider-8k.com/faq?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  const homepageFaqs = [
    {
      id: "hp-1",
      question: "What is IPTVProvider8K and how does the service operate?",
      answer: "IPTVProvider8K is a specialized digital streaming infrastructure provider. We deliver ultra-high-definition television streams over internet protocol (IPTV) using modern standard media formats (M3U playlists, Xtream Codes API, and HLS). Streams are distributed via low-latency US edge nodes directly to your favorite player on Fire TV, Smart TVs, or Android devices."
    },
    {
      id: "hp-2",
      question: "What internet speed is recommended for 8K and 4K UHD streaming?",
      answer: "For uninterrupted 4K Ultra HD playback, we recommend a consistent internet connection of at least 25 Mbps. For high-bitrate 8K-ready test streams, a stable broadband connection of 50 Mbps or higher (preferably wired Ethernet or 5 GHz Wi-Fi) is recommended to prevent buffering."
    },
    {
      id: "hp-3",
      question: "Which devices and applications are supported?",
      answer: "Our service adheres to open industry standards and is compatible with Amazon Fire TV Stick, Samsung Smart TV (Tizen), LG Smart TV (webOS), Android TV boxes, NVIDIA Shield, Google Chromecast, Apple TV, iOS, and PC/Mac. Popular compatible applications include IPTV Smarters Pro, TiviMate, XCIPTV, and VLC."
    },
    {
      id: "hp-4",
      question: "Is there a contract or automatic commitment?",
      answer: "No. All subscription options are pay-as-you-go with clear billing terms. You choose your duration (3, 6, or 12 months) and renew only when you wish to continue service."
    },
    {
      id: "hp-5",
      question: "How quickly is service configuration delivered after ordering?",
      answer: "Upon order verification, your secure playlist credentials (M3U URL and Xtream API credentials) are generated and delivered promptly via email with step-by-step setup instructions for your specific hardware."
    }
  ];

  const featuredDevices = [
    { name: "Amazon Firestick", img: "/images/firestick.png", link: "/setup/firestick" },
    { name: "Samsung Smart TV", img: "/images/samsungsmarttv.png", link: "/setup/smart-tv" },
    { name: "LG Smart TV", img: "/images/LG TV (webOS).png", link: "/setup/smart-tv" },
    { name: "NVIDIA Shield TV", img: "/images/nvidiashield.png", link: "/setup/android" },
    { name: "Apple TV", img: "/images/appletv.png", link: "/devices" },
    { name: "Windows PC", img: "/images/windowspc.png", link: "/devices" },
  ];

  return (
    <>
      <SchemaJsonLd data={orgAndWebSiteSchema} />

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "4.5rem", paddingBottom: "4rem", background: "var(--gradient-orange-soft)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center"
          }}>
            {/* Hero Copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <span className="badge badge-orange">
                  <span className="status-dot" /> Ultra HD Streaming Platform
                </span>
                <span className="badge badge-emerald">US Server Network</span>
              </div>

              <h1>
                Premium <span className="text-gradient">IPTV Service</span> for High-Definition Entertainment
              </h1>

              <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: "1.7" }}>
                Stream authorized live television, premium sports, and on-demand entertainment in true 8K and 4K Ultra HD. Powered by low-latency United States edge infrastructure with multi-device compatibility for Firestick, Smart TVs, and Android.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <Link href="/plans" className="btn btn-primary btn-lg" id="hero-cta-plans">
                  Explore Subscription Plans
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/212625218443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  WhatsApp: +212625218443
                </a>
              </div>

              {/* Micro Highlights */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.5rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--border-subtle)",
                color: "var(--text-muted)",
                fontSize: "0.875rem"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange-dark)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>High-Throughput US CDN</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange-dark)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>Firestick & Smart TV Ready</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange-dark)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>M3U & Xtream Codes API</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Image */}
            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-lg)",
                background: "#ffffff"
              }}>
                <Image
                  src="/images/home-hero.jpg"
                  alt="IPTV Streaming Setup with High Definition Display"
                  width={640}
                  height={420}
                  priority
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                />
              </div>

              {/* Floating Quality Badge */}
              <div style={{
                position: "absolute",
                bottom: "-15px",
                left: "20px",
                background: "#ffffff",
                padding: "0.75rem 1.25rem",
                borderRadius: "12px",
                border: "1px solid var(--border-highlight)",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem"
              }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "var(--gradient-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontWeight: "800",
                  fontSize: "0.85rem"
                }}>
                  8K
                </div>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--text-primary)" }}>Ultra-Sharp Visuals</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>8K, 4K UHD & 60 FPS Feeds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hardware Compatibility Bar */}
      <section style={{ padding: "2rem 0", background: "#ffffff", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "700", color: "var(--text-muted)" }}>
              Compatible Across Top Hardware:
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
              {featuredDevices.map((d) => (
                <Link
                  key={d.name}
                  href={d.link}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 0.75rem",
                    borderRadius: "8px",
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <Image src={d.img} alt={d.name} width={28} height={28} style={{ objectFit: "contain", height: "24px", width: "auto" }} />
                  <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>{d.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Technical Architecture Banner */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Engineering Standard</span>
            <h2>Engineered for High-Bitrate Stability</h2>
            <p>
              Unlike legacy IPTV services that suffer from server congestion, IPTVProvider8K utilizes distributed US edge routing with dedicated bandwidth allocation.
            </p>
          </div>
          <TrustBanner />
        </div>
      </section>

      {/* Feature Showcase with Visual Asset */}
      <section className="section">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center"
          }}>
            <div style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-md)"
            }}>
              <Image
                src="/images/soiree-cinema-en-famille.png"
                alt="Family entertainment and live sports streaming in ultra HD"
                width={640}
                height={400}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              />
            </div>

            <div>
              <span className="section-tag">Home Entertainment</span>
              <h2>Complete Television Freedom Across All Your Screens</h2>
              <p style={{ marginBottom: "1.25rem" }}>
                Access authorized live television, premium sports broadcasts, and extensive entertainment libraries without hardware rental fees or restrictive contracts.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--bg-orange-soft)", color: "var(--accent-orange-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", flexShrink: 0 }}>✓</div>
                  <div>
                    <strong style={{ color: "var(--text-primary)" }}>8K Ready & 4K UHD Streams:</strong> High-bitrate feeds with fluid 60fps tracking for football, basketball, and racing events.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--bg-orange-soft)", color: "var(--accent-orange-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", flexShrink: 0 }}>✓</div>
                  <div>
                    <strong style={{ color: "var(--text-primary)" }}>Multi-Account Flexibility:</strong> Plans available for 1, 2, 3, or 4 simultaneous streams so everyone in the family watches what they love.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--bg-orange-soft)", color: "var(--accent-orange-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", flexShrink: 0 }}>✓</div>
                  <div>
                    <strong style={{ color: "var(--text-primary)" }}>Instant Activation & Support:</strong> Fast credential delivery via email plus direct WhatsApp support at +212625218443.
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/plans" className="btn btn-primary">
                  View Plans & Pricing
                </Link>
                <Link href="/iptv-usa" className="btn btn-secondary">
                  Explore US Network
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Setup Hub with Image */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="section-tag">Step-by-Step Tutorials</span>
              <h2>Get Configured in Less Than 5 Minutes</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Setting up an IPTV service shouldn&apos;t require technical expertise. We maintain verified, original step-by-step setup guides for all major hardware platforms used by American viewers.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>1.</span>
                  <div>
                    <strong style={{ color: "var(--text-primary)" }}>Select your preferred hardware</strong> — Firestick, Samsung TV, LG TV, or Android TV.
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>2.</span>
                  <div>
                    <strong style={{ color: "var(--text-primary)" }}>Install a certified player</strong> — IPTV Smarters Pro, TiviMate, or XCIPTV.
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>3.</span>
                  <div>
                    <strong style={{ color: "var(--text-primary)" }}>Input your secure credentials</strong> — Paste your M3U link or Xtream API credentials to start streaming immediately.
                  </div>
                </li>
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="/setup/firestick" className="btn btn-primary btn-sm">
                  Firestick Guide
                </Link>
                <Link href="/setup/smart-tv" className="btn btn-secondary btn-sm">
                  Smart TV Guide
                </Link>
                <Link href="/setup/android" className="btn btn-secondary btn-sm">
                  Android TV Guide
                </Link>
              </div>
            </div>

            {/* Visual Guide Box with Image */}
            <div style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-md)"
            }}>
              <Image
                src="/images/iptv-fire-tv-stick.jpg"
                alt="Amazon Fire TV Stick IPTV Player Configuration"
                width={640}
                height={400}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2>Common Questions About IPTV Services</h2>
            <p>
              Clear, honest information regarding streaming performance, device setup, and subscription management.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <FaqAccordion items={homepageFaqs} withSchema={true} />
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1rem" }}>
                Need more technical specifications or troubleshooting help?
              </p>
              <Link href="/faq" className="btn btn-secondary btn-sm">
                View Complete FAQ Knowledgebase &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section" style={{ background: "var(--bg-orange-soft)", borderTop: "1px solid var(--border-highlight)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "760px" }}>
          <h2>Ready to Upgrade Your Television Experience?</h2>
          <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
            Join viewers across the United States who trust IPTVProvider8K for stable, ultra-high-definition streaming.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/plans" className="btn btn-primary btn-lg">
              View Available Plans (From $39.99)
            </Link>
            <a
              href="https://wa.me/212625218443"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              Chat on WhatsApp (+212625218443)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
