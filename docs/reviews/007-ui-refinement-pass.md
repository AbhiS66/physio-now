# PhysioNOW UI refinement pass

This pass applies the smallest coherent improvement set recommended in the UI critique. The v1 palette, typography, S-line, abstract illustrations, page structure, and factual content remain intact.

## Changes

- **Contact:** Prevent phone and email values from breaking across lines; reserve clear space for each card's arrow; move the smaller clinic seal below the mobile introduction; reduce excess hero and contact-section spacing on desktop.
- **About:** Reduce desktop vertical padding in the experience and care philosophy sections, reduce the philosophy composition's minimum height, and enlarge its person-centered orbit graphic.
- **Areas of Care:** Shorten each mobile service illustration by 20%, tighten service-block spacing, and align the service index alongside its title.
- **Home:** Strengthen service-card hover/focus affordance, icon surfaces, and title/body hierarchy. Make the Understand/Personalize/Progress headings and descriptions more legible.
- **CTA consistency:** Use a shared arrow scale, spacing, and subtle motion across buttons and text links.
- **Contrast:** Corrected two small contrast findings uncovered during re-scan: the Powai edge label and the mobile seal text.

## Verification

- `npm run build`: passed.
- Playwright: 90 combinations across Chromium, Firefox, and WebKit; five routes (`/`, `/about`, `/services`, `/contact`, `/not-a-page`); widths 320, 360, 375, 768, 1024, and 1440px. No horizontal overflow or console/page errors.
- Contact card measurements: phone and email values fit on one line at 320, 360, and 375px; the seal does not overlap the heading.
- Axe WCAG 2.2 A/AA tags: zero violations for the four main routes at 375px and 1440px (8 scans), plus the open mobile navigation scan (9 total).
- Keyboard regression: mobile menu opens with Enter, closes with Escape, and restores focus. Homepage service cards remain full-card links and show a visible keyboard focus outline.
- Lighthouse on production preview: Performance 99, Accessibility 100, Best Practices 100, SEO 100; FCP 1.4s, LCP 2.0s, TBT 0ms, CLS 0.

## Screenshots

Production desktop (1440px) and mobile (375px) views:

- [Home desktop](screenshots/home-ui-pass-desktop.png) · [Home mobile](screenshots/home-ui-pass-mobile.png)
- [About desktop](screenshots/about-ui-pass-desktop.png) · [About mobile](screenshots/about-ui-pass-mobile.png)
- [Areas of Care desktop](screenshots/services-ui-pass-desktop.png) · [Areas of Care mobile](screenshots/services-ui-pass-mobile.png)
- [Contact desktop](screenshots/contact-ui-pass-desktop.png) · [Contact mobile](screenshots/contact-ui-pass-mobile.png)

## Remaining scope

Native Safari automation and a manual assistive-technology audit remain outside the automated checks; WebKit was used for browser-engine coverage, as in the accepted v1 quality gate.
