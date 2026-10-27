import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans USA | 3, 6 & 12 Month Tiers",
  description: "Explore verified IPTV subscription plans for the United States. 3, 6, and 12-month duration tiers for 1 to 4 accounts. 8K & 4K UHD streaming stability.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/plans",
  },
};

export default function PlansPage() {
  const plansFaqs = [
    {
      id: "plan-faq-1",
      question: "Are there any hidden activation fees, equipment leases, or contract commitments?",
      answer: "No. All subscriptions are strictly prepaid terms for 3, 6, or 12 months with no recurring billing locks, no equipment leasing fees, and zero surprise cancellation charges."
    },
    {
      id: "plan-faq-2",
      question: "What is the difference between 1, 2, 3, and 4 Account plans?",
      answer: "Each account tier dictates how many simultaneous streams you can run at the exact same moment. A 1 Account plan allows 1 active screen; a 2 Account plan allows 2 simultaneous screens; a 3 Account plan allows 3 simultaneous screens; and a 4 Account plan allows 4 simultaneous screens throughout your household."
    },
    {
      id: "plan-faq-3",
      question: "How are my login credentials delivered after subscribing?",
      answer: "Credentials (including your M3U playlist link, EPG URL, and Xtream Codes server credentials) are generated upon order processing and dispatched to your registered email address with easy setup instructions."
    },
    {
      id: "plan-faq-4",
      question: "What is your refund policy if the service does not work on my device?",
      answer: "We stand behind the technical reliability of our streams. If you encounter irreconcilable device incompatibility or persistent technical issues within our 7-day evaluation window, our technical desk will troubleshoot or process a refund according to our published Refund Policy."
    }
  ];

  return (
    <div className="section" style={{ paddingTop: "2.5rem" }}>
      <div className="container">
        <Breadcrumbs items={[{ label: "Subscription Plans" }]} />

        {/* Page Header */}
        <div style={{ maxWidth: "840px", marginBottom: "3rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span className="badge badge-orange">Transparent Subscription Tiers</span>
            <span className="badge badge-emerald">Verified USD Pricing • 1 to 4 Accounts</span>
          </div>

          <h1>
            Flexible <span className="text-gradient">IPTV Subscription</span> Plans
          </h1>

          <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
            Choose the term and connection capacity that matches your household viewing needs. Every tier includes access to high-bitrate 8K and 4K streaming infrastructure, full US Electronic Program Guide (EPG), and dedicated technical assistance.
          </p>
        </div>

        {/* Pricing Component with all 12 Verified Prices */}
        <PricingSection />

        {/* Feature Comparison Table */}
        <div style={{ marginBottom: "4.5rem" }}>
          <div className="section-header">
            <span className="section-tag">Specifications</span>
            <h2>Plan Feature & Protocol Comparison</h2>
            <p>Every tier shares our high-performance transmission infrastructure with zero speed caps.</p>
          </div>

          <div className="table-responsive">
            <table className="styled-table" aria-label="IPTV Subscription Plan Comparison">
              <thead>
                <tr>
                  <th scope="col">Feature Specification</th>
                  <th scope="col">3 Months</th>
                  <th scope="col">6 Months</th>
                  <th scope="col">12 Months</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8K Ready & 4K UHD Streaming</td>
                  <td>Included</td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Simultaneous Account Options</td>
                  <td>1, 2, 3, or 4 Accounts</td>
                  <td>1, 2, 3, or 4 Accounts</td>
                  <td>1, 2, 3, or 4 Accounts</td>
                </tr>
                <tr>
                  <td>60 FPS Live Streams</td>
                  <td>Included</td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>US Edge CDN Nodes</td>
                  <td>Standard Peering</td>
                  <td>Priority Routing</td>
                  <td>VIP Dedicated</td>
                </tr>
                <tr>
                  <td>Supported Protocols</td>
                  <td>M3U8 / Xtream Codes API</td>
                  <td>M3U8 / Xtream Codes API</td>
                  <td>M3U8 / Xtream Codes API</td>
                </tr>
                <tr>
                  <td>Electronic Program Guide (EPG)</td>
                  <td>Included</td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Fire TV, Smart TV, Android Apps</td>
                  <td>Compatible</td>
                  <td>Compatible</td>
                  <td>Compatible</td>
                </tr>
                <tr>
                  <td>Support Channel</td>
                  <td>Standard Ticket</td>
                  <td>Priority Ticket</td>
                  <td>Dedicated Specialist</td>
                </tr>
                <tr>
                  <td>Price Starting Point (1 Account)</td>
                  <td><strong>$39.99</strong></td>
                  <td><strong>$56.99</strong></td>
                  <td><strong>$79.99</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <div className="section-header">
            <span className="section-tag">Plan Guidance</span>
            <h2>Billing & Subscription Questions</h2>
          </div>
          <FaqAccordion items={plansFaqs} withSchema={true} />
        </div>

        {/* Device Integration Reminder */}
        <div className="card" style={{ textAlign: "center", padding: "2.5rem 1.5rem" }}>
          <h3>Need Help Setting Up Your Device?</h3>
          <p style={{ maxWidth: "600px", margin: "0.5rem auto 1.5rem auto", color: "var(--text-secondary)" }}>
            Our setup guides provide step-by-step instructions for Amazon Firestick, Samsung & LG Smart TVs, and Android TV devices.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/devices" className="btn btn-secondary btn-sm">
              Explore Device Compatibility
            </Link>
            <Link href="/setup/firestick" className="btn btn-primary btn-sm">
              Firestick Setup Guide
            </Link>
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
              WhatsApp (+212625218443)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
