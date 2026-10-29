import React from "react";
import Breadcrumbs, { type BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  crumbs: BreadcrumbItem[];
  badges?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  actions?: React.ReactNode;
  media?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHero({ crumbs, badges, title, lead, actions, media, children }: PageHeroProps) {
  return (
    <section className="page-hero bg-hero">
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className={`page-hero-grid${media ? " has-media" : ""}`}>
          <div className="page-hero-copy">
            {badges && <div className="badge-row">{badges}</div>}
            <h1>{title}</h1>
            {lead && <p className="lead">{lead}</p>}
            {children}
            {actions && <div className="btn-row stack-mobile">{actions}</div>}
          </div>
          {media && <div className="hero-media"><div className="hero-frame">{media}</div></div>}
        </div>
      </div>
    </section>
  );
}
