"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/", match: "/" },
  { label: "IPTV USA", href: "/iptv-usa", match: "/iptv-usa" },
  { label: "Plans", href: "/plans", match: "/plans" },
  { label: "Devices", href: "/devices", match: "/devices" },
  { label: "Setup Guides", href: "/setup/firestick", match: "/setup" },
  { label: "FAQ", href: "/faq", match: "/faq" },
  { label: "Contact", href: "/contact", match: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);

  const isActive = (match: string) => {
    if (match === "/") return pathname === "/";
    return pathname === match || pathname.startsWith(`${match}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.classList.add("nav-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  // Let the contact bar scroll away while the nav bar stays pinned
  useEffect(() => {
    const header = headerRef.current;
    const bar = topBarRef.current;
    if (!header || !bar) return;
    const sync = () => header.style.setProperty("--topbar-h", `${bar.offsetHeight}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(bar);
    return () => ro.disconnect();
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header ref={headerRef} className={`site-header${scrolled ? " is-scrolled" : ""}`} role="banner">
      {/* Top Utility Contact Bar */}
      <div className="top-bar" ref={topBarRef}>
        <div className="container top-bar-inner">
          <div className="top-bar-group">
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="wa">
              <span className="wa-dot" aria-hidden="true" />
              WhatsApp: +212625218443
            </a>
            <a href="tel:+212625218443">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Tel: +212625218443
            </a>
          </div>

          <div className="top-bar-group">
            <a href="mailto:support@streamb4.com" className="mail">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              support@streamb4.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="nav-bar">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="IPTVProvider8K Home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">8K</span>
            <span className="brand-text">
              <span className="brand-name">
                IPTVProvider<span>8K</span>
              </span>
              <span className="brand-tag">US IPTV Streaming</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul>
              {navLinks.map((link) => {
                const active = isActive(link.match);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`nav-link${active ? " is-active" : ""}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="nav-actions">
            <div className="desktop-cta">
              <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                WhatsApp Us
              </a>
              <Link href="/plans" className="btn btn-primary btn-sm">
                View Plans
              </Link>
            </div>

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label="Toggle Navigation Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          <div className="drawer-backdrop" onClick={closeMenu} aria-hidden="true" />
          <nav id="mobile-nav-drawer" className="mobile-drawer" aria-label="Mobile Navigation">
            <div className="container">
              <ul>
                {navLinks.map((link) => {
                  const active = isActive(link.match);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`mobile-link${active ? " is-active" : ""}`}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="drawer-cta">
                <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-block">
                  WhatsApp (+212625218443)
                </a>
                <Link href="/plans" onClick={closeMenu} className="btn btn-primary btn-block">
                  View Plans
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
