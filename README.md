# MAXIM — Freelance Web Developer

A personal portfolio showcasing my work in web design and frontend development.

I create modern, responsive websites for businesses, combining distinctive visual design, intuitive user experiences, and thoughtful interactions.

This repository contains the source code for my portfolio website, featuring selected projects, case studies, services, and contact information.

## Stack

React, Vite, JavaScript, and CSS. The site has no backend or contact form; email and Telegram links open directly. The OKOM-TECH case study is a separate static HTML entry at `/okom-tech.html`.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To verify the production build:

```sh
npm run build
npm run preview
```

The build output is in `dist/`. Static hosting must serve both `index.html` and `okom-tech.html` and retain the `/images/` asset paths. There is no separate test script; the site has been checked in a browser at widths 320, 375, 390, 768, 1440, and 1920 px.

## Selected work

- **[IRON & DUST](https://iron-and-dust.wolkowmaksim1437.workers.dev/)** — fictional motorcycle workshop website concept. [Source](https://github.com/Kybrik32/Iron_and_dust).
- **[OKOM-TECH](https://okom-tech-concept.wolkowmaksim1437.workers.dev/)** — independent redesign concept for a Czech precision engineering company. It was not commissioned, approved, or endorsed by OKOM-TECH and is not the company's official website. [Source](https://github.com/Kybrik32/okom-tech-concept).

The project data lives in `src/projects.js`; the shared card is `src/ProjectCard.jsx`. The case study uses `src/okom-tech.jsx`, `src/okom-tech.css`, and `okom-tech.html`. Screenshots in `public/images/` are optimized from the corresponding project's actual screenshots.

## Contact

- Email: [wolkowmaksim1437@gmail.com](mailto:wolkowmaksim1437@gmail.com)
- Telegram: [@volkmaksi](https://t.me/volkmaksi)
- GitHub: [Kybrik32](https://github.com/Kybrik32)

## Before Cloudflare deployment

Once the portfolio's public hostname is chosen, add canonical URLs and absolute Open Graph image URLs for both pages. The current relative Open Graph paths resolve in the browser, but some social crawlers require absolute URLs. Cloudflare deployment is a separate step.
