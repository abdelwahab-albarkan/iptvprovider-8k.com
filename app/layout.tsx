import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en-US">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <main id="main-content" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
