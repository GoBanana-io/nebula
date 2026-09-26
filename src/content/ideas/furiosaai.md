---
title: "FuriosaAI designs AI inference chips that run LLMs at 2.25× GPU efficiency"
summary: "Seoul AI-chip startup whose RNGD accelerator powers LG's EXAONE models with 2.25× better inference performance than GPUs — a Tensor Contraction Processor architecture now scaling to mass production."
tags: ["south-korea", "ai"]
featured: false
publishedAt: 2025-07-31
company: "FuriosaAI"
country: "South Korea"
sector: "AI/semiconductors"
stage: "Series C"
founded: "2017"
amountRaised: "$125M Series C bridge ($246M total)"
amountSource: "Verdict"
valuation: "$735M"
valuationSource: "Verdict"
status: "operating"
coreProblem: "Running large language models depends on expensive, power-hungry GPUs controlled by one vendor — datacenters and AI adopters need cheaper, more energy-efficient inference hardware."
whyItWorked: "Built a purpose-built inference architecture (Tensor Contraction Processor) instead of repurposing graphics chips, then proved it where it counts: LG adopted RNGD for EXAONE after a two-year evaluation showing 2.25× better inference performance than competitive GPUs."
challenges: "Nvidia's CUDA moat and massive scale; long, lumpy enterprise qualification cycles; and the capital intensity of taping out next-generation silicon while scaling RNGD production globally."
howItWorks: "FuriosaAI designs AI inference accelerators on its Tensor Contraction Processor architecture, which minimizes data movement to squeeze more LLM inference per watt. Its first chip Warboy targeted computer vision; its second chip RNGD (Renegade) is optimized for LLMs and reasoning models and ships in servers that enterprises deploy to run LG's EXAONE platform."
painPoints: "GPU shortages and pricing power, datacenter power budgets that cap AI scale-out, and sovereign-AI demand for non-US chip alternatives."
businessModel: "Fabless chip sales — RNGD accelerators and RNGD-powered servers sold to enterprises and AI labs (LG AI Research as anchor customer), with a next-generation chip in development."
founders: "June Paik (ex-Samsung Electronics, AMD)"
hqCity: "Seoul"
usersMetrics: "RNGD adopted by LG AI Research for EXAONE foundation models after a two-year evaluation; 2.25× better inference performance vs competitive GPUs (company via TechCrunch, Jul 2025)"
competitors: "Nvidia, AMD"
investors: "Korea Development Bank, Industrial Bank of Korea, Kakao Investment, Keistone Partners, PI Partners"
vision2030Fit: "Korea's sovereign-AI semiconductor bet: a domestic inference-chip alternative to Nvidia GPUs, built on Korean evaluation wins (LG) and state-bank backing — exactly the supply-chain independence Korea's AI strategy targets."
sources:
  - title: "AI chip startup FuriosaAI reportedly turns down $800M acquisition offer from Meta"
    url: "https://techcrunch.com/2025/03/24/ai-chip-startup-furiosaai-reportedly-turns-down-800m-acquisition-offer-from-meta/"
  - title: "Instead of selling to Meta, AI chip startup FuriosaAI signed a huge customer"
    url: "https://techcrunch.com/2025/07/21/instead-of-selling-to-meta-ai-chip-startup-furiosaai-signed-a-huge-customer/"
  - title: "FuriosaAI secures $125m in Series C bridge round"
    url: "https://www.verdict.co.uk/semiconductor-firm-furiosaai-secures-funding/"
summaryAr: "شركة سيولية تصمم شرائح استدلال للذكاء الاصطناعي تشغّل نماذج إكساون من إل جي بكفاءة تفوق وحدات معالجة الرسومات 2.25 مرة — بمعمارية مخصصة تتوسع الآن نحو الإنتاج الضخم."
---

## The problem

Every lab and enterprise running large language models rents the same scarce resource: power-hungry GPUs from a single dominant vendor. Inference — actually serving models to users — is where the power bill lands, yet purpose-built, energy-efficient alternatives were scarce, and buyers wanting supply-chain independence had few proven options.

## How it works

FuriosaAI is a fabless chip company built around its Tensor Contraction Processor architecture, designed from scratch to minimize the data movement that wastes energy during inference. Its first chip, Warboy, targeted computer-vision workloads; its second chip, RNGD (Renegade), is optimized for LLMs and reasoning models. RNGD ships in servers that enterprises deploy to run LG AI Research's EXAONE models across electronics, finance, telecommunications, and biotechnology applications.

## Pain points

GPU scarcity and pricing power, datacenter power envelopes that cap how many models can be served, and governments and conglomerates hunting for sovereign, non-US chip supply.

## Business model

Chip and system sales: RNGD accelerators and RNGD-powered servers sold to enterprises and AI labs, with LG AI Research as the anchor customer validating the hardware. A next-generation chip is in development to extend the roadmap.

## Challenges

Dislodging Nvidia's CUDA ecosystem moat, surviving long enterprise qualification cycles (LG evaluated RNGD for two years before adopting it), and funding next-generation tape-outs while scaling RNGD production to meet global demand.

## Funding

- Raised: $125M Series C bridge (Jul 2025, with Korea Development Bank, Industrial Bank of Korea, Kakao Investment, Keistone Partners, PI Partners participating), taking total funding to $246M (Verdict). Earlier the company was reportedly raising ~$48M (KRW 70B) in March 2025 (TechCrunch).
- Valuation: $735M at the Series C bridge (Verdict).

## Latest — July 2025

FuriosaAI closed the $125M Series C bridge to scale RNGD production globally and start its next-generation chip — weeks after announcing the LG AI Research partnership supplying RNGD to enterprises on the EXAONE platform, the payoff for staying independent after declining Meta's reported $800M acquisition offer in March 2025.
