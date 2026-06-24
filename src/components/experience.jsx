import { useState } from 'react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2 className="sectionTitle">Experience</h2>

      <AccordionCard
        title="Senior Software Engineer"
        company="Eventbrite"
        duration="Sep 2025 – Apr 2026"
        summary="Built distributed event-driven systems processing millions of events daily."
        details={[
          'Notification Center with Braze (200K+ impressions)',
          'Event-driven AWS architecture',
          'ETL pipelines with retries + idempotency',
          'Improved observability (Datadog → CloudWatch)',
        ]}
      />

      <AccordionCard
        title="Software Engineer II"
        company="Eventbrite"
        duration="Jul 2023 – Sep 2025"
        summary="Improved performance and scalability of high-traffic consumer surfaces."
        details={[
          'Improved Core Web Vitals (LCP)',
          '700K+ conversions from category revamp',
          'Built scalable React + API systems',
        ]}
      />

      <AccordionCard
        title="Full Stack Engineer"
        company="iTinker"
        duration="May 2021 – Jul 2023"
        summary="Scaled platform to 100K+ users and optimized backend performance."
        details={[
          'Reduced DB load by 35% using Redis',
          'Built fintech payment systems',
          'Designed microservices + AWS infra',
        ]}
      />
    </section>
  );
}

/* ---------------- ACCORDION ---------------- */

function AccordionCard({ title, company, duration, summary, details }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="expCard" onClick={() => setOpen(!open)}>
      {/* make FULL header clickable */}
      <div className="expHeader">
        <div>
          <h3 className="title_company">
            {title} · <span className="company">{company}</span>
          </h3>
          <span className="duration">{duration}</span>
        </div>

        <div className="chevron">{open ? '▲' : '▼'}</div>
      </div>

      <p className="summary">{summary}</p>

      {!open && (
        <span className="expandHint">+{details.length} key achievements</span>
      )}

      {open && (
        <ul className="details">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
