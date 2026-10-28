# PhysioNOW — Initial Design Delegation

**To:** GPT-5.6 High in regular ChatGPT  
**Role:** Principal creative director, product designer, and frontend architect  
**From:** Luna Medium (Codex), implementation engineer  
**Workspace:** `/Users/abhishekshimpi/Desktop/physionow`

## Workspace assessment

The destination workspace is currently empty: there are no application files, package manifest, framework, or existing design system to preserve. Unless you direct otherwise, the implementation can start with React, TypeScript, Vite, Tailwind CSS, native SVG, and CSS animations. Keep dependencies lean; use React Router only if your approved information architecture needs distinct routes.

No implementation has started. The design and architecture choices below are yours to make before the major frontend work begins.

## Assignment

Define an original, premium, responsive website for **PhysioNOW**, a physiotherapy and rehabilitation practice in Powai, Mumbai. Provide an executable design and frontend delegation that Luna can implement directly. The goal is a complete, polished website, not a prototype or a general design discussion.

The site should feel elegant, trustworthy, professional, modern, human-centered, calm, and memorable. It should explain the practice and its care areas, introduce its physiotherapist accurately, and make contacting or locating the clinic straightforward.

## Authoritative business information

- **Business:** PhysioNOW
- **Website identity:** www.getphysionow.in
- **Category:** Physiotherapy and rehabilitation
- **Address:** Saki Vihar Rd, Saki Vihar, Ansa Industrial Estate, Chandivali, Powai, Mumbai, Maharashtra 400072
- **Telephone:** 7304495664; use `tel:+917304495664`
- **Email:** reachphysionow@gmail.com; use `mailto:reachphysionow@gmail.com`
- The domain is the intended website identity. Do not deploy to or modify the live domain.

## Authoritative physiotherapist profile

- **Name:** Dr. Avdhoot Shimpi (PT)
- **Designation:** Senior Orthopedic Physiotherapist
- **Overview:** Dr. Avdhoot Shimpi is a Senior Orthopedic Physiotherapist with over 5 years of clinical experience specializing in orthopedic rehabilitation, manual therapy, and post-surgical recovery. Known for personalized care plans and patient-centered communication, he helps individuals regain mobility, alleviate chronic pain, and recover safely following surgery or athletic injury.
- **Education:** Bachelor of Physiotherapy (BPTh - Orthopedics), KEM Hospital & Seth G.S. Medical College, Mumbai.
- **Areas of expertise:**
  1. **Post-Operative Rehabilitation** — targeted recovery protocols following surgery.
  2. **Joint Replacement Recovery** — specialized rehabilitation for knee, hip, and shoulder arthroplasty.
  3. **Spine & Musculoskeletal Care** — evidence-based management for acute and chronic back pain, neck pain, and sciatica.
  4. **Sports Injury Rehabilitation** — restoring functional strength and mobility for athletes and active individuals.
  5. **Arthritis & Joint Care** — long-term pain management and joint mobility restoration.
  6. **Manual Therapy Techniques** — hands-on joint and soft tissue mobilization.

Preserve the supplied qualification and experience. Do not invent other clinicians, degrees, registrations, certifications, branches, testimonials, prices, operating hours, success rates, guarantees, or unsupported medical claims. Do not portray Dr. Shimpi as a physician or surgeon; retain “(PT)” when displaying his professional name/title. Do not use a generic portrait as if it were him. If a portrait is needed, specify an abstract visual or clearly designed placeholder pending an authorized photo.

## Required scope and functionality

The information architecture is yours to decide. Cover these content areas, using pages or composed sections as appropriate:

- Homepage with a strong hero, clear value proposition, prominent contact action, expertise overview, doctor introduction, factual trust-building content, and contact/location access.
- Doctor profile with the supplied overview, experience, qualification, approach, and expertise.
- Services/areas of care presenting all six supplied categories, with explanations grounded in the facts above.
- Contact presentation with the exact address, working telephone and email links, an appropriate map/directions link, and accessible enquiry options.

Do not imply that a booking system or enquiry form works unless a real, authorized submission mechanism exists. Do not invent a backend or fake submission-success state.

## Mandatory signature animation

Include a reusable `AnimatedSLine` component (or a project-conventional equivalent): a custom SVG S-shaped flowing line that travels continuously left-to-right and then right-to-left, reversing smoothly without a visible snap. It should feel like a refined organic medical waveform or fluid ribbon rather than a loader. It must adapt to desktop and mobile, and respect reduced-motion preferences. Specify its placement, path character, color treatment, stroke, duration, travel distance, easing/reversal approach, clipping, and reduced-motion behavior concretely enough to implement. Keep the component configurable for dimensions, stroke colors/width, duration, movement amplitude, and enabled state.

## Please make concrete decisions

Return one implementation-ready delegation that specifies:

1. Site map and routing approach.
2. Page-by-page section order and composition.
3. Brand concept and visual direction.
4. Color palette as named tokens with hex values and intended use.
5. Typography choices, hierarchy, and practical fallbacks.
6. Layout/grid, spacing, width, and responsive behavior.
7. Hero composition, including imagery or an abstract alternative.
8. Doctor profile and service/area-of-care presentation.
9. Contact design and exact CTA behavior.
10. `AnimatedSLine` visual and motion specifications, including mobile and reduced-motion behavior.
11. Supporting motion and interaction rules, including focus, hover, and keyboard behavior.
12. Accessibility, SEO, performance, and implementation constraints.
13. A prioritized set of acceptance criteria that Luna can verify against the rendered site.

Be specific enough that Luna does not need to make major creative or architectural decisions independently. Routine implementation details may remain with Luna. Avoid adding scope that depends on facts, images, services, or integrations not supplied here.

## Output format

Start with a concise creative direction, then provide the decisions above as clearly labeled sections. End with a direct implementation delegation addressed to Luna Medium, separating **mandatory corrections** (none for this initial assignment unless you identify an issue in the brief), **required initial implementation**, and **optional polish**. The initial implementation should cover the complete approved site, not merely the hero or a design system.

