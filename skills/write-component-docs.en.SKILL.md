# Skill: Generate `index.md` from `index.tsx` (English)

## Goal

Based on the component implementation file `src/components/<ComponentName>/index.tsx`, generate a consistent `index.md` document that can be used directly by dumi.

---

## Input

- Required: `index.tsx` under the component directory
- Optional: other files in the same directory (for example `types.ts`, `*.md`), and exports from `src/index.ts`

---

## Output Requirements (exactly two major sections)

Generate `src/components/<ComponentName>/index.md` with this required structure:

1. H1 title: component name (must match exported name)
2. A short intro in English (1-2 sentences)
3. `## Demos`
   - At least one `### Basic Usage` subsection
   - Every subsection must include a runnable `tsx` demo (`export default`)
4. `## API`
   - Use a Markdown table to describe public APIs
   - Must cover at least: component props (or hook params/return values)

---

## Writing Flow (must follow in order)

1. **Identify component name and export style**
   - Prefer `export function Xxx` or `export const Xxx`
   - If `index.tsx` only re-exports, continue reading the source file being exported

2. **Extract component responsibility**
   - Answer in one sentence: what problem this component solves
   - Avoid implementation details (internal hooks, styling internals, etc.)

3. **Extract minimal usable API**
   - Find the first props / usage pattern users will pass
   - Keep the basic demo minimal and runnable

4. **Identify configurable capabilities**
   - For example: `title`, `variant`, `slotProps`, event callbacks
   - Put each capability in a separate subsection with its own demo

5. **Organize API details**
   - Extract fields from `Props` / `type` / `interface`
   - Record field name, type, required flag, default value, description
   - For fields with `?`, set `Required` column to `-`; without `?`, set to `✅`
   - If no explicit default exists, set default value to `-`

6. **Output final md**
   - Keep copy concise and clear in English
   - Use `tsx` for all code blocks
- Keep import source as `@bosinc/shared`

---

## Document Template (default)

```md
# <ComponentName>

<One-sentence component description.>

## Demos

### Basic Usage

```tsx
import { <ComponentName> } from '@bosinc/shared';

export default () => {
  return <ComponentName />;
};
```

## API

### <ComponentName>Props

| Parameter | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| ... | ... | ... | ✅/- | ... |
```

If there are extra capabilities, append:

```md
### <Capability Name>

```tsx
import { <ComponentName> } from '@bosinc/shared';

export default () => {
  return <ComponentName <key-prop-example> />;
};
```
```

---

## Quality Checklist (self-check after generation)

- Title must match the real exported component name
- Document must include exactly two major sections: `Demos` and `API`
- Demo code should explain usage, not implementation
- Demo imports must come from `@bosinc/shared`
- Style should stay consistent with existing repo docs (semicolon, quotes, function style)
- Do not invent props / hooks / return values that do not exist
- Keep descriptions within source-of-truth boundaries
- API table must include: parameter, description, type, required, default

---

## Style Constraints (for this repo)

- Keep English descriptions short and direct
- Prefer subsection names like: `Basic Usage`, `Configure...`, `Customize...`
- Keep each demo independent and self-contained
- Prefer source type expressions directly; avoid unnecessary rewriting

---

## Failure Handling

If `index.tsx` does not provide enough info for a reliable doc:

1. Clearly list missing information (for example: props definitions not found)
2. Output only a conservative doc version (title + intro + minimal demo + API table skeleton)
3. Put follow-up questions outside the md file; do not guess inside the doc
