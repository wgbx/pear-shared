# @bosinc/shared

[![NPM version](https://img.shields.io/npm/v/@bosinc/shared.svg?style=flat)](https://npmjs.org/package/@bosinc/shared/)
[![NPM downloads](http://img.shields.io/npm/dm/@bosinc/shared.svg?style=flat)](https://npmjs.org/package/@bosinc/shared)

A lightweight React shared component and hooks library, built with dumi docs.

## Usage

### Install

```bash
pnpm add @bosinc/shared
```

> If this is a private package (GitHub Packages), you need to set `NPM_TOKEN` in your environment and make sure `.npmrc` points to the GitHub Packages registry.
>
> Example (`.npmrc`):
>
> ```text
> registry=https://npm.pkg.github.com
> //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
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

## publish

```shell
npm run release -- --ci
```

## Where to write docs

Recommended split:

- `README.md`: quick start for everyone (what this package is, how to install/use, and the most common commands).
- `docs/guide.md`: usage guide for consumers.
- `docs/maintainer.md`: maintainer-only workflow (release, publish, troubleshooting).

If you want teammates to quickly learn "how to run" and "how to publish", keep short entries in `README.md` and link to `docs/maintainer.md` for full steps.

## Run this project locally

```bash
# 1) install dependencies
pnpm install

# 2) start docs/dev site
pnpm start
```

Common URLs and commands are printed by dumi in terminal after startup.

## Publish package

This package is configured to publish to GitHub Packages (`publishConfig.registry`).

Before publishing:

1. Ensure you have publish permission to the target org/repo.
2. Ensure `NPM_TOKEN` is set and has package publish permission.
3. Configure publish auth for the current shell (repo `.npmrc` intentionally omits the token so CI/Vercel installs do not warn):
4. Bump version in `package.json`.
5. Run checks/build locally.

```bash
# set token for current shell
export NPM_TOKEN=YOUR_GITHUB_PACKAGES_TOKEN
npm config set //npm.pkg.github.com/:_authToken "$NPM_TOKEN" --location=user

# quality check
pnpm run doctor

# build output
pnpm run build

# publish (will also run prepublishOnly)
npm publish
```

Detailed release instructions: see `docs/maintainer.md`.

## LICENSE

MIT
