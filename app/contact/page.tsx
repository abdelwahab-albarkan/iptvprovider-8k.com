import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
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
    <>
      <PageHero
        crumbs={[{ label: "Contact Customer Support" }]}
        badges={
          <>
            <span className="badge badge-orange">Customer Support Desk</span>
            <span className="badge badge-emerald">Active Assistance</span>
          </>
        }
        title={
          <>
            Contact <span className="text-gradient">Customer Support</span> &amp; Technical Assistance
          </>
        }
        lead="Have a question about device setup, subscription activation, or streaming bandwidth? Reach out to our technical team directly via WhatsApp, phone, email, or our inquiry form."
      />

      {/* 3 Direct Quick-Contact Cards */}
      <section className="section section-tight section-alt">
        <div className="container">
          <div className="grid-3">
            {/* WhatsApp Card */}
            <div className="card card-hover contact-card">
              <span className="icon-box whatsapp lg round">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <h3>WhatsApp Direct</h3>
              <p>Instant chat support for device setup, M3U links &amp; quick inquiries.</p>
              <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                Chat on WhatsApp (+212625218443)
              </a>
            </div>

            {/* Phone Card */}
            <div className="card card-hover contact-card">
              <span className="icon-box lg round">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <h3>Phone Assistance</h3>
              <p>Direct phone hotline for urgent activation and technical queries.</p>
              <a href="tel:+212625218443" className="btn btn-secondary btn-sm">
                Call +212625218443
              </a>
            </div>

            {/* Email Card */}
            <div className="card card-hover contact-card">
              <span className="icon-box lg round">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <h3>Email Support</h3>
              <p>Send detailed technical logs, subscription questions, or account requests.</p>
              <a href="mailto:support@streamb4.com" className="btn btn-primary btn-sm">
                support@streamb4.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="section">
        <div className="container split top">
          {/* Form Column */}
          <div>
            <h2>Send a Support Inquiry</h2>
            <p className="mb-6">
              Fill in your hardware details and message below. We will respond promptly with step-by-step guidance.
            </p>
            <ContactForm />
          </div>

          {/* Details & Info Column */}
          <div className="stack">
            <div className="card card-lg">
              <h3>Support Hours &amp; Availability</h3>
              <div className="kv-list">
                <div>
                  <strong>Business Hours:</strong>
                  <br />
                  Monday – Friday: 9:00 AM – 8:00 PM EST
                  <br />
                  Saturday &amp; Sunday: 10:00 AM – 6:00 PM EST
                </div>
                <div>
                  <strong>Average Response Time:</strong>
                  <br />
                  <strong className="text-success">2 to 4 business hours</strong>
                </div>
                <div>
                  <strong>Urgent Connection Failures:</strong>
                  <br />
                  Monitored 24/7 by our network operations center.
                </div>
              </div>
            </div>

            <div className="card card-lg">
              <h3>Immediate Self-Service Guides</h3>
              <p className="small mb-6">
                Many configuration questions can be resolved immediately with our visual walkthroughs:
              </p>
              <ul className="link-list">
                <li>
                  <Link href="/setup/firestick">&rarr; Amazon Firestick Installation Guide</Link>
                </li>
                <li>
                  <Link href="/setup/smart-tv">&rarr; Samsung &amp; LG Smart TV Setup Guide</Link>
                </li>
                <li>
                  <Link href="/setup/android">&rarr; Android TV &amp; Shield TV Guide</Link>
                </li>
                <li>
                  <Link href="/faq">&rarr; Frequently Asked Questions &amp; FAQ</Link>
                </li>
              </ul>
            </div>

            <div className="notice-box">
              <strong className="notice-title">Verified Support Coordinates:</strong>
              For all customer service and setup requests, use official telephone/WhatsApp: <a href="tel:+212625218443">+212625218443</a>, WhatsApp: <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer">wa.me/212625218443</a>, or email: <a href="mailto:support@streamb4.com">support@streamb4.com</a>.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
