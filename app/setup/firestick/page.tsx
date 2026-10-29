import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "How to Setup IPTV on Amazon Firestick",
  description: "Step-by-step tutorial on setting up IPTV on Amazon Fire TV Stick & Cube using Downloader, IPTV Smarters Pro, or TiviMate in 5 minutes.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/setup/firestick",
  },
  openGraph: {
    title: "How to Setup IPTV on Amazon Firestick | IPTVProvider8K",
    description: "Step-by-step tutorial on setting up IPTV on Amazon Fire TV Stick & Cube using Downloader, IPTV Smarters Pro, or TiviMate in 5 minutes.",
    url: "https://iptvprovider-8k.com/setup/firestick",
    images: ["/images/og-image.jpg"],
  },
};

export default function FirestickSetupPage() {
  const firestickFaqs = [
    {
      id: "fs-1",
      question: "Which player application is best for the Amazon Firestick?",
      answer: "TiviMate IPTV Player and IPTV Smarters Pro are the two most dependable applications for Fire TV. TiviMate offers an intuitive, cable-like Electronic Program Guide, while IPTV Smarters Pro is straightforward to configure using Xtream Codes API."
    },
    {
      id: "fs-2",
      question: "How do I use the search function with a Firestick remote?",
      answer: "In applications like IPTV Smarters or TiviMate, press the top or menu button on your Fire TV remote to highlight the magnifying glass (Search) icon. You can either use the on-screen virtual keyboard or use the Alexa voice button to dictate channel and program names directly."
    },
    {
      id: "fs-3",
      question: "My Firestick is buffering or freezing. How do I fix it?",
      answer: "Go to Fire TV Settings > Applications > Manage Installed Applications > select your IPTV player > Clear Cache (do not click clear data). Also, restart your Fire TV Stick by holding down the Select and Play/Pause buttons simultaneously for 5 seconds."
    },
    {
      id: "fs-4",
      question: "Do I need to keep the Downloader app after installing my player?",
      answer: "You can keep Downloader installed for future app updates. Once your IPTV player is installed and configured, you only need to open your player app for daily viewing."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Install the Official Downloader Utility",
      desc: "From your Firestick Home Screen, navigate to 'Find' > 'Search'. Type 'Downloader' and select the official orange Downloader app icon by AFTVnews from the Amazon Appstore. Click 'Get' or 'Download' to install it."
    },
    {
      num: "02",
      title: "Grant Downloader Installation Permissions",
      desc: "Go to Fire TV 'Settings' (gear icon) > 'My Fire TV' > 'Developer Options' > 'Install unknown apps'. Locate 'Downloader' in the list and toggle the permission to 'ON'. (Note: If Developer Options is hidden on newer Fire OS updates, go to Settings > My Fire TV > About, and click your device name 7 times rapidly until it says 'No need, you are already a developer')."
    },
    {
      num: "03",
      title: "Download Your Preferred IPTV Player",
      desc: "Open the Downloader app and enter the official installation code or URL for your chosen player (e.g. IPTV Smarters Pro or TiviMate). Once the APK finishes downloading, click 'Install' and then click 'Done'. You can delete the installation file to save precious Firestick storage."
    },
    {
      num: "04",
      title: "Input Your Subscription Credentials",
      desc: "Launch your IPTV player. Select 'Login with Xtream Codes API' (recommended for stability) or 'Load Your Playlist or File/URL'. Enter your Name, the Username and Password provided in your IPTVProvider8K welcome email, and the secure Server URL."
    },
    {
      num: "05",
      title: "Configure Decoder & Sync Electronic Program Guide (EPG)",
      desc: "In your player settings, select Video Player / Decoder and ensure 'Hardware' or 'Hardware+' is chosen for optimal 4K/8K 60fps decoding. Click 'Refresh EPG' to load full channel schedules and start streaming."
    }
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Supported Devices", href: "/devices" },
          { label: "Firestick Setup Guide" }
        ]}
        badges={
          <>
            <span className="badge badge-orange">Amazon Fire TV Tutorial</span>
            <span className="badge badge-emerald">Verified for Fire OS 6, 7 &amp; 8</span>
          </>
        }
        title={
          <>
            How to Setup IPTV on <span className="text-gradient">Amazon Firestick</span>
          </>
        }
        lead="Follow our verified, original walkthrough to configure IPTV on any Amazon Fire TV device (Firestick 4K, 4K Max, Fire TV Cube, or Fire TV Edition television). Total configuration time is approximately 4 to 6 minutes."
        actions={
          <>
            <Link href="/plans" className="btn btn-primary">
              Get an IPTV Subscription
            </Link>
            <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Instant WhatsApp Setup Help
            </a>
          </>
        }
        media={
          <Image
            src="/images/iptv-fire-tv-stick.jpg"
            alt="Amazon Fire TV Stick configuration interface"
            width={640}
            height={400}
            priority
            sizes="(min-width: 960px) 520px, 100vw"
          />
        }
      />

      {/* Step-by-Step Cards */}
      <section className="section">
        <div className="container">
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.num} className="step">
                <span className="step-num" aria-hidden="true">{step.num}</span>
                <div className="step-body">
                  <h2>{step.title}</h2>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Remote Control Navigation & Search Tips */}
      <section className="section section-alt">
        <div className="container">
          <div className="callout">
            <h2>Mastering Firestick Remote Navigation &amp; Search Functionality</h2>
            <p className="mb-8">
              A common challenge for new IPTV users is locating specific channels across thousands of categories. Here is how to navigate efficiently using your standard Amazon remote:
            </p>

            <div className="grid-3">
              <div className="tip">
                <h3>Universal Search</h3>
                <p>
                  Click the Search (Magnifying Glass) icon at the top of your player. Enter keywords (e.g. &apos;ESPN&apos;, &apos;HBO&apos;, or team names) to search across all live channels and on-demand titles simultaneously.
                </p>
              </div>
              <div className="tip">
                <h3>Favorites Quick-Tag</h3>
                <p>
                  While hovering over any channel, press and hold the center Select button or press the Options button (three horizontal lines) to add it to your &apos;Favorites&apos; category for instant 1-click access.
                </p>
              </div>
              <div className="tip">
                <h3>Audio &amp; Subtitles</h3>
                <p>
                  During live playback, press the Options button on your Fire TV remote to toggle alternate audio languages, surround sound feeds, or closed captions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firestick FAQ */}
      <section className="section">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Firestick FAQ</span>
            <h2>Common Firestick Questions &amp; Diagnostics</h2>
          </div>
          <FaqAccordion items={firestickFaqs} withSchema={true} />
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Need Assistance with Your Firestick?"
        text="Our technical support team is standing by to provide connection URLs, troubleshooting, and activation assistance."
      >
        <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          WhatsApp Support (+212625218443)
        </a>
        <a href="mailto:support@streamb4.com" className="btn btn-ghost">
          Email: support@streamb4.com
        </a>
      </CtaBand>
    </>
  );
}
