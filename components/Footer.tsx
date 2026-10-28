import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2026;

  const paymentBadges = [
    { name: "Visa", src: "/images/payments/visa.webp" },
    { name: "Mastercard", src: "/images/payments/mastercard.webp" },
    { name: "PayPal", src: "/images/payments/paypal.png" },
    { name: "Apple Pay", src: "/images/payments/apple-pay.webp" },
    { name: "Google Pay", src: "/images/payments/google-pay.png" },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="IPTVProvider8K Home">
              <span className="brand-mark" aria-hidden="true">8K</span>
              <span className="brand-name">
                IPTVProvider<span>8K</span>
              </span>
            </Link>
            <p>
              High-performance IPTV streaming infrastructure tailored for United States viewers. Compatible with 8K, 4K UHD, and FHD playback on smart TVs, Fire TV, and Android hardware.
            </p>
            <div className="cdn-status">
              <span className="status-dot" />
              US Streaming CDN: Active
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h2 className="footer-heading">Services</h2>
            <ul className="footer-links">
              <li><Link href="/">IPTV Service Overview</Link></li>
              <li><Link href="/iptv-usa">IPTV USA Network</Link></li>
              <li><Link href="/plans">Subscription Plans</Link></li>
              <li><Link href="/devices">Supported Devices</Link></li>
            </ul>
          </div>

          {/* Setup Tutorials */}
          <div>
            <h2 className="footer-heading">Device Setup</h2>
            <ul className="footer-links">
              <li><Link href="/setup/firestick">Amazon Firestick Setup</Link></li>
              <li><Link href="/setup/smart-tv">Samsung &amp; LG Smart TV</Link></li>
              <li><Link href="/setup/android">Android TV &amp; Box Guide</Link></li>
              <li><Link href="/devices">Hardware Requirements</Link></li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div>
            <h2 className="footer-heading">Direct Support</h2>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="wa">
                  <span className="contact-ico wa-ico" aria-hidden="true">WA</span>
                  WhatsApp: +212625218443
                </a>
              </li>
              <li>
                <a href="tel:+212625218443" className="tel">
                  <span className="contact-ico" aria-hidden="true">Tel</span>
                  Phone: +212625218443
                </a>
              </li>
              <li>
                <a href="mailto:support@streamb4.com" className="mail">
                  <span className="contact-ico" aria-hidden="true">@</span>
                  support@streamb4.com
                </a>
              </li>
              <li>
                <Link href="/faq">Knowledge Base &amp; FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Gateways Bar */}
        <div className="payments-row">
          <div>
            <span className="payments-title">Secure &amp; Encrypted Transactions</span>
            <span className="payments-sub">Supported payment methods for instant subscription activation</span>
          </div>
          <ul className="payment-badges">
            {paymentBadges.map((badge) => (
              <li key={badge.name} className="payment-badge">
                <Image src={badge.src} alt={badge.name} width={44} height={24} />
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Disclaimer Banner */}
        <div className="legal-notice">
          <p>
            <strong>Disclaimer:</strong> IPTVProvider8K provides an IPTV streaming subscription that works with third-party media players using standard formats (M3U playlists, Xtream Codes API, and HLS). We do not develop, sell, or support those player apps or the devices they run on. All trademarks, brand names, and logos mentioned on this site (including Amazon Fire TV, Samsung, LG, Android, Google TV, Apple TV, NVIDIA Shield, Kodi, TiviMate, and IPTV Smarters) belong to their respective owners and are used only to describe compatibility and setup steps.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} IPTVProvider8K (<a href="https://iptvprovider-8k.com" className="domain">iptvprovider-8k.com</a>). All rights reserved.
          </div>
          <nav className="footer-legal-links" aria-label="Legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refund-policy">Refunds</Link>
            <Link href="/contact">Support</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
