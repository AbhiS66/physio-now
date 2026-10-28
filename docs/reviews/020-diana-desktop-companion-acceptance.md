# Diana desktop companion acceptance

> Historical acceptance only. The user later asked to remove this optional feature as non-urgent; it is no longer present in the current site.

Date: 2026-10-25
Reviewer: ChatGPT in the user's signed-in design thread

## Research and direction

The user clarified that the intended character was the girl from the Instagram RAM-eating trend who also dances. Research identified Diana from Capcom's *PRAGMATA* as the strongest match. In the game, she bites a data chip; “eating RAM” is the meme framing. Capcom also published an official Diana dance clip: [Diana's All-Out Dance Moves](https://www.youtube.com/watch?v=sI4kG53okwg). Character reference: [Capcom press release](https://www.capcom.co.jp/ir/english/news/html/e251212.html). The exact Instagram edit remains unconfirmed.

The website uses a single AI-generated, unofficial fan-inspired transparent chibi illustration. It is not official Capcom artwork. Its oversized head, pale hair, green eyes, white-and-blue sci-fi suit, compact perch, and data chip are designed to read at 66px wide.

## Implementation

- Replaced the visible original mascot image with `public/images/pragmata-diana-companion-v2.png` (512 × 768, transparent RGBA PNG, about 547 KB).
- Kept the existing single instance, 8.5-second first-visit delay, nibble intro, one short sway/dance beat, static perch, scroll dismissal, lower-left clearance gate, mobile hiding, and reduced-motion hiding.
- Raised the short-desktop perch from 25px below the screen edge to 3px below it, making the figure almost fully visible at 1440 × 900.
- The first visual review requested a clearer data chip. Enlarged and simplified the chip without changing the figure's scale or position.

## Final review

Screenshot: `docs/reviews/screenshots/companion-diana-desktop-1440.png`.

ChatGPT accepted the revised screenshot. It confirmed the chip is readable at actual size, the character reads as a chibi companion, crop and position work, the illustration fits the calm site design, and it does not overlap content or floating contact actions.

At 1440 × 900, the component bounds are x=6, y=804, width=66, height=99 CSS pixels; 96 pixels remain visible. Exactly one image is rendered. The production build passes with the updated asset.
