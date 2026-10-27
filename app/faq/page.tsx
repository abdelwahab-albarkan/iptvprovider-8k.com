import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | IPTV Knowledgebase",
  description: "Get honest, verified answers about IPTV technology, legal compliance in the USA, bandwidth requirements for 8K/4K, device setups, and troubleshooting.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/faq",
  },
};

export default function FaqPage() {
  const generalFaqs = [
    {
      id: "gen-1",
      question: "What exactly is IPTV and how does it work?",
      answer: "IPTV stands for Internet Protocol Television. Instead of receiving television signals via traditional radio frequency broadcast, satellite dish, or coaxial cable television lines, television content is packetized and streamed over standard internet protocol networks directly to your digital media player."
    },
    {
      id: "gen-2",
      question: "Is using an IPTV service legal in the United States?",
      answer: "Yes, IPTV technology itself is completely legal in the United States and worldwide. Commercial telecom companies (such as AT&T U-verse and Verizon Fios) use IPTV protocols. Legality is defined by whether the service provider possesses the authorization to distribute the content. IPTVProvider8K is strictly committed to operating as an authorized digital transmission provider for licensed streams and open protocol endpoints."
    },
    {
      id: "gen-3",
      question: "How does IPTV compare to traditional cable or satellite packages?",
      answer: "IPTV eliminates expensive proprietary cable box rental fees, satellite dish installations on your roof, and rigid multi-year carrier contracts. You can stream across multiple rooms on consumer hardware you already own (such as a Fire TV Stick, Smart TV, or tablet) using pay-as-you-go terms."
    }
  ];

  const networkFaqs = [
    {
      id: "net-1",
      question: "What internet speed do I need for buffer-free 8K and 4K streaming?",
      answer: "For standard High Definition (1080p), a steady 12 Mbps connection is sufficient. For 4K Ultra HD at 60fps, we recommend a reliable download speed of 25 Mbps. For ultra-high bitrate 8K streams, 50+ Mbps with low jitter is strongly advised. We recommend connecting your streaming device to 5 GHz Wi-Fi or directly via wired Ethernet."
    },
    {
      id: "net-2",
      question: "Why do some IPTV streams freeze or loop, and how does your infrastructure prevent it?",
      answer: "Freezing typically happens when an offshore provider oversubscribes their servers or routes traffic through transatlantic bottlenecks. IPTVProvider8K utilizes distributed edge content delivery nodes (CDN) across the United States. If any single edge node experiences traffic spikes, automated load balancers immediately route your connection to an alternate low-latency node."
    },
    {
      id: "net-3",
      question: "Do I need a VPN to stream with IPTVProvider8K in America?",
      answer: "Our streams operate through secure SSL/TLS encrypted endpoints (port 443), which prevents standard ISP packet inspection and throttling. You are not required to use a VPN, but our service is fully compatible with reputable VPN providers if you prefer an additional layer of personal web privacy."
    }
  ];

  const deviceFaqs = [
    {
      id: "dev-1",
      question: "Which IPTV player app should I download first?",
      answer: "If you are using an Amazon Firestick or Android TV device, 'TiviMate IPTV Player' and 'IPTV Smarters Pro' are our top recommendations. For Samsung and LG Smart TVs, install 'IPTV Smarters Pro' or 'IBO Player' directly from the TV manufacturer app store."
    },
    {
      id: "dev-2",
      question: "Can I watch on multiple televisions at the exact same time?",
      answer: "Yes! We offer 1, 2, 3, and 4 Account subscription tiers across 3, 6, and 12-month terms. A 1 Account plan allows 1 active stream at a time, while our 2, 3, and 4 Account plans permit simultaneous streaming on multiple televisions and mobile screens throughout your household."
    },
    {
      id: "dev-3",
      question: "What is the difference between an M3U link and Xtream Codes API?",
      answer: "Both methods connect your player to our servers. An M3U link is a direct web URL that downloads your channel list. The Xtream Codes API method requires three simple fields: Server URL, Username, and Password. We recommend Xtream Codes API because it enables faster channel loading, automatic Electronic Program Guide (EPG) synchronization, and organized VOD categories."
    }
  ];

  const billingFaqs = [
    {
      id: "bill-1",
      question: "How quickly will I receive my streaming credentials after ordering?",
      answer: "Once your subscription request is processed, your personalized M3U playlist link and Xtream Codes API login credentials are sent to your registered email address typically within 15 to 45 minutes, along with comprehensive device setup guides."
    },
    {
      id: "bill-2",
      question: "Will my card be charged automatically every month?",
      answer: "No. We operate strictly on a prepaid term model. You choose your duration (3, 6, or 12 months). When your term approaches expiration, we send a courtesy reminder email. We will never charge your card without your explicit renewal authorization."
    },
    {
      id: "bill-3",
      question: "What is your refund policy?",
      answer: "We offer technical support to resolve any hardware setup or connection challenges. If our service cannot be successfully configured on your supported device due to a technical server defect, refunds are handled in accordance with our transparent Refund Policy within our evaluation period."
    }
  ];

  return (
    <div className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

        {/* Hero Section */}
        <div style={{ maxWidth: "860px", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span className="badge badge-orange">Knowledgebase & Help Hub</span>
            <span className="badge badge-emerald">Verified Answers</span>
          </div>

          <h1>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>

          <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
            Find transparent, technically accurate answers about IPTV protocols, device compatibility, network requirements, and account management.
          </p>
        </div>

        {/* Categories */}
        <div style={{ maxWidth: "840px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {/* General & Legal */}
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--bg-orange-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-orange-dark)"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>General & Technology</h2>
            </div>
            <FaqAccordion items={generalFaqs} withSchema={true} />
          </section>

          {/* Network & Performance */}
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "rgba(16, 185, 129, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-emerald)"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <line x1="12" y1="20" x2="12.01" y2="20" />
                </svg>
              </div>
              <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Bandwidth & Network Performance</h2>
            </div>
            <FaqAccordion items={networkFaqs} withSchema={true} />
          </section>

          {/* Devices & Players */}
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--bg-orange-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-orange-dark)"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
              </div>
              <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Devices & Setup Applications</h2>
            </div>
            <FaqAccordion items={deviceFaqs} withSchema={true} />
          </section>

          {/* Billing & Plans */}
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--bg-orange-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-orange-dark)"
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Billing, Ordering & Refunds</h2>
            </div>
            <FaqAccordion items={billingFaqs} withSchema={true} />
          </section>
        </div>

        {/* Contact Support Prompt */}
        <div style={{ marginTop: "4.5rem", textAlign: "center", padding: "3rem 1.5rem", background: "var(--bg-orange-soft)", borderRadius: "16px", border: "1px solid var(--border-highlight)" }}>
          <h2 style={{ fontSize: "1.85rem", marginBottom: "0.75rem" }}>Still Have Unanswered Questions?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 1.75rem auto", color: "var(--text-secondary)" }}>
            Our customer service and technical support specialists are available via WhatsApp, phone, and email to answer your inquiries.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Submit a Support Ticket
            </Link>
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp (+212625218443)
            </a>
            <a href="mailto:support@streamb4.com" className="btn btn-secondary">
              Email: support@streamb4.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
