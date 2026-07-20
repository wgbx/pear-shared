---
name: release-package
description: >-
  Automates npm/GitHub Packages release for @bosinc/shared using release-it.
  Use when the user asks to release, publish, ship, bump version, run release-it,
  or npm publish this package.
---

# Skill: Release @bosinc/shared

## Goal

Run a **fully non-interactive** release: version bump → update `CHANGELOG.md` → build → git tag/push → `npm publish` to GitHub Packages → GitHub Release (body = changelog).

## When to use

User asks to release, publish, bump version, run `npm run release`, or references `@skills` release / `release-package`.

## Version policy (default)

| User input                                    | Result                             |
| --------------------------------------------- | ---------------------------------- |
| No version mentioned (e.g. “release”, “发版”) | **patch** bump (`0.1.8` → `0.1.9`) |
| Increment keyword (`minor`, `major`, `patch`) | That increment                     |
| Exact semver (`0.2.0`, `1.0.0`)               | Release that version               |

**Do not** infer `minor` or `major` from commit messages (`feat`, `BREAKING`, etc.) unless the user explicitly asks for that increment or version.

## Critical rules

1. **Never** use `pnpm run release -- --ci` — pnpm does not forward flags reliably; release-it will hang on interactive prompts.
2. **Always** use the project script:
   ```bash
   ./skills/scripts/release.sh              # default patch
   ./skills/scripts/release.sh minor
   ./skills/scripts/release.sh 0.2.0
   ```
   Or equivalent: `pnpm exec release-it --ci --increment patch`
3. **Do not** create a separate git commit before release unless the user explicitly asked — release-it commits the version bump (and may include staged changes; `.release-it.json` has `requireCleanWorkingDir: false`).
4. **Do not** push or publish without user intent in the message; releasing implies permission to push/publish.

## Prerequisites (verify before running)

| Check                  | Command / action                                    |
| ---------------------- | --------------------------------------------------- |
| On `main`, synced      | `git status`, `git fetch origin`                    |
| `NPM_TOKEN` set        | `npm whoami --registry=https://npm.pkg.github.com`  |
| `GITHUB_TOKEN` or `gh` | Script auto-exports from `gh auth token` if missing |
| Package manager        | **pnpm** (lockfile: `pnpm-lock.yaml`)               |

Token scopes:

- `NPM_TOKEN`: `write:packages` (publish to `https://npm.pkg.github.com`)
- `GITHUB_TOKEN`: `repo` (create GitHub Release)

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

### Step 2: Choose version

1. User gave exact semver → `./skills/scripts/release.sh <version>`
2. User said `minor` / `major` / `patch` → `./skills/scripts/release.sh <increment>`
3. Otherwise → `./skills/scripts/release.sh` (patch default)

### Step 3: Run release

```bash
chmod +x skills/scripts/release.sh
export NPM_TOKEN="${NPM_TOKEN:-}"   # must already be in env
./skills/scripts/release.sh           # default patch
```

`block_until_ms` ≥ 300000 — build (`after:bump`: `pnpm run build`) can take several minutes.

### Step 4: Verify

```bash
git log -1 --oneline
git tag --sort=-v:refname | head -3
npm view @bosinc/shared version --registry=https://npm.pkg.github.com
gh release view "$(node -p "require('./package.json').version")" 2>/dev/null || true
head -40 CHANGELOG.md
```

Summarize for the user: old version → new version, tag name, registry URL, GitHub Release link, and that `CHANGELOG.md` was updated.

## Project config reference

- **Script**: `package.json` → `"release": "release-it"`
- **Config**: `.release-it.json`
  - `after:bump`: `pnpm run build`
  - `github.release`: true (release body = generated changelog)
  - `git.requireCleanWorkingDir`: false
  - plugin `@release-it/conventional-changelog`:
    - `infile`: `CHANGELOG.md` (English, Conventional Commits / angular preset)
    - `ignoreRecommendedBump`: true (version still chosen by user / CLI; do not auto-bump from commits)
- **Changelog**: `CHANGELOG.md` — created/updated on each release; first release after enabling the plugin backfills history from git tags
- **Registry**: `publishConfig.registry` → `https://npm.pkg.github.com`
- **Package**: `@bosinc/shared`

## Troubleshooting

| Symptom                                        | Fix                                                                                 |
| ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| Interactive “Select increment”                 | Used `pnpm run release`; switch to `./skills/scripts/release.sh`                    |
| `GITHUB_TOKEN` warning / web fallback          | `export GITHUB_TOKEN=$(gh auth token)`                                              |
| `npm ERR! 403` on publish                      | Set `NPM_TOKEN` with `write:packages` for `@bosinc`                                 |
| `Unable to verify collaborator`                | Warning only; publish may still succeed if token is valid                           |
| Build fails in `after:bump`                    | Fix `pnpm run build` locally, then re-run release                                   |
| Release half-done (tag pushed, publish failed) | Do **not** re-run same version; fix error, bump or use release-it recovery per docs |

## Example agent sessions

**User**: Release / 发版

1. Check `git status`, `NPM_TOKEN`, current version `0.1.8`
2. Run `./skills/scripts/release.sh` (no args → patch)
3. Report: `0.1.8` → `0.1.9`

**User**: Release minor version

1. Run `./skills/scripts/release.sh minor`
2. Report: `0.1.8` → `0.2.0`

**User**: Release version 0.2.0

1. Run `./skills/scripts/release.sh 0.2.0`
2. Report: published `0.2.0`
