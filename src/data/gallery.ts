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
  /** Optional Instagram post permalink. Falls back to the profile link if absent. */
  href?: string;
};

export const gallery: GalleryItem[] = [
  {
    src: "/gallery/IMG_3517.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (2)",
    href: "https://www.instagram.com/p/Da-wWtHx4lf/",
  },
  {
    src: "/gallery/IMG_3519.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (3)",
    href: "https://www.instagram.com/p/Da-xuc4RPPU/",
  },
  {
    src: "/gallery/IMG_3537.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (4)",
    href: "https://www.instagram.com/p/Da-8E_WiQdV/",
  },
  {
    src: "/gallery/IMG_3548.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (8)",
    href: "https://www.instagram.com/p/Da_HaH2Jjn9/",
  },
  {
    src: "/gallery/IMG_3551.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (9)",
    href: "https://www.instagram.com/p/Da_NoJOpXVl/",
  },
  {
    src: "/gallery/IMG_3557.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (11)",
    href: "https://www.instagram.com/p/DbE2EZ3jeJG/",
  },
  {
    src: "/gallery/IMG_3572.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (13)",
    href: "https://www.instagram.com/p/DbBCFBOxJ6r/",
  },
  {
    src: "/gallery/IMG_3573.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (14)",
  },
  {
    src: "/gallery/IMG_3582.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (17)",
  },
  {
    src: "/gallery/IMG_3584.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (19)",
  },
  {
    src: "/gallery/IMG_3585.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (20)",
  },
  {
    src: "/gallery/IMG_3583.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (18)",
    href: "https://www.instagram.com/p/DbDSlZwRBmY/",
  },
];
