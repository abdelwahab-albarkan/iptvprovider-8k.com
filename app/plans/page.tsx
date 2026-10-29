import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import PricingSection from "@/components/PricingSection";
import SchemaJsonLd from "@/components/SchemaJsonLd";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans | 3, 6 & 12 Months",
  description: "Explore verified IPTV subscription plans for the United States. 3, 6, and 12-month duration tiers for 1 to 4 accounts. 8K & 4K UHD streaming stability.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/plans",
  },
  openGraph: {
    title: "IPTV Subscription Plans | 3, 6 & 12 Months | IPTVProvider8K",
    description: "Explore verified IPTV subscription plans for the United States. 3, 6, and 12-month duration tiers for 1 to 4 accounts.",
    url: "https://iptvprovider-8k.com/plans",
    images: ["/images/og-image.jpg"],
  },
};

export default function PlansPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTVProvider8K Subscription Plans",
    "description": "Prepaid 3, 6, and 12-month IPTV subscription plans with 1 to 4 simultaneous connections for Firestick, Smart TVs, and Android devices.",
    "brand": {
      "@type": "Brand",
      "name": "IPTVProvider8K"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "3 Months Plan",
        "price": "39.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvprovider-8k.com/plans"
      },
      {
        "@type": "Offer",
        "name": "6 Months Plan",
        "price": "59.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvprovider-8k.com/plans"
      },
      {
        "@type": "Offer",
        "name": "12 Months Plan",
        "price": "89.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvprovider-8k.com/plans"
      }
    ]
  };

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
    <>
      <SchemaJsonLd data={productSchema} />
      <PageHero
        crumbs={[{ label: "Subscription Plans" }]}
        badges={
          <>
            <span className="badge badge-orange">Transparent Subscription Tiers</span>
            <span className="badge badge-emerald">Verified USD Pricing • 1 to 4 Accounts</span>
          </>
        }
        title={
          <>
            Flexible <span className="text-gradient">IPTV Subscription</span> Plans
          </>
        }
        lead="Choose the term and connection capacity that matches your household viewing needs. Every tier includes access to high-bitrate 8K and 4K streaming infrastructure, full US Electronic Program Guide (EPG), and dedicated technical assistance."
      />

      {/* Pricing Component with all 12 Verified Prices */}
      <section className="section">
        <div className="container">
          <PricingSection />
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Specifications</span>
            <h2>Plan Feature &amp; Protocol Comparison</h2>
            <p>Every tier shares our high-performance transmission infrastructure with zero speed caps.</p>
          </div>

          <div className="table-responsive table-stack">
            <table className="styled-table" aria-label="IPTV Subscription Plan Comparison">
              <thead>
                <tr>
                  <th scope="col">Feature Specification</th>
                  <th scope="col">3 Months</th>
                  <th scope="col" className="col-highlight">6 Months</th>
                  <th scope="col">12 Months</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["8K Ready & 4K UHD Streaming", "Included", "Included", "Included"],
                  ["Simultaneous Account Options", "1, 2, 3, or 4 Accounts", "1, 2, 3, or 4 Accounts", "1, 2, 3, or 4 Accounts"],
                  ["60 FPS Live Streams", "Included", "Included", "Included"],
                  ["US Edge CDN Nodes", "Standard Peering", "Priority Routing", "VIP Dedicated"],
                  ["Supported Protocols", "M3U8 / Xtream Codes API", "M3U8 / Xtream Codes API", "M3U8 / Xtream Codes API"],
                  ["Electronic Program Guide (EPG)", "Included", "Included", "Included"],
                  ["Fire TV, Smart TV, Android Apps", "Compatible", "Compatible", "Compatible"],
                  ["Support Channel", "Standard Ticket", "Priority Ticket", "Dedicated Specialist"]
                ].map(([feature, a, b, c]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td data-label="3 Months">{a}</td>
                    <td data-label="6 Months" className="col-highlight">{b}</td>
                    <td data-label="12 Months">{c}</td>
                  </tr>
                ))}
                <tr>
                  <td>Price Starting Point (1 Account)</td>
                  <td data-label="3 Months"><strong className="price-cell">$39.99</strong></td>
                  <td data-label="6 Months" className="col-highlight"><strong className="price-cell brand">$56.99</strong></td>
                  <td data-label="12 Months"><strong className="price-cell">$79.99</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Plan Guidance</span>
            <h2>Billing &amp; Subscription Questions</h2>
          </div>
          <FaqAccordion items={plansFaqs} withSchema={true} />
        </div>
      </section>

      {/* Device Integration Reminder */}
      <CtaBand
        title="Need Help Setting Up Your Device?"
        text="Our setup guides provide step-by-step instructions for Amazon Firestick, Samsung & LG Smart TVs, and Android TV devices."
      >
        <Link href="/devices" className="btn btn-ghost">
          Explore Device Compatibility
        </Link>
        <Link href="/setup/firestick" className="btn btn-primary">
          Firestick Setup Guide
        </Link>
        <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          WhatsApp (+212625218443)
        </a>
      </CtaBand>
    </>
  );
}
