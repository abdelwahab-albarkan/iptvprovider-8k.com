import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | IPTVProvider8K Data Protection Disclosures",
  description: "Read the IPTVProvider8K Privacy Policy. Learn how we handle customer data, zero viewing log policies, cookies, and your US privacy rights.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="badge badge-orange" style={{ marginBottom: "1rem" }}>Data Protection Notice</span>
            <h1>Privacy Policy</h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Effective Date: {lastUpdated} | Domain: <a href="https://iptvprovider-8k.com" style={{ color: "var(--accent-orange-dark)" }}>iptvprovider-8k.com</a>
            </p>
          </div>

          <div className="card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "2rem", lineHeight: "1.8" }}>
            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                1. Privacy Commitments & Media Transmission Disclosures
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                At IPTVProvider8K, we do not compile behavioral advertising profiles or sell consumer entertainment data to commercial marketing brokers. Our server endpoints function as digital media transmission pipelines. Like all network infrastructure, ephemeral operational connection logs (such as connecting IP addresses and stream session timestamps) are generated for essential system diagnostics, abuse mitigation, and billing concurrency verification.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                2. Information We Collect
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
                We collect only the minimal data strictly necessary to provision and maintain your subscription:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", color: "var(--text-secondary)" }}>
                <li><strong>Contact Information:</strong> Your email address to deliver your streaming credentials, password resets, and critical network announcements.</li>
                <li><strong>Transaction Records:</strong> Payment gateway transaction IDs and confirmation status. We do not store credit card numbers directly on our servers; all payment processing is handled by PCI-DSS compliant third-party payment gateways.</li>
                <li><strong>Technical Session Diagnostics:</strong> Ephemeral server connection timestamps, active connection count (to enforce single or multi-screen subscription concurrency), and bandwidth metrics to prevent network congestion.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                3. Use of Cookies & Web Analytics
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                We use minimal, privacy-conscious functional cookies to ensure page security and remember site preferences. We do not engage in third-party behavioral advertising networks or sell personal data to data brokers.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                4. Data Protection & Security Controls
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                All web traffic and stream delivery endpoints are protected using modern TLS 1.3 encryption. Access to account management databases is restricted to authorized systems administrators using multi-factor authentication.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                5. United States Privacy Rights (CCPA / CPRA / VCDPA)
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                If you are a resident of California, Virginia, or other US jurisdictions with applicable state privacy statutes, you possess the right to:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                <li>Request access to the personal data we maintain about your account.</li>
                <li>Request permanent deletion of your personal data upon cancellation of service.</li>
                <li>Opt out of the sale or sharing of personal data (IPTVProvider8K does not sell customer personal data).</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                6. Contact for Privacy Inquiries
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                To exercise your privacy rights or submit inquiries regarding our data handling procedures, please contact our privacy compliance desk directly at <a href="mailto:support@streamb4.com" style={{ color: "var(--accent-orange-dark)", fontWeight: "600" }}>support@streamb4.com</a> or through our <Link href="/contact" style={{ color: "var(--accent-orange-dark)", fontWeight: "600" }}>Customer Support Desk</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
