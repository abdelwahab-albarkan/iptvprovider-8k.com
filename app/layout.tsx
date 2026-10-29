import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
    default: "IPTV Provider USA | 8K & 4K Streaming | IPTVProvider8K",
    template: "%s | IPTVProvider8K"
  },
  description: "High-performance IPTV streaming in the United States. Reliable 8K UHD and 4K playback, fast US server routing, and complete setup guides for all devices.",
  alternates: {
    canonical: "https://iptvprovider-8k.com",
  },
  openGraph: {
    title: "IPTV Provider USA | 8K & 4K Streaming | IPTVProvider8K",
    description: "High-performance IPTV streaming in the United States. Fast US server routing, 8K/4K compatibility, and comprehensive setup guides.",
    url: "https://iptvprovider-8k.com",
    siteName: "IPTVProvider8K",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPTVProvider8K - High Performance 8K & 4K IPTV Streaming Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Provider USA | 8K & 4K Streaming | IPTVProvider8K",
    description: "High-performance IPTV streaming in the United States. Fast US server routing and 8K/4K compatibility.",
    images: ["/images/og-image.jpg"],
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
    <html lang="en-US" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply the saved (or system) theme before first paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
