import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Customer Support | IPTV Technical Assistance Desk",
  description: "Get in touch with IPTVProvider8K technical support via WhatsApp, phone, or email. Fast assistance for device activation, M3U playlist configuration, and troubleshooting.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Breadcrumbs items={[{ label: "Contact Customer Support" }]} />

        {/* Page Header */}
        <div style={{ maxWidth: "860px", marginBottom: "3rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span className="badge badge-orange">Customer Support Desk</span>
            <span className="badge badge-emerald">Active Assistance</span>
          </div>

          <h1>
            Contact <span className="text-gradient">Customer Support</span> & Technical Assistance
          </h1>

          <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
            Have a question about device setup, subscription activation, or streaming bandwidth? Reach out to our technical team directly via WhatsApp, phone, email, or our inquiry form.
          </p>
        </div>

        {/* 3 Direct Quick-Contact Cards */}
        <div className="grid-3" style={{ marginBottom: "3.5rem" }}>
          {/* WhatsApp Card */}
          <div className="card" style={{ padding: "1.75rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "#dcfce7",
              color: "#16a34a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem"
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>WhatsApp Direct</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
              Instant chat support for device setup, M3U links & quick inquiries.
            </p>
            <a
              href="https://wa.me/212625218443"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Chat on WhatsApp (+212625218443)
            </a>
          </div>

          {/* Phone Card */}
          <div className="card" style={{ padding: "1.75rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "var(--bg-orange-soft)",
              color: "var(--accent-orange-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem"
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>Phone Assistance</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
              Direct phone hotline for urgent activation and technical queries.
            </p>
            <a
              href="tel:+212625218443"
              className="btn btn-secondary btn-sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Call +212625218443
            </a>
          </div>

          {/* Email Card */}
          <div className="card" style={{ padding: "1.75rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "var(--bg-orange-soft)",
              color: "var(--accent-orange-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem"
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.4rem" }}>Email Support</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
              Send detailed technical logs, subscription questions, or account requests.
            </p>
            <a
              href="mailto:support@streamb4.com"
              className="btn btn-primary btn-sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              support@streamb4.com
            </a>
          </div>
        </div>

        {/* Contact Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "start", marginBottom: "4.5rem" }}>
          {/* Form Column */}
          <div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Send a Support Inquiry</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Fill in your hardware details and message below. We will respond promptly with step-by-step guidance.
            </p>
            <ContactForm />
          </div>

          {/* Details & Info Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                Support Hours & Availability
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.925rem" }}>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block" }}>Business Hours:</strong>
                  <span style={{ color: "var(--text-secondary)" }}>Monday – Friday: 9:00 AM – 8:00 PM EST</span><br />
                  <span style={{ color: "var(--text-secondary)" }}>Saturday & Sunday: 10:00 AM – 6:00 PM EST</span>
                </div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block" }}>Average Response Time:</strong>
                  <span style={{ color: "var(--accent-emerald)", fontWeight: "600" }}>2 to 4 business hours</span>
                </div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block" }}>Urgent Connection Failures:</strong>
                  <span style={{ color: "var(--text-secondary)" }}>Monitored 24/7 by our network operations center.</span>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                Immediate Self-Service Guides
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
                Many configuration questions can be resolved immediately with our visual walkthroughs:
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.95rem" }}>
                <li>
                  <Link href="/setup/firestick" style={{ color: "var(--accent-orange-dark)", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    &rarr; Amazon Firestick Installation Guide
                  </Link>
                </li>
                <li>
                  <Link href="/setup/smart-tv" style={{ color: "var(--accent-orange-dark)", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    &rarr; Samsung & LG Smart TV Setup Guide
                  </Link>
                </li>
                <li>
                  <Link href="/setup/android" style={{ color: "var(--accent-orange-dark)", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    &rarr; Android TV & Shield TV Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" style={{ color: "var(--accent-orange-dark)", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    &rarr; Frequently Asked Questions & FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="notice-box">
              <strong style={{ display: "block", marginBottom: "0.35rem", color: "var(--accent-orange-dark)" }}>Verified Support Coordinates:</strong>
              For all customer service and setup requests, use official telephone/WhatsApp: <a href="tel:+212625218443" style={{ color: "var(--accent-orange-dark)", fontWeight: "600" }}>+212625218443</a>, WhatsApp: <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-orange-dark)", fontWeight: "600" }}>wa.me/212625218443</a>, or email: <a href="mailto:support@streamb4.com" style={{ color: "var(--accent-orange-dark)", fontWeight: "600" }}>support@streamb4.com</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
