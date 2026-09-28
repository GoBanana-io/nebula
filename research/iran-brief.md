# Iran Brief — Banana Nebula (16 slots)

Locked 2026-09-28. See `AGENTS.md` for the reusable flow.

## 1. Scope

- Country: Iran (`country: "Iran"`, tag `iran`)
- News window: RELAXED 2026-09-28 — any date is fine, ideas first. Prefer the freshest citable item per startup and record its date in `## Latest`; never invent dates. (User chose RELAXED; EN sources on Iranian startups are sparse and often older.)
- Slots: 16 ideas total (user chose KSA precedent over default 12).

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): fintech/payments, e-commerce/marketplace, logistics/mobility/ride-hailing, healthtech, edtech, media/streaming/VOD, app marketplace/developer tools, travel tech, AI/SaaS, agrifood, energy/climate.
- Group B (stage mix, >= 4 distinct stages): idea, seed, Series A, Series B+, late-stage/acquired. (Note: Iranian rounds rarely map cleanly to US stages — use closest equivalent from source, else leave `stage` empty rather than guessing.)
- Group C (outcome mix, scaled from user pick "10+1+1" to 16 slots): 14 operating/acquired + exactly 1 `closed`/`failed` with `challenges` filled + 1 paper-stage (`status: idea`, funding expected `MISSING`).
- Iran lens: at least 4 ideas with explicit sanctions-resilience / domestic-platform fit (local clone of blocked global service, PSP under sanctions, knowledge-based/Elm-Bonyan company framing).

## 3. Evidence rules

- NEVER invent numbers. `amountRaised` / `valuation` / `founded` only from citable sources; otherwise `MISSING` in research and defaulted (`''`) in frontmatter. `amountSource` / `valuationSource` = publication name or `MISSING`.
- Each idea: >= 1 INSPECTED EN source `{title, url}` (open the body via fetch — snippets are not evidence; AR source optional, FA source nice-to-have but does not replace EN). Prefer primary (company blog, accelerator page, reputable press: TechCrunch, Rest of World, TechRasa, Iran International, Al-Monitor, BNE IntelliNews).
- Per idea capture: problem solved, how they do it, pain points, how they make money (business/pricing model), EN (+FA/AR where available) sources.
- `summaryAr`: one-sentence MSA Arabic summary per idea, self-translated when sources are EN/FA-only.
- Idea-stage: founder/accelerator pages count; funding expected `MISSING`.

## 4. Schema (expanded set — always)

Base: `title, summary, tags, featured, publishedAt, company, country ("Iran"), sector, stage, founded, amountRaised, amountSource, valuation, valuationSource, status, coreProblem, whyItWorked, challenges, sources[{title,url}], summaryAr`.
Expanded (required on every file): `howItWorks, painPoints, businessModel, founders, hqCity, usersMetrics, competitors, license, vision2030Fit` (reused as IRAN strategy fit — e.g. knowledge-based economy / digital-economy alignment), `investors`.
Only use fields the renderer/schema actually supports — checked `src/content.config.ts` 2026-09-28 (all present) + `src/pages/idea/[...slug].astro` to be re-checked at write time.

## 5. Output (files directly — table-first research FAILED 3×, do not use it)

- Agents research AND write `src/content/ideas/<slug>.md` with DISJOINT slug sets (2–3 each). Suggested split for 16: 6 writers (3+3+3+3+2+2). Parent adjusts at fan-out.
- File conventions: slug = kebab company name; `tags` must include `iran`; `country: "Iran"`; `status` in `operating|acquired|closed|failed|idea`.
- Tag discipline: reuse existing tags from `src/lib/tagAr.ts`; `iran` is NEW — MUST add `iran: 'إيران'` (+ flag/EN/accent entries) in the same change. Keep tag spelling identical across files sharing a sector.
- Lede rule (never break): `title` + `summary` state THE IDEA in English (what the company does/is), never the fundraise or latest news. `summaryAr` is the same idea in MSA Arabic.
- Body sections: `## The problem / ## How it works / ## Pain points / ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>` (dated items only, no invented dates).
- Replacement policy: if a candidate won't verify (no openable EN source, unprovable closure), swap it for a citable alternative in the same slot and record the swap — never stall the batch. Quotas enforced by the parent at the end, not by a synthesizer agent.
- Verify (parent): `npm run build` green (no test harness — build is the gate), file-count check, 2–3 lede spot-checks. Never commit/push unless explicitly asked.

## 6. Candidate pool (non-binding, swap freely per replacement policy)

Digikala, Snapp, Divar, Torob, ZarinPal, Cafe Bazaar, Aparat, Filimo/Namava, Tapsi, Alibaba.ir (Maghsoudlou / travelling), FlyToday, Emalls, Hamkaran/IT SaaS pick, Takhfifan/NetBarg, Fidibo, AloPeyk/Miare. Closed candidates (verify or swap): Bamilo (closed 2018), Takhfifan-era deals, local clone failures. Idea-stage: 1 paper-stage Iranian concept (founder/accelerator page as source).
