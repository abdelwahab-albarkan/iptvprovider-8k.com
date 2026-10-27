"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface AccountTier {
  count: number;
  label: string;
  price: string;
}

export interface PlanDuration {
  duration: string;
  durationSlug: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  accountTiers: AccountTier[];
}

export const ALL_PLANS: PlanDuration[] = [
  {
    duration: "3 Months",
    durationSlug: "3-months",
    badge: "Quarterly Access",
    popular: false,
    features: [
      "8K UHD & 4K Streaming Stability",
      "Full US Electronic Program Guide (EPG)",
      "Standard M3U8 & Xtream API Protocols",
      "Multi-Device Hardware Compatibility",
      "Dedicated Technical Assistance"
    ],
    accountTiers: [
      { count: 1, label: "1 Account", price: "$39.99" },
      { count: 2, label: "2 Accounts", price: "$59.99" },
      { count: 3, label: "3 Accounts", price: "$79.99" },
      { count: 4, label: "4 Accounts", price: "$99.99" }
    ]
  },
  {
    duration: "6 Months",
    durationSlug: "6-months",
    badge: "Most Popular",
    popular: true,
    features: [
      "8K UHD & 4K Streaming Stability",
      "Full US Electronic Program Guide (EPG)",
      "Standard M3U8 & Xtream API Protocols",
      "Multi-Device Hardware Compatibility",
      "Priority US Edge CDN Routing",
      "Priority Support Desk Queue"
    ],
    accountTiers: [
      { count: 1, label: "1 Account", price: "$56.99" },
      { count: 2, label: "2 Accounts", price: "$84.99" },
      { count: 3, label: "3 Accounts", price: "$109.99" },
      { count: 4, label: "4 Accounts", price: "$134.99" }
    ]
  },
  {
    duration: "12 Months",
    durationSlug: "12-months",
    badge: "Best Value",
    popular: false,
    features: [
      "8K UHD & 4K Streaming Stability",
      "Full US Electronic Program Guide (EPG)",
      "Standard M3U8 & Xtream API Protocols",
      "Multi-Device Hardware Compatibility",
      "High-Priority Node Bandwidth Allocation",
      "Annual Term Price Protection",
      "VIP Support Assistance"
    ],
    accountTiers: [
      { count: 1, label: "1 Account", price: "$79.99" },
      { count: 2, label: "2 Accounts", price: "$119.99" },
      { count: 3, label: "3 Accounts", price: "$149.99" },
      { count: 4, label: "4 Accounts", price: "$179.99" }
    ]
  }
];

