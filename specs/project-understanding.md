# Nirog Yoga Project Understanding

## 1. Project Summary
- This is a Next.js App Router website for Nirog Yoga (`app/` based routing, React 19, Next 16).
- Primary purpose: present yoga and healing programs, instructors, knowledge content, testimonials, and enrollment or payment flows.
- The codebase is mostly content-driven pages styled with CSS Modules and shared UI components.

## 2. Tech Stack and Runtime
- Framework: `next@16.1.1`
- UI: `react@19.2.1`, `react-dom@19.2.1`
- Analytics: `@vercel/analytics`
- Linting: `eslint@^9`, `eslint-config-next`
- Testing: `jest@^30.2.0`, `node-fetch@^2.7.0`
- Node requirement: `>=20.20.0` (`engineStrict: true`)

Key scripts from `package.json`:
- `npm run dev`: local dev server
- `npm run build`: production build
- `npm start`: serve production build
- `npm run lint`: lint checks
- `npm test`: run test suite

## 3. App Structure
- `app/layout.js`
  - Global metadata for `https://nirogyoga.in` (SEO, OpenGraph, Twitter, icons)
  - Loads Google fonts (`Inter`, `Outfit`) and global CSS
  - Wraps all pages with `AnnouncementBanner` and `@vercel/analytics`
- `app/page.js` (home)
  - Composes the home page from reusable components:
  - `Navbar`
  - `Hero`
  - `ProgramsSection`
  - `InstructorProfile`
  - `TherapyList`
  - `Footer`
  - `Chatbot`

## 4. Route Map
- Core pages:
- `/`, `/about`, `/contact`, `/instructors`, `/programs-events`, `/testimonials`, `/resources`, `/saatvic-literature`
- Transactional pages:
- `/enrollment-payment`, `/payment`
- Instructor detail pages:
- `/instructors/dr-kunal`, `/instructors/parvathi`
- Knowledge base:
- `/knowledge-base` with many subpages (introduction, pranayama, asanas, safety, curriculum, and more)
- Yoga healing:
- `/yoga-healing` with condition-specific pages (`/ptsd`, `/pcos`, `/diabetes`, `/insomnia`, and more)

This site is broad and content-heavy, and most functionality is static or semi-static informational content.

## 5. Component Behavior Notes
- `components/Navbar.js`
  - Client component with hamburger menu and testimonials dropdown state
  - Includes primary navigation and CTA to `/enrollment-payment`
- `components/Footer.js`
  - Contact details, location map iframe, and quick links
  - External links use secure attributes where needed
- `components/ProgramsSection.js`
  - Program cards for enrollment and payment navigation, with anchor deep links
- `components/TherapyList.js`
  - Mix of internal and external condition links
  - External links open in a new tab with secure attributes
- `components/Chatbot.js`
  - Frontend-only simulated assistant UI (no backend API integration yet)

## 6. Testing Strategy
- Tests are in `tests/` and run with Jest.
- Main focus areas:
- Link integrity and route accessibility
- External link and security attribute checks
- SEO, accessibility, mobile, and security smoke checks
- Important detail:
- Tests fetch rendered HTML from a running site URL (`SITE_URL` via `tests/siteHealth.js`)
- These are integration-style checks, so the app must be reachable when tests run

## 7. Assets and Content
- `public/` contains many images and SVG assets for:
- Asana illustrations
- Instructor photos
- Knowledge-base visuals
- Brand assets
- Content is currently embedded directly in page and component JS files.
- There is no separate CMS or content API in this repository.

## 8. Current Documentation Status
- `README.md` is still close to the default Next.js template with added cSpell notes.
- It does not fully document this project's route architecture, content areas, or test workflow.

## 9. Practical Maintenance Notes
- Keep navbar and footer link consistency high.
- Many tests explicitly enforce route and link presence.
- Anchor IDs (`#programs`, `#events`, and similar) act like contracts because tests assert them.
- If route names change, update:
- Component links
- Footer and navbar links
- Test route lists and expected link patterns
- Metadata and canonical references where relevant
