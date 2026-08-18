## Skillbound Academy — Bootstrap 5 UI Exploration

A 3-page responsive site built for the internship's Bootstrap 5 exploration task. The brief was to explore Bootstrap 5's example patterns and remix them into original pages rather than copy full templates, so I invented a fictional cohort-based online school ("Skillbound Academy") as the subject to design around, instead of using placeholder lorem-ipsum content.

**Live site:** _add your deployed URL here (GitHub Pages / Netlify)_
**Repo:** _add your GitHub repo URL here_

---

## What's in this repo

```
index.html      → Home: navbar, hero with a custom SVG "learning path" diagram, track cards, features, testimonial carousel, CTA, footer
about.html      → About: story, module timeline, stats band, mentor cards
contact.html    → Contact: validated form, FAQ accordion, contact info panel
css/style.css   → Design tokens (colors, type, spacing) layered on top of Bootstrap 5
js/script.js    → Client-side form validation + simulated submit (no backend on this static build)
```

## How I approached it, step by step

1. **Read the brief and picked a subject first.** Rather than building generic placeholder pages, I decided the site needed to be *about* something specific, so I made up an online-education brand (Skillbound Academy) with a real structure — an 8-week, 4-module cohort — and let that structure drive the actual layout decisions (e.g., the timeline on the About page and the "learning path" diagram in the hero mirror the real module sequence).
2. **Went through Bootstrap 5's docs and example pages** to see how navbars, hero sections, card grids, carousels, accordions, and forms are typically structured, then rebuilt those patterns from scratch with my own markup and content rather than copying an example page wholesale.
3. **Set up a small design-token layer** in `css/style.css` (custom colors, a serif/sans/mono type pairing, button and card styles) on top of the Bootstrap CDN build, so the site doesn't look like default Bootstrap.
4. **Built the three pages in order** — Home first (navbar, hero, cards, carousel, footer), then About (timeline, stats, mentor cards), then Contact (form with Bootstrap's built-in validation states, FAQ accordion).
5. **Checked responsiveness** at desktop, tablet, and mobile widths using Bootstrap's grid and utility classes, and made sure the mobile nav collapses correctly.
6. **Added a lightweight validation script** (`js/script.js`) so the contact form gives real feedback, since there's no backend to submit to on a static deployment.

## Tools used

- **Bootstrap 5.3** (CDN) — grid, navbar, cards, carousel, accordion, form components, and utility classes.
- **Bootstrap Icons** (CDN) for the small icon set on the About/Home pages.
- **Google Fonts** (Fraunces, Inter, IBM Plex Mono) for typography.
- **AI assistance (Claude)** was used to help draft and structure the HTML/CSS/JS and this reflection. I reviewed and adjusted the output rather than submitting it unread — per the task's transparency guideline, I'm stating this plainly rather than presenting it as fully unassisted work.
- Bootstrap's own documentation and example gallery for reference on component markup.

## Challenges

- **Avoiding the "default Bootstrap look."** The biggest early risk was that reusing Bootstrap components straight from the docs would make every page look like every other Bootstrap tutorial site. Solving this meant building a token system (specific hex colors, a deliberate type pairing, custom button/card styling) rather than just adding Bootstrap's default `.btn-primary` and `.card` everywhere.
- **Making the hero interesting without a stock photo.** Instead of a generic hero image, I built a small inline SVG diagram of the four-module learning path — this doubles as the site's one recognizable "signature" visual and reappears conceptually as the timeline on the About page.
- **Form feedback with no backend.** Since this is a static deploy with no server, I used Bootstrap's client-side validation classes plus a small script that shows a success message on a valid submit, so the flow is demonstrable even without a real endpoint.

## Time taken

"Roughly 4 hours — ~1h researching Bootstrap examples, ~1.5h building the three pages, ~1h on responsiveness/polish, ~0.5h on this report."_

## Learnings

- Bootstrap's utility classes (spacing, flex, grid) cover most layout needs, but a page still needs its own type scale and color system to avoid looking templated.
- Designing around a real (even if fictional) subject with real structure — modules, a timeline, a specific process — made component choices (like using numbered steps) feel justified instead of decorative.
- Keeping one repeated visual idea (the learning-path motif) across the hero and the About timeline gave the site a sense of identity without needing extra design work.
