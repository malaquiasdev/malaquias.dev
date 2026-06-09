// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://malaquias.dev',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
