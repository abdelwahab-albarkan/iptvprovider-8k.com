import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "How to Setup IPTV on Android TV & Shield | Step-by-Step Guide",
  description: "Learn how to configure IPTV on Android TV, NVIDIA Shield, and Google TV devices. Instructions for TiviMate, IPTV Smarters, and XCIPTV installation.",
  alternates: {
    canonical: "https://iptvprovider-8k.com/setup/android",
  },
};

export default function AndroidSetupPage() {
  const androidFaqs = [
    {
      id: "and-1",
      question: "Why is TiviMate considered the best IPTV player on Android TV and NVIDIA Shield?",
      answer: "TiviMate was engineered specifically for Android TV OS. It features hardware-accelerated playback, multi-screen quad-viewing (watching up to 4 live sports games simultaneously), instant channel switching, customizable category grouping, and robust catch-up TV support."
    },
    {
      id: "and-2",
      question: "Can I use IPTVProvider8K on Android smartphones and tablets?",
      answer: "Yes. Simply download IPTV Smarters Pro, XCIPTV, or Televizo from the Google Play Store on your Android phone or tablet. Enter your Xtream Codes API credentials and you can stream over mobile Wi-Fi or cellular data."
    },
    {
      id: "and-3",
      question: "How do I configure surround sound on NVIDIA Shield TV?",
      answer: "Inside your Android TV IPTV player settings, navigate to Audio Decoder and enable 'Audio Passthrough' (bitstream). This sends raw Dolby Digital (AC3) or DTS audio to your AV receiver or soundbar without downmixing to stereo."
    },
    {
      id: "and-4",
      question: "What should I do if the Google Play Store says an IPTV app is not available?",
      answer: "Android allows you to sideload APK files safely. You can use the Downloader app or transfer the official APK file via a USB flash drive or local network share using a file manager app like 'X-plore'."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Open the Google Play Store on Your Android TV",
      desc: "From your Android TV, Google TV, or NVIDIA Shield home screen, launch the official Google Play Store application."
    },
    {
      num: "02",
      title: "Search & Install 'TiviMate IPTV Player' or 'IPTV Smarters Pro'",
      desc: "Use voice search or the on-screen keyboard to search for 'TiviMate IPTV Player' or 'IPTV Smarters Pro'. Click 'Install'. Both applications are verified and hosted directly on the official Google Play Store."
    },
    {
      num: "03",
      title: "Launch & Add New Playlist",
      desc: "Open the application. Click 'Add Playlist'. Select 'Xtream Codes' as your playlist type. This protocol provides the fastest channel synchronization and automatic EPG updating."
    },
    {
      num: "04",
      title: "Enter Your IPTVProvider8K Connection Details",
      desc: "Input your Server URL, Username, and Password exactly as provided in your subscription activation confirmation. Click 'Next' or 'Login'."
    },
    {
      num: "05",
      title: "Optimize Video & Audio Decoder Settings",
      desc: "In settings, verify that 'Hardware' decoding is selected. On devices with high-performance processors like the NVIDIA Shield TV, you can also enable AI upscaling in the system settings for enhanced 1080p-to-4K clarity."
    }
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Supported Devices", href: "/devices" },
          { label: "Android TV Setup Guide" }
        ]}
        badges={
          <>
            <span className="badge badge-orange">Android TV &amp; Google TV Tutorial</span>
            <span className="badge badge-emerald">NVIDIA Shield Compatible</span>
          </>
        }
        title={
          <>
            How to Setup IPTV on <span className="text-gradient">Android TV</span> &amp; NVIDIA Shield
          </>
        }
        lead="Android TV and NVIDIA Shield hardware offer the most powerful, flexible IPTV experience available today. Follow our tutorial to install TiviMate or IPTV Smarters Pro with full 8K and 4K 60fps hardware acceleration."
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
            src="/images/iptv-android-tv-setup.jpg"
            alt="Android TV and Google TV IPTV Setup"
            width={640}
            height={400}
            priority
            sizes="(min-width: 960px) 520px, 100vw"
          />
        }
      />

      {/* Step-by-Step Instructions */}
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

      {/* Supporting Visual Step */}
      <section className="section section-alt">
        <div className="container split">
          <div>
            <span className="section-tag">Dashboard Overview</span>
            <h3 className="h-section">Modern Google TV &amp; Android Interface</h3>
            <p className="mb-6">
              Once configured, your playlists load with rich graphical program guides, category browsing, and high-bitrate live video playback.
            </p>
            <p className="small muted">
              Supports voice dictation, favorite lists, and external player integration.
            </p>
          </div>
          <div className="media-frame">
            <Image
              src="/images/iptv-google-tv-dashboard.jpg"
              alt="Google TV IPTV Application Dashboard"
              width={560}
              height={340}
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="section">
        <div className="container">
          <div className="callout">
            <h2>Advanced Tips for NVIDIA Shield TV &amp; High-End Android Boxes</h2>
            <div className="grid-3 mt-8">
              <div className="tip">
                <h3>NVIDIA AI Upscaling</h3>
                <p>
                  Enable &apos;AI-Enhanced&apos; upscaling on NVIDIA Shield TV Pro. It dynamically sharpens 1080p 60fps sports broadcasts in real time, making them look near-native 4K on high-resolution displays.
                </p>
              </div>
              <div className="tip">
                <h3>Multi-Screen Viewing</h3>
                <p>
                  Using TiviMate on Android TV, hold down the Select button during playback and choose &apos;Multi-View&apos;. You can watch 2, 3, or 4 live games side-by-side simultaneously (requires multi-connection account).
                </p>
              </div>
              <div className="tip">
                <h3>Auto Frame Rate (AFR)</h3>
                <p>
                  Enable &apos;Auto Frame Rate Matching&apos; in TiviMate settings. Your TV will automatically switch refresh rate between 24Hz, 50Hz, and 60Hz to match the source video exactly, eliminating frame jitter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Android FAQ */}
      <section className="section section-alt">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Android FAQ</span>
            <h2>Common Android TV Questions</h2>
          </div>
          <FaqAccordion items={androidFaqs} withSchema={true} />
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Ready to Experience High-Bitrate Android Streaming?"
        text="Select a subscription plan and unlock high-definition live television on your Android TV or NVIDIA Shield."
      >
        <Link href="/plans" className="btn btn-primary">
          Choose a Subscription Plan
        </Link>
        <a href="https://wa.me/212625218443" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          WhatsApp Help (+212625218443)
        </a>
        <a href="mailto:support@streamb4.com" className="btn btn-ghost">
          Email: support@streamb4.com
        </a>
      </CtaBand>
    </>
  );
}
