import React from "react";
import { Terminal, ArrowUpRight, ArrowRight, Search, Mail, Copy, Check, MapPin, Activity } from "lucide-react";

export default function Skills({ skillGroups }) {
  return (
<section id="skills" className="section container">
          <div className="section-heading">
            <span className="section-number">04 / SKILLS.JSON</span>
            <h2>
              My technical <em>stack.</em>
            </h2>
            <p>Tools and capabilities I use, study, and keep improving.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div className="skill-panel" key={g.title}>
                <div className="skill-title">
                  <g.icon size={20} />
                  <span>{g.title}</span>
                </div>
                <div className="skill-items">
                  {g.items.map((x) => (
                    <span key={x}>
                      <span className="green">›</span> {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
  );
}
