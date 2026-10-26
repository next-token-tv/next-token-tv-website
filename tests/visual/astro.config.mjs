import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// Only the dedicated test server sees these routes. Normal builds cannot ship them.
export default defineConfig({
  root: fileURLToPath(new URL('../..', import.meta.url)),
  cacheDir: './.cache/visual-fixtures/astro',
  outDir: './.cache/visual-fixtures/dist',
  site: 'https://nexttoken.tv',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  vite: { server: { strictPort: true } },
  integrations: [{
    name: 'fixed-hero-fixtures',
    hooks: {
      'astro:config:setup': ({ injectRoute, command }) => {
        if (command === 'dev') throw new Error('Visual fixtures use a static build so development state and hot reload cannot alter screenshots.');
        injectRoute({
          pattern: '/__visual/[locale]/[surface]/[state]',
          entrypoint: fileURLToPath(new URL('./fixtures/HeroPage.astro', import.meta.url)),
        });
      },
    },
  }],
});
