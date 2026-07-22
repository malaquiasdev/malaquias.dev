# Adding a new gallery piece

1. Drop the image file into `public/gallery/` (e.g. `public/gallery/my-piece.png`).
2. Add an entry to `src/data/gallery.ts` with `src: "/gallery/my-piece.png"`, a
   descriptive `alt`, and optional `caption`/`date`.
3. Run `npm run build` (or `npm run dev`) to confirm it renders in the HOME gallery
   teaser (limited to 8 images). The full set lives on the external Instagram
   profile — the nav "Gallery" link and the home "see all" link both point there.
4. To make an image link to its own Instagram post instead of the profile, add
   `href: "<instagram post url>"` to its entry in `src/data/gallery.ts`. If `href`
   is omitted, the image falls back to linking to the Instagram profile.

That's it — no other code changes needed.
