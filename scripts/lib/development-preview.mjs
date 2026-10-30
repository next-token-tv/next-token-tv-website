// Applied only to the live development server, never production builds.
export function developmentPreview() {
  return {
    name: 'next-token-development-preview',
    hooks: {
      'astro:config:setup': ({ command, updateConfig }) => {
        if (command !== 'dev') return;
        updateConfig({ vite: { server: {
          strictPort: true,
          watch: {
            // Native filesystem events can be lost during atomic saves or Git updates.
            usePolling: true,
            interval: 300,
            ignored: ["**/.releases/**", "**/dist/**", "**/test-results/**", "**/playwright-report/**"],
            awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 50 },
          },
        } } });
      },
    },
  };
}
