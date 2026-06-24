import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkSection from './components/work';
import InstagramCaseStudy from './components/InstagramCaseStudy';
import ExperienceSection from './components/experience';
import ProjectSection from './components/projects';
import './App.css';

export default function App() {
  return (
    <Router basename="/my-portfolio-v2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instagram-case-study" element={<InstagramCaseStudy />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      {/* NAV */}
      <nav className="nav">
        <div className="navLeft">
          <div className="logo">Bhawna Kochhar</div>
          <div className="role">Senior Software Engineer</div>
        </div>

        <div className="navRight">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="cta">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO (cleaned + structured) */}
      <section className="hero">
        <div className="heroTop">
          <h1>Senior Software Engineer</h1>

          <h1>
            Building <span className="highlight">scalable</span>,{' '}
            <span className="highlight">reliable</span>, and{' '}
            <span className="highlight">maintainable systems</span>
          </h1>
        </div>

        <h2>Backend • Distributed Systems • Full Stack • AI Systems</h2>

        <p className="heroDesc">
          I design and scale event-driven systems processing millions of events
          daily, with strong guarantees around reliability, latency, and fault
          tolerance.
        </p>
      </section>

      {/* WORK */}
      <section id="work" className="section">
        <WorkSection />
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="section">
        <h2 className="sectionTitle">Expertise</h2>

        <div className="tags">
          <span>Distributed Systems</span>
          <span>System Design (HLD/LLD)</span>
          <span>Microservices Architecture</span>
          <span>Event-Driven Architecture</span>
          <span>Node.js</span>
          <span>Go</span>
          <span>AWS</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>Kafka / Message Queues</span>
          <span>Redis & Caching</span>
          <span>Database Design</span>
          <span>API Design (REST/gRPC)</span>
          <span>React</span>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <ExperienceSection />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <ProjectSection />
      </section>

      {/* RESUME */}
      <section id="resume" className="section">
        <h2 className="sectionTitle">Resume</h2>

        <a
          className="btn"
          href="/my-portfolio-v2/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="sectionTitle">Contact</h2>

        <p>
          Email:{' '}
          <a href="mailto:bhawnakochhar2@gmail.com">bhawnakochhar2@gmail.com</a>
        </p>

        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/bhawnakochhar"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/bhawnakochhar
          </a>
        </p>

        <p>
          GitHub:{' '}
          <a
            href="https://github.com/bk-ml"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/bk-ml
          </a>
        </p>
      </section>
    </div>
  );
}