export default function PricingSection() {
  const [selectedAccountCount, setSelectedAccountCount] = useState<number>(1);

  return (
    <div style={{ marginBottom: "4.5rem" }}>
      {/* Account Selector Pill Toggle */}
      <div style={{
        maxWidth: "680px",
        margin: "0 auto 3rem auto",
        textAlign: "center"
      }}>
        <label
          htmlFor="accounts-selector-group"
          style={{
            display: "block",
            fontSize: "0.95rem",
            fontWeight: "700",
            color: "var(--text-primary)",
            marginBottom: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em"
          }}
        >
          Select Number of Simultaneous Accounts / Streams:
        </label>
        <div
          id="accounts-selector-group"
          role="group"
          aria-label="Account Stream Selector"
          style={{
            display: "inline-flex",
            padding: "0.35rem",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "14px",
            gap: "0.35rem",
            flexWrap: "wrap",
            justifyContent: "center",
            boxShadow: "var(--shadow-sm)",
            maxWidth: "100%"
          }}
        >
          {[1, 2, 3, 4].map((count) => {
            const isSelected = selectedAccountCount === count;
            return (
              <button
                key={count}
                type="button"
                id={`btn-account-${count}`}
                onClick={() => setSelectedAccountCount(count)}
                aria-pressed={isSelected}
                style={{
                  padding: "0.55rem 1.15rem",
                  borderRadius: "10px",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  border: "none",
                  transition: "all 0.2s ease",
                  background: isSelected ? "var(--gradient-brand)" : "transparent",
                  color: isSelected ? "#ffffff" : "var(--text-secondary)",
                  boxShadow: isSelected ? "var(--shadow-orange)" : "none"
                }}
              >
                {count} {count === 1 ? "Account" : "Accounts"}
              </button>
            );
          })}
        </div>
        <div style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
          Showing verified pricing for <strong>{selectedAccountCount} {selectedAccountCount === 1 ? "Account (1 Active Stream)" : `Accounts (${selectedAccountCount} Simultaneous Streams)`}</strong>
        </div>
      </div>

      {/* Pricing Cards Grid (3 Durations) */}
      <div className="grid-3" style={{ marginBottom: "4rem" }}>
        {ALL_PLANS.map((plan) => {
          const currentTier = plan.accountTiers.find((t) => t.count === selectedAccountCount) || plan.accountTiers[0];

          return (
            <div
              key={plan.durationSlug}
              className={`card ${plan.popular ? "card-glow" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                borderColor: plan.popular ? "var(--accent-orange)" : "var(--border-subtle)",
                background: plan.popular ? "#ffffff" : "#ffffff",
                padding: "2.25rem 1.75rem",
                boxShadow: plan.popular ? "var(--shadow-md)" : "var(--shadow-sm)"
              }}
            >
              {/* Card Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className={`badge ${plan.popular ? "badge-orange" : "badge-indigo"}`}>
                  {plan.badge}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "600" }}>
                  Prepaid
                </span>
              </div>

              <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem", color: "var(--text-primary)" }}>
                {plan.duration}
              </h2>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                {currentTier.label} ({currentTier.count} {currentTier.count === 1 ? "Stream" : "Simultaneous Streams"})
              </div>

              {/* Price Display */}
              <div style={{
                padding: "1.25rem",
                background: plan.popular ? "var(--bg-orange-soft)" : "var(--bg-secondary)",
                borderRadius: "12px",
                border: "1px solid",
                borderColor: plan.popular ? "var(--border-highlight)" : "var(--border-subtle)",
                marginBottom: "1.75rem"
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
                  <span style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "var(--accent-orange-dark)",
                    letterSpacing: "-0.03em"
                  }}>
                    {currentTier.price}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "600" }}>
                    USD / {plan.duration}
                  </span>
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                  Billed once. No automatic recurring charges.
                </div>
              </div>

              {/* Account Pills Inside Card */}
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>
                  Select accounts for {plan.duration}:
                </span>
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {plan.accountTiers.map((t) => (
                    <button
                      key={t.count}
                      type="button"
                      onClick={() => setSelectedAccountCount(t.count)}
                      style={{
                        flex: 1,
                        padding: "0.35rem 0.5rem",
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        borderRadius: "6px",
                        border: "1px solid",
                        borderColor: selectedAccountCount === t.count ? "var(--accent-orange)" : "var(--border-subtle)",
                        background: selectedAccountCount === t.count ? "var(--bg-orange-soft)" : "#ffffff",
                        color: selectedAccountCount === t.count ? "var(--accent-orange-dark)" : "var(--text-muted)",
                        cursor: "pointer"
                      }}
                    >
                      {t.count} {t.count === 1 ? "Acc" : "Accs"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature Checklist */}
              <ul style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                marginBottom: "2rem"
              }}>
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ color: "var(--accent-orange-dark)", fontWeight: "bold" }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Card Action Button */}
              <Link
                href={`/contact?plan=${plan.durationSlug}&accounts=${currentTier.count}&price=${encodeURIComponent(currentTier.price)}`}
                className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}
                style={{ marginTop: "auto", width: "100%", textAlign: "center" }}
              >
                Order {plan.duration} ({currentTier.label} - {currentTier.price})
              </Link>
            </div>
          );
        })}
      </div>

      {/* Complete 12-Plan Overview Table */}
      <div className="card" style={{ padding: "2.5rem 1.75rem", background: "#ffffff" }}>
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 2rem auto" }}>
          <span className="section-tag">Complete Price Schedule</span>
          <h3 style={{ fontSize: "1.45rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
            All 12 Subscription Configurations (USD)
          </h3>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            Review our standardized pricing schedule across all duration terms and connection capacities.
          </p>
        </div>

        <div className="table-responsive">
          <table className="styled-table" aria-label="Complete IPTV Subscription Price Schedule">
            <thead>
              <tr>
                <th scope="col">Duration</th>
                <th scope="col">1 Account</th>
                <th scope="col">2 Accounts</th>
                <th scope="col">3 Accounts</th>
                <th scope="col">4 Accounts</th>
                <th scope="col">Billing Term</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>3 Months</strong></td>
                <td><span style={{ color: "var(--text-primary)", fontWeight: "700" }}>$39.99</span></td>
                <td><span style={{ color: "var(--text-primary)", fontWeight: "700" }}>$59.99</span></td>
                <td><span style={{ color: "var(--text-primary)", fontWeight: "700" }}>$79.99</span></td>
                <td><span style={{ color: "var(--text-primary)", fontWeight: "700" }}>$99.99</span></td>
                <td>Prepaid 90 Days</td>
              </tr>
              <tr>
                <td><strong>6 Months</strong></td>
                <td><span style={{ color: "var(--accent-orange-dark)", fontWeight: "700" }}>$56.99</span></td>
                <td><span style={{ color: "var(--accent-orange-dark)", fontWeight: "700" }}>$84.99</span></td>
                <td><span style={{ color: "var(--accent-orange-dark)", fontWeight: "700" }}>$109.99</span></td>
                <td><span style={{ color: "var(--accent-orange-dark)", fontWeight: "700" }}>$134.99</span></td>
                <td>Prepaid 180 Days</td>
              </tr>
              <tr>
                <td><strong>12 Months</strong></td>
                <td><span style={{ color: "#047857", fontWeight: "700" }}>$79.99</span></td>
                <td><span style={{ color: "#047857", fontWeight: "700" }}>$119.99</span></td>
                <td><span style={{ color: "#047857", fontWeight: "700" }}>$149.99</span></td>
                <td><span style={{ color: "#047857", fontWeight: "700" }}>$179.99</span></td>
                <td>Prepaid 365 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
