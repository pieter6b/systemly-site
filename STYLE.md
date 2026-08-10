# Systemly — visueel systeem "Diep" (fresh start)

> Vastgelegd op basis van het prototype in `prototype/index.html`. Referenties: Palantir-hero (cinematisch, fullscreen, gecentreerde kop over bewegend beeld) en de Anthropic-uitklapbox (donker vlak dat bij scrollen uitgroeit tot volledig scherm). Van de oude huisstijl blijven alleen de crèmekleuren en de lettertypes; al het andere (terracotta, renaissance-beeld, logo-stijl) is bewust losgelaten.

## 1. Kleur

| Token | Waarde | Gebruik |
|---|---|---|
| `--black` | `#0C0B09` | Basis donkere secties (hero, oerwoud, footer). Warm zwart, geen blauwzwart. |
| `--black-soft` | `#131110` | Kaarten/tegels op donker |
| `--creme` | `#EDE7DB` | Basis lichte secties (uit huidige site) |
| `--creme-bright` | `#F2EAD9` | Tekst op donker; primaire knop op donker (uit huidige site) |
| `--ink` | `#1A1512` | Tekst op licht (uit huidige site) |
| `--ink-soft` | `#5F574D` | Secundaire tekst op licht |

**Monochrome discipline: er is géén accentkleur.** Nadruk komt van cursieve Fraunces, geïnverteerde labels (crème vlak + zwarte tekst) en witruimte — niet van kleur. Dit is het scherpste onderscheid met elke blauwe/paarse AI-site.

Lijnen: `rgba(242,234,217,0.14)` op donker, `rgba(26,21,18,0.14)` op licht.

## 2. Typografie

| Rol | Font | Details |
|---|---|---|
| Display/koppen | **Fraunces** | Weight 500, `letter-spacing -0.015em`, line-height ~1.06 (hero) tot 1.1 (secties). Cursief (weight 400) als nadruk-middel ín koppen. |
| Body/UI | **Inter** | 400/500/600. Leesteksten line-height ≥1.65. |
| Chips/labels/kickers | **Space Mono** | Altijd uppercase, `letter-spacing 0.18–0.22em`, klein (0.66–0.72rem). |

Hero-kop: `clamp(2.4rem, 6.4vw, 5.2rem)`. Sectiekoppen: `clamp(2rem, 4.6vw, 3.4rem)`.

## 3. Paginaritme

Donker → licht → donker → licht → donker:
1. **Hero** (zwart, cinematische video, 100svh)
2. **De spiegel** (crème) — herkenning, 4 symptomen
3. **Ons oordeel** (crème) — positionering + pull-quote + "wat we niet doen"
4. **Wat we bouwen** (crème, met zwarte bewijs-kaarten) — 3 cases met voor/na
5. **Het oerwoud** (zwarte uitklapbox, Anthropic-stijl: start ingesprongen met 28px radius op crème en **alle inhoud direct leesbaar**; groeit bij scrollen alleen nog uit naar full-bleed 100vh. Track 220vh, expansie klaar op ~55%. Onder 900px: gewone full-width donkere sectie, geen sticky-effect.)
6. **Hoe het werkt** (crème) — 4 stappen
7. **Privacy & zekerheid** (zwart) — lokaal als bewijs + 3 continuïteitsgaranties ("zo is het geregeld")
8. **Wie er langskomt** (crème) — "Je krijgt geen accountmanager. Je krijgt ons."
9. **Contact/slot** (crème) — formulier + telefoon/mail + prijszin
10. **Footer** (zwart)

Content max-width 1060px; sectiepadding `clamp(5rem, 11vw, 9rem)` verticaal.

## 4. Hero

- Fullscreen **echte videobeelden** (besloten — geen abstracte animatie), Palantir-stijl: cyclus van cinematische clips met 1,6s crossfade, elke ~9s een scènewissel. Donkere tint (~0.62) + vignet + boven/ondergradiënt houden de crème tekst overal leesbaar, onafhankelijk van de helderheid van de clip.
- Gecentreerde inhoud: mono-chip → Fraunces-kop (met cursief tweede deel) → subregel → CTA's → mono-trustregel.
- **Huidige clips** (Pexels, gratis licentie, ook commercieel gebruik toegestaan, geen naamsvermelding verplicht):
  1. Amsterdam vanuit de lucht bij zonsondergang — `videos.pexels.com/video-files/31532146/13439842_3840_2160_60fps.mp4` (4K, ~104 MB)
  2. Modern kantoor met werkplekken — `videos.pexels.com/video-files/8346903/8346903-uhd_2560_1440_25fps.mp4` (1440p, ~5 MB)
  3. Close-up documenten doornemen — `videos.pexels.com/video-files/8478951/8478951-uhd_2560_1440_25fps.mp4` (1440p, ~8 MB)
  4. Serverruimte/datacenter — `videos.pexels.com/video-files/5028622/5028622-uhd_2560_1440_25fps.mp4` (1440p, ~31 MB)
- **Voor productie:** clips zelf hosten (niet hotlinken naar Pexels), comprimeren naar ~5–8 MB per clip (H.264/H.265, 1440p is genoeg achter de donkere tint), `preload` alleen voor de eerste clip, en een statisch donker poster-frame voor trage verbindingen. Volgorde: Amsterdam als opener (NL-herkenning), daarna kantoor → documenten → datacenter.
- `prefers-reduced-motion`: alleen de eerste clip, geen crossfade-cyclus.

## 5. Componenten

- **Knoppen:** hoekig (2px radius). Primair op donker: crème vlak + zwarte tekst. Primair op licht: zwart vlak + crème tekst. Secundair: ghost met 1px lijn. Pijl `→` in het label.
- **Chips:** pill (999px radius), 1px lijn, Space Mono uppercase — de enige ronde vorm in het systeem naast de uitklapbox-radius.
- **Oerwoud-tegels:** grid met 1px lijnen (geen schaduwen), verdict-label in Space Mono; `WEL DOEN` geïnverteerd (crème vlak), overige labels outlined. Vertaalregel begint altijd met "**Voor een bedrijf van twintig man:**".
- **Formulieren:** mono-labels uppercase, velden met 1px lijn, focus = lijn wordt ink.
- **Nav:** fixed, translucent donker met blur, wordmerk + mono-tagline links, rechts links + crème CTA-knop.

## 6. Beweging

- Hero-canvas: traag (6px/s pan), pulserende stipjes — kalm, geen spektakel.
- Uitklapbox: cubic ease-out op margin/height/radius, inhoud fadet in na ~35% voortgang.
- Secties: reveal-on-scroll (fade + 22px translate, 0.7s), eenmalig.
- `prefers-reduced-motion`: alles statisch, content direct zichtbaar.

## 7. Nog open (styling)

1. **Wordmerk:** nu "Systemly" in Fraunces 500 — fresh start betekent dat het oude logo vervalt; bevestigen of dit het nieuwe wordmerk wordt.
2. **Monochrome bevestigen:** geen accentkleur, ook niet voor verdict-labels of links.
3. **Definitieve clipselectie:** de vier huidige clips zijn een sterke eerste set; alternatieven (bv. Rotterdam-skyline, ander kantoorwerk) kunnen per clip vervangen worden zonder de opzet te raken.
