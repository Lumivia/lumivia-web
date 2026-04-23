import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://lumivia.app',
  output: 'server',
  adapter: cloudflare({
    platform: "pages"
  })
});
