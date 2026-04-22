import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.lumivia.app',
  trailingSlash: 'ignore',
  output: 'server',
  adapter: cloudflare()
});
