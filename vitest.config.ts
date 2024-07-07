import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    unstubEnvs: true,
    unstubGlobals: true,
    mockReset: true,
    include: ['*.test.ts'],
    watch: false,
    poolOptions: {
      threads: {
        singleThread: true,
      }
    },
  },
});
