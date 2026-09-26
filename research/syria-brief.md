# Syria Brief — Banana Nebula (16 slots)

Locked 2026-09-26. See `AGENTS.md` for the reusable flow.

## 1. Scope

- Country: Syria (`country: "Syria"`, tag `syria`)
- Eligibility: Syria-based/operating in Syria + Syrian-founded diaspora startups (HQ abroad counts if founder is Syrian or product serves Syria/Levant). Record HQ truthfully in `hqCity`.
- News window: RELAXED 2026-09-26 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates.
- Slots: 16 ideas total.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): fintech/payments, e-commerce/marketplace, logistics/delivery, healthtech, edtech, foodtech/agritech, energy/climate, AI/SaaS, media/creative-tech, mobility, jobs/freelancing platforms.
- Group B (stage mix, >= 4 distinct stages): idea, seed/pre-seed, Series A, Series B+, late-stage/public/acquired/grant-funded-NGO-scale.
- Group C (outcome mix): 13 operating/acquired + exactly 1 failure (`closed`/`failed` with `challenges` filled) + 2 paper-stage (`status: idea`, funding may be `MISSING`).
- Syria lens: at least 4 ideas with explicit reconstruction/resilience fit (diaspora capital, jobs, connectivity, rebuilding services) recorded in `vision2030Fit` (reused as Syria strategy-fit field).

## 3. Evidence rules

- NEVER invent numbers. `amountRaised` / `valuation` / `founded` only from citable sources; otherwise `MISSING` in research and defaulted (`''`) in frontmatter. `amountSource` / `valuationSource` = publication name or `MISSING`.
- Each idea: >= 1 INSPECTED EN source `{title, url}` (open the body via fetch — snippets are not evidence; AR source optional, nice-to-have). Prefer primary (company blog, filings, accelerator page, reputable press). Paper-stage ideas: founder/accelerator page counts as source. `summaryAr` (MSA, one sentence) is REQUIRED for every idea — self-translate when sources are EN-only.
- Per idea capture: problem solved, how they do it, pain points, how they make money (business/pricing model), EN (+AR if available) sources.
- Replacement policy: if a candidate won't verify (no openable source, unprovable closure), swap for a citable alternative in the same slot and record the swap — never stall the batch.

## 4. Schema plan (expanded set — KSA default, always)

Base (`src/content.config.ts`): `title, summary, tags, featured, publishedAt, company, country, sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources, summaryAr`.
Expanded (all `.default('')`, already in schema): `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit, investors`.
Conventions: slug = kebab company name; `tags` must include `syria`; `country: "Syria"` (full name); `status` in `operating|acquired|closed|failed|idea`; new `syria` tag needs Arabic title (`سوريا`) in `src/lib/tagAr.ts` in the same change; reuse existing tag spellings from that map.
Lede rule: `title` + `summary` state THE IDEA in English (never the fundraise); `summaryAr` is the same idea in MSA Arabic.
Body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>` (dated items only).

## 5. Output format

Files directly (table-first research FAILED 3× — do not use it). Agents research AND write `src/content/ideas/<slug>.md` with disjoint slug sets (2–3 each). Complete = files delivered with omissions, never held back for missing fields.

## 6. Execution plan (after `go`)

1. Workflow: 5 writer-agents × 3–4 startups each (disjoint slugs, ~16 ideas), each READS `AGENTS.md` + this brief + `src/content.config.ts` + one good example (e.g. `sary.md`/`barq.md`), researches (search + OPEN every cited source body) AND writes its own files.
2. Parent verify: file conventions, tag discipline (`syria` + `سوريا` map entry), `npm run build` green, file-count check, 2–3 lede spot-checks.
3. Never commit/push unless explicitly asked.
