# South Korea Brief — Nebula (16 slots)

Locked 2026-09-26. See `AGENTS.md` for the reusable flow.

## 1. Scope

- Country: South Korea (`country: "South Korea"`, tag `south-korea`)
- News window: RELAXED 2026-09-26 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates.
- Slots: 16 ideas total.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): AI/semiconductors, robotics/manufacturing, beauty-tech/K-beauty commerce, entertainment-tech (K-pop Creator tools)/gaming, fintech/payments, e-commerce/retail-tech, healthtech/biotech, batteries/EVs, logistics/supply-chain, edtech, foodtech, proptech.
- Group B (stage mix, >= 4 distinct stages): idea, seed, Series A, Series B+, late-stage/acquired.
- Group C (outcome mix): 13 operating/acquired + exactly 1 failure (`closed`/`failed` with `challenges` filled) + 2 paper-stage (`status: idea`, funding may be `MISSING`).
- Korea lens: at least 4 ideas with explicit Korea strategy fit (semiconductor/battery supply chain, AI/robotics manufacturing DX, K-beauty/entertainment global export, fintech/digital economy) — recorded in `vision2030Fit` (reused as Korea's strategy fit).

## 3. Evidence rules

- NEVER invent numbers. `amountRaised` / `valuation` / `founded` only from citable sources; otherwise `MISSING` in research and defaulted (`''`) in frontmatter. `amountSource` / `valuationSource` = publication name or `MISSING`.
- Each idea: >= 1 inspected EN source `{title, url}` (open the body via fetch — snippets are not evidence; KR/AR source optional, nice-to-have). Prefer primary (company blog, filings, accelerator page, reputable press — TechCrunch, Reuters, Korea Herald, Korea Economic Daily, Tech in Asia, etc.). Paper-stage ideas: founder/accelerator page counts as source. `summaryAr` (MSA) is REQUIRED for every idea.
- Per idea capture: problem solved, how they do it, pain points, how they make money (business/pricing model), EN (+KR where available) sources.
- `summaryAr`: one-sentence MSA Arabic summary per idea, self-translated when sources are EN-only.
- Renderer check (2026-09-26): `src/pages/idea/[...slug].astro` already renders expanded fields (founders/hqCity/businessModel/license/vision2030Fit/usersMetrics/investors). No schema patch needed — `vision2030Fit` is reused as Korea strategy fit.

## 4. Schema plan

Base (existing, `src/content.config.ts`): `title, summary, tags, featured, publishedAt, company, country, sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources, summaryAr`.

Expanded (already in schema, use freely): `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit (= Korea strategy fit), investors`.
`status` in `operating|acquired|closed|failed|idea`. Slug: kebab company name. `tags` must include `south-korea`. `country: "South Korea"`. `publishedAt` = freshest citable item date (RELAXED window).

Writer body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>` (dated items only, no invented dates).

Lede rule: `title` + `summary` state THE IDEA in English (never the fundraise); `summaryAr` is the same idea in MSA Arabic.

Tag discipline: `south-korea` is a NEW tag — add `south-korea: 'كوريا الجنوبية'` to `tagAr.ts` maps (`tagArMap`, `countryTags`, `countryFlagMap` 🇰🇷, `countryEnMap`, `countryAccentMap`) in the same change; keep sector tag spelling identical across files (reuse existing tags from `src/lib/tagAr.ts`).

## 5. Output format

Files directly (table-first research FAILED 3× — do not use it). Agents research AND write `src/content/ideas/<slug>.md` with disjoint slug sets (2–3 each). Table rows are not a deliverable.

## 6. Execution plan (after `go`)

1. Workflow: 5 writer-agents × 3-4 startups with DISJOINT slug sets (AI/semiconductors+robotics / beauty-tech+entertainment+gaming / fintech+e-com+logistics / bio+health+batteries+foodtech / wildcards+failure+idea-stage). Est. ~5 agents, ~10-20 min.
2. Each writer-agent READS `AGENTS.md` + this brief + `src/content.config.ts` + one good example (`mujin.md`, failure pattern `capiter.md`), then researches (search + OPEN every cited source body) AND writes its own files. Complete = files delivered with omissions, never held back for missing fields.
3. Replacement policy: if a candidate won't verify (no openable source, unprovable closure), swap for a citable alternative in the same slot and record the swap.
4. Parent verify: file conventions, `npm run build` green, file-count check, 2–3 lede spot-checks, `south-korea` tag renders Arabic on /tags. Never commit/push unless asked.
