// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lumivia.app', // 👈 Define tu dominio oficial con www
  trailingSlash: 'always',         // 👈 Fuerza el uso de la barra final (/) en todos los enlaces
});
