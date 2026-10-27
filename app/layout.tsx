import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ea580c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvprovider-8k.com"),
  title: {
    default: "IPTVProvider8K | Premium IPTV Service & Provider USA",
    template: "%s | IPTVProvider8K"
  },
  description: "High-performance IPTV streaming in the United States. Reliable 8K UHD and 4K playback, low-latency US server routing, and complete setup guides for Firestick, Smart TVs, and Android.",
  alternates: {
    canonical: "https://iptvprovider-8k.com",
  },
  openGraph: {
    title: "IPTVProvider8K | Premium IPTV Service & Provider USA",
    description: "High-performance IPTV streaming in the United States. Fast US server routing, 8K/4K compatibility, and comprehensive setup guides.",
    url: "https://iptvprovider-8k.com",
    siteName: "IPTVProvider8K",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTVProvider8K | Premium IPTV Service & Provider USA",
    description: "High-performance IPTV streaming in the United States. 8K UHD & 4K compatible streaming service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
