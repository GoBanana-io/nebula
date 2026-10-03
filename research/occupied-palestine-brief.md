# Occupied Palestine (Occupier Companies) Brief — Nebula (16 slots)

Locked 2026-09-27. See `AGENTS.md` for the reusable flow. Companion to `research/palestine-brief.md` (which covers Palestinian companies under `country: "Palestine"`, tag `palestine`). This brief covers ONLY occupier/settler companies — ideas from Israel itself — filed under Occupied Palestine so they are never mixed with the Palestinian batch.

## 0. Naming + distinction rule (never break)

- Display name everywhere is `Occupied Palestine` — `country: "Occupied Palestine"`, tag `occupied-palestine` (already mapped in `src/lib/tagAr.ts`: `فلسطين المحتلة`, flag 🇵🇸, `countryEnMap`/`countryAccentMap` present — no tag-map change needed).
- Distinction: every file's lede/body must make clear the company is an OCCUPIER company (settler-economy, headquartered in occupied territory), NOT Palestinian. Recommended one-line pattern in `## How it works` or `## The problem` opener: "An occupier-company headquartered in [City] (Occupied Palestine), serving [market] — not a Palestinian company." `hqCity` holds the city name only (e.g. `Tel Aviv`); the `country` frontmatter field carries the Occupied Palestine label.
- NEVER write `Israel` anywhere: not in frontmatter, body, competitor lists, HQ cities, or source-title paraphrases. Rephrase competitors without naming it (name the company only, no country adjective). If a source's official name contains it (e.g. a bilateral foundation), use the acronym only or a generic paraphrase — never expand it. Source URLs stay verbatim; source TITLES are paraphrased to omit the word (record real outlet in `amountSource`/`valuationSource` only as publication name).
- Existing `palestine`-tagged files (16 × `country: "Palestine"`) are untouched by this batch.

## 1. Scope

- Country: Occupied Palestine (`country: "Occupied Palestine"`, tag `occupied-palestine`)
- News window: RELAXED 2026-09-27 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates.
- Slots: 16 ideas total (user lock 2026-09-27).

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): cybersecurity, AI/SaaS, fintech/payments, healthtech/biotech, chips/semiconductors, mobility/autotech, water/climate-tech, e-commerce/marketplace, gaming/creative, defense-adjacent/dual-use (only where citable as civilian tech; no weapons marketing).
- Group B (stage mix, ≥4 distinct stages): idea, seed, Series A, Series B+, late-stage/public/acquired, closed.
- Group C (outcome mix): 13 operating/acquired + exactly 1 failure (`closed`/`failed` with `challenges` filled) + 2 paper-stage (`status: idea`, funding expected `MISSING`). Scales the 12-slot default (11+1) to 16 slots per user lock.
- Occupier-batch lens: at least 4 ideas with explicit occupation-economy context fit — e.g. military-unit talent pipeline origins (paraphrased, no unit glorification), settler-VC backing, or export-to-West markets from occupied territory. State factually, no marketing adjectives.

## 3. Schema (expanded set — always; do NOT use base-only)

Base: `title, summary, tags, featured, publishedAt, company, country ("Occupied Palestine"), sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources[{title,url}], summaryAr`.
Expanded (required on every file): `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit` (reused as OCCUPIER-CONTEXT fit — position in the settler/occupation economy + export model), `investors`.
Only use fields the renderer/schema actually supports — checked `src/content.config.ts` (all present, all `.default('')`) on 2026-09-27.

## 4. Evidence rules

- ≥1 INSPECTED EN source per startup (open the body via fetch — snippets are not evidence; AR source optional). Prefer primary (company blog, filings, reputable press).
- NEVER invent numbers/names/dates — OMIT the frontmatter key when unverifiable (only `amountSource`/`valuationSource` may carry the literal `MISSING`).
- `summaryAr`: one-sentence MSA Arabic, self-translated when sources are EN-only. Arabic phrasing must mirror the distinction: occupier-company in occupied Palestine (e.g. "شركة احتلال…" / "في فلسطين المحتلة"), never implying Palestinian ownership.
- Idea-stage: founder/accelerator pages count; funding expected `MISSING`.

## 5. Output (files directly — table-first research FAILED 3×, do not use it)

- Agents research AND write `src/content/ideas/<slug>.md` with DISJOINT slug sets (3–4 each across 5 agents) AFTER user `go`. No agents before `go`.
- File conventions: slug = kebab company name; `tags` must include `occupied-palestine`; `country` = full name "Occupied Palestine"; `status` in `operating|acquired|closed|failed|idea`.
- Tag discipline: reuse existing tags from `src/lib/tagAr.ts`; keep tag spelling identical across files sharing a sector (one tag page per sector — never `sportstech` next to `sports-tech`).
- Lede rule (never break): `title` + `summary` state THE IDEA in English (what the company does/is), never the fundraise or latest news. `summaryAr` is the same idea in MSA Arabic with the occupier distinction.
- Body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>` (dated items only, no invented dates).
- Replacement policy: if a candidate won't verify (no openable source, unprovable closure), swap it for a citable alternative in the same slot and record the swap — never stall the batch. Quotas enforced by the parent at the end, not by a synthesizer agent.
- Verify (parent): `npm run build` green (no test harness — build is the gate), file-count check, 2–3 lede spot-checks. Never commit/push unless explicitly asked.
