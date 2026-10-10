import React from "react";
import { Terminal, ArrowUpRight, ArrowRight, Download, ExternalLink, MapPin, Activity } from "lucide-react";

export default function Hero({ go, term, logs, cmd, setCmd, execute, resume }) {
  return (
<section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> SYSTEM ONLINE{" "}
              <span className="eyebrow-divider">/</span> AVAILABLE FOR
              OPPORTUNITIES
            </div>
            <div className="hero-path">
              C:\USERS\HILVER\PORTFOLIO&gt;{" "}
              <span className="green">run introduction.exe</span>
            </div>
            <h1>
              Hi, I'm <span className="green">Hilver.</span>
              <br />
              <span className="outline">I solve problems.</span>
              <span className="cursor">_</span>
            </h1>
            <p className="hero-desc">
              IT graduate. Technical operations leader. Hands-on problem solver.
              I build useful systems, troubleshoot what breaks, and keep
              technology running.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>
                Explore my work <ArrowUpRight size={18} />
              </button>
              <a className="secondary" href={resume} target="_blank" rel="noopener noreferrer">
                View Resume <ExternalLink size={17} />
              </a>
              <a className="secondary" href={resume} download="Hilver_Aglanao_Resume.pdf">
                Download CV <Download size={17} />
              </a>
            </div>
            <div className="hero-facts">
              <span>
                <MapPin size={15} /> Philippines
              </span>
              <span>
                <Activity size={15} /> IT Support · Infrastructure · Development
              </span>
            </div>
          </div>
          <div className="terminal-window" aria-label="Interactive terminal">
            <div className="window-bar">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>hilver@portfolio: ~/terminal</span>
              <Terminal size={16} />
            </div>
            <div className="terminal-body" ref={term}>
              <div className="ascii">
                {
                  "╔══════════════════════════════╗\n║      H I L V E R . E X E     ║\n║         SYSTEM READY         ║\n╚══════════════════════════════╝"
                }
              </div>
              {logs.map((l, i) => (
                <div key={i} className={`terminal-line ${l.kind}`}>
                  {l.text}
                </div>
              ))}
              <form
                className="terminal-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  execute(cmd);
                }}
              >
                <label htmlFor="terminal-input">visitor@hilver:~$</label>
                <input
                  id="terminal-input"
                  value={cmd}
                  onChange={(e) => setCmd(e.target.value)}
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="type a command..."
                  aria-label="Terminal command"
                />
              </form>
            </div>
            <div className="window-foot">
              <span>
                <span className="live-dot" /> interactive terminal
              </span>
              <span>UTF-8 · BASH</span>
            </div>
          </div>
        </section>
  );
}
