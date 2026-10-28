# GPT-5.6 High design delegation

I’d make PhysioNOW feel calm, precise, premium, and distinctly clinical without looking like a hospital template. The signature idea is “Movement, restored with clarity”: warm off-white surfaces, deep mineral green, restrained coral accents, generous whitespace, anatomical-flow curves, and the animated S-line as the recurring visual language.

PhysioNOW — Design & Frontend Implementation Delegation
PhysioNOW — Design & Frontend Implementation Delegation
Creative direction

PhysioNOW should present physiotherapy as guided restoration of movement, not as generic healthcare.

The visual language should communicate:

clinical credibility without sterility,

premium care without luxury clichés,

warmth without informality,

movement without aggressive fitness imagery,

modernity without excessive gradients, glass effects, or animations.

The central brand motif is a continuous flowing S-curve representing movement, recovery, mobility, and progression. It should recur subtly through AnimatedSLine, section dividers, cropped background linework, and selected cards.

Primary positioning language:

Move better. Recover with confidence.

Supporting homepage copy:

Personalized orthopedic physiotherapy and rehabilitation in Powai, Mumbai.

Do not add unsupported promises such as “pain-free living,” “guaranteed recovery,” “Mumbai’s best physiotherapist,” or clinical outcome statistics.

1. Site map and routing

Use:

React

TypeScript

Vite

Tailwind CSS

React Router

native SVG

CSS transitions/animations

No component library is required.

Routes:

/ — Home

/about — Dr. Avdhoot Shimpi (PT)

/services — Areas of Care

/contact — Contact & Location

Provide a styled 404 fallback using the common header/footer.

Navigation:

Desktop:

PhysioNOW logo | Home | About | Areas of Care | Contact | Call clinic

Mobile:

logo left

menu button right

accessible slide-down or drawer navigation

Call clinic should remain visually prominent inside the mobile menu

Use actual routes rather than converting everything into a single scrolling landing page. This improves information architecture, direct linking, SEO, and page-specific content hierarchy.

2. Global page composition
Header

Header height:

desktop: approximately 80px

mobile: 68–72px

Behavior:

initially transparent/light over normal page surface

becomes slightly opaque with subtle border when scrolled

do not use heavy shadows

Logo treatment:

Physio in dark ink + NOW emphasized in primary green.

Optional brand symbol:

A minimal S-flow mark derived from the AnimatedSLine geometry.

Do not invent a medical cross unless it is treated purely as generic graphical decoration. The S-flow mark is preferred.

Primary header CTA:

Call clinic

Action:

tel:+917304495664

Secondary navigation CTA can be:

Contact

leading to /contact.

3. Homepage

Section order is fixed as follows.

3.1 Hero

Desktop:

Two-column composition approximately 55/45.

Left:

small eyebrow: PHYSIOTHERAPY & REHABILITATION · POWAI

H1:
Move better.
Recover with confidence.

supporting paragraph:
Personalized orthopedic physiotherapy and rehabilitation focused on restoring mobility, managing musculoskeletal concerns, and supporting safe recovery after surgery or injury.

CTA group:

primary: Call 7304495664

secondary: Explore areas of care

subtle location note:
Saki Vihar · Chandivali · Powai, Mumbai

Right:

Do not use a stock doctor portrait.

Create an abstract movement composition consisting of:

one large rounded vertical panel,

pale mint/stone background,

cropped AnimatedSLine,

2–3 softly layered organic shapes,

very subtle joint/mobility-inspired line geometry,

optional label:
Orthopedic rehabilitation · Mobility · Recovery

The abstract artwork should look intentionally branded rather than like an empty placeholder.

Hero min-height:

desktop: about calc(100svh - header) capped around 820px

mobile: content-driven, approximately 680–760px depending on viewport

Mobile order:

eyebrow

heading

supporting text

CTAs

abstract artwork

Primary button should become full or near-full width on narrow mobile screens.

Place one prominent AnimatedSLine through the hero artwork.

3.2 Trust strip

A slim credibility strip immediately after the hero.

Three factual items:

5+ years clinical experience

Orthopedic physiotherapy

Personalized rehabilitation

Use icons only if they are simple line icons.

Do not use statistics beyond supplied facts.

3.3 Areas of Care preview

Heading:

Care built around how you need to move again.

