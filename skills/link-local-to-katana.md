---
name: link-local-to-katana
description: >-
  Sync this @bosinc/shared checkout into katana-web local debug mode
  (.local-link mirror). Use when changing shared for katana consumption,
  linking/unlinking local debug, or after editing components that katana imports.
---

# Link local @bosinc/shared → katana-web

This repo **is** the shared source. Point **katana-web** at it for debugging **without publishing**.

**Do not use** `link:../pear-shared` from katana — realpath leaves the monorepo and Next/Turbopack fails with `Can't resolve '@bosinc/shared'`.

Instead (from katana): mirror into **`.local-link/@bosinc/shared`** and pin via `pnpm.overrides` + **`link:.local-link/@bosinc/shared`**.

## Default working mode

When changing code here that katana will consume:

1. Edit + verify in this repo
2. **`pnpm build`** (or keep `pnpm build:watch` running)
3. **Sync** into katana `.local-link` (see below)
4. Refresh / restart `pnpm dev:web` in katana if HMR misses it

Stale `.local-link` is a common bug (UI looks “unchanged” after edits). Prefer syncing after meaningful `dist` changes.

## Mission

When the user asks to link / sync / debug local shared for katana (e.g. “接入 katana 调试”, “sync shared”, “unlink shared”), deliver:

1. **sync** / **link** (default after shared edits): build if needed → sync mirror → ensure katana override → report
2. **unlink**: restore katana override to published semver → `pnpm i` → optionally remove `.local-link`
3. **status**: print whether katana is linked
4. **Never commit** the `link:.local-link/...` override in katana

## Input

| Parameter       | Required | Default                            | Description                                |
| --------------- | -------- | ---------------------------------- | ------------------------------------------ |
| Action          | No       | **sync** (after edits) or **link** | `sync` / `link` / `unlink` / `status`      |
| katana-web path | No       | `<this-repo>/../katana-web`        | Only if katana is not the sibling checkout |

**There is no pear-shared path parameter** — `SHARED_ROOT` is always this repository.

**Action inference**

- After implementing/fixing shared code for katana → **sync** (build + copy)
- `unlink` / `restore` / `退出调试` / `取消 link` → **unlink**
- `status` / `检查` / `当前是不是 link` → **status**
- `link` / `接入调试` → **link** (sync + ensure override + `pnpm i`)

## How it works

| Piece                                             | Role                                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------------ |
| This repo `dist/`                                 | Built output consumers import                                                  |
| `katana-web/scripts/sync-local-bosinc-shared.mjs` | Copies `package.json` + `dist/` → `.local-link/@bosinc/shared`, symlinks peers |
| `katana-web` `pnpm.overrides["@bosinc/shared"]`   | `"link:.local-link/@bosinc/shared"` while debugging                            |
| `apps/web` & `apps/web-common` deps               | Stay on published semver so unlink can restore                                 |
| `katana-web/.local-link/`                         | Gitignored                                                                     |

## Safety rules

- **Do NOT** commit or push katana’s `link:.local-link/...` override.
- **Do NOT** use `link:` to a path outside the katana monorepo.
- **Do NOT** change unrelated dependencies.
- If katana `apps/web` and `apps/web-common` `@bosinc/shared` versions differ → **stop** and ask.

## Paths

```bash
SHARED_ROOT="$(git rev-parse --show-toplevel)"   # this repo
KATANA_ROOT="${KATANA_ROOT:-$(resolve "${SHARED_ROOT}/../katana-web")}"
```

Verify `KATANA_ROOT` has `scripts/sync-local-bosinc-shared.mjs`.

## Workflow

### status

From this repo:

```bash
SHARED_ROOT="$(git rev-parse --show-toplevel)"
KATANA_ROOT="$(cd "${SHARED_ROOT}/../katana-web" && pwd)"
node -e "
const path = require('path');
const katana = process.argv[1];
const root = require(path.join(katana, 'package.json'));
const web = require(path.join(katana, 'apps/web/package.json')).dependencies['@bosinc/shared'];
const common = require(path.join(katana, 'apps/web-common/package.json')).dependencies['@bosinc/shared'];
const override = root.pnpm?.overrides?.['@bosinc/shared'];
const linked = String(override || '').includes('.local-link');
console.log(JSON.stringify({ katana, web, common, override, linked }, null, 2));
" "${KATANA_ROOT}"
```

### sync (after edits here — do this by default)

```bash
cd "${SHARED_ROOT}"
pnpm build   # skip only if dist is already fresh / build:watch just rebuilt

node "${KATANA_ROOT}/scripts/sync-local-bosinc-shared.mjs" "${SHARED_ROOT}"
```

Optional watch (two terminals):

- pear-shared: `pnpm build:watch`
- katana: `node scripts/sync-local-bosinc-shared.mjs --watch` (from katana root; pass shared path if needed)

### link (enter debug mode)

1. Run **sync**
2. In katana root, set **only** `pnpm.overrides["@bosinc/shared"]` to:

```text
link:.local-link/@bosinc/shared
```

3. `pnpm i` in katana
4. Report Debug mode **ON**; remind not to commit the override

### unlink (exit debug mode)

1. In katana, `RESTORE` from `apps/web/package.json` → `dependencies["@bosinc/shared"]` (semver)
2. Set override to `"${RESTORE}"`
3. `pnpm i`
4. Optional: `rm -rf .local-link`
5. Report Debug mode **OFF**

## Agent habits (important)

When working in this repo on UI/components used by katana:

- Prefer finishing with **build + sync**, not only editing source
- If the user says katana “didn’t update”, check **status** then **sync** before debugging logic
- Do not ask the user for the pear-shared path

## Related

- Release / publish: `skills/release-package.md`
- katana sync script: `katana-web/scripts/sync-local-bosinc-shared.mjs`
- katana app: `pnpm dev:web`

## Notes

- Skill text is in **English**; reply to the user in their language.
- Why not `link:../pear-shared`? Symlink realpath → outside repo → Next “Can't resolve '@bosinc/shared'”.
- Prefer **`link:.local-link/@bosinc/shared`**: realpath stays inside katana; sync updates are visible after refresh (restart if HMR misses it).
