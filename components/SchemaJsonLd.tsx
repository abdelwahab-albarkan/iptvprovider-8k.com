import React from "react";

interface SchemaJsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function SchemaJsonLd({ data }: SchemaJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