Intro copy should remain factual and restrained.

Display all six services in a responsive grid.

Desktop:

3 columns × 2 rows.

Tablet:

2 columns.

Mobile:

1 column or horizontally composed cards if sufficiently spacious.

Cards:

Post-Operative Rehabilitation

Joint Replacement Recovery

Spine & Musculoskeletal Care

Sports Injury Rehabilitation

Arthritis & Joint Care

Manual Therapy Techniques

Each card should contain:

compact custom line icon

title

supplied factual explanation

small arrow link

Clicking any card routes to /services#service-slug.

Cards should not float dramatically on hover.

Preferred hover:

border darkens

icon shifts by 2–3px

arrow advances by 3–4px

background gains subtle mint tint

3.4 Doctor introduction

Large editorial split section.

Left:

abstract portrait placeholder container.

It must explicitly not impersonate Dr. Shimpi.

Create:

elegant silhouette/figure abstraction,

linework derived from the brand flow,

caption:
Authorized photograph can replace this visual.

Do not display a fake human photograph.

Right:

Eyebrow:

YOUR PHYSIOTHERAPIST

Heading:

Dr. Avdhoot Shimpi (PT)

Subheading:

Senior Orthopedic Physiotherapist

Body:

Use the supplied overview substantially verbatim.

Trust detail:

5+ years of clinical experience

Qualification preview:

Bachelor of Physiotherapy (BPTh - Orthopedics)
KEM Hospital & Seth G.S. Medical College, Mumbai

CTA:

Meet Dr. Shimpi →

Routes to /about.

3.5 Care approach

This section explains the supplied patient-centered positioning without inventing a proprietary treatment method.

Heading:

Thoughtful rehabilitation, centered around the individual.

Use three editorial principles:

Understand

Care begins by understanding the individual's mobility concerns, recovery context, and functional needs.

Personalize

Rehabilitation planning is tailored to the individual's condition and recovery requirements.

Progress

Care focuses on restoring mobility and function safely through appropriate rehabilitation and physiotherapy.

Do not describe this as a formally named clinical framework.

Use a flowing line connecting the three ideas on desktop.

3.6 Location/contact feature

Use a high-contrast green section near the bottom.

Heading:

Physiotherapy care in Powai, Mumbai.

Show:

PhysioNOW

Saki Vihar Rd,
Saki Vihar, Ansa Industrial Estate,
Chandivali, Powai, Mumbai,
Maharashtra 400072

Actions:

Call clinic

Email PhysioNOW

Get directions

Exact behaviors:

Call:

tel:+917304495664

Email:

mailto:reachphysionow@gmail.com

Directions:

Open Google Maps in a new tab using the exact address as destination/search:

https://www.google.com/maps/search/?api=1&query=Saki+Vihar+Rd%2C+Saki+Vihar%2C+Ansa+Industrial+Estate%2C+Chandivali%2C+Powai%2C+Mumbai%2C+Maharashtra+400072

Do not embed a fake interactive map.

An optional simple static map-style graphic is acceptable only if clearly decorative.

3.7 Footer

Columns:

PhysioNOW

Short description:

Physiotherapy and rehabilitation in Powai, Mumbai.

Explore

Home

About

Areas of Care

Contact

Contact

7304495664

reachphysionow@gmail.com

abbreviated location

Bottom row:

© {currentYear} PhysioNOW

www.getphysionow.in

Do not invent privacy/legal pages unless Luna creates minimal generic pages without unsupported business claims. They are not required for this initial release.

4. About / Doctor profile

Route:

/about

Section 1 — Intro hero

Eyebrow:

ABOUT YOUR PHYSIOTHERAPIST

H1:

Dr. Avdhoot Shimpi (PT)

Subheading:

Senior Orthopedic Physiotherapist

Visual:

Same approved abstract practitioner visual from homepage, larger.

Do not create or source a fake portrait.

Section 2 — Profile

Use the supplied overview:

Dr. Avdhoot Shimpi is a Senior Orthopedic Physiotherapist with over 5 years of clinical experience specializing in orthopedic rehabilitation, manual therapy, and post-surgical recovery. Known for personalized care plans and patient-centered communication, he helps individuals regain mobility, alleviate chronic pain, and recover safely following surgery or athletic injury.

Do not embellish this paragraph with additional credentials.

