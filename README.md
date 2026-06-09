# malaquias.dev

Personal portfolio + blog. Built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Edit content

| What | Where |
|------|-------|
| Bio, social links, stack, fun facts, services | `src/data/site.ts` |
| dev.to post list | `devtoPosts` in `src/data/site.ts` |
| Blog posts | `src/content/blog/*.md` |
| Styles / theme colors | `src/styles/global.css` (CSS vars in `:root`) |
| Pages | `src/pages/*.astro` |

### New blog post

Create `src/content/blog/my-post.md`:

```yaml
---
title: "My title"
description: "One-line summary"
date: 2026-06-08
tags: ["backend"]
---

Markdown body here.
```

## Deploy

Static output — drop `dist/` on any static host. Free options:

- **Vercel** / **Netlify**: connect the repo, build command `npm run build`, output dir `dist`.
- **GitHub Pages**: use the Astro GitHub Pages action.

Point the `malaquias.dev` domain at the host and you're live.
