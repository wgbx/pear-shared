import { defineConfig } from 'dumi';
import path from 'path';

const absSrc = path.resolve(__dirname, 'src');

export default defineConfig({
  locales: [{ id: 'en-US', name: 'English' }],
  alias: {
    '@svg': '/src/svg',
    '@hooks': '/src/hooks',
    '@components': '/src/components',
    '@constants': '/src/constants',
    '@utils': '/src/utils',
  },
  chainWebpack(memo) {
    memo.module
      .rule('asset')
      .oneOf('fallback')
      .exclude.add(/\.svg$/i);
    memo.module.rule('svgr').exclude.add(absSrc);
    memo.module.rule('svg').exclude.add(absSrc);
    memo.module
      .rule('svg-src-as-component')
      .enforce('pre')
      .test(/\.svg$/i)
      .include.add(absSrc)
      .end()
      .issuer(/\.[jt]sx?$/)
      .type('javascript/auto')
      .use('@svgr/webpack')
      .loader(require.resolve('@svgr/webpack'))
      .options({ typescript: true });
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
    ],
  },

  resolve: {
    atomDirs: [
      { type: 'icon', dir: 'src/icons' },
      { type: 'component', dir: 'src/components' },
      { type: 'hook', dir: 'src/hooks' },
      { type: 'constant', dir: 'src/constants' },
      { type: 'util', dir: 'src/utils' },
    ],
  },
});