Section 3 — Experience and qualification

Editorial two-column layout.

Experience

Over 5 years of clinical experience

Focus:

orthopedic rehabilitation

manual therapy

post-surgical recovery

patient-centered communication

personalized care planning

Education

Bachelor of Physiotherapy (BPTh - Orthopedics)

KEM Hospital & Seth G.S. Medical College, Mumbai

Keep this wording exactly aligned with the supplied qualification.

Section 4 — Areas of expertise

Display the six supplied expertise areas as a vertically staggered list or grid.

Do not repeat excessive explanatory content; each item can use its provided one-line description.

Section 5 — Approach

Heading:

Care that considers the person, not just the condition.

Explain only what follows from the supplied profile:

personalized care plans,

patient-centered communication,

recovery of mobility,

rehabilitation after surgery or athletic injury,

management of orthopedic and musculoskeletal concerns.

Do not claim use of diagnostic equipment, advanced modalities, machines, proprietary protocols, or multidisciplinary teams.

Section 6 — CTA

Simple bordered panel:

Need to speak with PhysioNOW?

Buttons:

Call 7304495664

Contact clinic

5. Areas of Care page

Route:

/services

Hero:

Eyebrow:

AREAS OF CARE

H1:

Rehabilitation for movement, recovery, and everyday function.

Intro:

PhysioNOW provides orthopedic physiotherapy and rehabilitation across post-operative recovery, joint care, musculoskeletal concerns, sports rehabilitation, arthritis care, and manual therapy.

Then present six detailed sections.

Use alternating compositions rather than six identical cards.

Each section should have:

number 01–06

icon

title

supplied description

simple supporting visual pattern based on joints/movement/linework

Exact categories:

01 Post-Operative Rehabilitation

Targeted recovery protocols following surgery.

02 Joint Replacement Recovery

Specialized rehabilitation for knee, hip, and shoulder arthroplasty.

03 Spine & Musculoskeletal Care

Evidence-based management for acute and chronic back pain, neck pain, and sciatica.

04 Sports Injury Rehabilitation

Restoring functional strength and mobility for athletes and active individuals.

05 Arthritis & Joint Care

Long-term pain management and joint mobility restoration.

06 Manual Therapy Techniques

Hands-on joint and soft tissue mobilization.

Do not expand these into diagnosis lists or treatment promises beyond what is supplied.

Bottom CTA:

Not sure where your concern fits? Speak directly with PhysioNOW.

Call clinic

6. Contact page

Route:

/contact

Do not create a working enquiry form.

Hero

H1:

Contact PhysioNOW

Copy:

For enquiries about physiotherapy and rehabilitation, contact the clinic directly by phone or email.

Main contact panel

Three large actions:

Call

7304495664

Action:

tel:+917304495664

Email

reachphysionow@gmail.com

Action:

mailto:reachphysionow@gmail.com

Visit

Exact complete address.

Action:

Get directions

Use Google Maps URL defined above.

Location panel

Use a stylized location card rather than pretending to have live map integration.

Display:

PhysioNOW

Saki Vihar Rd, Saki Vihar,
Ansa Industrial Estate, Chandivali,
Powai, Mumbai, Maharashtra 400072

Open in Google Maps ↗

If Luna elects to embed Google Maps using a standard public embed URL that requires no API key, that is acceptable, but it is not required.

Enquiry presentation

Do not render editable fields with a fake Submit button.

Instead render:

Prefer to write to us?

Email reachphysionow@gmail.com

with a mail CTA.

This removes ambiguity around nonexistent form processing.

7. Brand concept

Brand concept:

“Flow back into movement.”

The S-shaped visual system communicates:

flexibility,

mobility,

progression,

joint motion,

rehabilitation,

continuity.

Avoid:

generic blue hospital branding,

bright medical cyan,

clichéd heartbeat graphics,

excessive cross symbols,

stock doctors,

sports-gym aggression,

glossy wellness-spa styling.

The result should sit between:

modern orthopedic practice + editorial wellness brand + premium digital product.

8. Color system

Use CSS variables and expose equivalent Tailwind tokens.

Core
--color-ink

#17312C

Use for:

headings

primary text on light surfaces

dark icons

--color-forest

#215C4F

Primary brand green.

Use for:

primary buttons

