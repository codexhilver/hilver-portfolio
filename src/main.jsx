import { profile } from "./data/profile";
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Terminal,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Download,
  Search,
  Command,
  Sun,
  Moon,
  Copy,
  Check,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Server,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Activity,
  Filter,
  ArrowUp,
} from "lucide-react";
import "./style.css";
import { links, projects, experience, skillGroups } from "./data/portfolio";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("dark"),
    [menu, setMenu] = useState(false),
    [palette, setPalette] = useState(false),
    [filter, setFilter] = useState("All"),
    [query, setQuery] = useState(""),
    [paletteQuery, setPaletteQuery] = useState(""),
    [cmd, setCmd] = useState(""),
    [logs, setLogs] = useState([
      { kind: "sys", text: "HILVER.EXE [Version 4.0.26]" },
      { kind: "sys", text: 'Welcome, visitor. Type "help" to explore.' },
    ]),
    [copied, setCopied] = useState(false),
    [scroll, setScroll] = useState(0),
    [active, setActive] = useState("home");
  const input = useRef(null),
    term = useRef(null),
    paletteInput = useRef(null);
  const email = profile.email;
  useEffect(() => {
    const f = () =>
      setScroll(
        window.scrollY /
          (document.documentElement.scrollHeight - innerHeight || 1),
      );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((e) => observer.observe(e));
    window.addEventListener("scroll", f, { passive: true });
    return () => {
      window.removeEventListener("scroll", f);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const f = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((v) => !v);
      }
      if (e.key === "Escape") {
        setPalette(false);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, []);
  useEffect(() => {
    if (palette) paletteInput.current?.focus();
  }, [palette]);
  useEffect(() => {
    term.current?.scrollTo({
      top: term.current.scrollHeight,
      behavior: "smooth",
    });
  }, [logs]);
  function go(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
    setPalette(false);
    setPaletteQuery("");
  }
  function execute(raw) {
    const v = raw.trim().toLowerCase();
    if (!v) return;
    setCmd("");
    if (v === "clear") {
      setLogs([]);
      return;
    }
    let out = 'Command not found. Type "help" for available commands.';
    if (v === "help")
      out =
        "COMMANDS: help · about · experience · projects · skills · contact · whoami · clear · sudo hire-me";
    else if (v === "whoami")
      out =
        "Hilver Aglanao — IT graduate • technical operations • builder of useful systems.";
    else if (v === "sudo hire-me")
      out =
        "ACCESS GRANTED ✓  Great choice. Scroll to CONTACT to get in touch.";
    else if (
      ["about", "experience", "projects", "skills", "contact"].includes(v)
    ) {
      go(v);
      out = `Navigating to /${v} ...`;
    }
    setLogs((old) => [
      ...old,
      { kind: "cmd", text: `visitor@hilver:~$ ${raw}` },
      { kind: "out", text: out },
    ]);
  }
  function copyEmail() {
    navigator.clipboard
      ?.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1700);
      })
      .catch(() => {});
  }
  const visible = projects.filter(
    (p) =>
      (filter === "All" || p.cat === filter) &&
      `${p.title} ${p.desc} ${p.tags.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className={`app ${theme}`}>
      <div className="progress" style={{ transform: `scaleX(${scroll})` }} />
      <div className="gridbg" aria-hidden="true" />
      <header className="topbar">
        <div className="container nav">
          <a href="#home" className="brand" onClick={() => setMenu(false)}>
            <span className="brand-icon">&gt;_</span> HILVER
            <span className="green">.EXE</span>
            <span className="brand-version">v4.0</span>
          </a>
          <nav
            className={`navlinks ${menu ? "open" : ""}`}
            aria-label="Main navigation"
          >
            {links.map((x, i) => (
              <a
                key={x}
                href={`#${x}`}
                className={active === x ? "current" : ""}
                onClick={() => setMenu(false)}
              >
                <span>0{i + 1}.</span> {x}
              </a>
            ))}
          </nav>
          <div className="navtools">
            <button
              className="iconbutton searchbutton"
              onClick={() => setPalette(true)}
              title="Command menu (Ctrl+K)"
              aria-label="Open command menu"
            >
              <Search size={17} />
              <span>⌘ K</span>
            </button>
            <button
              className="iconbutton"
              onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="iconbutton hamburger"
              onClick={() => setMenu((v) => !v)}
              aria-label="Toggle navigation"
            >
              {menu ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>
      <main>
        <Hero go={go} term={term} logs={logs} cmd={cmd} setCmd={setCmd} execute={execute} resume={profile.resume} />
        <div className="ticker">
          <div className="container ticker-content">
            <span>TECHNICAL SUPPORT</span>
            <b>✳</b>
            <span>LINUX & WINDOWS</span>
            <b>✳</b>
            <span>SYSTEMS THINKING</span>
            <b>✳</b>
            <span>SOFTWARE DEVELOPMENT</span>
            <b>✳</b>
            <span>PROBLEM SOLVING</span>
          </div>
        </div>
        <About go={go} />
        <Experience experience={experience} />
        <Projects filter={filter} setFilter={setFilter} query={query} setQuery={setQuery} visible={visible} />
        <Skills skillGroups={skillGroups} />
        <Contact email={email} copied={copied} copyEmail={copyEmail} profile={profile} />
        </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} HILVER.EXE</span>
          <span>
            Built with React + curiosity.{" "}
            <span className="green">&lt;/&gt;</span>
          </span>
          <button onClick={() => go("home")}>
            BACK TO TOP <ArrowUp size={15} />
          </button>
        </div>
      </footer>
      {palette && (
        <div className="palette-backdrop" onMouseDown={() => setPalette(false)}>
          <div
            className="palette-box"
            role="dialog"
            aria-modal="true"
            aria-label="Quick navigation"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="palette-search">
              <Search size={18} />
              <input
                ref={paletteInput}
                placeholder="Jump to a section..."
                value={paletteQuery}
                onChange={(e) => setPaletteQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    go(
                      links.find((l) =>
                        l.includes(e.currentTarget.value.toLowerCase()),
                      ) || "home",
                    );
                }}
              />
              <span>ESC</span>
            </div>
            {["home", ...links].map((x) => (
              <button key={x} onClick={() => go(x)}>
                <Command size={16} />
                {x.toUpperCase()}
                <ArrowRight size={15} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
