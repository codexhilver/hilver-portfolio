import { Server, Code2, ShieldCheck } from "lucide-react";
export const links = ["about", "experience", "projects", "skills", "contact"];
export const projects = [
  {
    n: "01",
    cat: "IoT",
    title: "LIFE — Safety Monitoring Wearable",
    desc: "ESP32-based dementia care concept with geofencing, fall detection, inactivity monitoring and caregiver alerts.",
    tags: ["ESP32", "GPS", "MPU6050", "IoT"],
    symbol: "◎",
  },
  {
    n: "02",
    cat: "Systems",
    title: "Attendance Monitoring System",
    desc: "Employee attendance management concept with identity verification and electronic daily time records.",
    tags: ["Computer Vision", "Database", "E-DTR"],
    symbol: "▦",
  },
  {
    n: "03",
    cat: "Infrastructure",
    title: "Linux Server Lab",
    desc: "Ubuntu Server lab in VMware: SSH access, Nginx hosting, networking, service management and recovery drills.",
    tags: ["Ubuntu", "VMware", "SSH", "Nginx"],
    symbol: "⌘",
  },
  {
    n: "04",
    cat: "Development",
    title: "Point-of-Sale System",
    desc: "Java desktop POS with inventory logic, receipts, payment workflows and VAT calculation.",
    tags: ["Java Swing", "SQL", "Desktop"],
    symbol: "⌗",
  },
  {
    n: "05",
    cat: "Infrastructure",
    title: "IT Support Toolkit",
    desc: "A policy-conscious Windows diagnostics and networking toolkit for practical support workflows.",
    tags: ["Windows", "PowerShell", "Networking"],
    symbol: ">_",
  },
  {
    n: "06",
    cat: "Development",
    title: "Turing Machine Visualizer",
    desc: "Interactive educational tool exploring computational logic, state transitions and string acceptance.",
    tags: ["React", "Python", "Algorithms"],
    symbol: "{ }",
  },
];
export const experience = [
  {
    role: "Team Supervisor",
    company: "Boundless AI Inc.",
    date: "Dec 2025 — 2026",
    desc: "Coordinated multi-team technical operations, quality control, workstation readiness, incident response and daily reporting.",
  },
  {
    role: "IT / Production Intern",
    company: "Vietthi Global Trading Corporation",
    date: "2025 — 2026",
    desc: "Supported technical and production workflows, operational troubleshooting and cross-functional coordination.",
  },
];
export const skillGroups = [
  {
    title: "SYSTEMS & SUPPORT",
    icon: Server,
    items: [
      "Windows Troubleshooting",
      "Ubuntu Linux",
      "VMware",
      "SSH & Nginx",
      "Hardware Diagnostics",
      "Networking",
    ],
  },
  {
    title: "DEVELOPMENT",
    icon: Code2,
    items: ["Java", "Python", "JavaScript", "React", "HTML & CSS", "SQL"],
  },
  {
    title: "OPERATIONS",
    icon: ShieldCheck,
    items: [
      "Technical Documentation",
      "Incident Response",
      "Team Leadership",
      "Quality Control",
      "IT Operations",
      "Process Improvement",
    ],
  },
];
