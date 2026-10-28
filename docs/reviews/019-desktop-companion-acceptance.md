# Desktop companion acceptance

> This acceptance records the first original-mascot version. It was superseded after the user clarified they wanted the Diana character from the RAM-eating/dance trend. See the current review and acceptance in `020-diana-desktop-companion-acceptance.md`.

Reviewer: ChatGPT (signed-in design review thread)
Date: 2026-10-25

## Final decision

ChatGPT accepted the final chibi cameo at both the tall 1920×1440 review size and the common 1440×900 responsive size. It confirmed the character is recognizable at 66px wide in the far-left gutter, remains visually subordinate, and does not cover content. Its final verdict: “Accepted.” No further correction was requested.

## Verified behavior

- The component contains one companion wrapper and at most one image. No clone or multiplication behavior exists.
- It appears once per tab after an 8.5-second delay, only when the lower-left region is clear; it nibbles, stretches, then leaves.
- It exits on scroll and pauses while the tab is hidden.
- It is hidden below 1024px and for reduced-motion users.
- It is decorative (`aria-hidden="true"`), has no keyboard focus, makes no sound, and does not intercept pointer input.
- At 1440×900, the character bounds are x=6–72 and page content begins at x=80. At 1152×720, the content-clearance check skips the cameo. The floating Call/WhatsApp controls remain at the opposite edge.

## Quality check

- `npm run build` passes.
- Chromium, Firefox, and WebKit at 1440×900 each show exactly one image, with no page errors or horizontal overflow.
- At 1152×720, all three browsers skip the cameo and have no horizontal overflow.
- At 390×844 and with `prefers-reduced-motion: reduce`, no visible companion is rendered.
- Chromium axe WCAG 2.2 A/AA reports zero violations with the cameo visible.
- Scroll exit and single component across route changes were verified.

## Screenshots

- `docs/reviews/screenshots/desktop-companion-desktop.png` — common 1440×900 view
- `docs/reviews/screenshots/desktop-companion-tall.png` — tall 1920×1440 view
- `docs/reviews/screenshots/desktop-companion-mobile.png` — mobile, companion hidden
