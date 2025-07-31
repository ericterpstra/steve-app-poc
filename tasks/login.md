# Login & Role-Based Redirect Implementation Plan

This document describes the step-by-step work required to deliver a fully-functional login flow that sends users either to a **user dashboard** or an **admin dashboard** depending on their role.  The plan assumes you already have:

* a Supabase project and its URL/anon key
* a basic login form component
* skeleton React pages for `UserDashboard` and `AdminDashboard`

---

## 1. Model & Backend (Supabase)

### 1.1  `profiles` table

| column      | type        | constraints                                                |
|-------------|-------------|-----------------------------------------------------------|
| `id`        | UUID        | **PK**, references `auth.users.id`                        |
| `full_name` | text        |                                                           |
| `role`      | text        | `CHECK (role IN ('user','admin'))` DEFAULT `'user'`       |
| `created_at`| timestamptz | `DEFAULT now()`                                           |


### 1.2  Enable Row Level Security (RLS)

```sql
alter table profiles enable row level security;
```

### 1.3  RLS policies

```sql
create policy "Users read their own profile"
    on profiles for select
    using ( auth.uid() = id );

create policy "Users update their own profile"
    on profiles for update
    using ( auth.uid() = id );
```

### 1.4  Stamp role into the JWT

```sql
create or replace function public.set_claim_role()
  returns trigger
  language plpgsql as $$
begin
  update auth.users
  set    raw_app_meta_data = jsonb_set(
           coalesce(raw_app_meta_data, '{}'),
           '{role}',
           to_jsonb(new.role),
           true)
  where  id = new.id;
  return new;
end $$;

create trigger on_profile_change
  after insert or update of role on profiles
  for each row execute procedure set_claim_role();
```

### 1.5  Seed an initial admin (one-time)

```sql
insert into auth.users (email, password)
values ('admin@example.com', 'StrongPass123');

insert into profiles (id, full_name, role)
select id, 'Admin', 'admin'
from auth.users where email = 'admin@example.com';
```

---

## 2. Front-End State Management

1. Re-use `supabaseClient.js` for the SDK instance.
2. Create **AuthContext** (if not yet present) that exposes:
   * `session`, `user`, `role`
   * `signIn(email, password)` / `signOut()` helpers
   * `isLoading` flag
3. Subscribe in the provider:

   ```js
   supabase.auth.onAuthStateChange((_event, session) => {
     // update local state
   });
   ```

---

## 3. Routing & Protected Routes

```jsx
// App.jsx (React Router v6)

<Route path="/"            element={<LoginPage />} />
<Route path="/dashboard"   element={<ProtectedRoute requiredRole="user"><UserDashboard /></ProtectedRoute>} />
<Route path="/admin"       element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>} />
```

`ProtectedRoute` core logic:

```jsx
const ProtectedRoute = ({ requiredRole, children }) => {
  const { isLoading, user, role } = useAuth();

  if (isLoading)     return <FullScreenSpinner />;
  if (!user)         return <Navigate to="/" replace />;
  if (requiredRole && role !== requiredRole)
                     return <Navigate to={role === 'admin' ? '/admin' : '/dashboard'} replace />;

  return children;
};
```

---

## 4. Login Form Behaviour

```js
// inside LoginPage.jsx

const handleSubmit = async (e) => {
  e.preventDefault();

  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setError(error.message);
    return;
  }

  const role = data.session.user.app_metadata.role;
  navigate(role === 'admin' ? '/admin' : '/dashboard', { replace: true });
};
```

The same redirection logic can be reused for OAuth or magic-link flows by listening to `onAuthStateChange`.

---

## 5. Optional Hardening

* Protect sensitive queries with Supabase Edge Functions.
* Configure storage bucket policies if admins manage files.
* Rate-limit login attempts at your CDN/WAF layer.

---

## 6. Task Breakdown & Timeline

| Day | Tasks |
|-----|-------|
| **1** | • Create `profiles` table, policies, trigger.<br>• Seed admin.<br>• Verify JWT includes `"role"`. |
| **2** | • Build `AuthContext` & provider.<br>• Implement `ProtectedRoute`.<br>• Wire login redirection. |
| **3** | • Style dashboards & add sign-out flow.<br>• Manual QA for role segregation & RLS.<br>• Deploy. |

---

## 7. Validation Checklist

☐ New signup gets `role = 'user'` and lands on `/dashboard`.
☐ Admin lands on `/admin`.
☐ Manual navigation to `/admin` by non-admin redirects away.
☐ JWT shows correct `role` in `app_metadata`.
☐ RLS prevents cross-user reads/updates.
☐ Front-end passes `npm run lint` & `npm run build`.

---

### Outcome

Following this plan yields:

* A single source of truth for user roles (`profiles.role`).
* Zero extra database calls thanks to roles embedded in the JWT.
* Client-side and server-side enforcement of permissions.

