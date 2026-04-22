import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.lumivia.app',
  output: 'server',
  adapter: cloudflare(),
  trailingSlash: 'ignore' // Obligatorio para evitar el bucle infinito con la carpeta
});
