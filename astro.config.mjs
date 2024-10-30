import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  alias: {
    styles: './src/styles'
  },

  integrations: [react(), tailwind(), sitemap()],

  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
