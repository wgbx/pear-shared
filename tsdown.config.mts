import { fileURLToPath } from 'node:url';
import { defineConfig } from 'tsdown';

const tsgoPath = fileURLToPath(
  new URL('./bin/tsc', import.meta.resolve('@typescript/native/package.json')),
);

export default defineConfig({
  entry: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.{test,spec,e2e}.{ts,tsx}',
    '!src/**/{demos,fixtures,__test,__tests,__tests__,__snapshots__}/**',
  ],
  root: 'src',
  outDir: 'dist',
  format: 'esm',
  platform: 'neutral',
  target: 'es2015',
  // Preserve module boundaries and their 'use client' directives.
  unbundle: true,
  checks: { moduleLevelDirective: false },
  tsconfig: 'tsconfig.build.json',
  dts: {
    generator: 'tsgo',
    tsgo: { path: tsgoPath },
  },
  deps: {
    // Keep SVG component imports for the consuming application's SVGR loader.
    neverBundle: [/\.svg$/i],
    onlyBundle: [],
  },
  copy: {
    from: ['src/**/*.svg', 'src/**/*.d.ts'],
    to: 'dist',
    flatten: false,
  },
  report: { summary: true },
});
