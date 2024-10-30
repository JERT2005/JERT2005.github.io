import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  alias: {
    styles: './src/styles'
  },
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind(), sitemap()],

  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
