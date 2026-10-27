import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "How to Setup IPTV on Amazon Firestick | Step-by-Step Guide",
  description: "Learn how to configure IPTV on Amazon Fire TV Stick & Cube. Complete tutorial covering Downloader installation, IPTV Smarters / TiviMate setup, and remote navigation.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/setup/firestick",
  },
};

export default function FirestickSetupPage() {
  const firestickFaqs = [
    {
      id: "fs-1",
      question: "Which player application is best for the Amazon Firestick?",
      answer: "TiviMate IPTV Player and IPTV Smarters Pro are the two most dependable applications for Fire TV. TiviMate offers an intuitive, cable-like Electronic Program Guide, while IPTV Smarters Pro is straightforward to configure using Xtream Codes API."
    },
    {
      id: "fs-2",
      question: "How do I use the search function with a Firestick remote?",
      answer: "In applications like IPTV Smarters or TiviMate, press the top or menu button on your Fire TV remote to highlight the magnifying glass (Search) icon. You can either use the on-screen virtual keyboard or use the Alexa voice button to dictate channel and program names directly."
    },
    {
      id: "fs-3",
      question: "My Firestick is buffering or freezing. How do I fix it?",
      answer: "Go to Fire TV Settings > Applications > Manage Installed Applications > select your IPTV player > Clear Cache (do not click clear data). Also, restart your Fire TV Stick by holding down the Select and Play/Pause buttons simultaneously for 5 seconds."
    },
    {
      id: "fs-4",
      question: "Do I need to keep the Downloader app after installing my player?",
      answer: "You can keep Downloader installed for future app updates. Once your IPTV player is installed and configured, you only need to open your player app for daily viewing."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Install the Official Downloader Utility",
      desc: "From your Firestick Home Screen, navigate to 'Find' > 'Search'. Type 'Downloader' and select the official orange Downloader app icon by AFTVnews from the Amazon Appstore. Click 'Get' or 'Download' to install it."
    },
    {
      num: "02",
      title: "Grant Downloader Installation Permissions",
      desc: "Go to Fire TV 'Settings' (gear icon) > 'My Fire TV' > 'Developer Options' > 'Install unknown apps'. Locate 'Downloader' in the list and toggle the permission to 'ON'. (Note: If Developer Options is hidden on newer Fire OS updates, go to Settings > My Fire TV > About, and click your device name 7 times rapidly until it says 'No need, you are already a developer')."
    },
    {
      num: "03",
      title: "Download Your Preferred IPTV Player",
      desc: "Open the Downloader app and enter the official installation code or URL for your chosen player (e.g. IPTV Smarters Pro or TiviMate). Once the APK finishes downloading, click 'Install' and then click 'Done'. You can delete the installation file to save precious Firestick storage."
    },
    {
      num: "04",
      title: "Input Your Subscription Credentials",
      desc: "Launch your IPTV player. Select 'Login with Xtream Codes API' (recommended for stability) or 'Load Your Playlist or File/URL'. Enter your Name, the Username and Password provided in your IPTVProvider8K welcome email, and the secure Server URL."
    },
    {
      num: "05",
      title: "Configure Decoder & Sync Electronic Program Guide (EPG)",
      desc: "In your player settings, select Video Player / Decoder and ensure 'Hardware' or 'Hardware+' is chosen for optimal 4K/8K 60fps decoding. Click 'Refresh EPG' to load full channel schedules and start streaming."
    }
  ];

  return (
    <div className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Supported Devices", href: "/devices" },
            { label: "Firestick Setup Guide" }
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
              <span className="badge badge-orange">Amazon Fire TV Tutorial</span>
              <span className="badge badge-emerald">Verified for Fire OS 6, 7 & 8</span>
            </div>

            <h1>
              How to Setup IPTV on <span className="text-gradient">Amazon Firestick</span>
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
              Follow our verified, original walkthrough to configure IPTV on any Amazon Fire TV device (Firestick 4K, 4K Max, Fire TV Cube, or Fire TV Edition television). Total configuration time is approximately 4 to 6 minutes.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.75rem" }}>
              <Link href="/plans" className="btn btn-primary">
                Get an IPTV Subscription
              </Link>
              <a
                href="https://wa.me/212625218443"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Instant WhatsApp Setup Help
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
              src="/images/iptv-fire-tv-stick.jpg"
              alt="Amazon Fire TV Stick configuration interface"
              width={640}
              height={400}
              priority
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Step-by-Step Cards */}
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

        {/* Remote Control Navigation & Search Tips */}
        <div className="card" style={{ padding: "2.5rem", background: "var(--bg-orange-soft)", borderColor: "var(--border-highlight)", marginBottom: "4.5rem" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
            Mastering Firestick Remote Navigation & Search Functionality
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            A common challenge for new IPTV users is locating specific channels across thousands of categories. Here is how to navigate efficiently using your standard Amazon remote:
          </p>

          <div className="grid-3">
            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Universal Search</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Click the Search (Magnifying Glass) icon at the top of your player. Enter keywords (e.g. &apos;ESPN&apos;, &apos;HBO&apos;, or team names) to search across all live channels and on-demand titles simultaneously.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Favorites Quick-Tag</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                While hovering over any channel, press and hold the center Select button or press the Options button (three horizontal lines) to add it to your &apos;Favorites&apos; category for instant 1-click access.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ color: "var(--accent-orange-dark)", marginBottom: "0.5rem" }}>Audio & Subtitles</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                During live playback, press the Options button on your Fire TV remote to toggle alternate audio languages, surround sound feeds, or closed captions.
              </p>
            </div>
          </div>
        </div>

        {/* Firestick FAQ */}
        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <div className="section-header">
            <span className="section-tag">Firestick FAQ</span>
            <h2>Common Firestick Questions & Diagnostics</h2>
          </div>
          <FaqAccordion items={firestickFaqs} withSchema={true} />
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "3rem 1.5rem", background: "var(--bg-orange-soft)", borderRadius: "16px", border: "1px solid var(--border-highlight)" }}>
          <h2 style={{ fontSize: "1.85rem", marginBottom: "0.75rem" }}>Need Assistance with Your Firestick?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 1.75rem auto", color: "var(--text-secondary)" }}>
            Our technical support team is standing by to provide connection URLs, troubleshooting, and activation assistance.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Support (+212625218443)
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
