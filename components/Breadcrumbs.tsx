import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iptvprovider-8k.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://iptvprovider-8k.com${item.href}` } : {})
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" style={{ marginBottom: "1.75rem" }}>
        <ol style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.5rem",
          listStyle: "none",
          fontSize: "0.85rem",
          color: "var(--text-muted)"
        }}>
          <li>
            <Link href="/" style={{ color: "var(--text-secondary)", transition: "color 0.2s ease" }}>
              Home
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span aria-hidden="true" style={{ color: "var(--text-muted)", opacity: 0.6 }}>/</span>
                {item.href && !isLast ? (
                  <Link href={item.href} style={{ color: "var(--text-secondary)" }}>
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" style={{ color: "var(--accent-orange-dark)", fontWeight: "600" }}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
