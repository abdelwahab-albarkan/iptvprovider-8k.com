"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    deviceType: "firestick",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "demo-success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("demo-success");
    }, 600);
  };

  const mailtoLink = `mailto:support@streamb4.com?subject=${encodeURIComponent(
    `[IPTV Support] ${formData.subject.toUpperCase()} - ${formData.deviceType}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nDevice: ${formData.deviceType}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="card" style={{ padding: "2.5rem" }}>
      {/* Front-end Status Notice */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 1rem",
        background: "var(--bg-orange-soft)",
        border: "1px solid var(--border-highlight)",
        borderRadius: "8px",
        marginBottom: "1.5rem",
        fontSize: "0.85rem",
        color: "var(--text-secondary)"
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange-dark)" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>
          <strong>Direct Support Desk:</strong> Submit your details below or email directly to <a href="mailto:support@streamb4.com" style={{ color: "var(--accent-orange-dark)", fontWeight: "600" }}>support@streamb4.com</a>.
        </span>
      </div>

      {status === "demo-success" ? (
        <div style={{ textAlign: "center", padding: "1.5rem 0.5rem" }}>
          <div style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent-emerald)",
            marginBottom: "1.25rem"
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Inquiry Validated</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            Thank you, <strong>{formData.name || "Customer"}</strong>. Your ticket draft is ready. To send directly to our priority support inbox right now, click the button below:
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <a href={mailtoLink} className="btn btn-primary btn-sm">
              Send via Email (support@streamb4.com)
            </a>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", email: "", subject: "general", deviceType: "firestick", message: "" });
              }}
            >
              Reset Form
            </button>
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Direct email recipient: <code>support@streamb4.com</code>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Full Name <span style={{ color: "var(--accent-rose)" }}>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Michael Miller"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Email Address <span style={{ color: "var(--accent-rose)" }}>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                className="form-input"
                placeholder="you@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">Inquiry Topic</label>
              <select
                id="contact-subject"
                className="form-select"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="general">General Service Question</option>
                <option value="setup">Device Setup & Activation Help</option>
                <option value="plans">Subscription Tiers & Billing</option>
                <option value="technical">Streaming Bandwidth / Diagnostic</option>
                <option value="partnership">Authorized Licensing & Enterprise</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-device" className="form-label">Primary Device / App</label>
              <select
                id="contact-device"
                className="form-select"
                value={formData.deviceType}
                onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
              >
                <option value="firestick">Amazon Fire TV / Firestick</option>
                <option value="samsung">Samsung Smart TV (Tizen)</option>
                <option value="lg">LG Smart TV (webOS)</option>
                <option value="android-tv">Android TV / Google TV / Shield</option>
                <option value="apple">Apple TV / iOS</option>
                <option value="pc">Windows / Mac / VLC</option>
                <option value="other">Other Hardware / IPTV Player</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Detailed Description <span style={{ color: "var(--accent-rose)" }}>*</span>
            </label>
            <textarea
              id="contact-message"
              required
              className="form-textarea"
              placeholder="Please describe your setup question, error message, or inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ width: "100%" }}
            disabled={status === "submitting" || !formData.email || !formData.message}
          >
            {status === "submitting" ? "Validating Parameters..." : "Submit Inquiry (Client Preview)"}
          </button>
        </form>
      )}
    </div>
  );
}
