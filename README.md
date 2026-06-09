# malaquias.dev

Personal portfolio. Bilingual (EN/PT), built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321  (PT at /pt)
```

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Internationalization

English is the default locale (served at `/`); Portuguese lives under `/pt`.
All translatable text lives in **`src/data/i18n.ts`** — add a key to *both*
locales. Routes are thin wrappers that render shared components with a `lang`
prop:

```
src/pages/index.astro      -> /            (en)
src/pages/about.astro      -> /about       (en)
src/pages/pt/index.astro   -> /pt          (pt)
src/pages/pt/about.astro   -> /pt/about    (pt)
```

The `EN | PT` switcher in the nav links to the same page in the other locale.

## Edit content

| What | Where |
|------|-------|
| All copy: bio, experience, skills, community, education, services, fun facts | `src/data/i18n.ts` (per locale) |
| Social links, dev.to post list | `src/data/site.ts` |
| Styles / theme colors | `src/styles/global.css` (CSS vars in `:root`) |
| Layout, nav, footer, language switcher | `src/layouts/Base.astro` |
| Page sections | `src/components/{Home,About,Services}.astro` |

The blog links out to [dev.to/malaquiasdev](https://dev.to/malaquiasdev) — there
is no local blog.

## Deploy (AWS S3 + CloudFront)

```bash
cp deploy.config.example deploy.config   # fill in BUCKET, DISTRIBUTION_ID, AWS_PROFILE
./deploy.sh                              # build + sync + invalidate
./deploy.sh --no-build                   # deploy existing dist/
```

`deploy.sh` syncs hashed assets with a 1-year immutable cache, uploads HTML
with `no-cache`, then invalidates CloudFront. `deploy.config` is gitignored.

The CloudFront origin is the S3 **static-website endpoint**, so subpaths like
`/about` resolve to `/about/index.html` natively — no CloudFront Function
needed. `src/pages/404.astro` builds the `404.html` error document.
