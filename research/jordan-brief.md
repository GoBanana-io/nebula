# Jordan Brief — Banana Nebula (16 slots)

Locked 2026-09-26. See `AGENTS.md` for the reusable flow.

## 1. Scope

- Country: Jordan (`country: "Jordan"`, tag `jordan`)
- News window: RELAXED 2026-09-26 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates.
- Slots: 16 ideas total.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): fintech/payments, edtech, healthtech, e-commerce/marketplace, logistics/supply-chain, AI/SaaS, gaming, agrifood/water-tech, energy/climate, mobility, proptech.
- Group B (stage mix, ≥4 distinct stages): idea, seed, Series A, Series B+, late-stage/acquired.
- Group C (outcome mix): 14 operating/acquired + exactly 1 failure (`closed`/`failed` with `challenges` filled) + 1 paper-stage (`status: idea`, funding expected `MISSING`). Scales the 12-slot default (11+1) to 16 slots per user lock.
- Jordan lens: at least 4 ideas with explicit Jordan strategy fit — Economic Modernisation Vision / Vision 2033 (fintech/ICT digital economy, tourism, water/energy).

## 3. Schema (expanded set — always; do NOT use base-only)

Base: `title, summary, tags, featured, publishedAt, company, country ("Jordan"), sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources[{title,url}], summaryAr`.
Expanded (required on every file): `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit` (reused as JORDAN strategy fit — Economic Modernisation Vision / Vision 2033 alignment), `investors`.
Only use fields the renderer/schema actually supports — checked `src/content.config.ts` (all present, all `.default('')`) + `src/pages/idea/[...slug].astro` on 2026-09-26.

## 4. Evidence rules

- ≥1 INSPECTED EN source per startup (open the body via fetch — snippets are not evidence; AR source optional). Prefer primary (company blog, filings, reputable press).
- NEVER invent numbers/names/dates — OMIT the frontmatter key when unverifiable (only `amountSource`/`valuationSource` may carry the literal `MISSING`).
- `summaryAr`: one-sentence MSA Arabic, self-translated when sources are EN-only.
- Idea-stage: founder/accelerator pages count; funding expected `MISSING`.

## 5. Output (files directly — table-first research FAILED 3×, do not use it)

- Agents research AND write `src/content/ideas/<slug>.md` with DISJOINT slug sets (3–4 each across 5 agents). Parent adjusts at fan-out.
- File conventions: slug = kebab company name; `tags` must include `jordan`; `country` = full name "Jordan"; `status` in `operating|acquired|closed|failed|idea`.
- Tag discipline: reuse existing tags from `src/lib/tagAr.ts`; the NEW `jordan` tag MUST add its Arabic title (`الأردن`) to `tagArMap` + `countryTags` + `countryFlagMap` (🇯🇴) + `countryEnMap` + `countryAccentMap` in the same change. Keep tag spelling identical across files sharing a sector (one tag page per sector — never `sportstech` next to `sports-tech`).
- Lede rule (never break): `title` + `summary` state THE IDEA in English (what the company does/is), never the fundraise or latest news. `summaryAr` is the same idea in MSA Arabic.
- Body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>` (dated items only, no invented dates).
- Replacement policy: if a candidate won't verify (no openable source, unprovable closure), swap it for a citable alternative in the same slot and record the swap — never stall the batch. Quotas enforced by the parent at the end, not by a synthesizer agent.
- Verify (parent): `npm run build` green (no test harness — build is the gate), file-count check, 2–3 lede spot-checks. Never commit/push unless explicitly asked.
