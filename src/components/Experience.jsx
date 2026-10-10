import React from "react";
import { Terminal, ArrowUpRight, ArrowRight, Search, Mail, Copy, Check, MapPin, Activity } from "lucide-react";

export default function Experience({ experience }) {
  return (
<section id="experience" className="section container">
          <div className="section-heading">
            <span className="section-number">02 / WORK_HISTORY.LOG</span>
            <h2>
              Experience<span className="green">.</span>
            </h2>
            <p>Where technical execution meets responsibility.</p>
          </div>
          <div className="timeline">
            {experience.map((x, i) => (
              <div className="timeline-item" key={x.role}>
                <div className="timeline-marker">0{i + 1}</div>
                <div>
                  <div className="experience-top">
                    <div>
                      <h3>{x.role}</h3>
                      <p className="company">{x.company}</p>
                    </div>
                    <span className="date">{x.date}</span>
                  </div>
                  <p className="body-copy">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  );
}
