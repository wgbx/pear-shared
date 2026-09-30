import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Pin the timezone so local-time assertions are deterministic across machines.
process.env.TZ = 'UTC';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
