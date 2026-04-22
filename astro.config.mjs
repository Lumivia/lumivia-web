import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.lumivia.app',
  output: 'server',
  adapter: cloudflare(),
  trailingSlash: 'always', // Evita bucles globales con Cloudflare
  redirects: {
    '/mx': '/mx/',
    '/co': '/co/',
    '/cl': '/cl/',
    '/cr': '/cr/'
  }
});
