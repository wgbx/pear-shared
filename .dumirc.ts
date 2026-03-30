import path from 'path';
import { defineConfig } from 'dumi';

const absSrc = path.resolve(__dirname, 'src');

export default defineConfig({
  alias: {
    '@svg': '/src/svg',
    '@hooks': '/src/hooks',
    '@components': '/src/components',
  },
  chainWebpack(memo) {
    memo.module.rule('asset').oneOf('fallback').exclude.add(/\.svg$/i);
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
    name: '@pear/shared',
    logo: false,
    editLink: false,
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