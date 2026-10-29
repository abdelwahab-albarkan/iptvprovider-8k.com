import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TrustBanner from "@/components/TrustBanner";
import FaqAccordion from "@/components/FaqAccordion";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import CtaBand from "@/components/CtaBand";
import PricingSection from "@/components/PricingSection";

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
    },
    {
      id: "hp-6",
      question: "What does an IPTV service provider actually do?",
      answer: "An IPTV service provider delivers live television channels and on-demand content over the internet instead of through cable or satellite. You receive login details, add them to a player app on your device, and stream using your normal broadband connection."
    },
    {
      id: "hp-7",
      question: "How do I choose the best IPTV provider for my home?",
      answer: "Compare stream stability during busy evenings, published prices without automatic renewal, support for standard formats such as M3U and Xtream Codes, compatibility with the devices you already own, and how easy it is to reach a real person for help. A provider that shows clear prices and written setup guides is usually the safer choice."
    },
    {
      id: "hp-8",
      question: "Do I need a special device for IPTV 4K streaming?",
      answer: "You need a 4K-capable screen or streaming device, such as a Fire TV Stick 4K, NVIDIA Shield, Apple TV 4K, or a recent Samsung or LG smart TV, plus a connection of about 25 Mbps or more. A channel plays in 4K when its source is broadcast in 4K."
    },
    {
      id: "hp-9",
      question: "How many devices can watch at the same time?",
      answer: "Every plan is available for 1, 2, 3, or 4 simultaneous streams. Pick the number that matches how many people in your home watch at the same time on different screens."
    },
    {
      id: "hp-10",
      question: "How can I contact support before or after ordering?",
      answer: "Message us on WhatsApp at +212625218443 or email support@streamb4.com. You can also use the contact form on our website, and every order includes setup instructions for your device."
    }
  ];

  const includedFeatures = [
    {
      title: "Live TV With a Program Guide",
      text: "Browse live channels with an electronic program guide (EPG) that shows what is on now and what comes next, organized by category so finding a game or a show takes seconds.",
      icon: "M2 7h20v13H2zM17 2l-5 5-5-5",
    },
    {
      title: "Sports in 4K Where Available",
      text: "Live sports benefit most from a high bitrate and smooth frame rates. When a broadcaster provides a 4K or 60fps feed, we deliver it in that higher quality so fast action stays sharp.",
      icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 2v20M2 12h20",
    },
    {
      title: "Movies and Series On Demand",
      text: "Alongside live channels, the on-demand library lets you start movies and series whenever it suits you, using the same player app and the same login.",
      icon: "M5 3l14 9-14 9z",
    },
    {
      title: "One to Four Simultaneous Streams",
      text: "Choose a plan for 1, 2, 3, or 4 connections so several people in the household can watch different content at the same time on different screens.",
      icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    },
    {
      title: "Open Standard Formats",
      text: "Your access comes as an M3U playlist and an Xtream Codes API login, the formats supported by IPTV Smarters Pro, TiviMate, XCIPTV, VLC, and most other players.",
      icon: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    },
    {
      title: "Setup Help From Real People",
      text: "Questions about installation or your account are answered by our support team over WhatsApp and email, backed by written guides for Firestick, smart TVs, and Android.",
      icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    },
  ];

  const providerChecklist = [
    {
      title: "Stability When It Matters",
      text: "A good IPTV provider keeps streams steady during prime time and big live events, not only at quiet hours. Ask how the service handles peak demand and look at what real users say about buffering.",
    },
    {
      title: "Clear Prices, No Auto-Renewal",
      text: "Look for prices that are published openly in your currency, with no hidden fees and no subscription that renews without your permission.",
    },
    {
      title: "Open Formats and Wide Device Support",
      text: "Services that use standard M3U and Xtream Codes access work on almost any device and player, so you are never locked into one box or one app.",
    },
    {
      title: "Support You Can Actually Reach",
      text: "You should be able to reach a person quickly when something does not work. Check for direct channels such as WhatsApp or email, and for written setup guides.",
    },
    {
      title: "Honest, Realistic Claims",
      text: "Be careful with offers that promise lifetime access for a single payment or numbers that sound too good to be true. Clear, verifiable descriptions are the mark of a serious IPTV service provider.",
    },
    {
      title: "Plans for the Whole Household",
      text: "If several people watch at home, make sure the provider offers plans with more than one simultaneous connection instead of asking you to buy separate accounts.",
    },
  ];

  const cableComparison = [
    { aspect: "Equipment", iptv: "The TV, stick, or phone you already own", cable: "Rented set-top box" },
    { aspect: "Commitment", iptv: "Prepaid 3, 6, or 12 months, no auto-renewal", cable: "Often a 12 to 24 month agreement" },
    { aspect: "Where you watch", iptv: "Any supported device with an internet connection", cable: "Mainly the TV connected to the box" },
    { aspect: "Picture quality", iptv: "HD, plus 4K when the source channel provides it", cable: "Depends on the package and the box" },
    { aspect: "Installation", iptv: "Self-setup in minutes with our guides", cable: "Technician visit often required" },
  ];

  const lineIcon = (d: string) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );

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
      <section className="hero bg-hero">
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

      {/* What the IPTV service includes */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What You Get</span>
            <h2>Everything Our IPTV Service Includes</h2>
            <p>
              IPTVProvider8K is an IPTV service provider built for viewers who want live television, sports, and on-demand entertainment without a cable box or a long-term contract. Every subscription runs over your existing internet connection and works with the IPTV player apps you already know, so you can start watching on the screens you already own.
            </p>
          </div>
          <div className="grid-3">
            {includedFeatures.map((item) => (
              <div key={item.title} className="card card-hover feature-card">
                <span className="icon-box mb-6">{lineIcon(item.icon)}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
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

      {/* Pricing plans */}
      <section className="section" id="pricing" aria-labelledby="home-pricing-title">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Plans &amp; Pricing</span>
            <h2 id="home-pricing-title">IPTV Subscription Plans and Prices</h2>
            <p>
              Pick the term and the number of connections that fit your household. Every IPTV subscription is prepaid in US dollars with no automatic renewal, includes the program guide and setup support, and works on all compatible devices. Use the selector to compare prices for 1 to 4 simultaneous streams.
            </p>
          </div>

          <PricingSection planHeading="h3" showSchedule={false} />

          <p className="center">
            <Link href="/plans" className="text-link">
              Compare every plan and the full price schedule
            </Link>
          </p>

          {/* Direct contact */}
          <div className="contact-strip">
            <div className="section-header">
              <h3 className="h-section">Questions Before You Order?</h3>
              <p>
                Talk to our team before you buy. We can help you pick the right plan, check that your device is compatible, and walk you through setup.
              </p>
            </div>
            <div className="grid-2">
              <div className="card contact-card">
                <span className="icon-box whatsapp">{lineIcon("M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z")}</span>
                <h4 className="h-card">WhatsApp Support</h4>
                <p>Fast answers about plans, payment, and installation. Message us at +212625218443.</p>
                <a
                  href="https://wa.me/212625218443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Chat on WhatsApp: +212625218443
                </a>
              </div>
              <div className="card contact-card">
                <span className="icon-box">{lineIcon("M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6")}</span>
                <h4 className="h-card">Email Support</h4>
                <p>Prefer email? Send your question and we will reply with clear, step-by-step help.</p>
                <a href="mailto:support@streamb4.com" className="btn btn-secondary">
                  Email support@streamb4.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IPTV 4K / 8K quality */}
      <section className="section section-alt">
        <div className="container split">
          <div>
            <span className="section-tag">Picture Quality</span>
            <h2>IPTV 4K and 8K Streaming: What Picture Quality to Expect</h2>
            <p className="mb-6">
              Resolution is only part of what makes a stream look good. A true 4K IPTV stream needs a high, consistent bitrate, an efficient codec, and servers that keep up during busy evenings when everyone is watching the same match. Our IPTV streaming service is built around modern HEVC (H.265) and AVC encoding, which keeps detail high while using your bandwidth efficiently.
            </p>
            <h3>What You Need for Smooth 4K IPTV</h3>
            <ul className="check-list compact mb-8">
              <li>A 4K-capable TV or streaming device, such as a Fire TV Stick 4K, NVIDIA Shield, Apple TV 4K, or a recent Samsung or LG smart TV.</li>
              <li>An internet connection of at least 25 Mbps for 4K, or 50 Mbps and up for 8K-ready content.</li>
              <li>Wired Ethernet or 5 GHz Wi-Fi to avoid drops during long sessions.</li>
              <li>A player app with hardware decoding, such as TiviMate or IPTV Smarters Pro.</li>
            </ul>
            <h3>Why Bitrate Matters More Than the Label</h3>
            <p>
              Plenty of services advertise 4K, but a heavily compressed 4K channel can look worse than a clean 1080p feed. When you compare IPTV providers, judge the picture during fast motion such as live sports, and notice how the stream holds up at peak times rather than late at night when networks are quiet.
            </p>
          </div>
          <div className="media-frame">
            <Image
              src="/images/iptv-heimkino.jpg"
              alt="Home theater showing an IPTV stream in 4K ultra HD"
              width={640}
              height={400}
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>
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

      {/* How it works */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>How Our IPTV Streaming Service Works in 3 Steps</h2>
            <p>
              Getting started does not involve technicians, satellite dishes, or rented hardware. Here is the whole process, from choosing a plan to watching your first channel.
            </p>
          </div>
          <ol className="steps">
            <li className="step">
              <span className="step-num" aria-hidden="true">1</span>
              <div className="step-body">
                <h3>Choose Your Plan</h3>
                <p>Select a 3, 6, or 12 month term and the number of simultaneous streams you need. Prices are shown in US dollars and billed once.</p>
              </div>
            </li>
            <li className="step">
              <span className="step-num" aria-hidden="true">2</span>
              <div className="step-body">
                <h3>Receive Your Login Details</h3>
                <p>After your order is confirmed, we email your M3U playlist link and Xtream Codes credentials together with setup instructions for your device.</p>
              </div>
            </li>
            <li className="step">
              <span className="step-num" aria-hidden="true">3</span>
              <div className="step-body">
                <h3>Install a Player and Start Watching</h3>
                <p>Add your details to a compatible IPTV player on your Firestick, smart TV, Android box, phone, or computer, and your channels load within minutes.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Buyer's guide: choosing an IPTV provider */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Buyer&apos;s Guide</span>
            <h2>How to Choose the Best IPTV Provider</h2>
            <p>
              There are many IPTV service providers, and they are not all equal. Before you pay for any IPTV subscription, check the points below. They are the same standards we hold ourselves to.
            </p>
          </div>
          <div className="grid-3 mb-12">
            {providerChecklist.map((item) => (
              <div key={item.title} className="card card-tinted">
                <h3 className="h-card">{item.title}</h3>
                <p className="small">{item.text}</p>
              </div>
            ))}
          </div>

          <h3 className="h-section center">IPTV Service vs Traditional Cable TV</h3>
          <div className="table-responsive table-stack">
            <table className="styled-table" aria-label="IPTV service compared with traditional cable TV">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">IPTVProvider8K</th>
                  <th scope="col">Traditional Cable</th>
                </tr>
              </thead>
              <tbody>
                {cableComparison.map((row) => (
                  <tr key={row.aspect}>
                    <td data-label="Feature">{row.aspect}</td>
                    <td data-label="IPTVProvider8K">{row.iptv}</td>
                    <td data-label="Traditional Cable">{row.cable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* Why choose us */}
      <section className="section">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Why IPTVProvider8K</span>
            <h2>Why Viewers Choose IPTVProvider8K as Their IPTV Provider</h2>
            <p>
              We focus on what makes a premium IPTV service pleasant to use every day: a picture that holds up, straightforward pricing, and help when you need it.
            </p>
          </div>
          <ul className="check-list mb-8">
            <li><strong>Premium picture:</strong> streams prepared for HD, 4K, and 8K-ready playback on modern screens.</li>
            <li><strong>US-focused routing:</strong> server routing designed to keep latency low for viewers in the United States.</li>
            <li><strong>Household plans:</strong> 1 to 4 simultaneous streams so everyone can watch what they like.</li>
            <li><strong>Honest billing:</strong> prepaid prices in USD with no automatic recurring charges.</li>
            <li><strong>Clear guides:</strong> step-by-step setup for Firestick, Samsung, LG, Android TV, and more.</li>
            <li><strong>Direct support:</strong> WhatsApp at +212625218443 and email at support@streamb4.com.</li>
          </ul>
          <div className="btn-row center stack-mobile">
            <Link href="#pricing" className="btn btn-primary">
              See IPTV Plans
            </Link>
            <Link href="/devices" className="btn btn-secondary">
              Check Supported Devices
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section section-alt">
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
        <a href="mailto:support@streamb4.com" className="btn btn-ghost btn-lg">
          Email support@streamb4.com
        </a>
      </CtaBand>
    </>
  );
}
