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
  redirects: {
    // Industries → Specialties
    '/es/industrias': '/es/especialidades',
    '/es/industrias/salud': '/es/especialidades/clinicas',
    '/es/industrias/odontologia': '/es/especialidades/odontologia',
    '/es/industrias/ecommerce': '/es/especialidades',
    '/es/industrias/ventas': '/es/especialidades',
    '/es/industrias/soporte': '/es/especialidades',
    '/es/industrias/agencias': '/es/especialidades',
    '/es/industrias/belleza': '/es/especialidades/estetica',
    '/en/industries': '/en/specialties',
    '/en/industries/healthcare': '/en/specialties/clinics',
    '/en/industries/dental': '/en/specialties/dental',
    '/en/industries/ecommerce': '/en/specialties',
    '/en/industries/sales': '/en/specialties',
    '/en/industries/support': '/en/specialties',
    '/en/industries/agencies': '/en/specialties',
    '/en/industries/beauty': '/en/specialties/aesthetics',
    // AI agents → Receptionist
    '/es/producto/agentes-ia': '/es/producto/recepcionista',
    '/en/product/ai-agents': '/en/product/receptionist',
    // Retired compare pages
    '/es/comparar/vs-manychat': '/es/comparar',
    '/es/comparar/vs-chatfuel': '/es/comparar',
    '/es/comparar/vs-wati': '/es/comparar',
    '/es/comparar/vs-wazzy': '/es/comparar',
    '/es/comparar/vs-respond-io': '/es/comparar',
    '/es/comparar/vs-intercom': '/es/comparar',
    '/es/comparar/vs-kommo': '/es/comparar',
    '/es/comparar/vs-trengo': '/es/comparar',
    '/en/compare/vs-manychat': '/en/compare',
    '/en/compare/vs-chatfuel': '/en/compare',
    '/en/compare/vs-wati': '/en/compare',
    '/en/compare/vs-wazzy': '/en/compare',
    '/en/compare/vs-respond-io': '/en/compare',
    '/en/compare/vs-intercom': '/en/compare',
    '/en/compare/vs-kommo': '/en/compare',
    '/en/compare/vs-trengo': '/en/compare',
  },
});
