// Manually curated pixel-art gallery. See public/gallery/README.md
// for instructions on adding new pieces.

export type GalleryItem = {
  /** Path under public/gallery/, e.g. "/gallery/my-piece.png" */
  src: string;
  /** Required accessible description of the artwork. */
  alt: string;
  /** Optional short caption shown under the image. */
  caption?: string;
  /** Optional date string, e.g. "2026-05" or "May 2026". */
  date?: string;
};

export const gallery: GalleryItem[] = [
  {
    src: "/gallery/placeholder-1.svg",
    alt: "Pixel art placeholder with teal and coral squares in a grid pattern",
    caption: "Placeholder — swap me out",
    date: "2026-01",
  },
  {
    src: "/gallery/placeholder-2.svg",
    alt: "Pixel art placeholder with overlapping coral and teal diagonal blocks",
    caption: "Placeholder — swap me out",
    date: "2026-02",
  },
  {
    src: "/gallery/placeholder-3.svg",
    alt: "Pixel art placeholder with horizontal teal, white and coral stripes",
    caption: "Placeholder — swap me out",
    date: "2026-03",
  },
  {
    src: "/gallery/placeholder-4.svg",
    alt: "Pixel art placeholder with a teal circle and coral pixel accents",
    caption: "Placeholder — swap me out",
    date: "2026-04",
  },
];
