# Nigeria Brief — Nebula (16 slots)

Locked 2026-09-28. See `AGENTS.md` for the reusable flow.
User locked: country=Nigeria, slots=16 relaxed, outcome mix=2 failures, idea-stage allowed (1-2).

## 1. Scope

- Country: Nigeria (`country: "Nigeria"`, tag `nigeria` — NEW tag, see §6)
- News window: RELAXED 2026-09-28 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest — <Mon YYYY>`; never invent dates.
- Slots: 16 ideas total.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): fintech/payments, e-commerce/marketplace/retail-tech, logistics/supply-chain, agritech, healthtech, edtech, energy/off-grid solar, mobility, AI/SaaS, proptech.
- Group B (stage mix, >= 4 distinct stages): seed / Series A / Series B+ / late-stage-public / acquired / closed.
- Group C (outcome mix): 14 operating/acquired + exactly 2 `closed`/`failed` with `challenges` filled (user asked for 2 failures). Up to 2 paper-stage (`status: idea`, funding expected `MISSING`) allowed inside the 14.
- Nigeria lens: at least 3 ideas with explicit strategy fit (Nigeria Startup Act, financial inclusion/cashless economy, agritech/food security, SME digitisation, off-grid energy access) in `vision2030Fit` (reused as the batch country's strategy fit).

## 3. Evidence rules

- NEVER invent numbers/names/dates. `amountRaised` / `valuation` / `founded` only from citable sources; otherwise OMIT the frontmatter key (only `amountSource`/`valuationSource` may carry the literal `MISSING`).
- Each idea: >= 1 INSPECTED EN source `{title, url}` — open the body via fetch, snippets are not evidence (AR source optional). Prefer primary (company blog, filings, reputable press). Idea-stage: founder/accelerator pages count; funding expected `MISSING`.
- Per idea capture: problem solved, how they do it, pain points, how they make money, >= 1 inspected EN source, self-written `summaryAr`.
- `summaryAr`: one-sentence MSA Arabic summary per idea, self-translated when sources are EN-only.

## 4. Schema plan (expanded set, KSA default)

Base: `title, summary, tags, featured, publishedAt, company, country, sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources[{title,url}], summaryAr`.
Expanded: `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit, investors`.
All fields optional except `title, summary, tags, featured, publishedAt` — check `src/content.config.ts` + `src/pages/idea/[...slug].astro` first; only use supported fields.
`status` in `operating|acquired|closed|failed|idea`. Slug = kebab company name. `tags` must include `nigeria`.

## 5. Output format

Files directly (table-first research FAILED 3× — do not use it). Agents research AND write `src/content/ideas/<slug>.md` with disjoint slug sets (2–3 each). Complete = files delivered with omissions, never held back for missing fields.
Body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>` (dated items only).
Lede rule: `title` + `summary` state THE IDEA in English (what the company does/is), never the fundraise or latest news. `summaryAr` is the same idea in MSA Arabic.

## 6. Tag discipline (same change)

- NEW tag `nigeria` must add its Arabic title (`نيجيريا`), flag (`🇳🇬`), and country-map entries in `src/lib/tagAr.ts` (`tagArMap`, `countryTags`, `countryFlagMap`, `countryEnMap`, `countryAccentMap`) in the same change, or the tag renders English-only.
- Keep tag spelling identical across files sharing a sector (one tag page per sector — never `sportstech` next to `sports-tech`).

## 7. Execution plan (after `go`)

1. Workflow: 5-6 writer-agents × 2–3 startups (disjoint slugs). Est. ~5-6 agents, ~10-20 min for 16 ideas.
2. Each writer-agent READS `AGENTS.md` + this brief + `src/content.config.ts` + one good example (e.g. `src/content/ideas/foodics.md`), then researches (search + OPEN every cited source body) AND writes its own files.
3. Replacement policy: if a candidate won't verify (no openable source, unprovable closure), swap it for a citable alternative in the same slot and record the swap — never stall the batch. Quotas enforced by the parent at the end.
4. Parent verify: file conventions, tag discipline, `npm run build` green (repo has NO test harness — build is the gate), file-count check, 2–3 lede spot-checks. Never commit/push unless asked.
