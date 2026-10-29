import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TrustBanner from "@/components/TrustBanner";
import FaqAccordion from "@/components/FaqAccordion";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import CtaBand from "@/components/CtaBand";

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

  const checkIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <>
      <SchemaJsonLd data={orgAndWebSiteSchema} />

      {/* Hero Section */}
      <section className="hero bg-navy on-dark">
        <div className="container hero-grid">
          {/* Hero Copy */}
          <div>
            <div className="badge-row">
              <span className="badge badge-orange">
                <span className="status-dot" /> Ultra HD Streaming Platform
              </span>
              <span className="badge badge-emerald">US Server Network</span>
            </div>

            <h1>
              Premium <span className="text-gradient">IPTV Service</span> for High-Definition Entertainment
            </h1>

            <p className="lead">
              Stream authorized live television, premium sports, and on-demand entertainment in true 8K and 4K Ultra HD. Powered by low-latency United States edge infrastructure with multi-device compatibility for Firestick, Smart TVs, and Android.
            </p>

            <div className="btn-row stack-mobile">
              <Link href="/plans" className="btn btn-primary btn-lg" id="hero-cta-plans">
                Explore Subscription Plans
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

            {/* Trust chips */}
            <ul className="trust-chips">
              <li>{checkIcon} High-Throughput US CDN</li>
              <li>{checkIcon} Firestick &amp; Smart TV Ready</li>
              <li>{checkIcon} M3U &amp; Xtream Codes API</li>
            </ul>
          </div>

          {/* Hero Visual Image */}
          <div className="hero-media">
            <div className="hero-frame">
              <Image
                src="/images/home-hero.jpg"
                alt="IPTV Streaming Setup with High Definition Display"
                width={640}
                height={420}
                priority
                sizes="(min-width: 960px) 560px, 100vw"
              />
            </div>

            {/* Floating Quality Badge */}
            <div className="float-badge">
              <span className="float-badge-mark">8K</span>
              <div>
                <div className="float-badge-title">Ultra-Sharp Visuals</div>
                <div className="float-badge-sub">8K, 4K UHD &amp; 60 FPS Feeds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hardware Compatibility Bar */}
      <section className="device-strip" aria-label="Compatible hardware">
        <div className="container device-strip-inner">
          <span className="device-strip-label">Compatible Across Top Hardware:</span>
          <ul className="device-strip-list">
            {featuredDevices.map((d) => (
              <li key={d.name}>
                <Link href={d.link} className="device-chip">
                  <Image src={d.img} alt={d.name} width={28} height={28} />
                  <span>{d.name}</span>
                </Link>
              </li>
            ))}
          </ul>
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
        <div className="container split">
          <div className="media-frame">
            <Image
              src="/images/soiree-cinema-en-famille.png"
              alt="Family entertainment and live sports streaming in ultra HD"
              width={640}
              height={400}
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>

          <div>
            <span className="section-tag">Home Entertainment</span>
            <h2>Complete Television Freedom Across All Your Screens</h2>
            <p className="mb-6">
              Access authorized live television, premium sports broadcasts, and extensive entertainment libraries without hardware rental fees or restrictive contracts.
            </p>
            <ul className="check-list mb-8">
              <li>
                <strong>8K Ready &amp; 4K UHD Streams:</strong> High-bitrate feeds with fluid 60fps tracking for football, basketball, and racing events.
              </li>
              <li>
                <strong>Multi-Account Flexibility:</strong> Plans available for 1, 2, 3, or 4 simultaneous streams so everyone in the family watches what they love.
              </li>
              <li>
                <strong>Instant Activation &amp; Support:</strong> Fast credential delivery via email plus direct WhatsApp support at +212625218443.
              </li>
            </ul>
            <div className="btn-row stack-mobile">
              <Link href="/plans" className="btn btn-primary">
                View Plans &amp; Pricing
              </Link>
              <Link href="/iptv-usa" className="btn btn-secondary">
                Explore US Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Setup Hub with Image */}
      <section className="section section-alt">
        <div className="container split reverse">
          <div className="media-frame">
            <Image
              src="/images/iptv-fire-tv-stick.jpg"
              alt="Amazon Fire TV Stick IPTV Player Configuration"
              width={640}
              height={400}
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>

          <div>
            <span className="section-tag">Step-by-Step Tutorials</span>
            <h2>Get Configured in Less Than 5 Minutes</h2>
            <p className="mb-8">
              Setting up an IPTV service shouldn&apos;t require technical expertise. We maintain verified, original step-by-step setup guides for all major hardware platforms used by American viewers.
            </p>
            <ol className="step-list mb-8">
              <li>
                <strong>Select your preferred hardware</strong> — Firestick, Samsung TV, LG TV, or Android TV.
              </li>
              <li>
                <strong>Install a certified player</strong> — IPTV Smarters Pro, TiviMate, or XCIPTV.
              </li>
              <li>
                <strong>Input your secure credentials</strong> — Paste your M3U link or Xtream API credentials to start streaming immediately.
              </li>
            </ol>
            <div className="btn-row">
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
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2>Common Questions About IPTV Services</h2>
            <p>
              Clear, honest information regarding streaming performance, device setup, and subscription management.
            </p>
          </div>

          <FaqAccordion items={homepageFaqs} withSchema={true} />
          <div className="center mt-10">
            <p className="muted small mb-6">
              Need more technical specifications or troubleshooting help?
            </p>
            <Link href="/faq" className="btn btn-secondary btn-sm">
              View Complete FAQ Knowledgebase &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CtaBand
        title="Ready to Upgrade Your Television Experience?"
        text="Join viewers across the United States who trust IPTVProvider8K for stable, ultra-high-definition streaming."
      >
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
      </CtaBand>
    </>
  );
}
