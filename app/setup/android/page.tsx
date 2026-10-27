import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "How to Setup IPTV on Android TV & Shield | Step-by-Step Guide",
  description: "Learn how to configure IPTV on Android TV, NVIDIA Shield, and Google TV devices. Instructions for TiviMate, IPTV Smarters, and XCIPTV installation.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/setup/android",
  },
};

export default function AndroidSetupPage() {
  const androidFaqs = [
    {
      id: "and-1",
      question: "Why is TiviMate considered the best IPTV player on Android TV and NVIDIA Shield?",
      answer: "TiviMate was engineered specifically for Android TV OS. It features hardware-accelerated playback, multi-screen quad-viewing (watching up to 4 live sports games simultaneously), instant channel switching, customizable category grouping, and robust catch-up TV support."
    },
    {
      id: "and-2",
      question: "Can I use IPTVProvider8K on Android smartphones and tablets?",
      answer: "Yes. Simply download IPTV Smarters Pro, XCIPTV, or Televizo from the Google Play Store on your Android phone or tablet. Enter your Xtream Codes API credentials and you can stream over mobile Wi-Fi or cellular data."
    },
    {
      id: "and-3",
      question: "How do I configure surround sound on NVIDIA Shield TV?",
      answer: "Inside your Android TV IPTV player settings, navigate to Audio Decoder and enable 'Audio Passthrough' (bitstream). This sends raw Dolby Digital (AC3) or DTS audio to your AV receiver or soundbar without downmixing to stereo."
    },
    {
      id: "and-4",
      question: "What should I do if the Google Play Store says an IPTV app is not available?",
      answer: "Android allows you to sideload APK files safely. You can use the Downloader app or transfer the official APK file via a USB flash drive or local network share using a file manager app like 'X-plore'."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Open the Google Play Store on Your Android TV",
      desc: "From your Android TV, Google TV, or NVIDIA Shield home screen, launch the official Google Play Store application."
    },
    {
      num: "02",
      title: "Search & Install 'TiviMate IPTV Player' or 'IPTV Smarters Pro'",
      desc: "Use voice search or the on-screen keyboard to search for 'TiviMate IPTV Player' or 'IPTV Smarters Pro'. Click 'Install'. Both applications are verified and hosted directly on the official Google Play Store."
    },
    {
      num: "03",
      title: "Launch & Add New Playlist",
      desc: "Open the application. Click 'Add Playlist'. Select 'Xtream Codes' as your playlist type. This protocol provides the fastest channel synchronization and automatic EPG updating."
    },
    {
      num: "04",
      title: "Enter Your IPTVProvider8K Connection Details",
      desc: "Input your Server URL, Username, and Password exactly as provided in your subscription activation confirmation. Click 'Next' or 'Login'."
    },
    {
      num: "05",
      title: "Optimize Video & Audio Decoder Settings",
      desc: "In settings, verify that 'Hardware' decoding is selected. On devices with high-performance processors like the NVIDIA Shield TV, you can also enable AI upscaling in the system settings for enhanced 1080p-to-4K clarity."
    }
  ];

  return (
    <div className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Supported Devices", href: "/devices" },
            { label: "Android TV Setup Guide" }
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
              <span className="badge badge-orange">Android TV & Google TV Tutorial</span>
              <span className="badge badge-emerald">NVIDIA Shield Compatible</span>
            </div>

            <h1>
              How to Setup IPTV on <span className="text-gradient">Android TV</span> & NVIDIA Shield
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
              Android TV and NVIDIA Shield hardware offer the most powerful, flexible IPTV experience available today. Follow our tutorial to install TiviMate or IPTV Smarters Pro with full 8K and 4K 60fps hardware acceleration.
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
              src="/images/iptv-android-tv-setup.jpg"
              alt="Android TV and Google TV IPTV Setup"
              width={640}
              height={400}
              priority
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "4.5rem" }}>
          {steps.map((step) => (
            <div key={step.num} className="card card-glow" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "1.5rem" }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "var(--gradient-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  fontWeight: "800",
                  color: "#ffffff",
                  flexShrink: 0
                }}>
                  {step.num}
                </div>
                <div style={{ flex: "1 1 200px", minWidth: 0 }}>
                  <h2 style={{ fontSize: "1.35rem", marginBottom: "0.6rem", color: "var(--text-primary)" }}>
                    {step.title}
                  </h2>
                  <p style={{ color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "0.975rem" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
            <span className="section-tag">Dashboard Overview</span>
            <h3>Modern Google TV & Android Interface</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              Once configured, your playlists load with rich graphical program guides, category browsing, and high-bitrate live video playback.
            </p>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Supports voice dictation, favorite lists, and external player integration.
            </div>
          </div>
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
            <Image
              src="/images/iptv-google-tv-dashboard.jpg"
              alt="Google TV IPTV Application Dashboard"
              width={560}
              height={340}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="card" style={{ padding: "2.5rem", background: "var(--bg-orange-soft)", borderColor: "var(--border-highlight)", marginBottom: "4.5rem" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
            Advanced Tips for NVIDIA Shield TV & High-End Android Boxes
          </h2>
          <div className="grid-3" style={{ marginTop: "1.5rem" }}>
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>NVIDIA AI Upscaling</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Enable &apos;AI-Enhanced&apos; upscaling on NVIDIA Shield TV Pro. It dynamically sharpens 1080p 60fps sports broadcasts in real time, making them look near-native 4K on high-resolution displays.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Multi-Screen Viewing</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Using TiviMate on Android TV, hold down the Select button during playback and choose &apos;Multi-View&apos;. You can watch 2, 3, or 4 live games side-by-side simultaneously (requires multi-connection account).
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Auto Frame Rate (AFR)</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Enable &apos;Auto Frame Rate Matching&apos; in TiviMate settings. Your TV will automatically switch refresh rate between 24Hz, 50Hz, and 60Hz to match the source video exactly, eliminating frame jitter.
              </p>
            </div>
          </div>
        </div>

        {/* Android FAQ */}
        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <div className="section-header">
            <span className="section-tag">Android FAQ</span>
            <h2>Common Android TV Questions</h2>
          </div>
          <FaqAccordion items={androidFaqs} withSchema={true} />
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", background: "var(--bg-orange-soft)", borderRadius: "16px", border: "1px solid var(--border-highlight)" }}>
          <h2 style={{ fontSize: "1.85rem", marginBottom: "0.75rem" }}>Ready to Experience High-Bitrate Android Streaming?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 1.75rem auto", color: "var(--text-secondary)" }}>
            Select a subscription plan and unlock high-definition live television on your Android TV or NVIDIA Shield.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/plans" className="btn btn-primary">
              Choose a Subscription Plan
            </Link>
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Help (+212625218443)
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
