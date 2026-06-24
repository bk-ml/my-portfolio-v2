import { useState } from 'react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2 className="sectionTitle">Experience</h2>

      {experienceData.map((exp) => (
        <AccordionCard key={exp.title} {...exp} />
      ))}
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

const experienceData = [
  {
    title: 'Senior Software Engineer',
    company: 'Eventbrite',
    duration: 'Sep 2025 – Apr 2026',
    summary:
      'Designed and operated distributed event-driven systems handling high-throughput workflows with strong reliability, latency, and fault tolerance guarantees.',
    details: [
      'Built Social Publishing Platform with Instagram integration, enabling end-to-end post publishing workflows',
      'Built Notification Center with Braze integration (200K+ impressions, ~6% CTR, ~14% for critical flows)',
      'Designed AWS event-driven architecture for near real-time event processing at scale',
      'Built asynchronous ETL pipelines with idempotency, retries, and failure recovery guarantees',
      'Improved system observability by migrating Datadog → CloudWatch and integrating PagerDuty for incident response',
    ],
  },

  {
    title: 'Software Engineer II',
    company: 'Eventbrite',
    duration: 'Jul 2023 – Sep 2025',
    summary:
      'Improved performance, scalability, and user engagement across high-traffic consumer surfaces and frontend systems.',
    details: [
      'Improved Core Web Vitals (LCP) via SSR caching and rendering optimization',
      'Led category page revamp (Dating, Independence Day) driving 700K+ page-level and 65K+ collection-level conversions',
      'Built reusable React component system used across multiple product surfaces',
      'Developed scalable REST APIs supporting high-traffic consumer experiences',
    ],
  },

  {
    title: 'Full Stack Engineer',
    company: 'iTinker',
    duration: 'May 2021 – Jul 2023',
    summary:
      'Built and scaled full-stack fintech and consumer platforms to 100K+ users with focus on performance and backend scalability.',
    details: [
      'Scaled platform to 100K+ users within first month of launch',
      'Reduced database load by 35% using Redis caching strategies',
      'Designed fintech payment and transaction workflows handling high-volume traffic',
      'Built microservices architecture using Node.js and Go on AWS infrastructure',
      'Implemented Elasticsearch-based search and indexing for fast query performance',
    ],
  },

  {
    title: 'Full Stack Developer Intern',
    company: 'iTinker',
    duration: 'Feb 2021 – Apr 2023',
    summary:
      'Developed and maintained full-stack features across web applications and internal admin systems.',
    details: [
      'Built and maintained responsive web application with backend APIs',
      'Improved admin panel performance and usability',
      'Worked on frontend + backend feature development in production systems',
    ],
  },
];