emphasized links

large CTA panels

active navigation

--color-forest-deep

#163F37

Use for:

hover states

footer

high-contrast dark sections

--color-mint

#DCECE5

Use for:

card highlights

icon surfaces

soft backgrounds

--color-mint-soft

#EFF6F2

Use for:

alternating sections

subtle visual panels

Neutral
--color-canvas

#F7F5EF

Main page background.

Prefer this warm mineral off-white over pure white.

--color-surface

#FFFFFF

Cards and elevated content.

--color-stone

#E5E2D8

Borders and separators.

--color-muted

#64716D

Secondary text.

Accent
--color-coral

#E77A64

Use very sparingly.

Use for:

small dot

highlighted word

line accent

selected icon detail

Never make coral the main CTA color.

--color-coral-soft

#F8DED7

Use behind micro-accents.

All foreground/background combinations must meet WCAG AA.

9. Typography

Preferred font pairing:

Display/headings

Manrope

Weights:

500

600

700

Body/interface

Inter

Weights:

400

500

600

Load efficiently using Google Fonts or local optimized web font strategy.

Fallbacks:

Headings:

Manrope, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Body:

Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Typography scale:

Desktop H1:

clamp(3.6rem, 6vw, 6.3rem)

Line height:

0.98–1.04

Section H2:

clamp(2.25rem, 4vw, 4rem)

H3:

1.35–1.65rem

Body large:

1.125–1.25rem

Body:

1rem

Small:

0.875rem

Eyebrows:

12–13px

uppercase

semibold

letter spacing around .12em

Body line-height:

1.65–1.75

Avoid excessively light font weights.

10. Layout and spacing

Container:

max-width: 1280px

Standard horizontal padding:

desktop ≥1280px: 32px

tablet: 24px

mobile: 20px

Large editorial sections may use:

max-width: 1440px

with content constrained internally.

Grid:

Desktop:

12-column grid.

Typical gap:

24–32px.

Section vertical spacing:

Desktop:

112–144px

Tablet:

88–112px

Mobile:

64–80px

Do not compress mobile spacing excessively.

Content measure:

Long body copy should generally max at:

60–68ch.

Border radii:

controls: 12–14px

cards: 20–24px

major artwork panels: 28–36px

pill elements: full radius only when intentionally used

Avoid making every element pill-shaped.

11. Buttons

Primary:

forest background

canvas/white text

48–54px height

radius 12–14px

medium/semibold label

Hover:

forest-deep background

subtle translateY(-1px)

Active:

return to zero translation

slight darkening

Secondary:

transparent

ink border

ink text

Text links:

underline only when semantically useful; arrow animation permitted.

Focus:

Minimum clearly visible 2–3px focus ring.

Never remove native focus without a replacement.

12. Hero artwork

Do not depend on stock photography.

Build a native abstract composition.

Suggested structure:

hero-art
 ├── large rounded mineral/mint panel
 ├── soft translucent organic ellipse
 ├── cropped thin anatomical arc
 ├── AnimatedSLine
 ├── accent dot / small coral marker
 └── optional micro-label

Visual depth should come from:

scale

clipping

overlapping shapes

opacity

not from excessive box shadows.

Allowed shadow:

soft, diffuse, extremely low contrast.

13. Doctor profile visual

Use a dedicated PractitionerVisual component until an authorized photograph is supplied.

It may depict:

abstract upper-body outline,

geometric human silhouette,

flowing anatomy-inspired line,

cropped S-line.

It must not resemble a photorealistic person and must not imply that an anonymous model is Dr. Shimpi.

Add accessible visible caption on About page:

Portrait placeholder — replace only with an authorized photograph of Dr. Avdhoot Shimpi (PT).

For purely decorative instances, use aria-hidden="true".

14. AnimatedSLine

Implement a reusable component:

AnimatedSLine

Suggested API:

type AnimatedSLineProps = {
  width?: number | string
  height?: number | string
  primaryStroke?: string
  secondaryStroke?: string
  strokeWidth?: number
  duration?: number
  amplitude?: number
  enabled?: boolean
  className?: string
}

Defaults:

width: 100%

height: responsive, approximately 160–260px

primary stroke: #215C4F

secondary stroke: #E77A64

stroke width: 2.5

duration: 10s

amplitude: 12%

