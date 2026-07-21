# Adding a new gallery piece

1. Drop the image file into `public/gallery/` (e.g. `public/gallery/my-piece.png`).
2. Add an entry to `src/data/gallery.ts` with `src: "/gallery/my-piece.png"`, a
   descriptive `alt`, and optional `caption`/`date`.
3. Run `npm run build` (or `npm run dev`) to confirm it renders on `/gallery` and `/pt/gallery`.

That's it — no other code changes needed.
