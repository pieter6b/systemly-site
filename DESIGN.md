---
name: Systemly
description: Warm editorial print meets machine readout — cream paper, terracotta signal, full-bleed colour slabs, no shadows.
colors:
  terracotta: "#BC5A33"
  terracotta-deep: "#A24A28"
  cream: "#EDE7DB"
  cream-light: "#F4EFE5"
  paper: "#FBF7EE"
  ink: "#1A1512"
  void: "#141315"
  cream-text: "#F2EAD9"
  cream-muted: "#B7AC9C"
  muted: "#8A7E72"
  body-on-cream: "#5F574D"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(40px, 5.4vw, 92px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(34px, 5.5vw, 76px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  pullquote:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(24px, 3.4vw, 46px)"
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  wordmark:
    fontFamily: "Fraunces, serif"
    fontSize: "25px"
    fontWeight: 600
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(16px, 1.5vw, 20px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.24em"
  meta:
    fontFamily: "Space Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  none: "0"
  field: "12px"
  pill: "999px"
spacing:
  section-y: "clamp(90px, 14vh, 170px)"
  section-x: "clamp(24px, 7vw, 110px)"
  header-y: "22px"
  header-x: "clamp(20px, 5vw, 64px)"
  rule-gap: "54px"
  grid-gap: "48px 40px"
  form-gap: "26px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-deep}"
  button-submit:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "17px 30px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "16px 18px"
    typography: "{typography.body}"
  eyebrow:
    textColor: "{colors.terracotta}"
    typography: "{typography.label}"
  nav-link:
    textColor: "{colors.cream-text}"
  nav-link-scrolled:
    textColor: "{colors.ink}"
---

# Design System: Systemly

## Overview

**Creative North Star: "De Systemly-huisstijl"**

Not a metaphor — a house style, and it already exists. Three voices do all the work: **Fraunces** makes the statements, **Inter** does the explaining, **Space Mono** labels the machine. Every surface is one full-bleed field of colour, and the page advances by switching that field: dark → cream → dark → cream → terracotta. There are no cards floating on a background, because there is no background — only the current slab.

The temperature is the point. This is AI hardware sold to Dutch family businesses, and nothing here is cold. The neutrals are paper (`cream`, `paper`), not grey. The dark is a warm brown-black (`void`, `ink`), not blue-black. The single accent is a terracotta that reads as heat and clay rather than as "brand orange". Numbering (`→ 01`, `02 · Wat het doet`) runs through the whole page in mono, which gives the page the quiet order of an instrument panel while the serif keeps it human.

Restraint is structural, not stylistic. Groups are separated by 1px hairlines and generous space, never by boxes, shadows, or icons. The accent appears on maybe five percent of any screen. The one loud gesture on the entire site — the cursor spotlight that lights up the hero image — earns its loudness by being alone, and by being the product's own argument: what was unreadable becomes readable when you put light on it.

**Key Characteristics:**
- Full-bleed colour slabs, one per section; no cards on backgrounds
- Warm neutrals only — cream paper and brown-black, never grey or blue-black
- A single accent (terracotta), used sparingly and never joined by a second
- Three typefaces with strictly separated jobs: statement / explanation / machine label
- Zero shadows on content; depth comes from the colour change between slabs
- Hairline rules and whitespace instead of containers, icons, or borders-as-boxes
- Mono section numbering as a running structural device

## Colors

Warm and narrow: two paper tones, two brown-blacks, one accent. Nothing in the palette is neutral-grey, and nothing is cool.

### Primary
- **Terracotta Signaal** (`#BC5A33`): the only accent in the system and the entire attention mechanism. It carries every eyebrow and section number, the italic emphasis inside headings, the primary button, the pulsing hero dot, the quote's left rule, and the loader/progress fills. At full section scale it becomes the contact section's background — the one place it stops being an accent and becomes the ground.
- **Terracotta Diep** (`#A24A28`): hover state for the primary button only. Not a second accent; not for text.

### Neutral — warm paper
- **Crème** (`#EDE7DB`): the light slab. Backgrounds of the handoff and quote sections, and the scrolled header at 85% with a 12px blur.
- **Crème Licht** (`#F4EFE5`): a half-step lighter than crème, for a surface that must read as a distinct panel against it.
- **Papier** (`#FBF7EE`): the lightest paper, reserved for input fields sitting on the terracotta section — it reads as a form to be filled in, not as a UI control.

### Neutral — warm dark
- **Inkt** (`#1A1512`): body text on any paper slab, the footer field, and the submit button. The darkest usable text colour.
- **Void** (`#141315`): the page's base background and the dark slab colour. Very slightly cooler and lighter than inkt, which lets inkt-coloured elements (the footer) sit against it without a border.
- **Crème Tekst** (`#F2EAD9`): body and heading text on any dark slab.
- **Crème Gedempt** (`#B7AC9C`): secondary text on dark — leads, step descriptions, hints, footer links.
- **Gedempt** (`#8A7E72`): secondary text on paper — the quote attribution, the scrolled header tagline.
- **Lopende Tekst op Crème** (`#5F574D`): paragraph text inside the light slab, one step warmer and softer than inkt so body copy recedes behind its heading.

### Named Rules

**De Enige Stemkleur Regel.** Terracotta is the only accent this system will ever have. It stays under ~5% of any viewport except the contact section, where it is deliberately 100%. If something needs to stand out and terracotta is already spoken for, the answer is space, scale, or a hairline — never a second accent colour. There is no success-green, no warning-amber, no info-blue.

**De Warme Neutralen Regel.** Every neutral in this system is warm. No `#FFF`, no `#000`, no grey with equal RGB channels, no blue-black. White is permitted only as text or an icon on terracotta or inkt, never as a surface.

**De Sectiebaan Regel.** A section is one colour field, edge to edge. Colour changes at section boundaries and nowhere else. Do not introduce an inner panel with a different background to group content inside a slab.

## Typography

**Display Font:** Fraunces (with `serif` fallback) — weights 400/500/600, plus italic 500
**Body Font:** Inter (with `sans-serif` fallback) — weights 400/500/600
**Label/Mono Font:** Space Mono — weights 400/700

**Character:** Fraunces is a soft, high-contrast serif with optical sizing; at display sizes with negative tracking and sub-1 line-height it looks typeset rather than rendered. Inter carries all explanation without personality, deliberately. Space Mono supplies the counter-voice: wide-tracked, uppercase, small — the sound of a machine labelling its own output. The tension between the printed serif and the mono readout *is* the brand.

### Hierarchy
- **Display** (Fraunces 500, `clamp(40px, 5.4vw, 92px)`, line-height 0.98, tracking −0.02em): the hero statement only. Set across three short lines with `<br>`, max 34ch.
- **Headline** (Fraunces 500, `clamp(34px, 5.5vw, 76px)`, line-height 1.02, tracking −0.02em): every section heading. Capped at 16–18ch so it always breaks into a stack of short lines. The contact section runs one step larger (up to 80px).
- **Pullquote** (Fraunces italic 500, `clamp(24px, 3.4vw, 46px)`, line-height 1.28): testimonial only, max 26ch, with a 3px terracotta left rule and `clamp(20px, 3vw, 44px)` of padding.
- **Title** (Fraunces 500, 24px, tracking −0.01em): the `h3` of a spec item or a step.
- **Wordmark** (Fraunces 600, 25px, tracking −0.01em): "Systemly" in the header; 22px in the footer.
- **Lead** (Inter 400, `clamp(16px, 1.5vw, 20px)`, line-height 1.6): the paragraph directly under a headline. Max 56ch.
- **Body** (Inter 400, 15.5px, line-height 1.6): descriptions inside spec items and steps.
- **Label** (Space Mono 400, 12px, tracking 0.24em, uppercase): section eyebrows — `01 · De Box`, `02 · Wat het doet`. The header tagline runs 10px at 0.22em; the hero hint 12px at 0.18em; the footer 12.5px at 0.04em.
- **Meta** (Space Mono 400, 13px, tracking 0.1em, terracotta): the `→ 01` item numbers.

### Named Rules

**De Drie Stemmen Regel.** Fraunces states, Inter explains, Space Mono labels. A typeface never takes another's job: no serif paragraphs, no mono headings, no sans-serif headlines. If a new element doesn't obviously belong to one of the three, it belongs to Inter.

**De Cursieve Klemtoon Regel.** Emphasis inside a heading is Fraunces *italic* in terracotta — never bold, never a colour change alone, never a highlight. The single exception is the contact section, where terracotta is the background: there, emphasis becomes an underline at 2px thickness with 6px offset. Emphasis is always one or two words, never a whole line.

**De Mono Nummering Regel.** Space Mono is structural, not decorative. It numbers things (`01 ·`, `→ 02`) and names states; it never carries meaning that would be lost if it were removed. Because it is always uppercase and wide-tracked, it never runs longer than about five words.

## Layout

The page is a vertical stack of full-bleed sections with no global max-width container. Rhythm comes from one shared padding pair — `clamp(90px, 14vh, 170px)` vertical, `clamp(24px, 7vw, 110px)` horizontal — applied to every section, so section height varies with content while the gutters stay identical from top to bottom. The quote section runs slightly tighter vertically (`clamp(80px, 12vh, 150px)`) because a single sentence needs less air around it.

Content is left-aligned to the gutter and constrained by measure rather than by a grid: headings cap at 16–18ch, leads at 56ch, the hero copy block at 34ch, the pullquote at 26ch, the contact form at 880px. Nothing is centred on desktop.

Item groups use `repeat(auto-fit, minmax(210–220px, 1fr))` with a `48px 40px` gap, so the four spec items and four process steps reflow from 4 → 2 → 1 columns without breakpoints. Each group opens with a 1px hairline above it and 54px of clearance below that line. The product section is the one two-column composition: `minmax(0,1fr) minmax(320px,1fr)`, text left, the rotating Spark right, collapsing to a single column at 900px.

The header is fixed, 22px tall in padding, transparent over the hero, and switches to `cream` at 85% opacity with a 12px backdrop blur once scroll passes 60% of the viewport height. `scroll-margin-top: 76px` keeps anchor targets clear of it.

Responsive behaviour is three thresholds, not a system: **900px** collapses two-column compositions and moves the hero copy from vertically centred to bottom-anchored (`bottom: 13vh`); **760px** hides the desktop nav links and the header tagline and reveals the hamburger; **640px** collapses the two-column form to one. The hero uses `100svh` where supported so mobile browser chrome doesn't crop it.

### Named Rules

**De Haarlijn Regel.** Groups are separated by a 1px hairline — `rgba(26,21,18,.12)` on paper, `rgba(242,234,217,.18)` on dark — followed by generous space. Never by a box, a card, a filled panel, or a divider thicker than 1px. The line marks where a group starts; the whitespace does the actual separating.

**De Gedeelde Goot Regel.** Every section uses the same horizontal padding token. A section that indents its content differently from its neighbours breaks the only vertical alignment the page has.

## Elevation & Depth

The system is flat by law. There is not one shadow on any content element: no cards lift, no buttons cast, no inputs recess. Depth is created entirely by the alternation of full-bleed colour fields — cream against void against terracotta — and by two soft-focus devices in imagery: the hero's layered scrim gradients and the radial masks that fade the product image's edges into its section rather than cropping them at a hard rectangle.

The one sanctioned exception is elements that genuinely float above the page: the fixed header and the mobile menu. Both express that float with an 85–97% translucent cream fill plus a 12px backdrop blur and a 1px bottom hairline — never with a drop shadow. Any future overlay, modal, or dropdown follows the same treatment.

Motion substitutes for elevation as the feedback channel. The primary button lifts 1px on hover, the submit button 2px; the button arrow slides 3px right; sections rise 26px into place with a fade over 0.8s on first intersection; state colour transitions run 0.25s and header/theme transitions 0.4s.

### Named Rules

**De Vlakke Inhoud Regel.** Content never casts a shadow. If an element needs to separate from what's behind it, change the slab colour, add a hairline, or add space. `box-shadow` is reserved for elements that are literally floating above the scroll — and even then it is expressed as translucency and blur.

## Shapes

The form language is mostly straight: sections, slabs, groups, and rules have no radius at all, and content is shaped by hairlines and whitespace rather than by outlines. Against that, controls are soft — the pill-shaped buttons (`999px`) and the 12px input fields are the only rounded objects on the page — and small indicators are perfect circles: the hero's pulsing 8px dot, the mobile menu bars at 2px, the item bullets.

Two masks are part of the form language rather than effects: the hero's reveal layer is clipped by a moving radial gradient (`#000` to 42%, 50% at 66%, transparent at 100%) and the product image is clipped by a `closest-side` radial so its edges dissolve into the slab. Both exist so no image ever meets its section at a hard rectangular edge.

Note that the pill-versus-straight split is **current practice, not settled law** — the user explicitly left it open. Match what is there when extending existing sections; raise it as a decision if a new surface makes the inconsistency conspicuous.

## Components

### Buttons
- **Shape:** fully rounded pill (`999px`).
- **Primary:** terracotta fill, white text, 12px × 24px padding, Inter 600 at 15px, with a `→` arrow in a trailing span, 9px gap. Used for the single site action.
- **Hover / Focus:** background deepens to `terracotta-deep`, the whole button lifts 1px (`translateY(-1px)`), and the arrow slides 3px right — all at 0.25s ease.
- **Submit variant:** inkt fill, white text, 17px × 30px padding at 16px, left-aligned in the form (`justify-self: start`), lifting 2px on hover. Deliberately inkt rather than terracotta because it sits *on* the terracotta slab.
- **Mobile:** 10px × 16px padding at 14px below 760px.
- There is no secondary, ghost, or tertiary button. Non-primary actions are plain text links.

### Cards / Containers
There are none, and that is the system. What would be a card elsewhere is here a bare group: a 1px hairline above the group, a terracotta mono number (`→ 01`), a Fraunces title, and a paragraph — no background, no border, no radius, no padding box. Internal rhythm is 16px under the number, 12px under the title.

### Inputs / Fields
- **Style:** no border at all; `paper` fill on the terracotta slab, 12px radius, 16px × 18px padding, Inter at 16px (the size that prevents iOS zoom-on-focus), inkt text, `#9A8F7E` placeholder.
- **Label:** Inter 600 at 14px, white on terracotta, 10px above its field.
- **Textarea:** same treatment, 150px minimum height, vertically resizable only.
- **Focus / Error:** not currently styled. A visible focus ring is a known gap; when added it should be a terracotta or inkt outline, not a glow.

### Navigation
- **Style:** Inter 500 at 15px, cream-text over the hero, transitioning to inkt once the header goes solid. Hover drops opacity to 0.7. No underline, no active state — the site is one page.
- **Brand lockup:** the Fraunces wordmark beside a Space Mono tagline separated by a 14px gap and a 1px left rule; the tagline hides below 760px.
- **Mobile:** a three-bar button that crosses into an X (bars rotate ±45° and translate 7px; the middle fades). The panel drops from `top: 64px` as a 97% cream sheet with a 12px blur, links set in Fraunces at 22px with hairline separators. Opening it forces the header into its solid state so the panel and header read as one surface.

### Signature Component — the spotlight hero
The site's one theatrical gesture. Two full-bleed images are stacked: a muted base and a bright reveal. The reveal layer is masked by a 260px radial gradient that follows the pointer with 12% easing per frame (snapping to position on first move so there is no swoop from the corner), driven by CSS custom properties `--mx`/`--my`/`--r` rather than by canvas. A two-axis scrim — 80% → transparent left-to-right, 55% → transparent bottom-to-top — keeps the copy readable regardless of what the pointer is doing. Touch devices bind the same handler to `touchstart`/`touchmove` and the hint copy swaps from "Beweeg uw muis" to "Beweeg uw vinger".

It is decoration over an image, never over information: all hero copy sits in its own layer above the scrim at full opacity, and the section reads correctly with the effect entirely absent.

### Signature Component — the running Spark
An animated WebP of the product rotating continuously, deliberately chosen over `<video>` so it is exempt from autoplay policies and needs no JavaScript. Masked with a `closest-side` radial so its edges dissolve into the slab, and `object-fit: contain` at `clamp(300px, 44vh, 460px)` tall.

## Do's and Don'ts

### Do:
- **Do** give each new section one full-bleed background colour and continue the alternation (paper → dark → paper → terracotta).
- **Do** open every section with a Space Mono eyebrow in terracotta, numbered in sequence (`06 · …`).
- **Do** cap headings at 16–18ch and let them break into short stacked lines; the shape of the stack is part of the design.
- **Do** mark emphasis with Fraunces italic in terracotta — one or two words per heading.
- **Do** separate groups with a 1px hairline (`rgba(26,21,18,.12)` on paper, `rgba(242,234,217,.18)` on dark) and generous space.
- **Do** use the shared padding tokens `clamp(90px, 14vh, 170px)` / `clamp(24px, 7vw, 110px)` on every new section.
- **Do** keep new grids on `auto-fit` + `minmax()` so they reflow without new breakpoints.
- **Do** express hover as a 1–2px lift plus a colour deepening, at 0.2–0.25s.
- **Do** fade images into their slab with a radial mask instead of ending them at a hard rectangular edge.
- **Do** keep body text at 15.5–16px with 1.6 line-height; this audience reads it on a laptop, not a design review.

### Don't:
- **Don't** add a shadow to any content element. Floating chrome (header, menu, future overlays) uses translucency + backdrop blur instead.
- **Don't** introduce a second accent colour, a status palette, or a gradient of the accent. Terracotta is alone.
- **Don't** use a cool or pure neutral — no `#FFF` surfaces, no `#000`, no grey. Every neutral is warm.
- **Don't** wrap content in cards, panels, or bordered boxes to group it. Hairline plus space is the grouping mechanism.
- **Don't** put an icon next to a heading or inside a group. The system numbers things; it does not illustrate them. **No icons-in-cards rows** — explicitly rejected.
- **Don't** let Space Mono carry information that isn't structural, and never run it past ~5 words.
- **Don't** set a paragraph in Fraunces or a heading in Inter.
- **Don't** centre body content on desktop; everything aligns left to the shared gutter.
- **Don't** drift toward the generic AI/SaaS look — purple-blue gradients, glass panels, glowing borders, neon dark-mode dashboards. Explicitly rejected.
- **Don't** use stock photography of meetings, handshakes, or abstract "innovation" imagery. Imagery is the real product or nothing. Explicitly rejected.
- **Don't** add emoji, exclamation marks, badges, counters, or startup enthusiasm. It contradicts the formal Dutch voice. Explicitly rejected.
- **Don't** make an interactive effect the only carrier of information; the spotlight hero must remain fully legible with the effect absent.
