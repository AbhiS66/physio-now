# Desktop companion research and plan

## Superseding update — Diana cameo (2026-10-25)

The user clarified the intended character after the original PhysioNOW chibi was already implemented: the RAM-biting girl from the Reels trend who dances is most likely Diana from Capcom's *PRAGMATA*. ChatGPT research distinguished the game scene (Diana bites a data chip) from the fan “eating RAM” caption and confirmed an official Diana dance clip. The earlier original-mascot proposal below is historical and is superseded by the user's clarification and the final acceptance in `020-diana-desktop-companion-acceptance.md`.

The site now uses one unofficial, AI-generated, Diana-inspired chibi fan-art asset. Existing one-character lifecycle, clear-space check, desktop/reduced-motion rules, and scroll behavior remain. Her data chip was enlarged after visual review; the 1440×900 screenshot was then accepted by ChatGPT.

## Research finding

ChatGPT identified the visual language as most likely a Shimeji-style desktop companion rather than one uniquely attributable Instagram Reel. The RAM-eating joke appears to be an adjacent meme: a Japanese report describes a Corsair video personifying Chrome eating RAM cookies. Shimeji-ee projects describe small characters that wander and play around the desktop. The user's Reel description may refer to a derivative edit or a specific recent post that could not be uniquely identified.

- [Japanese report on the Chrome/RAM eating video](https://nlab.itmedia.co.jp/cont/articles/3287075/)
- [Shimeji-ee desktop mascot project](https://github.com/DalekCraft2/Shimeji-Desktop)
- [Desktop Mate on Steam](https://store.steampowered.com/app/3301060/Desktop_Mate/)

## ChatGPT's recommended treatment

Use one original PhysioNOW-colored chibi as a brief desktop-only cameo. She sits at the lower edge, nibbles one mint tile, stretches, and leaves. Keep the existing site design and content unchanged. No duplication, text bubbles, sound, medical jokes, menus, drag behavior, or interaction with clinic content. Hide it on mobile and for reduced-motion users. Use a tiny transparent image and CSS transforms, defer its appearance, and pause while the tab is hidden.

The user explicitly clarified “chibi style,” so the final character uses an oversized rounded head, large simple eyes, compact torso, short limbs, and the established forest/mint/ivory/coral palette.

## Implementation details

- A single `DesktopCompanion` component is mounted once in `PageShell`.
- It waits 8.5 seconds, appears once per tab session, and runs a 9.8-second nibble/stretch/exit sequence.
- It appears only at viewport widths of 1024px or wider; it is suppressed for `prefers-reduced-motion`.
- It exits on scroll and pauses timers/animation while the tab is hidden.
- A lower-left content-clearance check skips the cameo when nearby text or major content would be covered. At short desktop heights it sits lower and fits in the empty outer gutter. On a 1440×900 viewport it occupies x=6–72 while page content begins at x=80.
- The transparent PNG is 320×480 and about 152 KB. It is loaded only when the cameo appears.

## Decision history

ChatGPT first requested a lower-left clearance gate after an initial screenshot showed the character overlapping a section marker. That gate and responsive sizing were added. Following the user's chibi-style clarification, the artwork was regenerated with clearly chibi proportions. ChatGPT accepted the 1920×1440 screenshot, then reviewed and accepted the 1440×900 responsive edge cameo. Its optional suggestion for a very soft neutral shadow was also applied.

Final acceptance and QA are recorded in `019-desktop-companion-acceptance.md`.
