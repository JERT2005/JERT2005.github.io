import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel'; // Importa el adaptador de Vercel

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  alias: {
    styles: './src/styles'
  },
  output: 'server',
  integrations: [react(), tailwind(), sitemap()],
  adapter: vercel(), // Configura el adaptador de Vercel
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
