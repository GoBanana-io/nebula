# Egypt Expansion Brief — Nebula (12 → 16 + backfill)

Locked 2026-09-26. Scope: FULL batch. Window: RELAXED. New slots: 3 operating + up to 1 idea-stage.

## 1. Scope

- Country: Egypt. Slots: 4 NEW ideas (12 existing → 16).
- Plus: Qatar's 16th idea (Qatar currently 15; see §6).
- Plus: backfill missing data (see §5).
- News window: RELAXED (default). Any date is fine, ideas first — prefer the
  freshest citable item per startup and record its date. Strict 3-month window
  NOT required.
- Existing Egypt sectors (new slots must avoid FULL ones): fintech 2 FULL,
  logistics/supply-chain 2 FULL, agritech/food 1, AI/SaaS 1,
  e-commerce/marketplace 1, edtech 1, energy/climate 1, healthtech 1,
  mobility 1, proptech 1.

## 2. Diversity quotas (must hold in the final 16)

- Max 2 per sector. FULL (off-limits for new slots): fintech,
  logistics/supply-chain. All other sectors open.
- ≥3 distinct stages across the 16 (already satisfied: seed, Series A,
  pre-Series A, Series B+, late-stage, public).
- Outcome mix: exactly 1 `closed`/`failed` (Capiter — already satisfied, with
  `challenges` filled). All 4 new slots must be `operating`, except up to 1
  may be `idea` (paper-stage; founder/accelerator pages count as sources,
  funding expected MISSING).
- New-slot mix: 3 operating + up to 1 `idea`.

## 3. Schema (expanded set — always; do NOT use base-only)

Base: `title, summary, tags, featured, publishedAt, company, country
("Egypt"), sector, stage, founded, amountRaised, amountSource, valuation,
valuationSource, status, coreProblem, whyItWorked, challenges,
sources[{title,url}], summaryAr`.
Expanded (required on every new/backfilled file): `howItWorks, painPoints,
businessModel, founders, hqCity, usersMetrics, competitors, license,
vision2030Fit` (reused as EGYPT strategy fit — e.g. Egypt Vision 2030 /
digital-transformation alignment), `investors`.
Only use fields the renderer/schema supports — check `src/content.config.ts`
+ `src/pages/idea/[...slug].astro` first.

## 4. Evidence rules

- ≥1 INSPECTED EN source per startup (open the body via fetch — snippets are
  not evidence; AR source optional). Prefer primary (company blog, filings,
  reputable press).
- NEVER invent numbers/names/dates — OMIT the frontmatter key when
  unverifiable (only `amountSource`/`valuationSource` may carry the literal
  `MISSING`).
- `summaryAr`: one-sentence MSA Arabic, self-translated when sources are EN-only.
- Idea-stage: founder/accelerator pages count; funding expected `MISSING`.

## 5. Backfill list (missing data)

A. All 12 Egypt files need FULL expanded-field backfill (currently base-schema
only, no `howItWorks` key at all): `3c-coding-school, bekia, bosta,
breadfast, capiter, fawry, fincart, mnt-halan, nawy, reme-d, swvl,
synapse-analytics`.
B. Isolated empties in newer files (fill each `""` with sourced value or leave
only if unverifiable): investors — ask-sanad, baladna, base, green-h2-market,
hajj-crowd-ai, intraphoton, palazzi-instruments, papara, sacmots, shgardi;
whyItWorked — ask-sanad, avokadio, builder-ai, capiter, chatsign, intraphoton,
lemma-education, palazzi-instruments, sacmots, seven-dreamers, toyji;
license — baladna, elm, green-h2-market, hajj-crowd-ai, iyzico, lucidya,
shgardi, tarfin; founders — agrico, baladna, elm, green-h2-market,
hajj-crowd-ai, shgardi, siraj-energy; usersMetrics — avokadio,
green-h2-market, hajj-crowd-ai, hapondo, marti, seven-dreamers, toyji;
hqCity — agrico, gittigidiyor, iyzico, papara, seven-dreamers, tarfin;
competitors — elm, iyzico, lucidya, papara, tarfin; businessModel —
ask-sanad, palazzi-instruments; vision2030Fit — seven-dreamers, shgardi.
C. `builder-ai` (UK stray) out of scope — leave as is.

## 6. Qatar 16th slot

- Qatar sectors: agrifood 2 FULL, e-commerce/marketplace 2 FULL, edtech 2 FULL,
  fintech 2 FULL, sports-tech 2 FULL. Open: AI/SaaS, energy/climate,
  healthtech, logistics/supply-chain, proptech (1 each).
- Same expanded schema + evidence rules; `country: "Qatar"`, country tag.

## 7. Output (files directly — table-first research FAILED 3×, do not use it)

- Agents research AND write `src/content/ideas/<slug>.md` with DISJOINT slug
  sets (2–3 each). Suggested split: 2 agents × 2 new Egypt slots; 2 agents ×
  3-file Egypt backfill each (6 files); 1 agent × remaining 6-file Egypt
  backfill + isolated empties + Qatar 16th. Parent adjusts at fan-out.
- File conventions: slug = kebab company name; `tags` must include country
  tag; `country` = full name; `status` in
  `operating|acquired|closed|failed|idea`.
- Tag discipline: reuse existing tags from `src/lib/tagAr.ts`; any NEW tag
  MUST add its Arabic title to that map in the same change. Keep tag spelling
  identical across files sharing a sector.
- Lede rule (never break): `title` + `summary` state THE IDEA in English
  (what the company does/is), never the fundraise or latest news. `summaryAr`
  is the same idea in MSA Arabic.
- Body sections: `## The problem / ## How it works / ## Pain points /
  ## Business model / ## Challenges / ## Funding / ## Latest — <Mon YYYY>`
  (dated items only, no invented dates).
- Replacement policy: if a candidate won't verify (no openable source,
  unprovable closure), swap it for a citable alternative in the same slot and
  record the swap — never stall the batch. Quotas enforced by the parent at
  the end, not by a synthesizer agent.
- Verify (parent): `npm run build` green (no test harness — build is the
  gate), file-count check, 2–3 lede spot-checks. Never commit/push unless
  explicitly asked.
