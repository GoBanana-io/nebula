# China Brief — Banana Nebula (16 slots)

Locked 2026-09-26. See `AGENTS.md` for the reusable flow.

## 1. Scope

- Country: China (`country: "China"`, tag `china`)
- News window: RELAXED 2026-09-26 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates.
- Slots: 16 ideas total.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): EVs/batteries, e-commerce/retail-tech, AI/LLMs, robotics/drones, semiconductors, biotech, fintech/payments, logistics/supply-chain, commercial space, gaming/entertainment-tech, healthtech, agrifood.
- Group B (stage mix, >= 4 distinct stages): idea, seed, Series A, Series B+, late-stage/acquired.
- Group C (outcome mix): 13 operating/acquired + exactly 1 failure (`closed`/`failed` with `challenges` filled) + 2 paper-stage (`status: idea`, funding may be `MISSING`).
- China lens: at least 4 ideas with explicit tech self-sufficiency fit (semiconductors, EVs/batteries supply chain, robotics/drones, AI/LLMs, commercial space, biotech) — recorded in `vision2030Fit` (reused as China's strategy fit).

## 3. Evidence rules

- NEVER invent numbers. `amountRaised` / `valuation` / `founded` only from citable sources; otherwise `MISSING` in research and defaulted (`''`) in frontmatter. `amountSource` / `valuationSource` = publication name or `MISSING`.
- Each idea: >= 1 inspected EN source `{title, url}` (open the body via fetch — snippets are not evidence; CN/AR source optional, nice-to-have). Prefer primary (company blog, filings, accelerator page, reputable press — TechCrunch, Reuters, SCMP, KrASIA, etc.). Paper-stage ideas: founder/accelerator page counts as source. `summaryAr` (MSA) is REQUIRED for every idea.
- Per idea capture: problem solved, how they do it, pain points, how they make money (business/pricing model), EN (+CN where available) sources.
- `summaryAr`: one-sentence MSA Arabic summary per idea, self-translated when sources are EN-only.
- Renderer check (2026-09-26): `src/pages/idea/[...slug].astro` already renders expanded fields (founders/hqCity/businessModel/license/vision2030Fit/usersMetrics/investors). No schema patch needed — `vision2030Fit` is reused as China strategy fit.

## 4. Schema plan

Base (existing, `src/content.config.ts`): `title, summary, tags, featured, publishedAt, company, country, sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources, summaryAr`.

Expanded (already in schema, use freely): `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit (= China tech self-sufficiency fit), investors`.
`status` in `operating|acquired|closed|failed|idea`. Slug: kebab company name. `tags` must include `china`. `country: "China"`. `publishedAt` = freshest citable item date (RELAXED window).

Writer body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>` (dated items only, no invented dates).

Lede rule: `title` + `summary` state THE IDEA in English (never the fundraise); `summaryAr` is the same idea in MSA Arabic.

Tag discipline: `china` is a NEW tag — add `china: 'الصين'` to `tagAr.ts` maps (`tagArMap`, `countryTags`, `countryFlagMap` 🇨🇳, `countryEnMap`, `countryAccentMap`) in the same change; keep sector tag spelling identical across files (reuse existing tags from `src/lib/tagAr.ts`).

## 5. Output format

Files directly (table-first research FAILED 3× — do not use it). Agents research AND write `src/content/ideas/<slug>.md` with disjoint slug sets (2–3 each). Table rows are not a deliverable.

## 6. Execution plan (after `go`)

1. Workflow: 5 writer-agents × 3-4 startups with DISJOINT slug sets (EVs/batteries+semiconductors / e-com+fintech+logistics / AI+robotics/drones+space / biotech+health+gaming+agrifood / wildcards+failure+idea-stage). Est. ~5 agents, ~10-20 min.
2. Each writer-agent READS `AGENTS.md` + this brief + `src/content.config.ts` + one good example (`hapondo.md`, failure pattern `capiter.md`), then researches (search + OPEN every cited source body) AND writes its own files. Complete = files delivered with omissions, never held back for missing fields.
3. Replacement policy: if a candidate won't verify (no openable source, unprovable closure), swap for a citable alternative in the same slot and record the swap.
4. Parent verify: file conventions, `npm run build` green, file-count check, 2–3 lede spot-checks, `china` tag renders Arabic on /tags. Never commit/push unless asked.
