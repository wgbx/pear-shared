import { defineConfig } from 'dumi';

export default defineConfig({
  alias: {
    '@svg': '/src/svg',
    '@hooks': '/src/hooks',
    '@components': '/src/components',
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@pear/shared',
    logo: false,
    nav: [
      { title: 'Guide', link: 'guide' },
      { title: 'Components', link: 'components/external-link' },
      { title: 'Hooks', link: 'hooks/use-copy-to-clipboard' },
    ],
  },

  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'hook', dir: 'src/hooks' },
    ],
  },
});
