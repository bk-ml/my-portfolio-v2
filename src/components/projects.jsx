export default function ProjectSection() {
  return (
    <div className="card projectCard">
      <div className="projectHeader">
        <h3>Real-time Voice AI Agent (RTX 5090)</h3>
        <div className="projectLinks">
          <a
            href="https://github.com/bk-ml/qwen_megakernel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/bk-ml/qwen_megakernel/blob/master/output.wav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </div>

      <p className="muted">
        End-to-end streaming voice system: Whisper STT → Megakernel LLM → Qwen
        TTS with real-time GPU inference.
      </p>

      <div className="metricBar">
        <div className="metric">
          <span className="metricValue">1037</span>
          <span className="metricLabel">tok/s</span>
        </div>
        <div className="metric">
          <span className="metricValue">8.4×</span>
          <span className="metricLabel">vs PyTorch</span>
        </div>
        <div className="metric metricText">RTX 5090 optimized</div>
      </div>

      <div className="projectBody">
        <div className="column">
          <div className="columnLabel">Stack</div>
          <div className="tags">
            <span className="tagPrimary">CUDA</span>
            <span className="tagPrimary">FastAPI</span>
            <span className="tagPrimary">Streaming</span>
            <span className="tagPrimary">WebSockets</span>
            <span className="tagSecondary">Qwen</span>
          </div>
        </div>
        <div className="column">
          <div className="columnLabel">Highlights</div>
          <ul>
            <li>Full-duplex pipeline (Audio → STT → LLM → TTS → Audio)</li>
            <li>SSE + WebSocket streaming architecture</li>
            <li>TTS bottleneck analysis (RTF 1.84, TTFC 3675ms)</li>
            <li>Production debugging: VAD loop, model loading, proxy issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
