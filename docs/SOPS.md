# Standard Operating Procedures (SOPs) for STEVE App

This document consolidates the core operational workflows, development conventions,
and business processes for the STEVE ("Dude Where's My Cargo") application.

---

## 1. Environment Setup

1. In the project root, create a `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
2. Install dependencies and launch the dev server:
   ```bash
   cd app
   npm install
   npm run dev
   ```

---

## 2. Project Structure & Key Files

- **src/pages/** — Route-level components (e.g., `LoginPage.jsx`, `UserHome.jsx`, `AdminHome.jsx`).
- **src/components/** — Shared UI components (e.g., `Layout.jsx`, `ProtectedRoute.jsx`).
- **src/AuthContext.jsx** — Authentication context provider.
- **src/supabaseClient.js** — Supabase client initialization.
- **src/App.jsx** — Router setup via `createBrowserRouter`.
- **tailwind.config.js** & **postcss.config.js** — Tailwind CSS configuration.
- **index.html** — Vite HTML entry point.

---

## 3. Development Workflow

1. **Linting**: Run `npm run lint` before committing any changes.
2. **Adding Pages**:
   - Create new components under `src/pages/`.
   - Register routes in `src/App.jsx`.
   - Protect routes with `ProtectedRoute` when authentication is required.
3. **Components & Styling**:
   - Keep components small and focused; colocate related helpers.
   - Use ES module syntax and arrow functions.
   - Apply Tailwind CSS utility classes; update `tailwind.config.js` for customizations.

---

## 4. Commit & Release Guidelines

- Use imperative present-tense commit messages (e.g., "Add login form").
- Group related changes in a single commit; keep commits focused.
- Ensure the app builds and lints cleanly before merging.
- No formal test suite is in place; when introducing tests, locate them under `tests/` or alongside implementation files.

---

## 5. Data Acquisition SOP (Business)

Data powers the consumer value of STEVE. Follow these phases:

### Phase 1: Manual & User-Contributed
- Collect container numbers and quote PDFs from beta users.
- Provide an email forwarding system (e.g., `plans@steve.com`) to gather pricing benchmarks.
- Send post-move surveys to capture real outcomes (timelines, fees, satisfaction).

### Phase 2: API & Partnership-Driven
- Integrate with 3rd-party container-tracking APIs (Vizion, JSONCargo, etc.).
- Establish partnerships with small/mid-size movers for anonymized quote data.
- Leverage public relocation data via scraping or FOIA requests.

### Privacy & Ethics
- Never resell personal data.
- Only share aggregated insights.
- Obtain explicit consent at every step to maintain trust.

---

## 6. Go-to-Market SOP (Business)

### Phase 1: Validation & Beta
- Engage 5–10 beta users with manual tracking and feedback loops.
- Focus outreach on Reddit, Facebook groups, and expat forums.

### Phase 2: Organic Content & SEO
- Publish long-form guides, glossaries, and checklists targeting moving pain points.
- Build backlinks via social, forums, and expat blogs.

### Phase 3: Partnerships & Embeds
- Explore co-branded dashboards and white-label solutions for relocation services.
- Offer affiliate or embedded widgets to partners.

---

## 7. Future Revenue Streams (Business)

- **Consumer**: One-time fees for premium tracking, alerts, or storage reminders.
- **B2B**: Subscription-based white-labeled dashboards and lead-gen services.
- **Insights**: Sale of aggregated trend data to port operators, insurers, and logistics stakeholders.

---

## 8. Founders’ Mission & Continuous Learning

STEVE is both a product and a learning vehicle:

- Test assumptions and refine processes with real users.
- Leverage AI and rapid iteration to ship features and learn quickly.
- Even if the product does not scale, use the experience to improve for the next venture.
