# Floating call and WhatsApp actions

Implemented the reusable floating quick-contact rail recommended by the ChatGPT review.

## Behavior and appearance

- Appears on all routes as two vertically stacked, circular links fixed at the lower right.
- Call opens `tel:+917304495664`; WhatsApp opens `https://wa.me/917304495664` in a new tab without a prefilled message.
- Uses a 52px desktop / 48px mobile hit area, forest-green call button, mint WhatsApp button, restrained hover motion, and tooltips visible on pointer hover and keyboard focus.
- Accessible names are on the anchors; SVG icons and tooltip text are decorative to assistive technology. Focus uses the site's coral outline. Safe-area offsets are included, and reduced-motion removes the hover transform/transition.
- On mobile the existing contact-card arrows are hidden because the floating pair occupies that reserved right edge.

## Verification

- `npm run build`: passed.
- Playwright Chromium, Firefox, and WebKit checked all four routes at 320, 375, 768, and 1440px (48 combinations): no horizontal overflow, runtime errors, or incorrect button sizes/URLs.
- At 320px and 375px the contact-card values remain clear of the floating action rail. Footer text and route-specific final CTAs remain unobstructed at the bottom of each page.
- Keyboard test: both actions follow normal tab order; tooltips appear on focus. Reduced-motion test confirms the hover transform is removed.
- Axe WCAG 2.2 A/AA tags: zero violations for all four routes at 375px and 1440px (8 scans).
- Lighthouse on the production homepage: Performance 99, Accessibility 100, Best Practices 100, SEO 100; FCP 1.4s, LCP 2.2s, TBT 0ms, CLS 0.

## Screenshots

- [Home desktop](screenshots/home-floating-actions-desktop.png) · [Home mobile](screenshots/home-floating-actions-mobile.png)
- [About desktop](screenshots/about-floating-actions-desktop.png) · [About mobile](screenshots/about-floating-actions-mobile.png)
- [Areas of Care desktop](screenshots/services-floating-actions-desktop.png) · [Areas of Care mobile](screenshots/services-floating-actions-mobile.png)
- [Contact desktop](screenshots/contact-floating-actions-desktop.png) · [Contact mobile](screenshots/contact-floating-actions-mobile.png)
