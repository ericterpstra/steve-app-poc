# AGENTS Guidelines for steve-app-poc

## Overview
This repository holds a React + Vite single page application located under the `app/` directory. Supabase provides authentication and backend services. Tailwind CSS handles styling.

## Getting Started
1. From the `app` folder run:
   ```bash
   npm install
   npm run dev
   ```
2. Create `app/.env` with Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Lint code with `npm run lint` before committing.

## Project Layout
- `app/src/pages/` – route components such as `LoginPage.jsx`, `UserHome.jsx`, `AdminHome.jsx`.
- `app/src/components/` – shared UI components like `Layout.jsx` and `ProtectedRoute.jsx`.
- `app/src/AuthContext.jsx` – React context for authentication state.
- `app/src/supabaseClient.js` – initializes Supabase client from `.env` variables.
- `app/index.html` – HTML entry point used by Vite.
- `app/tailwind.config.js` & `app/postcss.config.js` – Tailwind setup.

## Architecture Notes
- Routing is configured in `app/src/App.jsx` with `createBrowserRouter`.
- Authentication state persists via `AuthContext` and is checked in `ProtectedRoute`.
- Use functional components and React hooks throughout the app.
- All backend calls should import the Supabase client from `supabaseClient.js`.
- Tailwind utility classes are preferred for styling; extend configuration as needed in `tailwind.config.js`.

## Coding Conventions
- ES module syntax for all JavaScript/JSX files.
- Keep components small and focused; colocate related helper functions nearby.
- Prefer arrow functions for component declarations.
- Ensure code passes ESLint using the provided configuration (`npm run lint`).
- No tests are currently included; if added, place them alongside source files or in a new `tests/` directory.

## Commit Guidelines
- Commit messages should be in the imperative present tense (e.g., "Add login form").
- Group related changes together and keep commits focused.
- Verify the app builds and lints successfully before committing.

## Additional Tips
- Use `ProtectedRoute` to guard any new authenticated pages. Supply `requiredRole` when role checking is needed.
- When adding new routes, update the router configuration in `App.jsx` and ensure navigation links exist in `Layout.jsx`.
- For styling consistency, import global styles via `index.css` and component-specific classes via Tailwind utilities.

These guidelines should help any autonomous coding agent navigate the project, add new features, and maintain consistency with the existing codebase.

