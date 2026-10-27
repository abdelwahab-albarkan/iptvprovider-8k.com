import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2026;

  const paymentBadges = [
    { name: "Visa", src: "/images/payments/visa.webp", width: 44, height: 28 },
    { name: "Mastercard", src: "/images/payments/mastercard.webp", width: 44, height: 28 },
    { name: "PayPal", src: "/images/payments/paypal.png", width: 44, height: 28 },
    { name: "Apple Pay", src: "/images/payments/apple-pay.webp", width: 44, height: 28 },
    { name: "Google Pay", src: "/images/payments/google-pay.png", width: 44, height: 28 },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem"
        }}>
          {/* Brand Column */}
          <div style={{ maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                background: "var(--gradient-brand)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "0.95rem",
                color: "#ffffff"
              }}>
                8K
              </div>
              <span style={{ fontWeight: "800", fontSize: "1.15rem", letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
                IPTVProvider<span style={{ color: "var(--accent-orange-dark)" }}>8K</span>
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.25rem", lineHeight: "1.6" }}>
              High-performance IPTV streaming infrastructure tailored for United States viewers. Compatible with 8K, 4K UHD, and FHD playback on smart TVs, Fire TV, and Android hardware.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.75rem", borderRadius: "9999px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)" }}>
              <span className="status-dot" />
              <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "#047857" }}>
                US Streaming CDN: Active
              </span>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h4 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-primary)", marginBottom: "1.25rem" }}>
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link href="/" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  IPTV Service Overview
                </Link>
              </li>
              <li>
                <Link href="/iptv-usa" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  IPTV USA Network
                </Link>
              </li>
              <li>
                <Link href="/plans" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/devices" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Supported Devices
                </Link>
              </li>
            </ul>
          </div>

          {/* Setup Tutorials */}
          <div>
            <h4 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-primary)", marginBottom: "1.25rem" }}>
              Device Setup
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link href="/setup/firestick" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Amazon Firestick Setup
                </Link>
              </li>
              <li>
                <Link href="/setup/smart-tv" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Samsung & LG Smart TV
                </Link>
              </li>
              <li>
                <Link href="/setup/android" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Android TV & Box Guide
                </Link>
              </li>
              <li>
                <Link href="/devices" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Hardware Requirements
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div>
            <h4 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-primary)", marginBottom: "1.25rem" }}>
              Direct Support
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.9rem" }}>
              <li>
                <a
                  href="https://wa.me/212625218443"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#047857", fontWeight: "600" }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "#25D366", color: "#ffffff", fontSize: "0.75rem" }}>
                    WA
                  </span>
                  WhatsApp: +212625218443
                </a>
              </li>
              <li>
                <a
                  href="tel:+212625218443"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)", fontWeight: "500" }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "var(--bg-orange-light)", color: "var(--accent-orange-dark)", fontSize: "0.75rem" }}>
                    Tel
                  </span>
                  Phone: +212625218443
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@streamb4.com"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-orange)", fontWeight: "600" }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "var(--bg-orange-light)", color: "var(--accent-orange-dark)", fontSize: "0.75rem" }}>
                    @
                  </span>
                  support@streamb4.com
                </a>
              </li>
              <li style={{ paddingTop: "0.5rem" }}>
                <Link href="/faq" style={{ color: "var(--text-secondary)" }}>
                  Knowledge Base & FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Gateways Bar */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.25rem",
          padding: "1.5rem",
          background: "#ffffff",
          borderRadius: "12px",
          border: "1px solid var(--border-subtle)",
          marginBottom: "2rem"
        }}>
          <div>
            <span style={{ fontWeight: "600", fontSize: "0.9rem", color: "var(--text-primary)", display: "block" }}>
              Secure & Encrypted Transactions
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Supported payment methods for instant subscription activation
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            {paymentBadges.map((badge) => (
              <div
                key={badge.name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.25rem 0.5rem",
                  background: "#ffffff",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "6px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
                }}
              >
                <Image
                  src={badge.src}
                  alt={badge.name}
                  width={badge.width}
                  height={badge.height}
                  style={{ objectFit: "contain", height: "22px", width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer Banner */}
        <div style={{
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          marginBottom: "1.5rem"
        }}>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
            <strong>Legal Notice & Content Distribution Compliance:</strong> IPTVProvider8K strictly operates as an authorized digital media transmission provider delivering licensed streaming protocols (M3U, Xtream API, HLS). We do not host, re-stream, broadcast, or sell access to unlicensed copyright streams. All trademarks, brand names, product references, and registered logos (such as Amazon Fire TV, Samsung, LG, Android, Apple TV, Kodi, and IPTV Smarters) belong to their respective proprietary trademark holders and are utilized strictly for compatibility identification and instructional guidance.
          </p>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.85rem",
          color: "var(--text-muted)"
        }}>
          <div>
            &copy; {currentYear} IPTVProvider8K (<a href="https://iptvprovider-8k.com" style={{ color: "var(--accent-orange-dark)", fontWeight: "600" }}>iptvprovider-8k.com</a>). All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy-policy" style={{ color: "var(--text-secondary)" }}>Privacy</Link>
            <Link href="/terms" style={{ color: "var(--text-secondary)" }}>Terms</Link>
            <Link href="/refund-policy" style={{ color: "var(--text-secondary)" }}>Refunds</Link>
            <Link href="/contact" style={{ color: "var(--text-secondary)" }}>Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
