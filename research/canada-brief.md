# Canada Brief — Nebula (16 slots)

Locked 2026-09-28. See `AGENTS.md` for the reusable flow.

## 1. Scope

- Country: Canada (`country: "Canada"`, tag `canada`)
- News window: RELAXED 2026-09-28 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates.
- Slots: 16 ideas total.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): fintech, AI/SaaS, healthtech/biotech, climatetech/energy, logistics/supply-chain, e-commerce/marketplace, edtech, mobility/ev, agtech/foodtech, gaming/media.
- Group B (stage mix, >= 4 distinct stages): idea, seed, Series A, Series B+, late-stage-public/acquired.
- Group C (outcome mix): 13 operating/acquired + exactly 1 failure (`closed`/`failed` with `challenges` filled) + 2 paper-stage (`status: idea`, funding may be `MISSING`).
- Canada lens: at least 4 ideas with explicit Canada strategy fit in `vision2030Fit` (reused as the batch country's strategy fit — e.g. Pan-Canadian AI Strategy, Net-Zero / clean-tech incentives, Innovation Superclusters, digital health / fintech charters).

## 3. Evidence rules

- NEVER invent numbers. `amountRaised` / `valuation` / `founded` only from citable sources; otherwise `MISSING` in research and defaulted (`''`) in frontmatter. `amountSource` / `valuationSource` = publication name or `MISSING`.
- Each idea: >= 1 inspected EN source `{title, url}` (open the body via fetch — snippets are not evidence; AR source optional, nice-to-have). Prefer primary (company blog, filings, accelerator page, reputable press). Paper-stage ideas: founder/accelerator page counts as source. `summaryAr` (MSA) is REQUIRED for every idea — Arabic article sources are not.
- Per idea capture (user ask): problem solved, how they do it, pain points, how they make money (business/pricing model), EN source (+AR where available).
- `summaryAr`: one-sentence MSA Arabic summary per idea, self-translated when sources are EN-only.
- Replacement policy: if a candidate won't verify (no openable source, unprovable closure), swap it for a citable alternative in the same slot and record the swap — never stall the batch.

## 4. Schema plan

Base (`src/content.config.ts`, already expanded): `title, summary, tags, featured, publishedAt, company, country, sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources, summaryAr` + expanded `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit (Canada strategy fit), investors`.

Conventions: slug = kebab company name. `tags` must include `canada`. `country: "Canada"`. `status` in `operating|acquired|closed|failed|idea`. Reuse existing tags from `src/lib/tagAr.ts`; any NEW tag must add its Arabic title to that map in the same change (plus `canada` → `كندا` in `tagArMap`, `countryTags`, `countryFlagMap` 🇨🇦, `countryEnMap`, `countryAccentMap`).

Writer body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>` (dated items only, no invented dates).

Lede rule (never break): `title` + `summary` state THE IDEA in English (what the company does/is), never the fundraise or latest news — funding lives in `## Funding` / `## Latest` only. `summaryAr` is the same idea in MSA Arabic.

## 5. Output format

Files directly (table-first research FAILED 3× — do not use it). Agents research AND write `src/content/ideas/<slug>.md` with disjoint slug sets (2–3 each). Complete = files delivered with omissions, never held back for missing fields.

## 6. Execution plan (after `go`)

1. Workflow: 5–6 writer-agents × 2–3 startups each (disjoint slugs). Each writer-agent READS `AGENTS.md` + this brief + `src/content.config.ts` + one good example file (e.g. `src/content/ideas/zoho.md` for operating, `zilingo.md` for closed), then researches (search + OPEN every cited source body) AND writes its own files. Est. ~5-6 agents, ~10-20 min for 16 ideas.
2. Parent verify: file-count check, tag discipline, lede spot-checks (2–3), `npm run build` green. Never commit/push unless explicitly asked.
