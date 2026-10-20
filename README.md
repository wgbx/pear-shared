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

## Options

The primary APIs and examples are provided via the `dumi` documentation (component props, hook usage, and examples are defined there).

- [Components](/components/external-link)
- [Hooks](/hooks/use-copy-to-clipboard)

## Development

Use Node.js 22.22.1 or a supported newer release (24.11+ or 26+) and pnpm
12.14.0 for development. Library builds use tsdown (Rolldown/Oxc) in unbundle
mode, preserving the source module structure and `'use client'` directives.
The package publishes ESM with the existing `dist/index.js` and
`dist/index.d.ts` entry points. JavaScript is compiled to ES2015 syntax;
runtime APIs are not polyfilled. Peer dependencies remain external, and SVG
component imports and their assets are preserved for the consumer's SVGR
loader. Configure these behaviors in `tsdown.config.mts`.

TypeScript 7 checks types and generates declarations. Declaration generation
uses tsdown's `tsgo` integration with the existing `@typescript/native` alias;
full type checking runs separately. `tsconfig.build.json` limits declaration
generation to library sources. TypeScript 5 remains a transitive dependency
of older tooling.

JavaScript and TypeScript linting uses Oxlint, with explicit rules in
`.oxlintrc.json` adapted from the previous Umi ESLint preset. Oxfmt handles
formatting; Stylelint still uses `@umijs/lint` for CSS and Less. Type checking
continues to run separately with TypeScript 7.

Oxfmt is configured in `.oxfmtrc.json`, preserving the existing 80-column,
single-quote style and Markdown line wrapping. It respects `.gitignore`, and
YAML files remain excluded. The pre-commit hook runs Oxfmt on staged files
after the applicable lint fixes.

The migrated rules include React Hooks checks and Vitest-aware test checks.
Rules merged into Oxlint's core use their core equivalents. The former
`react/no-deprecated` rule is only partially covered by `react/no-unsafe`, and
`@typescript-eslint/no-invalid-this` has no native equivalent; keep running
`typecheck` for TypeScript diagnostics. JSX usage tracking is built into Oxlint.

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm dev

# build library source code
$ pnpm run build

# check library types without generating files
$ pnpm run typecheck

# check source code and styles
$ pnpm run lint

# format source code, configuration, and documentation
$ pnpm run format

# check formatting without changing files
$ pnpm run format:check

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# validate the built package's entry points and module formats
$ pnpm run build
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
pnpm dev
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

# build output
pnpm run build

# validate the built package
pnpm run doctor

# publish (will also run prepublishOnly)
npm publish
```

Detailed release instructions: see `docs/maintainer.md`.

## LICENSE

MIT
