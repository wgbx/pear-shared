import { defineConfig } from 'dumi';
import path from 'path';

const absSrc = path.resolve(__dirname, 'src');

export default defineConfig({
  utoopack: {
    module: {
      rules: {
        // Keep dumi's named SVG exports outside the library sources.
        '*.svg': {
          condition: { not: { path: /(^|[/\\])src[/\\].*\.svg$/i } },
        },
        // Library SVG imports use the default export as a React component.
        '**/src/**/*.svg': {
          loaders: [
            {
              loader: require.resolve('@svgr/webpack'),
              options: { typescript: true },
            },
          ],
          as: '*.js',
        },
      },
    },
  },
  locales: [{ id: 'en-US', name: 'English' }],
  alias: {
    '@': absSrc,
  },
  outputPath: 'docs-dist',
  themeConfig: {
    logo: '/favicon.svg',
    name: 'Shared',
    editLink: false,
    footer: '',
    nav: [
      { title: 'Guide', link: 'guide' },
      { title: 'Components', link: 'components/alert' },
      { title: 'Hooks', link: 'hooks/use-copy-to-clipboard' },
      { title: 'Constants', link: 'constants' },
      { title: 'Utils', link: 'utils/numeric' },
      { title: 'Styles', link: 'styles' },
      { title: 'Changelog', link: 'changelog' },
    ],
  },

  resolve: {
    atomDirs: [
      { type: 'icon', dir: 'src/icons' },
      { type: 'component', dir: 'src/components' },
      { type: 'hook', dir: 'src/hooks' },
      { type: 'constant', dir: 'src/constants' },
      { type: 'util', dir: 'src/utils' },
      { type: 'style', dir: 'src/styles' },
    ],
  },
});
