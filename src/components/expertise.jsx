export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <h2 className="sectionTitle">Expertise</h2>

      <div className="appleGrid">
        <div className="appleCard">
          <h4>Distributed Systems & Architecture</h4>
          <p className="desc">
            Designing scalable, fault-tolerant systems handling high-throughput
            event processing and complex workflows.
          </p>
          <div className="tags">
            <span>Event-Driven Systems</span>
            <span>Scalability</span>
            <span>HLD / LLD</span>
            <span>System Design</span>
          </div>
        </div>

        <div className="appleCard">
          <h4>Backend Engineering</h4>
          <p className="desc">
            Building high-performance APIs and services optimized for latency,
            reliability, and large-scale traffic.
          </p>
          <div className="tags">
            <span>Node.js</span>
            <span>Python</span>
            <span>Go</span>
            <span>REST</span>
            <span>Microservices</span>
          </div>
        </div>

        <div className="appleCard">
          <h4>Cloud & Infrastructure</h4>
          <p className="desc">
            Operating distributed cloud systems with focus on reliability,
            observability, and async processing.
          </p>
          <div className="tags">
            <span>AWS</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>Kafka</span>
            <span>Redis</span>
          </div>
        </div>

        <div className="appleCard">
          <h4>Frontend & Performance Engineering</h4>
          <p className="desc">
            Building performant, scalable UI systems with focus on rendering
            efficiency and user experience at scale.
          </p>
          <div className="tags">
            <span>React</span>
            <span>Next.js</span>
            <span>Performance Optimization</span>
            <span>Frontend Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
