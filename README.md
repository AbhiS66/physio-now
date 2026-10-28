# PhysioNOW

Responsive physiotherapy and rehabilitation website for PhysioNOW in Powai, Mumbai.

## Local development

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Routes

- `/` — Home
- `/about` — Dr. Avdhoot Shimpi (PT)
- `/services` — Areas of Care
- `/contact` — Contact and location

Business and practitioner facts are centralized in `src/data/practice.ts`; the six care areas are in `src/data/services.ts`. The contact actions use telephone, email, and Google Maps directions links. The site does not include a booking or enquiry backend.
