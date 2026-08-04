# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners, directors and DGAs of small and mid-sized Dutch businesses (MKB) whose staff lose hours a week to repetitive administrative document work — reading, comparing, retyping and consolidating documents that arrive in inconsistent formats.

They are not AI buyers. They are people with a concrete backlog and a concrete objection: sensitive company and client data must not leave the building. The job they are doing when they meet Systemly is evaluating whether automation is possible *without* accepting cloud processing.

The financial sector (asset managers, family offices, financial service providers) is where the current live project sits, and it supplies the sharpest illustration — but it is an example of the audience, not the audience itself. Work must not narrow the site to a financial-services vertical.

Decision context: a single decision-maker, evaluating a considered purchase, likely on a laptop during the workday; the site's job is to make a free 45-minute kennismaking feel obviously worth booking.

## Product Purpose

Systemly delivers AI automation and custom software to Dutch MKB companies. The core offer is a physical AI computer — the NVIDIA DGX Spark — installed at the customer's own office, running AI that Systemly develops specifically for that customer's processes: document processing, data extraction, and mathematical/administrative automation.

Systemly delivers the machine configured, the custom AI built around the customer's actual workflows, and ongoing maintenance. The customer sees the result, not the stack.

Success for the site: a qualified MKB decision-maker books the free, no-obligation 45-minute kennismaking on their own data.

## Positioning

The data never leaves the customer's premises. No cloud, no external servers, no dependency on a third-party AI provider — AVG-proof by design, because of where the hardware physically stands rather than because of a contractual promise.

This is the claim a neighboring product cannot truthfully copy: cloud-based AI automation vendors can promise compliance, but they cannot say the documents never left the office. The hardware being on-premise is the mechanism, not a feature.

Second differentiator: it is not a product you configure yourself. Systemly analyses the processes on location, builds the automation to fit them, and only calls it finished once it runs inside the customer's daily work.

## Operating Context

- **The proposition is physical.** A machine that stands somewhere in the customer's office. Any future work must respect that this is hardware in a room, not a SaaS login.
- **The work being replaced is document work**: stacks of reports from different banks, invoices, statements — inconsistent formats in, one consolidated overview out.
- **The engagement is a four-step consultative sequence**, and the site is written around it:
  1. Kennismaking — 45 minutes, free, on the customer's own data, no obligation
  2. Analysis on location — walking the organisation to identify time-consuming processes
  3. Build & deliver — custom-built, validated by the customer, finished only when it runs in daily work
  4. Continued development — updates, support, periodic visits
- **The site is the top of that funnel.** Its only conversion is the contact form for step 1. There is no self-serve signup, no pricing page, no product trial.

## Capabilities and Constraints

Confirmed:

- Delivery and configuration of the NVIDIA DGX Spark AI computer, maintained by Systemly
- Custom AI for document processing and data extraction
- Mathematical and administrative process automation
- On-site analysis, build, delivery, updates, support, periodic visits
- Service area: Netherlands. Language: Dutch.
- No backend. The contact form posts via FormSubmit to `admin@systemlysolutions.onmicrosoft.com`, with a hidden `_honey` honeypot field. **Binding** — future work keeps this delivery path unless the user changes it.
- Hosted as a static site on GitHub Pages at `systemly.nl` (`CNAME`), with `robots.txt` explicitly welcoming AI crawlers and an `llms.txt` summary — the AI-discoverability posture is deliberate and should be kept in sync with any content change.
- SEO/structured data is already invested in: canonical, OG/Twitter cards (`og-image.jpg`), and a schema.org `@graph` with Organization / WebSite / Service including the free kennismaking as a €0 Offer. Content changes must keep the JSON-LD truthful.

Explicitly undecided — do not treat either way as settled:

- Whether the site stays a **single self-contained `index.html` with no build step**. That is the current implementation and the current constraint in practice, but the user did not make it binding. Propose, don't assume, before introducing a framework or build pipeline.
- Whether the site stays **one scrolling page with anchor navigation**. Currently it is (`#hoe-het-werkt`, `#contact`). Sub-pages were not ruled out. Ask before splitting.
- Whether an English version ever exists. Dutch-only is the confirmed present; no translation is planned.

## Brand Commitments

- **Name:** Systemly. Header tagline in use: "Systemly as a Solution".
- **Slogan:** "Uw kantoor. Uw data. Uw AI." (also in the Organization JSON-LD — keep consistent if it changes).
- **Recurring proof line:** "Lokale AI · Geen cloud · AVG-proof".
- **Voice — binding:** Dutch, consistently formal ("u", "uw"), never "je/jij". Sober, declarative, professional. Short sentences. Value stated in the customer's terms ("werk van uren — klaar in minuten"), not in technical terms. Avoid hype vocabulary and English marketing loanwords; the one accepted proper noun is NVIDIA DGX Spark.
- **Existing assets:** `favicon.ico`, `favicon-32/64/512.png`, `apple-touch-icon.png`, `og-image.jpg`, `hero-base.webp` / `hero-reveal.webp` (paired hero imagery), `spark360.webp` / `spark360.mp4` / `spark360_poster.jpg` (product 360°).
- Contact address `admin@systemlysolutions.onmicrosoft.com` is the real, published address.

## Evidence on Hand

Available and real:

- One live project in the financial sector, referenced anonymously: a wealth manager for whom stacks of bank reports are converted into a single overview — hours of work, ready in minutes, without a single file leaving the office. Currently used as an attributed-but-anonymous quote ("— lopend project · financiële sector").
- Product imagery of the DGX Spark (360° asset) and the hero image pair.

**Absent — must never be fabricated:**

- No named customers, no customer logos, no testimonials with attribution.
- No client counts, years-in-business, team size, or "trusted by X" claims.
- No pricing or price indication of any kind. The only priced item that may be stated is the kennismaking, which is €0.
- No measured results, benchmarks, percentages, hours-saved figures, or throughput numbers. "Werk van uren — klaar in minuten" is the established qualitative phrasing and is the ceiling of what may be claimed.
- No certifications, audits, ISO/AVG seals, partnerships, or NVIDIA endorsement.

The anonymous financial-sector quote is the entire evidence base. Any future section that would need more proof than that must either use it differently or be dropped — not filled in.

## Product Principles

1. **On-premise is the argument.** Every surface must make it unmistakable that the machine and the data stay in the customer's building. If a design choice obscures that, it is the wrong choice.
2. **Speak to the backlog, not the technology.** The buyer recognises the problem (hours of document work), not the category. Lead with the work being removed; the DGX Spark is the how.
3. **Only one action exists: the kennismaking.** Free, 45 minutes, on their own data, no obligation. Do not invent secondary conversions, downloads, trials, or lead magnets.
4. **Under-claim.** With a single anonymous reference, credibility comes from restraint and specificity, not volume of proof. Sober beats confident.
5. **Broad MKB, illustrated by finance.** Keep the entry wide enough for any document-heavy business while letting the one real case do the concrete work.

## Accessibility & Inclusion

No product-specific standard was established. Two facts that follow from the audience and current implementation, and that future work must handle:

- The hero's cursor-spotlight reveal is a pointer-dependent effect with a touch fallback. It must never be the only way to obtain information — it is decoration, and the copy must stand without it.
- The audience skews to non-technical business owners on ordinary desktop hardware; readable type sizes and plain Dutch outrank density.
