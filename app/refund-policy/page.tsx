import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Review our clear, honest refund and cancellation terms. Learn about our evaluation period, technical support troubleshooting, and return procedures.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/refund-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | IPTVProvider8K",
    description: "Review our clear, honest refund and cancellation terms. Learn about our evaluation period, technical support troubleshooting, and return procedures.",
    url: "https://iptvprovider-8k.com/refund-policy",
    images: ["/images/og-image.jpg"],
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <>
      <PageHero
        crumbs={[{ label: "Refund Policy" }]}
        badges={<span className="badge badge-orange">Customer Protection</span>}
        title="Refund & Cancellation Policy"
      >
        <p className="page-hero-meta">
          Last Revised: {lastUpdated} | Domain: <a href="https://iptvprovider-8k.com">iptvprovider-8k.com</a>
        </p>
      </PageHero>

      <section className="section section-alt">
        <div className="container">
          <div className="prose-card">
            <div className="prose">
            <section>
              <h2>
                1. Our Commitment to Technical Satisfaction
              </h2>
              <p>
                At IPTVProvider8K, we take pride in the stability and engineering quality of our streaming architecture. We want our subscribers to have full confidence when activating a subscription. If you experience technical difficulties, our support desk is dedicated to diagnosing and resolving connection issues on your supported devices.
              </p>
            </section>

            <section>
              <h2>
                2. Evaluation Period & Refund Eligibility
              </h2>
              <p>
                You may request a full refund under the following conditions:
              </p>
              <ul>
                <li><strong>Initial Evaluation Window:</strong> Refund requests must be submitted within <strong>seven (7) calendar days</strong> of initial subscription activation.</li>
                <li><strong>Verified Technical Failure:</strong> If our engineering team is unable to establish a working connection on your supported device due to a verified server-side outage or protocol defect that cannot be rectified within 24 hours of notification.</li>
                <li><strong>Non-Delivery of Credentials:</strong> If your account credentials were not generated and dispatched within 24 hours of successful payment confirmation.</li>
              </ul>
            </section>

            <section>
              <h2>
                3. Non-Refundable Circumstances
              </h2>
              <p>
                Refunds cannot be granted under the following scenarios:
              </p>
              <ul>
                <li>Requests submitted after the 7-day initial evaluation period has elapsed.</li>
                <li>Account suspensions resulting from violations of our Terms of Service (such as unauthorized credential sharing, stream restreaming, or exceeding concurrency limits).</li>
                <li>Local network problems solely attributable to customer internet outages, inadequate home Wi-Fi signal, or ISP hardware failures where the stream functions correctly on external connections.</li>
                <li>Failure to follow device setup instructions or refusing troubleshooting assistance from our technical desk.</li>
              </ul>
            </section>

            <section>
              <h2>
                4. Step-by-Step Refund Request Procedure
              </h2>
              <ol>
                <li>
                  Visit our <Link href="/contact">Customer Support Desk</Link> or email <a href="mailto:support@streamb4.com">support@streamb4.com</a> and select &quot;Subscription Tiers & Billing&quot; as the topic.
                </li>
                <li>
                  Provide your registered email address, order transaction ID, and a brief description of the technical issue encountered.
                </li>
                <li>
                  Allow our support desk up to 1 business day to verify connection logs or propose a configuration fix.
                </li>
                <li>
                  If the issue cannot be resolved, your refund will be authorized immediately.
                </li>
              </ol>
            </section>

            <section>
              <h2>
                5. Reimbursement Processing Times
              </h2>
              <p>
                Once approved, refunds are credited back to the original method of payment within <strong>3 to 5 business days</strong>, depending on your banking institution or card issuer&apos;s settlement schedule. For refund inquiries, message via WhatsApp <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer">+212625218443</a> or email <a href="mailto:support@streamb4.com">support@streamb4.com</a>.
              </p>
            </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
