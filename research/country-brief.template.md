# Country Brief Template (reusable)

Use this template to commission per-country startup research for Nebula.
Copy to `research/<country>-brief.md` and fill every `[...]`.

## 1. Scope

- Country: [...]
- News window: only items published on or after [...] (rule: window opens
  3 months before kickoff; e.g. kickoff 2026-09-26 -> window since 2026-06-26).
  Reject anything older, even if important.
- Slots: [...] ideas total (default 12).

## 2. Diversity quotas (must all hold in the final set)

- Groups: fill Group A / B / C per brief (e.g. A = sector mix, B = stage mix,
  C = outcome mix incl. 1 failure/closed case).
- Max [...] ideas per sector (default 2).
- At least [...] distinct stages (default 3, e.g. seed / Series A / Series B+ /
  public / acquired / closed).
- Exactly [...] failure/closed case(s) (default 1) with status `closed` or
  `failed` and a `challenges` field explaining why.

## 3. Evidence rules

- NEVER invent numbers. Every `amountRaised`, `valuation`, `founded` value must
  come from a citable source. If no source states it, use `MISSING` in research
  notes and leave the schema field as its default (`''`).
- `MISSING` convention: write the literal string `MISSING` in the brief table
  for any unverifiable fact; the writer then leaves that frontmatter field
  empty/defaulted rather than guessing.
- Each idea needs >= 1 source with `{title, url}`; prefer primary sources
  (company blog, regulator filing, reputable press). Record `amountSource` /
  `valuationSource` as the publication name (e.g. `TechCrunch`, `MISSING`).
- `summaryAr`: one-sentence Arabic summary per idea (Modern Standard Arabic).

## 4. Schema field list (src/content.config.ts, all optional except base)

Base (required): `title`, `summary`, `tags` (default []), `featured`
(default false), `publishedAt`.
Optional (all defaulted, safe to omit): `company` (default ''),
`country` (default 'Egypt'), `sector` (default ''), `stage` (default ''),
`founded` (default ''), `amountRaised` (default ''), `amountSource`
(default ''), `valuation` (default ''), `valuationSource` (default ''),
`status` (default 'operating'), `coreProblem` (default ''), `whyItWorked`
(default ''), `challenges` (default ''), `sources` (array of
`{title, url}`, default []), `summaryAr` (default '').

## 5. Output format

A table with one row per slot: # | company | sector | stage | status |
amountRaised (amountSource) | valuation (valuationSource) | sources | notes
(use MISSING where unverifiable).
