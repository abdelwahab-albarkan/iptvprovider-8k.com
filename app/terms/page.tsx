import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | IPTVProvider8K Subscription Conditions",
  description: "Read the IPTVProvider8K Terms of Service. Service conditions, acceptable use policies, credential security, and intellectual property disclosures.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "October 2026";

  return (
    <>
      <PageHero
        crumbs={[{ label: "Terms of Service" }]}
        badges={<span className="badge badge-orange">Service Agreement</span>}
        title="Terms of Service"
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
                1. Acceptance of Terms
              </h2>
              <p>
                By ordering, activating, or utilizing services provided through IPTVProvider8K (&quot;we&quot;, &quot;our&quot;, or &quot;the Service&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any portion of these conditions, you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2>
                2. Scope of Service & Content Transmission
              </h2>
              <p>
                IPTVProvider8K provides access to internet protocol streaming endpoints (including M3U8 playlists, Xtream Codes API, and HLS transmission). We distribute media streams that we are legally authorized to transmit. We do not manufacture hardware or develop proprietary player software; users connect using third-party media players of their choice.
              </p>
            </section>

            <section>
              <h2>
                3. Account Security & Concurrency Limits
              </h2>
              <ul>
                <li>Your subscription credentials (Username, Password, and M3U URL) are strictly for personal, household use. Sharing or publishing credentials on public forums is prohibited.</li>
                <li>Each subscription plan entitles you to the specific number of concurrent active accounts purchased (1, 2, 3, or 4 simultaneous streams). Attempting to stream simultaneously on more devices than authorized by your selected plan tier will cause stream termination or automated connection limits.</li>
              </ul>
            </section>

            <section>
              <h2>
                4. Acceptable Use Policy (AUP)
              </h2>
              <p>
                You agree not to engage in any of the following restricted activities:
              </p>
              <ul>
                <li>Re-streaming, redistributing, or broadcasting streams to third parties or commercial venues without an authorized enterprise license.</li>
                <li>Executing automated scraping scripts, denial-of-service attempts, or vulnerability scans against our server infrastructure.</li>
                <li>Reselling subscription accounts or credentials without a formalized partnership contract.</li>
              </ul>
            </section>

            <section>
              <h2>
                5. Intellectual Property & Third-Party Trademarks
              </h2>
              <p>
                All third-party trademarks, logos, brand names, and hardware references (such as Amazon Fire TV, Samsung, LG, Android, Apple TV, Kodi, and TiviMate) are the exclusive property of their respective trademark holders. Mention of these trademarks on our website is purely for hardware compatibility identification and educational setup instructions.
              </p>
            </section>

            <section>
              <h2>
                6. Service Continuity & Disclaimer of Warranties
              </h2>
              <p>
                While we maintain 99.9% target server uptime through redundant edge nodes, internet streaming depends on factors beyond our direct control, including your local ISP routing, Wi-Fi interference, and third-party telecom transit lines. Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without implied warranties of fitness for a specific purpose.
              </p>
            </section>

            <section>
              <h2>
                7. Modifications to Agreement
              </h2>
              <p>
                We reserve the right to revise these Terms of Service periodically to reflect operational, legal, or regulatory updates. Continued use of the service following publication of revisions constitutes acceptance of the modified terms. Inquiries regarding terms may be directed to our <Link href="/contact">Customer Support Desk</Link> or via email to <a href="mailto:support@streamb4.com">support@streamb4.com</a>.
              </p>
            </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