enabled: true

Path character

Use one continuous cubic Bézier SVG path resembling a relaxed horizontal S:

starts outside left edge

rises gently

crosses center

falls into second curve

exits right

no sharp corners

no heartbeat spikes

no mathematically perfect sine-wave appearance

The path should feel hand-drawn but controlled.

Example conceptual geometry:

M -80 110 C 130 10, 260 15, 420 105 S 720 205, 930 95 S 1190 20, 1380 110

Scale through viewBox.

Do not rely on this literal geometry if Luna can produce a smoother equivalent.

Visual layering

Render:

broad low-opacity secondary path behind

crisp primary path above it

Suggested secondary:

stroke width: 7–10

opacity: 0.08–0.14

Primary:

stroke width: 2–3

opacity: .75–1

Optional small coral segment may sit along part of the line.

Do not turn the entire line coral.

Movement

The entire line group travels horizontally.

Initial:

translateX(-amplitude)

Midpoint:

translateX(+amplitude)

End:

translateX(-amplitude)

Use a single alternating motion cycle rather than restarting from the opposite edge.

Preferred CSS:

animation:
  physionow-s-flow var(--duration)
  cubic-bezier(.45, 0, .55, 1)
  infinite alternate;

or keyframes that naturally reverse direction.

No hard snap is permitted.

Do not animate stroke-dashoffset in a loader-like looping fashion.

The perceived motion should be the ribbon gently travelling, not being repeatedly drawn.

Clipping

SVG container:

overflow: hidden

Path should extend approximately 10–15% beyond both viewport edges so reversal never exposes an abrupt endpoint.

Hero placement

Place one large S-line:

horizontally through lower-middle/right region of hero artwork

partially clipped

behind foreground decorative geometry

Desktop height:

approximately 220px.

Mobile:

approximately 130–160px.

Reduce travel amplitude on mobile by about 30%.

For example:

desktop:

amplitude = 12%

mobile:

amplitude = 7–8%

Reduced motion

Respect:

prefers-reduced-motion: reduce

Behavior:

stop horizontal travel

display the line statically at its neutral center position

do not hide it

disable other decorative parallax/translations

enabled={false} should behave equivalently.

The component must remain visually complete without animation.

15. Supporting motion

Motion philosophy:

Slow, restrained, functional.

Do not use a site-wide animation framework unless clearly justified.

CSS is sufficient.

Allowed:

button hover transitions: 160–220ms

card states: 200–280ms

navigation underline: 180–220ms

section reveal: optional 350–500ms

AnimatedSLine: 8–12s

Section reveals may use:

opacity 0 → 1

translateY 12px → 0

Never exceed roughly 20px of entrance travel.

Do not stagger every individual word or card.

Disable decorative motion under reduced-motion preference.

16. Navigation interaction

Desktop nav:

clear active state

underline or small dot

no giant animated cursor

Mobile navigation:

button uses proper aria-expanded

menu receives logical keyboard order

Escape closes the menu

opening the menu should not unexpectedly move focus

if using a modal-style drawer, manage focus correctly

background scrolling should be prevented while drawer is open

Do not create keyboard traps.

17. Contact CTA behavior

Never label a button Book appointment unless real booking functionality is later provided.

Approved primary phrases:

Call clinic

Call 7304495664

Contact PhysioNOW

Email PhysioNOW

Get directions

Speak with PhysioNOW

Telephone actions:

tel:+917304495664

Email actions:

mailto:reachphysionow@gmail.com

External directions:

open new tab.

When using:

target="_blank"

include:

rel="noopener noreferrer".

18. Accessibility

Minimum target:

WCAG 2.2 AA.

Required:

semantic landmarks

one logical H1 per page

correct heading hierarchy

visible focus state

keyboard-operable navigation

keyboard-operable controls

no hover-only essential information

sufficient contrast

minimum practical tap target around 44px

alt text only for informative imagery

decorative SVG uses aria-hidden

phone/email/location links have descriptive accessible names

reduced-motion support

no auto-advancing carousel

no autoplay video

no flashing content

Add a skip link:

Skip to main content

It should become visible on focus.

Set main content:

id="main-content".

19. SEO

Use route-specific document titles.

Home

PhysioNOW | Physiotherapy & Rehabilitation in Powai, Mumbai

Description:

