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
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    // The form does not send anything by itself: it prepares the message
    // so the visitor can send it by email or WhatsApp in one click.
    setStatus("ready");
  };

  const mailtoLink = `mailto:support@streamb4.com?subject=${encodeURIComponent(
    `[IPTV Support] ${formData.subject.toUpperCase()} - ${formData.deviceType}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nDevice: ${formData.deviceType}\n\nMessage:\n${formData.message}`
  )}`;

  const whatsappLink = `https://wa.me/212625218443?text=${encodeURIComponent(
    `Hi, my name is ${formData.name || "a customer"} (${formData.email}). Topic: ${formData.subject}. Device: ${formData.deviceType}.

${formData.message}`
  )}`;

  return (
    <div className="card card-lg">
      {/* Front-end Status Notice */}
      <div className="info-bar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>
          <strong>How this form works:</strong> fill it in and click Send Message. We prepare your message, then you choose to send it by email or WhatsApp. You can also write directly to <a href="mailto:support@streamb4.com">support@streamb4.com</a>.
        </span>
      </div>

      {status === "ready" ? (
        <div className="success-state" role="status">
          <div className="success-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>Your message is ready to send</h3>
          <p className="mb-6">
            Thanks, <strong>{formData.name || "there"}</strong>. Your message has <strong>not been sent yet</strong>. Click one of the buttons below to send it from your email app or WhatsApp, and we will reply there.
          </p>
          <div className="btn-row center mb-6">
            <a href={mailtoLink} className="btn btn-primary btn-sm">
              Send via Email (support@streamb4.com)
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
              Send via WhatsApp
            </a>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setStatus("idle")}
            >
              Edit Message
            </button>
          </div>
          <div className="small muted">
            Direct email recipient: <code>support@streamb4.com</code>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Full Name <span className="req">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                className="form-input"
                placeholder="e.g. Michael Miller"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Email Address <span className="req">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                className="form-input"
                placeholder="you@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

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
                <option value="partnership">Business & Bulk Inquiries</option>
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
              Detailed Description <span className="req">*</span>
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
            className="btn btn-primary btn-lg btn-block"
            disabled={!formData.email || !formData.message}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
