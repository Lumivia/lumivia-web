import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  site: 'https://lumivia.app',
  output: 'server',
  adapter: cloudflare({
    platform: "pages",
    routes: {
      include: ["/*"]
    }
  }),
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const serverWorker = path.join(dir.pathname, 'server', '_worker.js');
      const rootWorker = path.join(dir.pathname, '_worker.js');

      if (fs.existsSync(serverWorker)) {
        fs.copyFileSync(serverWorker, rootWorker);
        console.log('Moved _worker.js to dist/_worker.js for Cloudflare Pages SSR');
      }
    }
  }
});