PhysioNOW provides orthopedic physiotherapy and rehabilitation in Powai, Mumbai, with care across post-operative recovery, joint rehabilitation, musculoskeletal concerns, sports injuries, arthritis and manual therapy.

About

Dr. Avdhoot Shimpi (PT) | PhysioNOW Powai

Services

Areas of Care | PhysioNOW Physiotherapy Powai

Contact

Contact PhysioNOW | Powai, Mumbai

Implement canonical identity referencing:

https://www.getphysionow.in

but do not deploy or modify the live domain.

Use structured metadata conservatively.

An appropriate LocalBusiness/MedicalBusiness schema may contain only supplied facts:

PhysioNOW

physiotherapy/rehabilitation category

address

telephone

email

website identity

Do not include:

invented opening hours

ratings

pricing

geographic coordinates unless accurately obtained later

fabricated social profiles

For Dr. Shimpi, schema must not categorize him as a physician if doing so incorrectly represents the supplied role.

20. Performance

Target a lightweight initial build.

Avoid:

large JavaScript animation libraries

heavy carousel packages

unnecessary icon libraries

large hero raster imagery

videos

background WebGL

excessive dependencies

Prefer:

SVG

CSS

simple React components

lazy loading only where useful

If external fonts are used:

preload only critical weights where appropriate

use font-display: swap

Production expectations:

no CLS from typography/artwork

responsive SVGs use explicit dimensions/aspect ratio

route switching remains immediate

no unnecessary network requests

Aim for strong Lighthouse performance rather than sacrificing the design for an arbitrary perfect score.

21. Component architecture

Recommended:

src/
  app/
    App.tsx
    router.tsx

  components/
    layout/
      Header.tsx
      MobileNav.tsx
      Footer.tsx
      PageShell.tsx

    ui/
      Button.tsx
      SectionEyebrow.tsx
      SectionHeading.tsx
      AnimatedSLine.tsx
      ServiceIcon.tsx
      PractitionerVisual.tsx
      ContactAction.tsx

    sections/
      home/
        Hero.tsx
        TrustStrip.tsx
        CarePreview.tsx
        DoctorIntro.tsx
        CareApproach.tsx
        LocationCTA.tsx

  pages/
    HomePage.tsx
    AboutPage.tsx
    ServicesPage.tsx
    ContactPage.tsx
    NotFoundPage.tsx

  data/
    services.ts
    practice.ts

  styles/
    index.css

Keep factual business data centralized.

Example conceptual data objects:

practice = {
  name,
  phone,
  phoneHref,
  email,
  emailHref,
  address,
  directionsUrl,
  website,
  practitioner
}

and

services = [...]

Do not duplicate doctor credentials or contact information across hardcoded components.

22. Responsive behavior

Breakpoints may align to Tailwind defaults.

Design around:

mobile: 320–639

tablet: 640–1023

desktop: 1024+

wide: 1280+

Do not design desktop first and simply stack everything.

Mobile specifics:

H1 approximately 2.8–3.6rem depending on viewport

artwork positioned below hero CTA

no horizontal overflow

service cards become single-column

contact CTAs stack vertically

decorative geometry simplifies

AnimatedSLine uses reduced amplitude

section padding stays generous

navigation converts cleanly to menu

phone CTA remains reachable

At approximately 320px width all essential content must remain usable without horizontal scrolling.

23. Acceptance criteria
P0 — Must pass before implementation is considered complete

All four routes render correctly:

/

/about

/services

/contact

All authoritative information is correct:

PhysioNOW

full address

7304495664

reachphysionow@gmail.com

www.getphysionow.in

Dr. Avdhoot Shimpi (PT)

Senior Orthopedic Physiotherapist

5+ years

supplied qualification

all six supplied areas of expertise

No unsupported:

clinician

certification

testimonial

rating

treatment outcome

price

opening hour

success rate

guarantee

branch

booking capability

tel:+917304495664 works.

mailto:reachphysionow@gmail.com works.

Directions link uses the supplied clinic address.

No fake enquiry submission flow exists.

No stock/person image is represented as Dr. Shimpi.

AnimatedSLine exists as a reusable configurable component.

AnimatedSLine:

moves both directions

reverses smoothly

never visibly snaps

is clipped correctly

responds to viewport size

respects reduced motion

