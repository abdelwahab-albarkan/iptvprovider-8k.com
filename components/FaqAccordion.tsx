"use client";

import React, { useState } from "react";
import SchemaJsonLd from "./SchemaJsonLd";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  withSchema?: boolean;
}

export default function FaqAccordion({ items, withSchema = false }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = withSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    : null;

  return (
    <>
      {faqSchema && <SchemaJsonLd data={faqSchema} />}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id}
              className="card"
              style={{
                padding: "0",
                borderColor: isOpen ? "var(--border-highlight)" : "var(--border-subtle)",
                background: isOpen ? "var(--bg-orange-soft)" : "var(--bg-card)",
                transition: "all 0.25s ease"
              }}
            >
              <button
                type="button"
                id={`faq-btn-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => toggle(index)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "1.25rem 1.75rem",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  color: isOpen ? "var(--accent-orange-dark)" : "var(--text-primary)",
                  fontWeight: "700",
                  fontSize: "1.05rem"
                }}
              >
                <span>{item.question}</span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: isOpen ? "var(--accent-orange)" : "var(--bg-secondary)",
                    color: isOpen ? "#ffffff" : "var(--text-muted)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all 0.25s ease",
                    flexShrink: 0
                  }}
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  style={{
                    padding: "0 1.75rem 1.5rem 1.75rem",
                    borderTop: "1px solid rgba(249, 115, 22, 0.15)",
                    marginTop: "-0.25rem",
                    paddingTop: "1rem"
                  }}
                >
                  <p style={{ fontSize: "0.975rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
