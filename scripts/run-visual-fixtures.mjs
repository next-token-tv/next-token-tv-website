import { build, preview } from 'astro';

// Render with production semantics into an isolated directory, then own a
// foreground preview independently of the developer's Astro CLI session.
const config = {
  configFile: 'tests/visual/astro.config.mjs',
  server: { host: '127.0.0.1', port: Number(process.env.PLAYWRIGHT_FIXTURE_PORT ?? 4177) },
};
await build(config);
const server = await preview(config);
for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, async () => {
  await server.stop();
  process.exit(0);
});
