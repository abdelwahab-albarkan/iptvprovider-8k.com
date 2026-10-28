import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TrustBanner from "@/components/TrustBanner";
import FaqAccordion from "@/components/FaqAccordion";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "IPTV Service & Provider in the USA | IPTVProvider8K",
  description: "A US IPTV service for 4K and 8K-ready streaming on Firestick, Smart TVs and Android. Prepaid plans from $39.99, 1 to 4 screens, no contracts.",
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
      "description": "IPTV streaming subscriptions for viewers in the United States, with 4K and 8K-ready playback on popular devices and third-party IPTV players.",
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
      "url": "https://iptvprovider-8k.com"
    }
  ];

  const homepageFaqs = [
    {
      id: "hp-1",
      question: "What is an IPTV service and how does IPTVProvider8K work?",
      answer: "An IPTV service delivers live TV and on-demand video over your internet connection instead of a cable or satellite line. When you subscribe to IPTVProvider8K, we send you login details (an M3U playlist link and Xtream Codes credentials). You enter them in an IPTV player app such as IPTV Smarters Pro or TiviMate on your Fire TV, Smart TV, Android TV box, phone or computer, and the app loads the channel list and program guide."
    },
    {
      id: "hp-2",
      question: "What internet speed do I need for 4K and 8K streaming?",
      answer: "For Full HD, a steady 12 Mbps connection is enough. For 4K Ultra HD we recommend at least 25 Mbps. For high-bitrate 8K-ready streams, plan for 50 Mbps or more. Stability matters as much as raw speed, so a wired Ethernet connection or 5 GHz Wi-Fi gives the best results."
    },
    {
      id: "hp-3",
      question: "Which devices and apps can I use?",
      answer: "Our service works with Amazon Fire TV Stick and Fire TV Cube, Samsung (Tizen) and LG (webOS) Smart TVs, Android TV and Google TV devices, NVIDIA Shield, Chromecast with Google TV, Apple TV, iPhone, iPad, Android phones, and Windows or Mac computers. Popular player apps include IPTV Smarters Pro, TiviMate, XCIPTV, IBO Player and VLC."
    },
    {
      id: "hp-4",
      question: "Is there a contract or automatic renewal?",
      answer: "No. Every plan is prepaid for 3, 6 or 12 months. You pay once, there is no automatic recurring charge, and you only renew if you want to keep watching."
    },
    {
      id: "hp-5",
      question: "How do I receive my login details after ordering?",
      answer: "Once your order is confirmed, we send your M3U link and Xtream Codes login by email, together with setup instructions for your device. If you get stuck, message us on WhatsApp at +212625218443 and we will walk you through it."
    },
    {
      id: "hp-6",
      question: "How many TVs can I watch on at the same time?",
      answer: "That depends on the plan you choose. A 1 Account plan allows one stream at a time. The 2, 3 and 4 Account plans allow that many screens to play at the same moment, so different people in your home can watch different channels."
    },
    {
      id: "hp-7",
      question: "Can I use the service outside my home?",
      answer: "Yes. Your login works on any supported device with a good internet connection, so you can watch on a phone, tablet or laptop when you are away. The number of screens playing at the same time is still limited by your plan."
    },
    {
      id: "hp-8",
      question: "What if the service does not work on my device?",
      answer: "Contact us first: most problems are fixed in a few minutes by changing the player app or a setting. If we cannot get the service working on a supported device because of a problem on our side, refunds are handled under our Refund Policy."
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

  const howItWorks = [
    {
      title: "Choose your plan",
      text: "Pick a 3, 6 or 12 month IPTV subscription and the number of screens you need, from 1 to 4. Every plan includes the same streams, program guide and support."
    },
    {
      title: "Receive your login",
      text: "After your order is confirmed we email your M3U playlist link and Xtream Codes login, plus a setup guide for the device you use most."
    },
    {
      title: "Install a player and watch",
      text: "Install an IPTV player such as IPTV Smarters Pro or TiviMate, enter your login, and your channels and TV guide load automatically."
    }
  ];

  const audiences = [
    {
      title: "Cord cutters",
      text: "Replace a costly cable or satellite bill with a prepaid IPTV subscription and stream on the TVs and devices you already own, with no box rental."
    },
    {
      title: "Sports fans",
      text: "Follow live games with smooth 60 fps playback on compatible streams, and keep a second screen running with a multi-account plan."
    },
    {
      title: "Families",
      text: "Choose 2, 3 or 4 accounts so the living room, bedroom and kids' tablet can each watch something different at the same time."
    },
    {
      title: "Movie lovers",
      text: "Watch on-demand movies and series in HD and 4K where available, and use the 8K-ready setup if you own a high-end display."
    }
  ];

  const reasons = [
    { title: "4K and 8K-ready playback", text: "Streams use modern HEVC (H.265) and H.264 compression, so compatible content looks sharp on large 4K screens without needing a huge connection." },
    { title: "Built for US viewers", text: "Delivery is routed through US servers and the electronic program guide follows Eastern, Central, Mountain and Pacific time." },
    { title: "Works with the apps you like", text: "Use standard M3U and Xtream Codes logins in IPTV Smarters Pro, TiviMate, XCIPTV, IBO Player, VLC and other popular players." },
    { title: "Simple prepaid pricing", text: "Plans start at $39.99 for 3 months. You pay once, with no contract, no equipment fees and no automatic renewal." },
    { title: "Real setup help", text: "Step-by-step guides for Firestick, Smart TVs and Android TV, plus direct help by WhatsApp, phone and email when you need it." },
    { title: "Up to 4 screens", text: "Every duration comes with 1, 2, 3 or 4 account options, so you only pay for the number of screens your household uses." }
  ];

  const comparisonRows = [
    ["Monthly equipment rental", "None — use your own devices", "Usually a cable box per TV", "Receiver and dish"],
    ["Contract", "No contract, prepaid terms", "Often 12–24 months", "Often 24 months"],
    ["Installation", "Install an app in minutes", "Technician visit or self-install kit", "Dish installation on the roof"],
    ["Watch on phone or tablet", "Yes, with an IPTV player app", "Depends on the provider app", "Limited"],
    ["Picture quality", "HD, 4K and 8K-ready streams", "HD, limited 4K", "HD, limited 4K"],
    ["Weather affects signal", "No", "No", "Heavy rain or snow can interrupt"]
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
          <div>
            <div className="badge-row">
              <span className="badge badge-orange">
                <span className="status-dot" /> 4K &amp; 8K-Ready Streaming
              </span>
              <span className="badge badge-emerald">US Server Network</span>
            </div>

            <h1>
              Premium <span className="text-gradient">IPTV Service</span> for Crystal-Clear TV in the USA
            </h1>

            <p className="lead">
              IPTVProvider8K is an IPTV service provider for US households. Watch live TV, sports and on-demand entertainment in HD, 4K and 8K-ready quality on Firestick, Smart TVs, Android TV and phones, with prepaid plans, no contract and real people to help you set up.
            </p>

            <div className="btn-row stack-mobile">
              <Link href="/plans" className="btn btn-primary btn-lg" id="hero-cta-plans">
                See IPTV Plans &amp; Prices
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

            <ul className="trust-chips">
              <li>{checkIcon} Plans from $39.99</li>
              <li>{checkIcon} 1 to 4 screens</li>
              <li>{checkIcon} M3U &amp; Xtream Codes</li>
            </ul>
          </div>

          <div className="hero-media">
            <div className="hero-frame">
              <Image
                src="/images/home-hero.jpg"
                alt="Living room TV streaming live channels with an IPTV service"
                width={640}
                height={420}
                priority
                sizes="(min-width: 960px) 560px, 100vw"
              />
            </div>
            <div className="float-badge">
              <span className="float-badge-mark">8K</span>
              <div>
                <div className="float-badge-title">Ultra-Sharp Picture</div>
                <div className="float-badge-sub">HD, 4K UHD &amp; 60 fps streams</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hardware Compatibility Bar */}
      <section className="device-strip" aria-label="Compatible hardware">
        <div className="container device-strip-inner">
          <span className="device-strip-label">Works on the devices you own:</span>
          <ul className="device-strip-list">
            {featuredDevices.map((d) => (
              <li key={d.name}>
                <Link href={d.link} className="device-chip">
                  <Image src={d.img} alt={d.name} width={28} height={28} style={{ width: "auto", height: "auto" }} />
                  <span>{d.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>How Our IPTV Service Works</h2>
            <p>
              IPTV (Internet Protocol Television) sends TV channels over your home internet instead of a coaxial cable or satellite dish. You keep your current TV and streaming stick, add a player app, and sign in with the details we send you. Getting started takes three steps.
            </p>
          </div>
          <ol className="grid-3 steps-grid">
            {howItWorks.map((step) => (
              <li key={step.title} className="card card-hover feature-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technical pillars */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Streaming Quality</span>
            <h2>IPTV Streaming Built for 4K Screens</h2>
            <p>
              Picture quality depends on three things: how the stream is encoded, how far it travels, and how well your player decodes it. We take care of the first two so your TV can do the rest.
            </p>
          </div>
          <TrustBanner />
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why IPTVProvider8K</span>
            <h2>Why Choose Us as Your IPTV Provider</h2>
            <p>
              There are many IPTV service providers online, and quality varies a lot. Here is what you get with us, explained plainly.
            </p>
          </div>
          <div className="grid-3">
            {reasons.map((r) => (
              <div key={r.title} className="card card-glow">
                <h3>{r.title}</h3>
                <p className="small">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase with Visual Asset */}
      <section className="section section-alt">
        <div className="container split">
          <div className="media-frame">
            <Image
              src="/images/soiree-cinema-en-famille.png"
              alt="Family watching movies and live sports on a large TV"
              width={640}
              height={400}
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>

          <div>
            <span className="section-tag">Home Entertainment</span>
            <h2>One Subscription for Every Screen in Your Home</h2>
            <p className="mb-6">
              Watch live channels, sports and on-demand movies on the living room TV, then pick up on a tablet or phone. There are no set-top boxes to rent and no long contracts to sign.
            </p>
            <ul className="check-list mb-8">
              <li>
                <strong>4K UHD and 8K-ready streams:</strong> high-bitrate feeds with smooth 60 fps motion for football, basketball and racing on compatible channels.
              </li>
              <li>
                <strong>Multi-account plans:</strong> choose 1, 2, 3 or 4 screens so everyone in the family can watch what they like at the same time.
              </li>
              <li>
                <strong>Fast delivery and support:</strong> your login arrives by email after your order is confirmed, and you can reach us on WhatsApp at +212625218443.
              </li>
            </ul>
            <div className="btn-row stack-mobile">
              <Link href="/plans" className="btn btn-primary">
                View Plans &amp; Pricing
              </Link>
              <Link href="/iptv-usa" className="btn btn-secondary">
                IPTV in the USA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Who It&apos;s For</span>
            <h2>An IPTV Streaming Service for Every Kind of Viewer</h2>
            <p>
              Whether you want to cut the cord completely or add a flexible second option next to your current TV package, IPTV fits a lot of households.
            </p>
          </div>
          <div className="grid-4">
            {audiences.map((a) => (
              <div key={a.title} className="card card-hover feature-card">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Compare</span>
            <h2>IPTV vs. Cable vs. Satellite</h2>
            <p>
              A quick, honest comparison of how an IPTV service differs from traditional pay TV. Cable and satellite terms vary by company, so check your own provider for exact details.
            </p>
          </div>
          <div className="table-responsive table-stack">
            <table className="styled-table" aria-label="IPTV compared with cable and satellite TV">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="col-highlight">IPTVProvider8K</th>
                  <th scope="col">Cable TV</th>
                  <th scope="col">Satellite TV</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, iptv, cable, sat]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td data-label="IPTVProvider8K" className="col-highlight">{iptv}</td>
                    <td data-label="Cable TV">{cable}</td>
                    <td data-label="Satellite TV">{sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Plans preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Plans</span>
            <h2>IPTV Subscription Plans at a Glance</h2>
            <p>
              All plans include the same streams, program guide and support. Longer terms cost less per month, and you can add up to 4 screens on any duration.
            </p>
          </div>
          <div className="grid-3">
            <div className="card card-hover card-flex">
              <span className="badge badge-indigo">Quarterly</span>
              <h3 className="mt-6">3 Months</h3>
              <p className="price-value">$39.99</p>
              <p className="small mb-6">1 account. Up to 4 accounts for $99.99.</p>
              <Link href="/plans" className="btn btn-secondary btn-block push">Compare 3-Month Plans</Link>
            </div>
            <div className="card card-hover card-flex">
              <span className="badge badge-orange">Most Popular</span>
              <h3 className="mt-6">6 Months</h3>
              <p className="price-value text-brand">$56.99</p>
              <p className="small mb-6">1 account. Up to 4 accounts for $134.99.</p>
              <Link href="/plans" className="btn btn-primary btn-block push">Compare 6-Month Plans</Link>
            </div>
            <div className="card card-hover card-flex">
              <span className="badge badge-emerald">Best Value</span>
              <h3 className="mt-6">12 Months</h3>
              <p className="price-value">$79.99</p>
              <p className="small mb-6">1 account. Up to 4 accounts for $179.99.</p>
              <Link href="/plans" className="btn btn-secondary btn-block push">Compare 12-Month Plans</Link>
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
              alt="Setting up an IPTV player on an Amazon Fire TV Stick"
              width={640}
              height={400}
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>

          <div>
            <span className="section-tag">Setup Guides</span>
            <h2>Ready to Watch in About 5 Minutes</h2>
            <p className="mb-6">
              You don&apos;t need technical skills to set up IPTV. Our guides cover the devices most American homes use, with every menu name spelled out.
            </p>
            <ol className="step-list mb-6">
              <li>
                <strong>Pick your device</strong> — Firestick, Samsung TV, LG TV, Android TV or another supported device.
              </li>
              <li>
                <strong>Install a player app</strong> — IPTV Smarters Pro, TiviMate or XCIPTV.
              </li>
              <li>
                <strong>Sign in</strong> — enter your Xtream Codes login or paste your M3U link, and your channels load.
              </li>
            </ol>
            <p className="small muted mb-8">
              Before you start, check that your internet speed is at least 25 Mbps for 4K. A wired connection or 5 GHz Wi-Fi gives the most stable picture.
            </p>
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
            <span className="section-tag">FAQ</span>
            <h2>IPTV Service Questions, Answered</h2>
            <p>
              Straight answers about streaming quality, devices, screens and billing.
            </p>
          </div>

          <FaqAccordion items={homepageFaqs} withSchema={true} />
          <div className="center mt-10">
            <p className="muted small mb-6">
              Looking for more detail on speeds, devices or refunds?
            </p>
            <Link href="/faq" className="btn btn-secondary btn-sm">
              Read the Full FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start Streaming With IPTVProvider8K"
        text="Choose a plan, get your login by email, and watch on the devices you already own. Questions first? Message us on WhatsApp."
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
