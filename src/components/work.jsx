import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WorkSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <h2 className="sectionTitle">Work</h2>

      {workData.map((item, index) => (
        <div className="card" key={item.title}>
          <h3>{item.title}</h3>

          <p>{item.summary}</p>

          <button className="linkButton" onClick={() => toggle(index)}>
            {openIndex === index ? 'Show Less ↑' : 'Read More →'}
          </button>

          {openIndex === index && (
            <div className="caseStudy">
              <h4>Overview</h4>
              <p>{item.details.overview}</p>

              <h4>Problem</h4>
              <p>{item.details.problem}</p>

              <h4>Approach</h4>
              <ul>
                {item.details.approach.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <h4>Impact</h4>
              <p>{item.details.impact}</p>

              {item.details.link && (
                <Link to={item.details.link} target="_blank">
                  View Case Study
                </Link>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

const workData = [
  {
    title: 'Social Publishing Platform (Instagram Integration)',
    summary:
      'Built a distributed publishing system integrating Instagram APIs for reliable, asynchronous content publishing at scale.',

    details: {
      overview:
        'Led end-to-end design and delivery of a social publishing system across US, Spain, and India teams, from architecture to production rollout.',

      problem:
        'Publishing required coordinating multiple external APIs, handling media constraints, authentication flows, and ensuring reliability under failure conditions.',

      approach: [
        'Designed event-driven architecture using AWS Step Functions',
        'Built async multi-step publish workflow with 202 response model',
        'Implemented idempotency, retries, and DLQ-based failure handling',
        'Designed secure token lifecycle management with DynamoDB Streams',
        'Collaborated on media security (malware checks, access control)',
        'Authored ADRs and led phased production rollout',
      ],

      impact:
        'Delivered a reliable, scalable publishing system enabling secure cross-platform Instagram integration with production-grade reliability.',
      link: '/instagram-case-study',
    },
  },

  {
    title: 'Organizer Notification Center',
    summary:
      'Built a centralized notification system to improve organizer communication and engagement tracking.',

    details: {
      overview:
        'Designed and developed a notification platform for unified communication across organizer workflows.',

      problem:
        'Fragmented notification channels led to inconsistent delivery and poor engagement visibility.',

      approach: [
        'Designed scalable notification backend for high-volume delivery',
        'Integrated Braze for messaging and analytics',
        'Built async processing pipeline for reliability and throughput',
        'Enabled A/B experimentation for messaging optimization',
      ],

      impact:
        'Improved communication reliability and enabled data-driven engagement improvements.',
    },
  },

  {
    title: 'Event-Driven Data Processing Pipeline',
    summary:
      'Designed a distributed event-driven pipeline for large-scale asynchronous data processing and integrations.',

    details: {
      overview:
        'Built a scalable pipeline for event ingestion, transformation, and downstream processing.',

      problem:
        'Existing systems lacked reliability, observability, and failure resilience at scale.',

      approach: [
        'Designed event-driven architecture using queues and streaming systems',
        'Implemented idempotent consumers with retry and backoff strategies',
        'Built observability layer (logs, metrics, alerts)',
        'Improved fault tolerance with graceful degradation patterns',
      ],

      impact:
        'Improved system reliability and enabled consistent processing of high-throughput workloads.',
    },
  },
];
