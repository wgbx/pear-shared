import { defineConfig } from 'dumi';

export default defineConfig({
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
