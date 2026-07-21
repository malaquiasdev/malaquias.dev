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
    src: "/gallery/IMG_3517.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (2)",
  },
  {
    src: "/gallery/IMG_3519.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (3)",
  },
  {
    src: "/gallery/IMG_3537.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (4)",
  },
  {
    src: "/gallery/IMG_3538.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (5)",
  },
  {
    src: "/gallery/IMG_3540.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (6)",
  },
  {
    src: "/gallery/IMG_3541.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (7)",
  },
  {
    src: "/gallery/IMG_3548.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (8)",
  },
  {
    src: "/gallery/IMG_3551.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (9)",
  },
  {
    src: "/gallery/IMG_3556.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (10)",
  },
  {
    src: "/gallery/IMG_3557.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (11)",
  },
  {
    src: "/gallery/IMG_3560.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (12)",
  },
  {
    src: "/gallery/IMG_3572.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (13)",
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
    src: "/gallery/IMG_3583.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (18)",
  },
  {
    src: "/gallery/IMG_3584.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (19)",
  },
  {
    src: "/gallery/IMG_3585.png",
    alt: "Pixel art artwork by pixel.ai.studio.br (20)",
  },
];
