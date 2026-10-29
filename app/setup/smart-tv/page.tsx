import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Setup IPTV on Smart TVs (Samsung & LG)",
  description: "Step-by-step tutorial on installing IPTV on Samsung Tizen and LG webOS Smart TVs. Learn how to configure IPTV Smarters Pro and optimize 4K playback.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/setup/smart-tv",
  },
  openGraph: {
    title: "Setup IPTV on Smart TVs (Samsung & LG) | IPTVProvider8K",
    description: "Step-by-step tutorial on installing IPTV on Samsung Tizen and LG webOS Smart TVs. Learn how to configure IPTV Smarters Pro and optimize 4K playback.",
    url: "https://iptvprovider-8k.com/setup/smart-tv",
    images: ["/images/og-image.jpg"],
  },
};

export default function SmartTvSetupPage() {
  const smartTvFaqs = [
    {
      id: "tv-1",
      question: "Can I install IPTV Smarters Pro directly from the Samsung TV App Store?",
      answer: "Yes. On most Samsung Smart TVs manufactured from 2018 onwards (running Tizen OS), you can open the official Samsung App Store, search for 'IPTV Smarters Pro' or 'Smarters Player Lite', and download it directly without sideloading or USB sticks."
    },
    {
      id: "tv-2",
      question: "What should I do if IPTV Smarters is not available in my LG Content Store region?",
      answer: "If IPTV Smarters is restricted by your television's regional storefront, alternative verified player applications available in the LG Content Store include 'IBO Player', 'Nanomid Player', and 'Smart STB'. All of these support M3U and Xtream Codes API."
    },
    {
      id: "tv-3",
      question: "Why do high-bitrate 4K streams occasionally stutter on Smart TVs?",
      answer: "Built-in smart TV processors have limited memory compared to dedicated streaming hardware like the Apple TV or Firestick 4K Max. To ensure smooth playback, connect your TV via 5 GHz Wi-Fi or wired Ethernet, clear other background TV apps, and set your IPTV player buffer size to 'Medium' or '3 seconds'."
    },
    {
      id: "tv-4",
      question: "Does configuring IPTV on a Smart TV void the manufacturer warranty?",
      answer: "No. You are simply downloading an authorized media player application from the official Samsung or LG TV app store. It has zero impact on your manufacturer hardware warranty."
    }
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Supported Devices", href: "/devices" },
          { label: "Smart TV Setup Guide" }
        ]}
        badges={
          <>
            <span className="badge badge-orange">Samsung Tizen &amp; LG webOS Guide</span>
            <span className="badge badge-emerald">Direct App Store Playback</span>
          </>
        }
        title={
          <>
            How to Setup IPTV on <span className="text-gradient">Smart TVs</span> (Samsung &amp; LG)
          </>
        }
        lead="Enjoy seamless television streaming directly on your smart TV without external cables, dongles, or second remotes. Follow our step-by-step instructions for Samsung (Tizen OS) and LG (webOS) televisions."
        actions={
          <>
            <Link href="/plans" className="btn btn-primary">
              View Subscription Plans
            </Link>
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Support (+212625218443)
            </a>
          </>
        }
        media={
          <Image
            src="/images/iptv-samsung-tv-setup.jpg"
            alt="Samsung Smart TV IPTV Setup"
            width={640}
            height={400}
            priority
            sizes="(min-width: 960px) 520px, 100vw"
          />
        }
      />

      {/* Platform Specific Guides Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {/* Samsung TV Guide */}
            <div className="card card-glow card-lg">
              <div className="heading-icon">
                <span className="icon-box">S</span>
                <div>
                  <h2 className="h-card">Samsung Smart TV (Tizen)</h2>
                  <span className="small muted">Models 2018 to Present</span>
                </div>
              </div>

              <ol className="step-list">
                <li>
                  <strong>Open Samsung App Store:</strong> Press the Smart Hub button on your Samsung remote and navigate to &apos;Apps&apos;.
                </li>
                <li>
                  <strong>Search for Player:</strong> Search for &apos;IPTV Smarters Pro&apos; or &apos;Smarters Player Lite&apos;. Click &apos;Install&apos;.
                </li>
                <li>
                  <strong>Open &amp; Accept Terms:</strong> Launch the installed application and accept the standard software license agreement.
                </li>
                <li>
                  <strong>Login via Xtream API:</strong> Select &apos;Login with Xtream Codes API&apos;. Enter your username, password, and the server URL provided by IPTVProvider8K.
                </li>
                <li>
                  <strong>Load Channels:</strong> Click &apos;Add User&apos;. Your live categories, EPG TV guide, and video streams will populate automatically.
                </li>
              </ol>
            </div>

            {/* LG TV Guide */}
            <div className="card card-glow card-lg">
              <div className="heading-icon">
                <span className="icon-box">LG</span>
                <div>
                  <h2 className="h-card">LG Smart TV (webOS)</h2>
                  <span className="small muted">webOS 3.5 to webOS 23</span>
                </div>
              </div>

              <ol className="step-list">
                <li>
                  <strong>Launch LG Content Store:</strong> Press the Home button on your LG Magic Remote and select the &apos;LG Content Store&apos;.
                </li>
                <li>
                  <strong>Locate IPTV App:</strong> Search for &apos;IPTV Smarters Pro&apos; or &apos;IBO Player&apos;. Click &apos;Install&apos;.
                </li>
                <li>
                  <strong>Select Connection Type:</strong> If using IPTV Smarters, choose &apos;Xtream Codes API&apos;. If using IBO Player, note the Device MAC address displayed on the screen.
                </li>
                <li>
                  <strong>Configure Playlist:</strong> Input your assigned IPTVProvider8K streaming credentials or provide your MAC to our support team for automatic provisioning.
                </li>
                <li>
                  <strong>Enjoy Big-Screen TV:</strong> Navigate using the LG Magic Remote pointer to easily select sports, news, and cinema channels.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Visual Step */}
      <section className="section section-alt">
        <div className="container split">
          <div>
            <span className="section-tag">Direct App Store</span>
            <h3 className="h-section">Finding the App on Samsung Tizen</h3>
            <p className="mb-6">
              Simply navigate to the search bar within your television&apos;s app store. The application installs in seconds and requires no external storage or side-loading USB devices.
            </p>
            <p className="small muted">
              Compatible with standard Samsung Smart Remote and voice search.
            </p>
          </div>
          <div className="media-frame">
            <Image
              src="/images/iptv-samsung-app-store.jpg"
              alt="Samsung Smart TV App Store Search for IPTV Smarters"
              width={560}
              height={340}
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Smart TV Performance Optimization Advice */}
      <section className="section">
        <div className="container">
          <div className="callout">
            <h2>Performance Optimization Tips for Smart TV Streaming</h2>
            <div className="grid-3 mt-8">
              <div className="tip">
                <h3>Prefer 5 GHz Wi-Fi</h3>
                <p>
                  Older 2.4 GHz Wi-Fi channels are heavily congested in residential buildings. Connect your television to your router&apos;s 5 GHz band for reliable 25+ Mbps throughput required for 4K.
                </p>
              </div>
              <div className="tip">
                <h3>Adjust Stream Buffer</h3>
                <p>
                  Inside IPTV Smarters settings, navigate to &apos;Player Settings&apos; and adjust the buffer size to 2–3 seconds. This buffers sufficient frames to withstand brief Wi-Fi latency spikes.
                </p>
              </div>
              <div className="tip">
                <h3>Reboot Periodically</h3>
                <p>
                  Smart TVs run background tasks that accumulate RAM usage. Holding down the Power button on your remote for 5 seconds triggers a full cold reboot and purges cached system memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart TV FAQ */}
      <section className="section section-alt">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Smart TV Inquiries</span>
            <h2>Frequently Asked Questions: Smart TV IPTV</h2>
          </div>
          <FaqAccordion items={smartTvFaqs} withSchema={true} />
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Have Questions About Your Television Model?"
        text="Our setup specialists are ready to help you configure your specific Samsung or LG model."
      >
        <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          WhatsApp (+212625218443)
        </a>
        <a href="mailto:support@streamb4.com" className="btn btn-ghost">
          Email: support@streamb4.com
        </a>
      </CtaBand>
    </>
  );
}
