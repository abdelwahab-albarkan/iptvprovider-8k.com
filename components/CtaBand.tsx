import React from "react";

interface CtaBandProps {
  title: React.ReactNode;
  text?: React.ReactNode;
  children: React.ReactNode;
}

export default function CtaBand({ title, text, children }: CtaBandProps) {
  return (
    <section className="cta-band bg-navy on-dark">
      <div className="container">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <div className="btn-row center stack-mobile">{children}</div>
      </div>
    </section>
  );
}
