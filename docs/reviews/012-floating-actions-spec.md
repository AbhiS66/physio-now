# Floating contact actions — design spec

Reviewer: GPT-5.6 High
Date: 2026-10-25
Reference: [Adapt Physiotherapy](https://www.adaptphysiotherapy.in/)

ChatGPT said:

The cleanest adaptation is a small fixed two-action contact rail, not a copied floating pair. Keep it unmistakably PhysioNOW: forest/mint, restrained radius, subtle elevation, no bright WhatsApp-green bubble treatment.

The current site already has strong performance/accessibility headroom and consistent interaction behavior, so this should stay lightweight and CSS-driven. 
010-authenticity-ui-pass

Recommended implementation spec

Component: FloatingContactActions

Routes: render globally on Home, About, Areas of Care, and Contact. I would keep it on Contact too; although redundant, those are exactly the actions a contact-page visitor may want immediately.

Desktop placement: fixed bottom-right, stacked vertically.

right: 24px
bottom: 24px
gap: 10px
above footer/content with appropriate z-index
account for safe area: calc(24px + env(safe-area-inset-right/bottom))

Mobile placement:

right: 14–16px
bottom: calc(14–16px + env(safe-area-inset-bottom))
vertical stack, not horizontal
ensure it never overlaps the mobile menu button or any browser safe-area controls

Use position: fixed; do not make it disappear when the user reaches the footer.

Size and visual treatment

Desktop: 52×52px
Mobile: 48×48px minimum.

Keep both circular or softly rounded-square—I'd choose 14–16px rounded squares, because the site already uses circles heavily and has deliberately reduced repetitive circular decoration.

Call

background: existing forest green
phone icon: warm white/canvas
hover: forest-deep
label/tooltip: Call PhysioNOW

WhatsApp

background: mint-soft or white
thin forest border
WhatsApp icon: forest green
hover: slightly stronger mint fill
label/tooltip: WhatsApp PhysioNOW

Do not use Adapt's blue/bright-green pairing. The distinction should come from fill/border treatment, not unrelated brand colors.

Actions

Call:

tel:+917304495664

WhatsApp:

https://wa.me/917304495664

Open WhatsApp in a new tab/window with:

target="_blank" and rel="noopener noreferrer".

Do not prefill medical text or invent an enquiry message.

Icons and labels

Use clean outline icons matching the site's existing icon language.

For icon-only buttons:

visible tooltip on desktop hover and keyboard focus
aria-label="Call PhysioNOW at 7304495664"
aria-label="Chat with PhysioNOW on WhatsApp"

On mobile, no persistent text label is necessary; it would make the controls too large and start competing with the site's CTAs.

Avoid badges, notification dots, pulsing rings, or “Chat now” marketing copy.

Interaction and motion

Keep movement minimal:

hover/focus: translateY(-1px) or slight scale to ~`1.03`
transition: roughly 180–220ms
no bouncing
no pulsing
no auto-expanding labels
no entrance animation every time the route changes

Under prefers-reduced-motion: reduce, remove transform animation and retain only color/border changes.

Keyboard/accessibility

Both controls must be real <a> elements.

Requirements:

normal Tab order
visible 2–3px focus ring using the existing focus treatment
minimum 44×44px hit area
icon marked decorative if the accessible name is on the link
tooltip must appear on keyboard focus as well as hover
tooltip itself must not be the sole accessible name

Do not trap focus or introduce a floating menu.

Content-obstruction rule

The control rail should sit over the viewport, but not over critical copy.

Because the current layouts already use generous right/bottom whitespace, the pair should fit cleanly. Still verify at:

320px
375px
768px
1440px

Pay particular attention to:

Home footer/contact CTA
About final CTA card
Services bottom CTA
Contact email section/footer

If overlap occurs on very short viewports, reduce bottom spacing slightly rather than hiding the actions.

Smallest coherent scope

Implement exactly:

one reusable global floating-actions component;
Call + WhatsApp only;
forest/mint styling matching PhysioNOW;
52px desktop / 48px mobile;
fixed bottom-right with safe-area handling;
accessible labels, focus states, and reduced-motion behavior;
regression-check overlap across all four routes and mobile widths.

No chat widget, popup, animation flourish, sticky bottom bar, analytics integration, or additional contact method is needed for this pass.
