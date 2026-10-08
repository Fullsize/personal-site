# Fullsize — Terminal-Inspired Developer Portfolio

**English** | [简体中文](./README.zh-CN.md)

A terminal-inspired personal website and developer portfolio built with **Next.js 16, React 19, TypeScript, and Tailwind CSS 4**. It showcases Fullsize's frontend development and data visualization work through code-style introductions, project cards, and animated skill bars.

Dark surfaces, neon accents, and monospace typography bring the feel of a developer's workspace to a responsive, statically exported website.

[Visit the website](https://fullsize.online) · [Browse the source](https://github.com/Fullsize/personal-site) · [Report an issue](https://github.com/Fullsize/personal-site/issues)

![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Available commands](#available-commands)
- [Project structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository contains the source code for Fullsize's personal portfolio. The website introduces the developer, highlights selected projects, and presents skills and professional experience without requiring a CMS, database, or backend API.

| Route | What you'll find |
| --- | --- |
| `/` | Terminal-style introduction, profile statistics, skills, and featured projects |
| `/projects` | Project collection with technology tags and optional source/demo links |
| `/about` | Developer profile, experience, interests, skills, and contact information |

The portfolio content highlights technologies such as React, Vue, D3.js, ECharts, and Three.js. These are **profile and project entries**, not all dependencies of this website.

## Features

- **Terminal-inspired design** — shell prompts, syntax-colored text, terminal windows, and neon green/cyan accents.
- **Responsive layouts** — adaptive project grids and a collapsible mobile navigation menu.
- **Project showcase** — reusable cards with descriptions, technology tags, and optional GitHub/demo links; featured projects appear on the homepage.
- **Skill visualization** — animated progress bars grouped into frontend, visualization, backend, and tools categories.
- **Typed content data** — profile, projects, skills, and social links are defined in `src/data/index.ts`.
- **Page metadata** — root metadata, Open Graph fields, and dedicated titles/descriptions for the projects and about pages.
- **Static export** — production builds generate HTML, CSS, and JavaScript in `out/` for static hosting.
- **Reusable UI components** — shared navigation, footer, terminal blocks, project cards, and skill charts.

> The site currently mixes English and Chinese content. The language links above switch between README files only; they do not enable website language switching. Profile statistics are manually maintained, not fetched live from GitHub.

## Tech stack

| Technology | Role |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | App Router, routing, metadata, and static export |
| [React 19](https://react.dev/) | UI components and mobile navigation state |
| [TypeScript 5](https://www.typescriptlang.org/) | Typed components and content models |
| [Tailwind CSS 4](https://tailwindcss.com/) | Responsive styling and utility classes |
| [Inter & JetBrains Mono](https://fonts.google.com/) | Typography loaded with `next/font/google` |
| [ESLint 9](https://eslint.org/) | Code linting |
| [OpenNext for Cloudflare](https://opennext.js.org/cloudflare) + [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | Included Cloudflare Workers deployment tooling |

## Quick start

### Requirements

- **Node.js 20.9 or later** for Next.js 16; Node.js 22 LTS is recommended for the included deployment tooling.
- **npm**, included with Node.js.
- Internet access for installing dependencies and fetching Google Fonts during builds.

### Run locally

```bash
git clone https://github.com/Fullsize/personal-site.git
cd personal-site
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edits to the source files are reflected in the development server.

No environment variables are required for the current portfolio pages. Cloudflare deployment requires separate account authentication.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Build the production static site into `out/` |
| `npm run start` | Run `next start`; **not compatible with the current static-export configuration** |
| `npm run preview` | Build with OpenNext and preview in the Cloudflare runtime; see the deployment note below |
| `npm run deploy` | Build with OpenNext and deploy to Cloudflare Workers; see the deployment note below |
| `npm run cf-typegen` | Generate Cloudflare binding types in `cloudflare-env.d.ts` |

Run linting separately before a production build; Next.js 16 does not run ESLint as part of `next build`.

## Project structure

```text
personal-site/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── projects/page.tsx     # Project collection
│   │   ├── about/page.tsx        # Profile and experience
│   │   ├── layout.tsx           # Shared layout, fonts, and metadata
│   │   └── globals.css          # Theme variables and animations
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── TerminalBlock.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillChart.tsx
│   └── data/index.ts            # Profile, skills, projects, and social links
├── public/                     # Static assets
├── next.config.ts              # Static export and image configuration
├── open-next.config.ts         # OpenNext adapter configuration
├── wrangler.jsonc              # Cloudflare Worker configuration
├── README.md                   # English documentation (default)
└── README.zh-CN.md              # Simplified Chinese documentation
```

## Customization

### Profile and projects

Edit `src/data/index.ts` to update the profile, avatar, biography, statistics, skills, and project collection. For example, a project entry looks like this:

```ts
{
  id: "my-project",
  title: "My Project",
  description: "A short description of what the project does.",
  techStack: ["React", "TypeScript"],
  github: "https://github.com/your-name/my-project",
  demo: "https://example.com",
  featured: true,
}
```

Set `featured: true` to display a project on the homepage. The `github` and `demo` fields are optional.

### Content outside the data file

Some content is defined directly in page and component files:

- `src/app/about/page.tsx`: experience and interests.
- `src/app/page.tsx`: homepage social/contact links and code philosophy.
- `src/components/Navbar.tsx`: navigation labels and GitHub link.
- `src/components/SkillChart.tsx`: skill category labels and colors.
- `src/components/Footer.tsx`: footer copy.

When adapting the site, review these files as well as `socialLinks` in the data file; not every visible link is driven by that array.

### Theme and metadata

- Update theme variables, terminal styles, and animations in `src/app/globals.css`. Some colors also appear directly in component utility classes.
- Edit `src/app/layout.tsx` for the site title, description, Open Graph URL, fonts, and HTML language.
- Edit metadata in `src/app/projects/page.tsx` and `src/app/about/page.tsx` for route-specific descriptions.
- Place custom images and other static assets in `public/` and replace the favicon in `src/app/favicon.ico`.

## Deployment

### Static hosting — current default

`next.config.ts` sets `output: "export"` and disables Next.js image optimization. Build the site with:

```bash
npm run lint
npm run build
```

Deploy the resulting **`out/` directory** to a static host such as Cloudflare Pages, Netlify, or an HTML-capable web server. For a Git-connected static deployment, use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `out` |

Ensure the host resolves extensionless routes such as `/about` and `/projects` to their generated HTML files. For local inspection, serve `out/` with a static server that supports clean URLs; do not use `npm run start` with this output mode.

### Cloudflare Workers — included tooling

The repository also includes OpenNext configuration and Workers scripts. This is a **different deployment path** from uploading the static `out/` directory.

Before using `npm run preview` or `npm run deploy`, switch away from `output: "export"` in `next.config.ts` and review the current [OpenNext Cloudflare setup guide](https://opennext.js.org/cloudflare/get-started). Check the Worker name, compatibility date, and bindings in `wrangler.jsonc`, then authenticate:

```bash
npx wrangler login
npm run preview
# After checking the preview:
npm run deploy
```

The Workers configuration points to `.open-next/worker.js` and `.open-next/assets`; those artifacts are produced by the OpenNext build, not the static export. The presence of these scripts does not mean the current static-export configuration is ready for Workers deployment unchanged.

## Contributing

Bug reports, documentation improvements, and focused UI fixes are welcome via [issues](https://github.com/Fullsize/personal-site/issues) and pull requests.

Before submitting a change:

1. Describe the problem and the proposed improvement.
2. Keep changes focused and avoid unrelated edits to personal content.
3. Run `npm run lint` and `npm run build`.
4. For UI changes, check both mobile and desktop layouts and include screenshots when useful.

## License

No license file is currently included in this repository. Public source availability does not grant an open-source license; contact the author before reusing or redistributing the code.

---

Created by [Fullsize (无涯)](https://github.com/Fullsize) · [Website](https://fullsize.online)
