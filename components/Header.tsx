"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "IPTV USA", href: "/iptv-usa" },
    { label: "Plans", href: "/plans" },
    { label: "Devices", href: "/devices" },
    { label: "Setup Guides", href: "/setup/firestick" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header" role="banner">
      {/* Top Utility Contact Bar */}
      <div className="top-utility-bar" style={{
        background: "var(--bg-orange-soft)",
        borderBottom: "1px solid var(--border-highlight)",
        padding: "0.35rem 0",
        fontSize: "0.8rem",
        color: "var(--text-secondary)"
      }}>
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <a
              href="https://wa.me/212625218443"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#047857", fontWeight: "600" }}
            >
              <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#25D366" }} />
              WhatsApp: +212625218443
            </a>
            <a
              href="tel:+212625218443"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "var(--text-primary)", fontWeight: "500" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Tel: +212625218443
            </a>
          </div>

          <div className="top-bar-right">
            <a
              href="mailto:support@streamb4.com"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "var(--text-orange)", fontWeight: "600" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              support@streamb4.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} aria-label="IPTVProvider8K Home">
          <div style={{
            width: "38px",
            height: "38px",
            borderRadius: "10px",
            background: "var(--gradient-brand)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "900",
            fontSize: "1.1rem",
            color: "#ffffff",
            boxShadow: "0 2px 10px rgba(249, 115, 22, 0.35)"
          }}>
            8K
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "800", fontSize: "1.2rem", letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
              IPTVProvider<span style={{ color: "var(--accent-orange-dark)" }}>8K</span>
            </span>
            <span style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginTop: "-3px" }}>
              Authorized US Streaming
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: "none" }} className="desktop-nav" aria-label="Primary Navigation">
          <ul style={{ display: "flex", alignItems: "center", gap: "1.75rem", listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.925rem",
                    fontWeight: isActive(link.href) ? "700" : "500",
                    color: isActive(link.href) ? "var(--accent-orange-dark)" : "var(--text-secondary)",
                    position: "relative",
                    padding: "0.4rem 0",
                  }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: "0",
                        right: "0",
                        height: "2px",
                        background: "var(--accent-orange)",
                        borderRadius: "2px"
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ display: "none" }} className="desktop-cta">
            <a
              href="https://wa.me/212625218443"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ marginRight: "0.5rem" }}
            >
              WhatsApp Us
            </a>
            <Link href="/plans" className="btn btn-primary btn-sm">
              View Plans
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            style={{
              background: "#ffffff",
              border: "1px solid var(--border-subtle)",
              borderRadius: "8px",
              padding: "0.55rem",
              cursor: "pointer",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          style={{
            background: "#ffffff",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "1.25rem 1.5rem",
            boxShadow: "var(--shadow-md)"
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.5rem 0.25rem",
                    fontSize: "1rem",
                    fontWeight: isActive(link.href) ? "700" : "500",
                    color: isActive(link.href) ? "var(--accent-orange-dark)" : "var(--text-primary)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: "0.75rem", borderTop: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href="https://wa.me/212625218443"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%" }}
              >
                WhatsApp (+212625218443)
              </a>
              <Link
                href="/plans"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                View Plans
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Responsive media query styles */}
      <style jsx>{`
        .top-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .top-bar-container {
            justify-content: center;
            text-align: center;
            gap: 0.35rem;
          }
          .top-bar-left {
            justify-content: center;
            gap: 0.85rem;
            width: 100%;
          }
          .top-bar-right {
            justify-content: center;
            width: 100%;
          }
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-cta {
            display: flex !important;
            align-items: center;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
