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

export default function Projects({
  filter,
  setFilter,
  query,
  setQuery,
  visible,
}) {
  return (
    <section id="projects" className="section container">
      <div className="section-heading">
        <span className="section-number">03 / PROJECTS.DIR</span>
        <h2>
          Selected <em>projects.</em>
        </h2>
        <p>Real challenges, experiments and systems I've worked on.</p>
      </div>
      <div className="project-toolbar">
        <div className="filter-tabs" aria-label="Project categories">
          {["All", "IoT", "Systems", "Infrastructure", "Development"].map(
            (f) => (
              <button
                key={f}
                className={filter === f ? "selected" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ),
          )}
        </div>
        <label className="project-search">
          <Search size={16} />
          <input
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search projects"
          />
        </label>
      </div>
      <div className="project-grid">
        {visible.map((p) => (
          <article className="project-card" key={p.n}>
            <div className="project-head">
              <span>
                PROJECT_{p.n} / {p.cat.toUpperCase()}
              </span>
              <span className="project-symbol">{p.symbol}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      {!visible.length && (
        <p className="empty">
          No projects found. Try another search or category.
        </p>
      )}
    </section>
  );
}
