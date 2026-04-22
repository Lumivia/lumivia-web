import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.lumivia.app',
  trailingSlash: 'always',
  output: 'server',
  adapter: cloudflare()
});
