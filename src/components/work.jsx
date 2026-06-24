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

      {/* CASE STUDY 1 — STRONGEST */}
      <div className="card">
        <h3>Social Publishing Platform (Instagram Integration)</h3>

        <p>
          Built and owned a scalable social publishing system integrating with
          Instagram APIs, enabling secure and reliable asynchronous content
          sharing.
        </p>

        <button onClick={() => toggle(0)} className="linkButton">
          {openIndex === 0 ? 'Show Less ↑' : 'Read More →'}
        </button>

        {openIndex === 0 && (
          <div className="caseStudy">
            <h4>Overview</h4>
            <p>
              Led end-to-end development from requirement analysis and POC to
              production rollout, collaborating across US and Spain teams.
            </p>

            <h4>Problem</h4>
            <p>
              Publishing content required coordinating multiple external APIs,
              handling media constraints, token security, and ensuring
              reliability at scale.
            </p>

            <h4>Approach</h4>
            <ul>
              <li>Designed API architecture and database schema</li>
              <li>
                Built async workflows using Step Functions (202 response model)
              </li>
              <li>Orchestrated multi-step publish flow across 5–6 APIs</li>
              <li>Implemented retries, idempotency, and failure handling</li>
              <li>Used DynamoDB Streams for token lifecycle management</li>
              <li>
                Handled secure token storage with security team collaboration
              </li>
              <li>
                Enabled safe public media handling with malware considerations
              </li>
              <li>Authored ADRs and drove phased rollout</li>
              <li>Collaborated with US (frontend) and Spain (backend) teams</li>
            </ul>

            <h4>Impact</h4>
            <p>
              Delivered a scalable and reliable publishing system with improved
              user experience and strong cross-team execution as the primary
              owner.
            </p>
            <p className="deepDive">
              Want the full breakdown? This project involved end-to-end
              ownership, cross-team collaboration, and complex async system
              design.
            </p>

            <Link to="/instagram-case-study" target="_blank">
              View Case Study
            </Link>
          </div>
        )}
      </div>

      {/* CASE STUDY 2 */}
      <div className="card">
        <h3>Organizer Notification Center</h3>

        <p>
          Built a scalable notification system enabling reliable communication,
          engagement tracking, and experimentation.
        </p>

        <button onClick={() => toggle(1)} className="linkButton">
          {openIndex === 1 ? 'Show Less ↑' : 'Read More →'}
        </button>

        {openIndex === 1 && (
          <div className="caseStudy">
            <h4>Overview</h4>
            <p>
              Developed a centralized notification system to improve organizer
              communication and engagement.
            </p>

            <h4>Problem</h4>
            <p>
              Lack of unified communication led to missed updates and low
              engagement.
            </p>

            <h4>Approach</h4>
            <ul>
              <li>Designed backend services for notification delivery</li>
              <li>Built async workflows for high-volume processing</li>
              <li>Integrated messaging and analytics systems</li>
              <li>Enabled A/B experimentation</li>
            </ul>

            <h4>Impact</h4>
            <p>
              Established a reliable communication channel and enabled
              data-driven product improvements.
            </p>
          </div>
        )}
      </div>

      {/* CASE STUDY 3 */}
      <div className="card">
        <h3>Event-Driven Data Processing Pipeline</h3>

        <p>
          Designed a high-throughput event-driven system for processing and
          orchestrating asynchronous workflows at scale.
        </p>

        <button onClick={() => toggle(2)} className="linkButton">
          {openIndex === 2 ? 'Show Less ↑' : 'Read More →'}
        </button>

        {openIndex === 2 && (
          <div className="caseStudy">
            <h4>Overview</h4>
            <p>
              Built a distributed pipeline for large-scale event ingestion,
              transformation, and downstream integrations.
            </p>

            <h4>Problem</h4>
            <p>
              Existing systems struggled with reliability, scale, and failure
              handling in async workflows.
            </p>

            <h4>Approach</h4>
            <ul>
              <li>Designed event-driven architecture using queues/streams</li>
              <li>Implemented idempotent consumers and retry mechanisms</li>
              <li>Added observability with logging, metrics, and alerts</li>
              <li>Improved fault tolerance with graceful failure handling</li>
            </ul>

            <h4>Impact</h4>
            <p>
              Improved reliability and scalability, enabling consistent
              processing of high-volume workloads.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