Site is responsive down to 320px.

Navigation is keyboard accessible.

Visible focus styles exist.

Heading structure is semantic.

Site has no major horizontal overflow or layout shift.

P1 — Required quality standard

Homepage hero reads as a deliberate premium composition, not a component-library default.

All six services have their own designed presentation.

About page feels substantial rather than a duplicated homepage section.

Contact page provides obvious telephone, email, address, and directions actions.

Shared factual information comes from centralized data.

Color tokens and typography are globally defined.

Header active state works.

Mobile navigation supports Escape and keyboard operation.

Reduced-motion preference disables nonessential motion.

Interactive elements have meaningful hover, active, and focus states.

No large animation or UI dependency is included without a clear need.

Page titles and meta descriptions are route-appropriate.

The visual system remains consistent across all routes.

P2 — Polish

Add restrained scroll entrance animations.

Add page-transition polish only if it does not complicate accessibility.

Refine S-line clipping and layering at intermediate breakpoints.

Add subtle current-section effects within /services.

Add polished favicon/brand mark based on the S-flow motif.

Add Open Graph metadata using an abstract branded graphic rather than an unauthorized portrait.

Direct implementation delegation to Luna Medium
Mandatory corrections

None.

The brief is internally consistent.

One implementation interpretation is mandatory:

Do not create a functional-looking enquiry form without a real submission mechanism. Contact actions should use telephone, email, and directions instead.

Likewise, do not use a generic human photograph to represent Dr. Avdhoot Shimpi (PT).

Required initial implementation

Luna Medium:

Proceed with implementation in:

/Users/abhishekshimpi/Desktop/physionow

Use:

React + TypeScript + Vite + Tailwind CSS + React Router + native SVG/CSS animation.

Build the complete approved website in this implementation pass, including:

global brand foundation

responsive header/navigation

mobile navigation

footer

Home page

About page

Areas of Care page

Contact page

404 route

centralized practice data

centralized service data

all working phone/email/directions links

abstract practitioner visual

complete responsive behavior

AnimatedSLine

reduced-motion handling

accessible focus states

keyboard navigation

SEO metadata

branded responsive styling

The homepage must not be treated as the only polished route. /about, /services, and /contact should receive the same production-level design attention.

The visual decisions in this document are authoritative. Routine implementation details, SVG geometry refinements, CSS composition, semantic markup details, and breakpoint adjustments remain within Luna’s implementation discretion so long as they preserve this direction.

Before considering the pass complete, run the project, inspect all routes at desktop and mobile widths, check browser console errors, verify navigation and contact links, verify reduced motion, and resolve obvious accessibility/layout failures.

Optional polish

After the complete required site is stable, Luna may additionally implement:

extremely restrained viewport reveal animations,

a custom favicon based on the PhysioNOW flow mark,

a branded Open Graph image composed from the abstract visual system,

subtle section-to-section S-line motifs,

micro-interactions on service illustrations,

route transition polish,

additional visual refinement at wide desktop sizes.

Optional polish must not delay or replace completion of the four production-quality routes.

Do not extend scope into:

backend development,

CMS,

appointment booking,

authentication,

analytics,

payment,

live-domain deployment,

invented clinic information,

fabricated testimonials,

unsupported treatment content.

Implement the full site now according to this delegation.

This is ready to hand directly to Luna Medium as the design authority; it should not need another creative-design pass before implementation.


## 002 — GPT-5.6 High visual review

The initial direction is approved; preserve roughly 95% of the current design. The reviewer delegated a bounded correction and QA pass: remove public placeholder copy, make decorative artwork marks non-interactive-looking, replace the hero carousel-like index with a static label, abstract the contact location illustration so it cannot be mistaken for a real map, and correct any contrast issues. Then run accessibility, keyboard/focus, zoom/reflow, Chrome/Safari/Firefox, reduced-motion, responsive, Lighthouse/equivalent, console, and link regression checks. Do not redesign, add features, or deploy. Exact review: `docs/reviews/003-gpt-review.md`.

## Final acceptance — 2026-10-25

GPT-5.6 High reviewed the quality-gate report and final screenshots. PhysioNOW v1 design, responsive implementation, accessibility, cross-browser, and performance/SEO quality gates are accepted. No further corrections are required for this scope. Full decision: `docs/reviews/005-final-acceptance.md`.

