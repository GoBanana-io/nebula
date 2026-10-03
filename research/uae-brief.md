# UAE Brief — Nebula (16 slots)

Locked 2026-09-26. See `AGENTS.md` for the reusable flow.

## 1. Scope

- Country: United Arab Emirates (`country: "United Arab Emirates"`, tag `uae`)
- News window: RELAXED 2026-09-26 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates.
- Slots: 16 ideas total.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): fintech, e-commerce/marketplace, logistics/supply-chain, healthtech, edtech, proptech, travel/tourism tech, energy/climate, AI/SaaS, mobility, agrifood/desert-tech.
- Group B (stage mix, >= 4 distinct stages): idea, seed, Series A, Series B+, late-stage/acquired.
- Group C (outcome mix): 13 operating/acquired + exactly 1 failure (`closed`/`failed` with `challenges` filled) + 2 paper-stage (`status: idea`, funding may be `MISSING`).
- UAE lens: at least 4 ideas with explicit UAE strategy fit (We the UAE 2031 / UAE Vision 2031, Dubai D33, ADGM/DIFC fintech hub, logistics + tourism, clean energy).

## 3. Evidence rules

- NEVER invent numbers. `amountRaised` / `valuation` / `founded` only from citable sources; otherwise `MISSING` in research and defaulted (`''`) in frontmatter. `amountSource` / `valuationSource` = publication name or `MISSING`.
- Each idea: >= 1 inspected EN source `{title, url}` (open the body via fetch — snippets are not evidence; AR source optional, nice-to-have). Prefer primary (company blog, ADGM/DIFC/Central Bank filing, accelerator page, reputable press). Paper-stage ideas: founder/accelerator page counts as source. `summaryAr` (MSA) is REQUIRED for every idea.
- Per idea capture: problem solved, how they do it, pain points, how they make money (business/pricing model), EN (+AR where available) sources.
- `summaryAr`: one-sentence MSA Arabic summary per idea, self-translated when sources are EN-only.
- Renderer check (2026-09-26): `src/pages/idea/[...slug].astro` already renders expanded fields (founders/hqCity/businessModel/license/vision2030Fit/usersMetrics/investors). No schema patch needed — `vision2030Fit` is reused as UAE strategy fit (We the UAE 2031 / D33).

## 4. Schema plan

Base (existing, `src/content.config.ts`): `title, summary, tags, featured, publishedAt, company, country, sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources, summaryAr`.

Expanded (already in schema, use freely): `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit (= UAE strategy fit), investors`.
`status` in `operating|acquired|closed|failed|idea`. Slug: kebab company name. `tags` must include `uae`. Tag discipline: reuse tags from `src/lib/tagAr.ts`; any NEW tag must add its Arabic title to that map in the same change. Keep spelling identical across files sharing a sector.

Writer body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>`.

Lede rule: `title` + `summary` state THE IDEA in English (what the company does/is), never the fundraise or latest news. `summaryAr` is the same idea in MSA Arabic.

## 5. Output format

Files directly: 16x `src/content/ideas/<slug>.md` (disjoint slug sets, 2–3 per writer-agent). Table-first research FAILED 3x — do not use it.

## 6. Execution plan (after `go`)

1. No schema patch needed (expanded fields already in schema + renderer).
2. Workflow: 5–6 writer-agents x 2–3 startups with disjoint slugs (fintech / e-com+proptech / logistics+mobility / health+edtech+tourism / energy+AI+agrifood / +1 failure +2 idea-stage). Est. ~5-6 agents, ~10-20 min.
3. Parent verify: file conventions, tag discipline (`uae` + `united arab emirates` Arabic titles in `tagAr.ts`), `npm run build` green, file-count + 2–3 lede spot-checks.
