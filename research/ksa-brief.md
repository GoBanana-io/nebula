# KSA Brief — Nebula (16 slots)

Locked 2026-09-26. See `AGENTS.md` for the reusable flow.

## 1. Scope

- Country: Saudi Arabia (`country: "Saudi Arabia"`, tag `ksa`)
- News window: RELAXED 2026-09-26 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates.
- Slots: 16 ideas total.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): fintech, e-commerce/marketplace, logistics/supply-chain, healthtech, edtech, proptech, tourism/Hajj-Umrah tech, energy/climate, AI/SaaS, mobility, agrifood/desert-tech.
- Group B (stage mix, >= 4 distinct stages): idea, seed, Series A, Series B+, late-stage/public/acquired.
- Group C (outcome mix): 13 operating/acquired + exactly 1 failure (`closed`/`failed` with `challenges` filled) + 2 paper-stage (`status: idea`, funding may be `MISSING`).
- KSA lens: at least 4 ideas with explicit Vision 2030 fit (fintech hub, tourism, logistics, clean energy).

## 3. Evidence rules

- NEVER invent numbers. `amountRaised` / `valuation` / `founded` only from citable sources; otherwise `MISSING` in research and defaulted (`''`) in frontmatter. `amountSource` / `valuationSource` = publication name or `MISSING`.
- Each idea: >= 1 inspected EN source `{title, url}` (AR source optional, nice-to-have). Prefer primary (company blog, SAMA/CMA filing, accelerator page, reputable press). Paper-stage ideas: founder/accelerator page counts as source. `summaryAr` (MSA) is REQUIRED for every idea — Arabic article sources are not.
- Per idea capture (user ask): problem solved, how they do it, pain points, how they make money (business/pricing model), EN+AR sources.
- `summaryAr`: one-sentence MSA Arabic summary per idea.
- Renderer check (2026-09-26): `src/pages/idea/[...slug].astro` renders only base fields (company/founded/stage/status/raised/valuation/tags/sources + coreProblem/whyItWorked/challenges pillars). Expanded fields below require a schema + renderer update BEFORE the writer step, else they live only in body text.

## 4. Schema plan

Base (existing, `src/content.config.ts`): `title, summary, tags, featured, publishedAt, company, country, sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources, summaryAr`.

Proposed new optional fields (all `.default('')` except `sourcesExtra` default `[]`):
`howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit, investors`.
`status` gains `idea` value. Slug: kebab company name. `tags` must include `ksa`. `publishedAt` inside window.

Writer body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>`.

## 5. Output format

Table: # | company | sector | stage | status | amountRaised (amountSource) | valuation (valuationSource) | EN source | AR source | notes (MISSING where unverifiable). Do NOT build files yet — research rows only.

## 6. Execution plan (after `go`)

1. Schema + renderer patch (`content.config.ts`, `[...slug].astro` snapshot/sidebar for new fields; `npm run build` green).
2. Workflow: 4 researchers x 4 startups (fintech+logistics / e-com+proptech / health+tourism+mobility / energy+AI+agrifood) + 1 synthesizer for de-dupe + quota check. Est. ~5 agents, ~150-250k tokens, ~10-15 min.
3. Writer: 16x `src/content/ideas/<slug>.md` + `npm run build`.
