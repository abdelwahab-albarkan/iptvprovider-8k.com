import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "How to Setup IPTV on Smart TVs (Samsung & LG) | Complete Guide",
  description: "Step-by-step tutorial on installing IPTV on Samsung Tizen and LG webOS Smart TVs. Learn how to configure IPTV Smarters Pro and optimize 4K playback.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/setup/smart-tv",
  },
};

export default function SmartTvSetupPage() {
  const smartTvFaqs = [
    {
      id: "tv-1",
      question: "Can I install IPTV Smarters Pro directly from the Samsung TV App Store?",
      answer: "Yes. On most Samsung Smart TVs manufactured from 2018 onwards (running Tizen OS), you can open the official Samsung App Store, search for 'IPTV Smarters Pro' or 'Smarters Player Lite', and download it directly without sideloading or USB sticks."
    },
    {
      id: "tv-2",
      question: "What should I do if IPTV Smarters is not available in my LG Content Store region?",
      answer: "If IPTV Smarters is restricted by your television's regional storefront, alternative verified player applications available in the LG Content Store include 'IBO Player', 'Nanomid Player', and 'Smart STB'. All of these support M3U and Xtream Codes API."
    },
    {
      id: "tv-3",
      question: "Why do high-bitrate 4K streams occasionally stutter on Smart TVs?",
      answer: "Built-in smart TV processors have limited memory compared to dedicated streaming hardware like the Apple TV or Firestick 4K Max. To ensure smooth playback, connect your TV via 5 GHz Wi-Fi or wired Ethernet, clear other background TV apps, and set your IPTV player buffer size to 'Medium' or '3 seconds'."
    },
    {
      id: "tv-4",
      question: "Does configuring IPTV on a Smart TV void the manufacturer warranty?",
      answer: "No. You are simply downloading an authorized media player application from the official Samsung or LG TV app store. It has zero impact on your manufacturer hardware warranty."
    }
  ];

  return (
    <div className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Supported Devices", href: "/devices" },
            { label: "Smart TV Setup Guide" }
          ]}
        />

        {/* Hero Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "center",
          marginBottom: "3.5rem"
        }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span className="badge badge-orange">Samsung Tizen & LG webOS Guide</span>
              <span className="badge badge-emerald">Direct App Store Playback</span>
            </div>

            <h1>
              How to Setup IPTV on <span className="text-gradient">Smart TVs</span> (Samsung & LG)
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
              Enjoy seamless television streaming directly on your smart TV without external cables, dongles, or second remotes. Follow our step-by-step instructions for Samsung (Tizen OS) and LG (webOS) televisions.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.75rem" }}>
              <Link href="/plans" className="btn btn-primary">
                View Subscription Plans
              </Link>
              <a
                href="https://wa.me/212625218443"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp Support (+212625218443)
              </a>
            </div>
          </div>

          {/* Visual Showcase */}
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-md)"
          }}>
            <Image
              src="/images/iptv-samsung-tv-setup.jpg"
              alt="Samsung Smart TV IPTV Setup"
              width={640}
              height={400}
              priority
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Platform Specific Guides Grid */}
        <div className="grid-2" style={{ marginBottom: "4.5rem" }}>
          {/* Samsung TV Guide */}
          <div className="card card-glow" style={{ padding: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "var(--bg-orange-soft)",
                border: "1px solid var(--border-highlight)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-orange-dark)",
                fontWeight: "800",
                fontSize: "1.1rem"
              }}>
                S
              </div>
              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--text-primary)" }}>Samsung Smart TV (Tizen)</h2>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Models 2018 to Present</span>
              </div>
            </div>

            <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>1.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Open Samsung App Store:</strong> Press the Smart Hub button on your Samsung remote and navigate to &apos;Apps&apos;.
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>2.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Search for Player:</strong> Search for &apos;IPTV Smarters Pro&apos; or &apos;Smarters Player Lite&apos;. Click &apos;Install&apos;.
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>3.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Open & Accept Terms:</strong> Launch the installed application and accept the standard software license agreement.
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>4.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Login via Xtream API:</strong> Select &apos;Login with Xtream Codes API&apos;. Enter your username, password, and the server URL provided by IPTVProvider8K.
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>5.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Load Channels:</strong> Click &apos;Add User&apos;. Your live categories, EPG TV guide, and video streams will populate automatically.
                </div>
              </li>
            </ol>
          </div>

          {/* LG TV Guide */}
          <div className="card card-glow" style={{ padding: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "var(--bg-orange-soft)",
                border: "1px solid var(--border-highlight)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-orange-dark)",
                fontWeight: "800",
                fontSize: "1.1rem"
              }}>
                LG
              </div>
              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--text-primary)" }}>LG Smart TV (webOS)</h2>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>webOS 3.5 to webOS 23</span>
              </div>
            </div>

            <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>1.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Launch LG Content Store:</strong> Press the Home button on your LG Magic Remote and select the &apos;LG Content Store&apos;.
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>2.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Locate IPTV App:</strong> Search for &apos;IPTV Smarters Pro&apos; or &apos;IBO Player&apos;. Click &apos;Install&apos;.
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>3.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Select Connection Type:</strong> If using IPTV Smarters, choose &apos;Xtream Codes API&apos;. If using IBO Player, note the Device MAC address displayed on the screen.
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>4.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Configure Playlist:</strong> Input your assigned IPTVProvider8K streaming credentials or provide your MAC to our support team for automatic provisioning.
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>5.</span>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>Enjoy Big-Screen TV:</strong> Navigate using the LG Magic Remote pointer to easily select sports, news, and cinema channels.
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Supporting Visual Step */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
          alignItems: "center",
          marginBottom: "4.5rem",
          padding: "2rem",
          background: "var(--bg-secondary)",
          borderRadius: "16px",
          border: "1px solid var(--border-subtle)"
        }}>
          <div>
            <span className="section-tag">Direct App Store</span>
            <h3>Finding the App on Samsung Tizen</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              Simply navigate to the search bar within your television&apos;s app store. The application installs in seconds and requires no external storage or side-loading USB devices.
            </p>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Compatible with standard Samsung Smart Remote and voice search.
            </div>
          </div>
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
            <Image
              src="/images/iptv-samsung-app-store.jpg"
              alt="Samsung Smart TV App Store Search for IPTV Smarters"
              width={560}
              height={340}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Smart TV Performance Optimization Advice */}
        <div className="card" style={{ padding: "2.5rem", background: "var(--bg-orange-soft)", borderColor: "var(--border-highlight)", marginBottom: "4.5rem" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
            Performance Optimization Tips for Smart TV Streaming
          </h2>
          <div className="grid-3" style={{ marginTop: "1.5rem" }}>
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Prefer 5 GHz Wi-Fi</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Older 2.4 GHz Wi-Fi channels are heavily congested in residential buildings. Connect your television to your router&apos;s 5 GHz band for reliable 25+ Mbps throughput required for 4K.
              </p>
            </div>
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Adjust Stream Buffer</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Inside IPTV Smarters settings, navigate to &apos;Player Settings&apos; and adjust the buffer size to 2–3 seconds. This buffers sufficient frames to withstand brief Wi-Fi latency spikes.
              </p>
            </div>
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Reboot Periodically</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Smart TVs run background tasks that accumulate RAM usage. Holding down the Power button on your remote for 5 seconds triggers a full cold reboot and purges cached system memory.
              </p>
            </div>
          </div>
        </div>

        {/* Smart TV FAQ */}
        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <div className="section-header">
            <span className="section-tag">Smart TV Inquiries</span>
            <h2>Frequently Asked Questions: Smart TV IPTV</h2>
          </div>
          <FaqAccordion items={smartTvFaqs} withSchema={true} />
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", background: "var(--bg-orange-soft)", borderRadius: "16px", border: "1px solid var(--border-highlight)" }}>
          <h2 style={{ fontSize: "1.85rem", marginBottom: "0.75rem" }}>Have Questions About Your Television Model?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 1.75rem auto", color: "var(--text-secondary)" }}>
            Our setup specialists are ready to help you configure your specific Samsung or LG model.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
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
