import React from "react";
import { Terminal, ArrowUpRight, ArrowRight, Search, Mail, Copy, Check, MapPin, Activity } from "lucide-react";

export default function About({ go }) {
  return (
<section id="about" className="section container">
          <div className="section-heading">
            <span className="section-number">01 / ABOUT.MD</span>
            <h2>
              More than just <em>code.</em>
            </h2>
          </div>
          <div className="about-layout">
            <div>
              <p className="large-copy">
                I’m a hands-on IT professional who enjoys understanding{" "}
                <span>how things work</span> — and figuring out what to do when
                they don't.
              </p>
              <p className="body-copy">
                My experience bridges IT support, infrastructure labs,
                development projects, and leading technical operations. I value
                clear communication, dependable execution, and continuous
                learning.
              </p>
              <button className="text-link" onClick={() => go("experience")}>
                View my experience <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="about-aside">
              <div className="info-row">
                <span>STATUS</span>
                <strong>
                  <span className="live-dot" /> Open to work
                </strong>
              </div>
              <div className="info-row">
                <span>FOCUS</span>
                <strong>IT Support / Systems</strong>
              </div>
              <div className="info-row">
                <span>EDUCATION</span>
                <strong>BS Information Technology</strong>
              </div>
              <div className="info-row">
                <span>BASED IN</span>
                <strong>Philippines</strong>
              </div>
              <div className="about-note">
                <span>// CURRENT OBJECTIVE</span>
                <p>
                  Bring practical technical skills and operational ownership to
                  a team that values reliability and growth.
                </p>
              </div>
            </div>
          </div>
        </section>
  );
}
