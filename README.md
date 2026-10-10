# HILVER.EXE v4 — one-page React portfolio

## Start
```bash
npm install
npm run dev
npm run build
```

## Customize
- **src/data/profile.js** — email, LinkedIn, GitHub and resume path.
- **src/data/portfolio.js** — projects, experience, skills.
- **src/components/Hero.jsx** — intro and View Resume / Download CV buttons.
- **src/components/Contact.jsx** — contact section.
- **src/style.css** — responsive design and colors.
- **public/resume.pdf** — add your real PDF (not included).

Both resume buttons are already wired to `/resume.pdf`. They will show a missing-file error until you place the PDF in public. Test http://localhost:5173/resume.pdf.

## Deploy
Run `npm run build` and deploy the project to Vercel (Vite framework). Commit source code and public assets; exclude node_modules and dist.
