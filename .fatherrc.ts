import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  alias: {
    '@svg': './src/svg',
    '@hooks': './src/hooks',
    '@components': './src/components',
  },
  esm: { output: 'dist' },
});
