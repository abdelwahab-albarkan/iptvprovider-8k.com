import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans USA: 3, 6 & 12 Months",
  description: "Compare IPTV subscription prices for 3, 6 and 12 months with 1 to 4 screens. Prepaid from $39.99, no contract, no automatic renewal.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/plans",
  },
};

export default function PlansPage() {
  const plansFaqs = [
    {
      id: "plan-faq-1",
      question: "Are there hidden fees, equipment costs or contracts?",
      answer: "No. Every IPTV subscription is a one-time prepaid payment for 3, 6 or 12 months. There is no contract, no equipment to rent, no activation fee and no cancellation charge."
    },
    {
      id: "plan-faq-2",
      question: "What is the difference between 1, 2, 3 and 4 Account plans?",
      answer: "The number of accounts is the number of screens that can play at the same moment. A 1 Account plan allows 1 active screen, a 2 Account plan allows 2, a 3 Account plan allows 3 and a 4 Account plan allows 4 screens at the same time in your household."
    },
    {
      id: "plan-faq-3",
      question: "How are my login details delivered after I subscribe?",
      answer: "Your M3U playlist link, EPG link and Xtream Codes login are sent to the email address you used for your order, together with setup instructions. Under our Refund Policy, credentials are always sent within 24 hours of confirmed payment."
    },
    {
      id: "plan-faq-4",
      question: "What is your refund policy if the service does not work on my device?",
      answer: "You can request a refund within 7 days of activation if we cannot get the service working on your supported device because of a problem on our side, or if your login was not sent within 24 hours of payment. Contact us first so we can try to fix the issue. Full details are in our Refund Policy."
    },
    {
      id: "plan-faq-5",
      question: "Will my subscription renew automatically?",
      answer: "No. We never charge you automatically. When your term is close to ending you can choose to renew; if you do nothing, the subscription simply expires."
    },
    {
      id: "plan-faq-6",
      question: "Can I upgrade from 1 account to more screens later?",
      answer: "Yes. Contact us on WhatsApp or by email and tell us how many screens you need. We will tell you the options for moving to a 2, 3 or 4 Account plan."
    },
    {
      id: "plan-faq-7",
      question: "Do all plans include 4K and the TV guide?",
      answer: "Yes. Every plan, from 3 months with 1 account to 12 months with 4 accounts, includes 4K and 8K-ready streams where available, the electronic program guide, M3U and Xtream Codes logins, and support."
    },
    {
      id: "plan-faq-8",
      question: "Can I install the same account on several devices?",
      answer: "Yes. You can sign in on your TV, phone and tablet with the same login. The plan only limits how many of them can play at the same time."
    }
  ];

  const perMonth = [
    { term: "3 Months", price: "$39.99", monthly: "about $13.33", best: "Trying the service or seasonal viewing" },
    { term: "6 Months", price: "$56.99", monthly: "about $9.50", best: "Most households: lower monthly cost, shorter commitment" },
    { term: "12 Months", price: "$79.99", monthly: "about $6.67", best: "Lowest cost per month for year-round viewers" }
  ];

  const included = [
    "Live TV channels and on-demand movies and series",
    "HD, 4K and 8K-ready streams where available",
    "Electronic program guide (EPG) in US time zones",
    "M3U playlist link and Xtream Codes login",
    "Works on Fire TV, Smart TVs, Android TV, Apple TV, phones and computers",
    "Setup guides and help by WhatsApp, phone and email"
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Subscription Plans" }]}
        badges={
          <>
            <span className="badge badge-orange">Prepaid, No Contract</span>
            <span className="badge badge-emerald">Prices in USD • 1 to 4 Screens</span>
          </>
        }
        title={
          <>
            <span className="text-gradient">IPTV Subscription</span> Plans for the USA
          </>
        }
        lead="Choose an IPTV subscription for 3, 6 or 12 months and the number of screens your household needs. Every plan includes the same 4K and 8K-ready streams, US time zone TV guide and support. You pay once, with no contract and no automatic renewal."
      />

      {/* Pricing Component with all 12 Verified Prices */}
      <section className="section">
        <div className="container">
          <PricingSection />
        </div>
      </section>

      {/* What's included */}
      <section className="section section-alt">
        <div className="container split top">
          <div className="content-narrow">
            <span className="section-tag">Included</span>
            <h2>What Every IPTV Subscription Includes</h2>
            <p>
              We do not split channels into basic and premium tiers. The only differences between plans are how long they last and how many screens can play at once, so you can choose on price and household size alone.
            </p>
            <p>
              Not sure if the service fits your setup? Message us before you subscribe and tell us which TV or streaming device you use. We will tell you which player app to install and what to expect.
            </p>
          </div>
          <div className="card card-lg card-glow">
            <h3>In every plan</h3>
            <ul className="check-list compact">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Choosing a plan */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Choosing a Plan</span>
            <h2>How to Pick the Right IPTV Subscription</h2>
            <p>
              Two questions decide your plan: how many screens need to play at the same time, and how long you want to subscribe.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>How many accounts do you need?</h3>
              <ul className="dot-list">
                <li><strong>1 Account:</strong> one person, or one main TV in the home.</li>
                <li><strong>2 Accounts:</strong> a couple who watch different things, or a living room TV plus a phone.</li>
                <li><strong>3 Accounts:</strong> a family with a main TV, a bedroom TV and a tablet.</li>
                <li><strong>4 Accounts:</strong> larger households, or sports fans who follow several games at once.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Which term is best value?</h3>
              <p className="small mb-6">
                Longer terms lower the monthly cost. Here is the 1 Account price for each term, divided by the number of months:
              </p>
              <div className="table-responsive table-stack">
                <table className="styled-table" aria-label="IPTV subscription cost per month">
                  <thead>
                    <tr>
                      <th scope="col">Term</th>
                      <th scope="col">Price (1 account)</th>
                      <th scope="col">Per month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {perMonth.map((row) => (
                      <tr key={row.term}>
                        <td>{row.term}</td>
                        <td data-label="Price (1 account)"><span className="price-cell">{row.price}</span></td>
                        <td data-label="Per month">{row.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="grid-3 mt-8">
            {perMonth.map((row) => (
              <div key={row.term} className="tip">
                <h3>{row.term}</h3>
                <p>{row.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Compare</span>
            <h2>IPTV Subscription Plans Compared</h2>
            <p>Every term uses the same streaming infrastructure with no speed caps. Longer terms add priority routing and support.</p>
          </div>

          <div className="table-responsive table-stack">
            <table className="styled-table" aria-label="IPTV Subscription Plan Comparison">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">3 Months</th>
                  <th scope="col" className="col-highlight">6 Months</th>
                  <th scope="col">12 Months</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["4K & 8K-ready streaming", "Included", "Included", "Included"],
                  ["Simultaneous screens", "1, 2, 3, or 4 Accounts", "1, 2, 3, or 4 Accounts", "1, 2, 3, or 4 Accounts"],
                  ["60 fps live streams (where available)", "Included", "Included", "Included"],
                  ["US server routing", "Standard", "Priority Routing", "Highest Priority"],
                  ["Login formats", "M3U8 / Xtream Codes API", "M3U8 / Xtream Codes API", "M3U8 / Xtream Codes API"],
                  ["Electronic Program Guide (EPG)", "Included", "Included", "Included"],
                  ["Fire TV, Smart TV, Android apps", "Compatible", "Compatible", "Compatible"],
                  ["Support", "Standard", "Priority", "Priority + dedicated contact"]
                ].map(([feature, a, b, c]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td data-label="3 Months">{a}</td>
                    <td data-label="6 Months" className="col-highlight">{b}</td>
                    <td data-label="12 Months">{c}</td>
                  </tr>
                ))}
                <tr>
                  <td>Starting price (1 account)</td>
                  <td data-label="3 Months"><strong className="price-cell">$39.99</strong></td>
                  <td data-label="6 Months" className="col-highlight"><strong className="price-cell brand">$56.99</strong></td>
                  <td data-label="12 Months"><strong className="price-cell">$79.99</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How ordering works */}
      <section className="section">
        <div className="container split top">
          <div className="content-narrow">
            <span className="section-tag">Ordering</span>
            <h2>How to Subscribe to IPTV</h2>
            <p>
              Ordering takes a few minutes. Click the order button on the plan you want, send us your details, and complete payment. The payment methods we accept are shown at the bottom of every page.
            </p>
            <p>
              Your login is emailed to you once payment is confirmed (always within 24 hours, as set out in our Refund Policy). Then follow the setup guide for your device and you are ready to watch.
            </p>
          </div>
          <div className="card card-lg card-tinted">
            <h3>Four simple steps</h3>
            <ol className="step-list">
              <li><strong>Pick a term and screens</strong> using the selector above.</li>
              <li><strong>Click Order</strong> and send us your name, email and device.</li>
              <li><strong>Pay securely</strong> with one of the supported payment methods.</li>
              <li><strong>Receive your login by email</strong> and follow your device guide.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Billing Questions</span>
            <h2>IPTV Subscription FAQ</h2>
          </div>
          <FaqAccordion items={plansFaqs} withSchema={true} />
          <p className="center small muted mt-8">
            Read the full <Link href="/refund-policy" className="text-link">Refund Policy</Link> and <Link href="/terms" className="text-link">Terms of Service</Link>.
          </p>
        </div>
      </section>

      <CtaBand
        title="Need Help Setting Up Your Device?"
        text="Our guides walk you through Amazon Firestick, Samsung and LG Smart TVs, and Android TV step by step."
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
