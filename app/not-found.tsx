import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-navy on-dark center">
      <div className="container container-narrow">
        <div className="notfound-code">404</div>
        <h1>Page Not Found</h1>
        <p className="lead mb-8">
          The page you are looking for does not exist or may have been moved. Explore our core streaming resources below:
        </p>
        <div className="btn-row center stack-mobile">
          <Link href="/" className="btn btn-primary">
            Return to Homepage
          </Link>
          <Link href="/plans" className="btn btn-secondary">
            View Subscription Plans
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Support Desk
          </Link>
        </div>
      </div>
    </section>
  );
}
