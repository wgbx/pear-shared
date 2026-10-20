---
name: release-package
description: >-
  Automates npm/GitHub Packages release for @bosinc/shared using release-it.
  Use when the user asks to release, publish, ship, bump version, run release-it,
  or npm publish this package.
---

# Skill: Release @bosinc/shared

## Goal

Run a **fully non-interactive** release: version bump → update `docs/changelog.md` → tsdown build → `prepublishOnly` checks and `npm publish` to GitHub Packages → git commit/tag/push → GitHub Release (body = generated changelog).

## When to use

Use when the user asks to release, publish, bump version, or run release-it for this package. A request to review or edit this document is documentation work.

## Version policy (default)

| User input                                    | Result                             |
| --------------------------------------------- | ---------------------------------- |
| No version mentioned (e.g. “release”, “发版”) | **patch** bump (`0.1.8` → `0.1.9`) |
| Increment keyword (`minor`, `major`, `patch`) | That increment                     |
| Exact semver (`0.2.0`, `1.0.0`)               | Release that version               |

**Do not** infer `minor` or `major` from commit messages (`feat`, `BREAKING`, etc.) unless the user explicitly asks for that increment or version.

## Critical rules

1. Pass `--ci` directly to release-it so the release runs without prompts. Choose one command matching the requested increment/version:
   ```bash
   pnpm exec release-it --ci --increment patch
   pnpm exec release-it --ci --increment minor
   pnpm exec release-it --ci --increment 0.2.0
   ```
2. **Do not** create a separate git commit before release unless the user explicitly asked. Release-it stages tracked changes and commits the version bump; inspect the intended changes because `.release-it.json` has `requireCleanWorkingDir: false`.
3. **Do not** push or publish without user intent in the message; releasing implies permission to push/publish.

## Prerequisites (verify before running)

| Check               | Command / action                                         |
| ------------------- | -------------------------------------------------------- |
| On `main`, synced   | `git status`, `git fetch origin`                         |
| `NPM_TOKEN` set     | `test -n "${NPM_TOKEN:-}"`                               |
| Registry auth       | `npm whoami --registry=https://npm.pkg.github.com`       |
| GitHub Release auth | `.release-it.json` sets `github.tokenRef` to `NPM_TOKEN` |
| Package manager     | **pnpm** (lockfile: `pnpm-lock.yaml`)                    |
| Runtime             | Node.js 22.22.1, 24.11+, or 26+; pnpm 12.14.0            |

`NPM_TOKEN` needs `write:packages` to publish and repository access to create the GitHub Release (`repo` for a private repository). Configure npm authentication for `npm.pkg.github.com` as described in [README.md](../README.md#publish-package); exporting the variable alone does not configure npm auth.

## Workflow (follow in order)

### Step 1: Pre-release inspection

```bash
git status
git log "$(git describe --tags --abbrev=0 2>/dev/null || echo HEAD~20)..HEAD" --oneline
node -p "require('./package.json').version"
```

Report to the user:

- Current version
- Uncommitted / staged changes (warn if unexpected)
- Commits since last tag
- Planned bump: **patch** unless the user specified otherwise

### Step 2: Validate before changing the version

Run these checks in order and stop if one fails:

```bash
pnpm run format:check
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
pnpm run doctor
```

`build` uses tsdown (Rolldown/Oxc) and TypeScript 7 declaration generation. Declaration generation does not replace `typecheck`. `doctor` runs `publint --strict` against the built package, so it must run after `build`.

If documentation or its build configuration changed, also run `pnpm run docs:build`.

### Step 3: Choose the version and run release

Use the requested exact semver or increment. Default to `patch` when neither was specified:

```bash
pnpm exec release-it --ci --increment patch
```

The current hooks execute as follows:

1. `after:bump` runs `pnpm run build` to generate the versioned package's tsdown output.
2. Release-it runs `npm publish`, which first executes `prepublishOnly`: `typecheck` → `test` → `build` → `doctor`. A failed check blocks publication.
3. After publication, release-it creates the git commit/tag, pushes, and creates the GitHub Release.

Both build invocations are expected with the current configuration. Allow enough time for checks and publishing; when a command returns a running session, continue reading its output until it completes.

### Step 4: Verify

```bash
git log -1 --oneline
git tag --sort=-v:refname | head -3
npm view "@bosinc/shared@$(node -p "require('./package.json').version")" version --registry=https://npm.pkg.github.com
GH_TOKEN="$NPM_TOKEN" gh release view "$(git describe --tags --exact-match HEAD)" --json tagName,url
head -40 docs/changelog.md
```

Summarize for the user: old version → new version, tag name, registry URL, GitHub Release link, and that `docs/changelog.md` was updated.

## Project config reference

- **Script**: `package.json` → `"release": "release-it"`
- **Build**: `pnpm run build` → `tsdown`; configuration: `tsdown.config.mts` and `tsconfig.build.json`
- **Package check**: `pnpm run doctor` → `publint --strict` (requires current `dist` output)
- **Publish lifecycle**: `prepublishOnly` → `typecheck` → `test` → `build` → `doctor`
- **Config**: `.release-it.json`
  - `after:bump`: `pnpm run build`
  - `github.release`: true (release body = generated changelog)
  - `github.tokenRef`: `NPM_TOKEN`
  - `git.requireCleanWorkingDir`: false
  - plugin `@release-it/conventional-changelog`:
    - `infile`: `docs/changelog.md` (English, Conventional Commits / angular preset; also linked as root `CHANGELOG.md`)
    - `ignoreRecommendedBump`: true (version still chosen by user / CLI; do not auto-bump from commits)
- **Changelog**: `docs/changelog.md` — shown in docs nav as Changelog; created/updated on each release
- **Registry**: `publishConfig.registry` → `https://npm.pkg.github.com`
- **Package**: `@bosinc/shared`

## Troubleshooting

| Symptom                              | Fix                                                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Interactive “Select increment”       | Use `pnpm exec release-it --ci --increment patch` (or the requested increment/version)                                                     |
| GitHub token warning / web fallback  | Check `NPM_TOKEN`; it is the configured `github.tokenRef`                                                                                  |
| `npm ERR! 403` on publish            | Set `NPM_TOKEN` with `write:packages` for `@bosinc`                                                                                        |
| `Unable to verify collaborator`      | Warning only; publish may still succeed if token is valid                                                                                  |
| Build fails in `after:bump`          | Fix `pnpm run build` and inspect the version/changelog before retrying; the version may already have been bumped                           |
| `prepublishOnly` fails               | Fix the failing typecheck, test, build, or publint check before retrying                                                                   |
| publint reports missing entry points | Run `pnpm run build`, then `pnpm run doctor`                                                                                               |
| Release partially completed          | Inspect the registry version, local/remote tag, and GitHub Release before recovery; an already published version cannot be published again |
