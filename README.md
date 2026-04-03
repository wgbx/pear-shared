# @bosinc/shared

[![NPM version](https://img.shields.io/npm/v/@bosinc/shared.svg?style=flat)](https://npmjs.org/package/@bosinc/shared/)
[![NPM downloads](http://img.shields.io/npm/dm/@bosinc/shared.svg?style=flat)](https://npmjs.org/package/@bosinc/shared)

A lightweight React shared component and hooks library, built with dumi docs.

## Usage
### Install
```bash
pnpm add @bosinc/shared
```

> If this is a private package (GitHub Packages), you need to set `NODE_AUTH_TOKEN` in your environment and make sure `.npmrc` points to the GitHub Packages registry.
>
> Example (`.npmrc`):
> ```text
> registry=https://npm.pkg.github.com
> //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
> ```

### Global Alert Setup
If you want to use `useAlert()` (and also `useCopyToClipboard()`), you need to mount `AlertContainer` exactly once in your app (typically in your root layout/root component).

```tsx
import { AlertContainer } from '@bosinc/shared';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AlertContainer />
      {children}
    </>
  );
}
```

## Options
The primary APIs and examples are provided via the `dumi` documentation (component props, hook usage, and examples are defined there).

- [Components](/components/external-link)
- [Hooks](/hooks/use-copy-to-clipboard)

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor
```

## LICENSE

MIT
