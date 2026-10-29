"use client";

import React, { useState } from "react";

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

const WHATSAPP_NUMBER = "212625218443";

// Opens WhatsApp with the exact plan the visitor picked already written out
function whatsappOrderUrl(duration: string, tier: AccountTier) {
  const accounts = `${tier.count} ${tier.count === 1 ? "account" : "accounts"}`;
  const message = `Hello IPTVProvider8K! I want to buy the ${duration} plan – ${accounts} – ${tier.price} USD. Please send me the payment details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

interface PricingSectionProps {
  /** Heading level for plan names (h3 when the section already has an h2) */
  planHeading?: "h2" | "h3";
  /** Show the full 12-price schedule table under the cards */
  showSchedule?: boolean;
}

export default function PricingSection({ planHeading = "h2", showSchedule = true }: PricingSectionProps) {
  const PlanHeading = planHeading;
  const [selectedAccountCount, setSelectedAccountCount] = useState<number>(1);

  const scheduleRows = [
    { duration: "3 Months", prices: ["$39.99", "$59.99", "$79.99", "$99.99"], term: "Prepaid 90 Days", tone: "" },
    { duration: "6 Months", prices: ["$56.99", "$84.99", "$109.99", "$134.99"], term: "Prepaid 180 Days", tone: "brand" },
    { duration: "12 Months", prices: ["$79.99", "$119.99", "$149.99", "$179.99"], term: "Prepaid 365 Days", tone: "success" }
  ];
  const accountHeaders = ["1 Account", "2 Accounts", "3 Accounts", "4 Accounts"];

  return (
    <div className="pricing">
      {/* Account Selector Segmented Control */}
      <div className="seg-wrap">
        <label htmlFor="accounts-selector-group" className="seg-label">
          Select Number of Simultaneous Accounts / Streams:
        </label>
        <div id="accounts-selector-group" role="group" aria-label="Account Stream Selector" className="segmented">
          {[1, 2, 3, 4].map((count) => {
            const isSelected = selectedAccountCount === count;
            return (
              <button
                key={count}
                type="button"
                id={`btn-account-${count}`}
                onClick={() => setSelectedAccountCount(count)}
                aria-pressed={isSelected}
              >
                {count} {count === 1 ? "Account" : "Accounts"}
              </button>
            );
          })}
        </div>
        <div className="seg-note" aria-live="polite">
          Showing verified pricing for <strong>{selectedAccountCount} {selectedAccountCount === 1 ? "Account (1 Active Stream)" : `Accounts (${selectedAccountCount} Simultaneous Streams)`}</strong>
        </div>
      </div>

      {/* Pricing Cards Grid (3 Durations) */}
      <div className="pricing-grid">
        {ALL_PLANS.map((plan) => {
          const currentTier = plan.accountTiers.find((t) => t.count === selectedAccountCount) || plan.accountTiers[0];

          return (
            <div key={plan.durationSlug} className={`price-card${plan.popular ? " is-popular" : ""}`}>
              {plan.popular && <span className="price-ribbon" aria-hidden="true">{plan.badge}</span>}

              {/* Card Header */}
              <div className="price-card-top">
                <span className={`badge ${plan.popular ? "badge-orange" : "badge-indigo"}`}>
                  {plan.badge}
                </span>
                <span className="prepaid">Prepaid</span>
              </div>

              <PlanHeading className="plan-name">{plan.duration}</PlanHeading>
              <div className="tier-note">
                {currentTier.label} ({currentTier.count} {currentTier.count === 1 ? "Stream" : "Simultaneous Streams"})
              </div>

              {/* Price Display */}
              <div className="price-box">
                <div className="price-amount">
                  <span className="price-value">{currentTier.price}</span>
                  <span className="price-unit">USD / {plan.duration}</span>
                </div>
                <div className="price-sub">Billed once. No automatic recurring charges.</div>
              </div>

              {/* Account Pills Inside Card */}
              <span className="mini-label">Select accounts for {plan.duration}:</span>
              <div className="mini-seg">
                {plan.accountTiers.map((t) => (
                  <button
                    key={t.count}
                    type="button"
                    onClick={() => setSelectedAccountCount(t.count)}
                    aria-pressed={selectedAccountCount === t.count}
                  >
                    {t.count} {t.count === 1 ? "Acc" : "Accs"}
                  </button>
                ))}
              </div>

              {/* Feature Checklist */}
              <ul className="check-list compact">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx}>{feat}</li>
                ))}
              </ul>

              {/* Card Action Button */}
              <a
                href={whatsappOrderUrl(plan.duration, currentTier)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-block ${plan.popular ? "btn-primary btn-lg" : "btn-secondary btn-lg"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 12.05 0zm5.422 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Order {plan.duration} ({currentTier.label} - {currentTier.price})
              </a>
            </div>
          );
        })}
      </div>

      {/* Complete 12-Plan Overview Table */}
      {showSchedule && (
      <div className="card schedule-card">
        <div className="schedule-head">
          <span className="section-tag">Complete Price Schedule</span>
          <h3>All 12 Subscription Configurations (USD)</h3>
          <p className="small">
            Review our standardized pricing schedule across all duration terms and connection capacities.
          </p>
        </div>

        <div className="table-responsive table-stack">
          <table className="styled-table" aria-label="Complete IPTV Subscription Price Schedule">
            <thead>
              <tr>
                <th scope="col">Duration</th>
                {accountHeaders.map((h) => (
                  <th key={h} scope="col">{h}</th>
                ))}
                <th scope="col">Billing Term</th>
              </tr>
            </thead>
            <tbody>
              {scheduleRows.map((row) => (
                <tr key={row.duration}>
                  <td data-label="Duration"><strong>{row.duration}</strong></td>
                  {row.prices.map((price, i) => (
                    <td key={price} data-label={accountHeaders[i]}>
                      <span className={`price-cell${row.tone ? ` ${row.tone}` : ""}`}>{price}</span>
                    </td>
                  ))}
                  <td data-label="Billing Term">{row.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}
    </div>
  );
}
