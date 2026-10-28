# Authenticity and UI refinement pass

This new scope responds to the UI critique in `docs/reviews/009-authenticity-photo-critique.md`.

## Changes

- Added Dr. Avdhoot Shimpi's original 992 × 1260 JPEG portrait from the user-provided Adapt Physiotherapy team page. It appears in the Home practitioner section and About hero, framed in mint with distinct CSS crops. The photo itself is not edited, recolored, retouched, or regenerated. The About image loads eagerly; the Home image loads lazily.
- Removed the generated abstract practitioner silhouette from those two contexts.
- Removed the Contact hero seal and About person-centered orbit graphic to break up repeated circular decoration and give the content more room.
- Varied the six Areas of Care illustrations with three restrained treatments: centered orbits, offset/cropped arcs, and a subtle S-curve. The alternating service layout and icons remain.
- Retained the homepage hero art, S-line, warm palette, typography, navigation, copy, and existing factual content.

## Verification

- `npm run build`: passed.
- Playwright: 90 combinations across Chromium, Firefox, and WebKit; five routes (`/`, `/about`, `/services`, `/contact`, `/not-a-page`); widths 320, 360, 375, 768, 1024, and 1440px. No overflow or console/page errors. Both portrait instances loaded at the original 992px source width.
- Axe WCAG 2.2 A/AA tags: zero violations for the four main routes at 375px and 1440px (8 scans).
- Keyboard regression: mobile menu opens with Enter, closes with Escape, and restores focus.
- Lighthouse production preview:
  - Home: Performance 99, Accessibility 100, Best Practices 100, SEO 100; FCP 1.4s, LCP 2.2s, TBT 0ms, CLS 0.
  - About: Performance 97, Accessibility 100, Best Practices 100, SEO 100; FCP 1.4s, LCP 2.6s, TBT 0ms, CLS 0.

## Updated screenshots

Desktop (1440px) and mobile (375px):

- [Home desktop](screenshots/home-human-ui-desktop.png) · [Home mobile](screenshots/home-human-ui-mobile.png)
- [About desktop](screenshots/about-human-ui-desktop.png) · [About mobile](screenshots/about-human-ui-mobile.png)
- [Areas of Care desktop](screenshots/services-human-ui-desktop.png) · [Areas of Care mobile](screenshots/services-human-ui-mobile.png)
- [Contact desktop](screenshots/contact-human-ui-desktop.png) · [Contact mobile](screenshots/contact-human-ui-mobile.png)

Photo provenance is documented in [`docs/assets.md`](../assets.md).
