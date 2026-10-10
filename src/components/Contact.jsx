import React from "react";
import {
  Terminal,
  ArrowUpRight,
  ArrowRight,
  Search,
  Mail,
  Copy,
  Check,
  MapPin,
  Activity,
} from "lucide-react";

export default function Contact({ email, copied, copyEmail, profile }) {
  return (
    <section id="contact" className="section container">
      <div className="contact-panel">
        <div className="section-number">05 / CONNECT.SH</div>
        <div className="contact-layout">
          <div>
            <h2>
              Let's build
              <br />
              <em>something useful.</em>
            </h2>
            <p>
              Looking for someone who can troubleshoot, adapt, and get things
              done? I'd love to connect.
            </p>
            <div className="contact-actions">
              <a
                className="primary"
                href={`mailto:${email}?subject=Opportunity%20for%20Hilver%20Aglanao`}
              >
                Get in touch <Mail size={17} />
              </a>
              <button className="secondary" onClick={copyEmail}>
                {copied ? "Copied!" : "Copy email"}{" "}
                {copied ? <Check size={17} /> : <Copy size={17} />}
              </button>
            </div>
          </div>
          <div className="contact-terminal">
            <span className="green">$ ./connect.sh</span>
            <p>Initiating professional connection...</p>
            <p>
              <span className="green">✓</span> Communication ready
            </p>
            <p>
              <span className="green">✓</span> Open to opportunities
            </p>
            <p>
              <span className="green">✓</span> Ready to collaborate
            </p>
            <div className="contact-links">
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={15} />
                </a>
              )}
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
