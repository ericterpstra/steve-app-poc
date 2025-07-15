# Copilot Instructions for Steve Adore App Skeleton

## Project Overview
- **React + Vite**: The app is a React SPA bootstrapped with Vite for fast development and hot module reloading.
- **Routing**: Uses React Router v7. Route components are in `app/src/pages`. Shared UI and logic are in `app/src/components`.
- **Styling**: Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`. Styles are imported in `App.css` and `index.css`.
- **Authentication**: Supabase is used for authentication. The client is initialized in `app/src/supabaseClient.js`. Auth context and protected routes are managed in `AuthContext.jsx` and `ProtectedRoute.jsx`.

## Key Files & Structure
- `app/src/pages/`: Route-level components (e.g., `LoginPage.jsx`, `UserHome.jsx`, `AdminHome.jsx`).
- `app/src/components/`: Shared components (e.g., `Layout.jsx`, `ProtectedRoute.jsx`).
- `app/src/AuthContext.jsx`: Provides authentication state/context.
- `app/src/supabaseClient.js`: Supabase client setup using environment variables.
- `app/index.html`: Main HTML entry point.
- `app/vite.config.js`: Vite configuration.

## Developer Workflows
- **Install & Run**: From the `app` directory, use:
  ```bash
  npm install
  npm run dev
  ```
- **Environment Variables**: Set Supabase credentials in `app/.env`:
  ```
  VITE_SUPABASE_URL=your-url
  VITE_SUPABASE_ANON_KEY=your-anon-key
  ```
- **Debugging Auth**: Check `AuthContext.jsx` and `ProtectedRoute.jsx` for login flow and route protection logic.
- **Adding Pages**: Place new route components in `app/src/pages` and update routing in `App.jsx`.
- **Styling**: Use Tailwind utility classes. Update config in `tailwind.config.js` as needed.

## Patterns & Conventions
- **Component Organization**: Route components in `pages`, shared components in `components`.
- **Context Usage**: Auth state is provided via React Context (`AuthContext.jsx`).
- **Protected Routes**: Use `ProtectedRoute.jsx` to guard authenticated pages.
- **Supabase Integration**: All Supabase calls should use the client from `supabaseClient.js`.
- **No Custom Test Setup**: No test framework or scripts are present; add tests in future if needed.

## External Integrations
- **Supabase**: Used for authentication and backend services. Credentials are loaded from `.env`.
- **Tailwind CSS**: For utility-first styling.

## Example: Adding a Protected Page
1. Create a new component in `app/src/pages` (e.g., `Dashboard.jsx`).
2. Add a route in `App.jsx` wrapped with `ProtectedRoute`.
3. Use Supabase client for any backend calls.

---

For questions about unclear patterns or missing documentation, ask the user for clarification or examples from their workflow.
