# Hero and responsive validation — 2026-09-07

Validated locally using Chrome through Playwright, with mobile/touch emulation.
No production form messages were sent; FormSubmit was intercepted and mocked.

- Homepage, portfolio, Atlanticus and privacy checked at widths 320, 390, 768,
  1024, 1440 and 1920px. The discovered 320px portfolio heading overflow and
  1024px Atlanticus canvas overflow were fixed and rechecked.
- Earth and Moon: mouse dragging changes the rendered view without moving the
  canvas; arrow keys rotate; pause stops motion; the mouse wheel scrolls normally.
- Both heroes: horizontal touch swipes rotate, vertical touch swipes scroll.
- Reduced-motion preference starts with rotation paused.
- Blocked Three.js downloads and unavailable WebGL preserve a complete static
  planet image and readable page content; inactive controls stay hidden.
- Mobile menus open/close, expose all links and support Escape.
- Accordion content fits without clipping; example cards scroll horizontally.
- Portfolio switches between normal document flow and one active pinned panel
  when moving between mobile and desktop layouts.
- Contact validation and mocked successful delivery work on a 320px viewport.
- Both heroes checked at 3840×2160; 4096×2048 texture requests verified.
- Local HTML asset references, inline/external JavaScript syntax, and diff
  whitespace checks passed.

This is browser emulation, not a physical iOS/Android device test.

## Local preview

This remains a static GitHub Pages site, with no build step or runtime CDN needed
for the 3D scenes. Serve the repository root with any static HTTP server, e.g.
`python3 -m http.server 4173`, and open `http://localhost:4173`.

The Three.js version is pinned locally. Attribution and texture processing details
are in `assets/space/README.md`, with public credits at `/beeldcredits.html`.
