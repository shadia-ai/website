// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shadia.ai',
  base: '/',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-DO',
          en: 'en-US',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
