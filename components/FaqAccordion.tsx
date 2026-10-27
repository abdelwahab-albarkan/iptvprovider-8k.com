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
      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.id} className={`faq-item${isOpen ? " is-open" : ""}`}>
              <h3 className="faq-heading">
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
              </h3>

              {/* Answer stays in the DOM for crawlers; closed panels are hidden */}
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="faq-panel"
                hidden={!isOpen}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
