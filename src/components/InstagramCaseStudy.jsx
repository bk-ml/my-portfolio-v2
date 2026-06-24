export default function InstagramCaseStudy() {
  return (
    <section className="caseStudy">
      <h1 className="caseStudyTitle">
        Social Publishing Platform{' '}
        <span className="highlight">(Instagram Integration)</span>
      </h1>

      <p className="caseStudySubtitle">
        End-to-end ownership of a scalable, asynchronous publishing system
        integrating with external APIs, handling security, reliability, and
        cross-team execution.
      </p>

      {/* OVERVIEW */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Overview</h2>
        <p className="caseStudyText">
          Owned and delivered a social publishing platform enabling users to
          share content directly to Instagram. Led the project from requirement
          clarification and POC to production rollout, collaborating across
          multiple teams (US frontend, Spain backend owners).
        </p>
      </div>

      {/* MY ROLE */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">My Role</h2>
        <ul className="caseStudyList">
          <li>Sole backend owner of the project</li>
          <li>Drove requirement discussions with product stakeholders</li>
          <li>Designed system architecture and APIs</li>
          <li>Authored ADRs and technical proposals</li>
          <li>Led cross-team collaboration across regions</li>
        </ul>
      </div>

      {/* PROBLEM */}
      <div className="caseStudySection caseStudySection--emphasis">
        <h2 className="caseStudySectionTitle">Problem</h2>
        <p className="caseStudyText">
          Publishing content to Instagram required coordinating multiple
          external APIs, handling strict media constraints, ensuring secure
          token management, and maintaining system reliability. A synchronous
          approach led to poor user experience and fragile integrations.
        </p>
      </div>

      {/* SYSTEM DESIGN */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">System Design</h2>
        <ul className="caseStudyList">
          <li>Designed scalable API architecture for publishing workflows</li>
          <li>Defined database schema for tracking publish states</li>
          <li>Handled multi-step orchestration across 5–6 external APIs</li>
          <li>Ensured idempotency and consistency across retries</li>
        </ul>
      </div>

      {/* ASYNC */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Asynchronous Processing</h2>
        <p className="caseStudyText">
          Converted the publishing flow into an asynchronous pipeline to improve
          user experience and system reliability.
        </p>
        <ul className="caseStudyList">
          <li>Returned HTTP 202 responses for non-blocking UX</li>
          <li>Used Step Functions for orchestration</li>
          <li>Implemented retry and failure handling mechanisms</li>
        </ul>
      </div>

      {/* SECURITY */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Security & Token Management</h2>
        <ul className="caseStudyList">
          <li>Handled access token lifecycle securely</li>
          <li>Integrated DynamoDB Streams for token refresh workflows</li>
          <li>Collaborated with security teams for compliance</li>
        </ul>
      </div>

      {/* MEDIA */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Media Handling Challenges</h2>
        <p className="caseStudyText">
          Instagram APIs required media to be publicly accessible, introducing
          security risks.
        </p>
        <ul className="caseStudyList">
          <li>Enabled controlled public access for media assets</li>
          <li>Addressed malware and security concerns</li>
        </ul>
      </div>

      {/* COLLAB */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Cross-Team Collaboration</h2>
        <ul className="caseStudyList">
          <li>Worked with Spain team (backend repo owners)</li>
          <li>Partnered with US team for frontend integration</li>
          <li>Coordinated testing and release across teams</li>
          <li>Regular stakeholder updates and alignment</li>
        </ul>
      </div>

      {/* DECISIONS */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Key Technical Decisions</h2>
        <ul className="caseStudyList">
          <li>Move from synchronous → asynchronous processing</li>
          <li>Use orchestration over direct API chaining</li>
          <li>Design for idempotency and failure recovery</li>
        </ul>
      </div>

      {/* IMPACT */}
      <div className="caseStudySection caseStudySection--emphasis">
        <h2 className="caseStudySectionTitle">Impact</h2>
        <ul className="caseStudyList">
          <li>Delivered a reliable and scalable publishing system</li>
          <li>Improved user experience with async workflows</li>
          <li>Enabled secure integration with external platforms</li>
          <li>Successfully executed cross-team delivery as primary owner</li>
        </ul>
      </div>

      {/* LEARNINGS */}
      <div className="caseStudySection">
        <h2 className="caseStudySectionTitle">Key Learnings</h2>
        <ul className="caseStudyList">
          <li>Designing resilient systems for unreliable external APIs</li>
          <li>Balancing security with platform constraints</li>
          <li>Driving alignment across distributed teams</li>
        </ul>
      </div>

      {/* BACK */}
      <div className="caseStudyBack">
        <a href="/">← Back to Work</a>
      </div>
    </section>
  );
}
