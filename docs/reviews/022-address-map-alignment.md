# Address map alignment

Date: 2026-10-25

## Change

The Contact page previously showed a decorative pin illustration and a generic Maps search. The map now embeds Google Maps using the supplied address with “Ansa Industrial Estate” as the leading place name. Google resolves that query to the estate marker rather than the broader Saki Vihar Road. The directions URL uses the same destination.

The provided address does not name a building, suite, or floor, so the marker is accurate to the supplied estate-level address rather than a specific clinic entrance.

## Verification

- `npm run build` passes.
- Google Maps iframe loads on desktop and mobile.
- The rendered map identifies the pin as Ansa Industrial Estate.

Screenshots:

- `docs/reviews/screenshots/contact-map-address-desktop.png`
- `docs/reviews/screenshots/contact-map-address-mobile.png`