## UI refinement pass — 2026-10-25

ChatGPT reviewed the updated production screenshots and QA report. The Contact, About, Areas of Care, Home, and CTA consistency changes are accepted. The approved visual identity remains intact, no clear regression was found, and no further correction is required in this scope. Full review: `docs/reviews/008-ui-refinement-acceptance.md`.

## Authenticity and photo integration — 2026-10-25

GPT-5.6 High reviewed the real portrait, updated production screenshots, and QA report. The photo integration, reduced circular motifs, and three service-art treatments are accepted. The red background remains contained within the source photo; no correction is required. Full decision: `docs/reviews/011-authenticity-ui-acceptance.md`.

## Floating contact actions — 2026-10-25

GPT-5.6 High reviewed the implementation and screenshots. The floating Call/WhatsApp controls are accepted: correct contact targets, appropriate sizing and colors, accessible focus/tooltips, safe-area and reduced-motion handling, and no material overlap or hierarchy regression. No correction is required. Full decision: `docs/reviews/014-floating-actions-acceptance.md`.

## Contact heading hierarchy — 2026-10-25

The Contact page keeps `Contact PhysioNOW.` as its H1 and `Choose how you'd like to connect.` as its H2. Reduce the H2 to approximately 44–48px on desktop and 32–36px on mobile, narrow its measure slightly, and reduce the section's top spacing by 15–20%. Exact recommendation: `docs/reviews/015-contact-heading-hierarchy.md`.

## Contact heading hierarchy — acceptance — 2026-10-25

ChatGPT reviewed the updated desktop/mobile screenshots and accepted the visual hierarchy correction. It confirmed the H1/H2 relationship is clear and no further change is needed. Full acceptance: `docs/reviews/016-contact-heading-acceptance.md`.

## Contact page redesign — acceptance — 2026-10-25

ChatGPT approved the redesigned Contact flow and reviewed the desktop and mobile screenshots. Its first review requested that the fixed Call/WhatsApp rail stop covering the mobile action cards. After reserving a mobile-side gutter, the updated card and control bounds no longer overlap at 390px or 320px. ChatGPT confirmed the correction and accepted the redesign. Full record: `docs/reviews/017-contact-page-redesign-acceptance.md`.

## Chibi desktop companion — acceptance — 2026-10-25

ChatGPT researched the likely Shimeji/desktop-companion lineage and recommended a single, restrained desktop cameo. It reviewed an initial screenshot, requested a lower-left content-clearance gate and shorter-screen sizing, then reviewed the regenerated chibi artwork and responsive screenshots. The final 1440×900 gutter placement and 1920×1440 appearance are accepted. The character never multiplies, is absent on mobile and for reduced-motion users, and exits on scroll. Full record: `docs/reviews/018-desktop-companion-plan.md` and `docs/reviews/019-desktop-companion-acceptance.md`.

## Diana desktop companion — acceptance — 2026-10-25

After the user clarified that they meant the RAM-biting girl from Instagram who dances, research identified Diana from *PRAGMATA* as the strongest match. ChatGPT reviewed the design plan, then asked for a larger, higher-contrast data chip after seeing the first rendered screenshot. We updated only the chip and kept the figure size/position. ChatGPT accepted the second 1440×900 screenshot, confirming the chip gag reads, the chibi is recognizable, the placement fits the page, and content/contact actions remain unobstructed. This is unofficial fan-inspired generated artwork, not official Capcom art. Full record: `docs/reviews/020-diana-desktop-companion-acceptance.md`.

## Optional mascot removed — 2026-10-25

At the user's request, removed the desktop mascot from the live site because it was not urgent. Unmounted and deleted its component, removed companion-specific CSS, and removed the unused mascot images. Acceptance notes and screenshots remain as historical records; current status is reflected in `docs/progress.md`.

## User-supplied logo and favicon — acceptance — 2026-10-25

ChatGPT recommended adopting the stacked logo in forest green on the light header and ivory on the dark footer, and recoloring the supplied 32px favicon and 192px app icon forest green while keeping their white backgrounds. It reviewed desktop/mobile header and footer screenshots plus both icons and accepted legibility, fit, contrast, and clarity without corrections. Full record: `docs/reviews/021-brand-assets-acceptance.md`.
