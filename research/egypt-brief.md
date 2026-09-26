# Egypt Brief — Banana Nebula (12 slots)

## 1. Scope

- Country: Egypt
- News window: only items published on or after 2026-06-26 (3-month window
  before 2026-09-26 kickoff). Reject older items.
- Slots: 12 ideas.

## 2. Diversity quotas (must all hold)

- Group A (sector mix, max 2 per sector): fintech, e-commerce/marketplace,
  logistics/supply-chain, healthtech, edtech, proptech, agritech/food,
  energy/climate, AI/SaaS, mobility.
- Group B (stage mix, >= 3 distinct stages): seed, Series A, Series B+,
  late-stage/public, acquired.
- Group C (outcome mix): 11 operating/acquired + exactly 1 failure case
  (status `closed` or `failed`, with `challenges` filled).
- Max 2 ideas per sector; at least 3 distinct stages across the 12.

## 3. Evidence rules

- NEVER invent numbers. `amountRaised` / `valuation` / `founded` only from
  citable sources; otherwise mark `MISSING` here and leave the frontmatter
  field defaulted (`''` / source `MISSING`).
- Each idea: >= 1 source `{title, url}`; record `amountSource` /
  `valuationSource` as publication name or `MISSING`.
- `summaryAr`: one-sentence MSA Arabic summary per idea.
- Fields per idea: `company`, `country: Egypt`, `sector`, `stage`,
  `founded`, `amountRaised`, `amountSource`, `valuation`,
  `valuationSource`, `status` (default operating), `coreProblem`,
  `whyItWorked`, `challenges`, `sources`, `summaryAr` (+ base
  `title/summary/tags/featured/publishedAt`).

## 4. Output format

Table: # | company | sector | stage | status | amountRaised
(amountSource) | valuation (valuationSource) | sources | notes
(MISSING where unverifiable). Do NOT build files yet — research rows only.
