# Contact heading hierarchy correction

Kept the existing semantic hierarchy and copy: `Contact PhysioNOW.` remains the sole H1, and `Choose how you'd like to connect.` remains the H2 above the contact options. Reduced the H2's visual scale and tightened the top padding before the section.

Computed sizes:

- Desktop: H1 92px; H2 47.5px.
- Mobile: H1 60.8px; H2 34.4px.

## Verification

- `npm run build`: passed.
- Playwright Contact route checks across Chromium, Firefox, and WebKit at 320, 375, 768, and 1440px: 12 combinations; no overflow, runtime errors, or heading-semantic regressions.
- Axe WCAG 2.2 A/AA tags at 375px and 1440px: zero violations.

## Screenshots

- [Contact desktop heading hierarchy](screenshots/contact-heading-fix-desktop.png)
- [Contact mobile heading hierarchy](screenshots/contact-heading-fix-mobile.png)
