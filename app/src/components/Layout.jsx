import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="p-4">
      <nav className="space-x-4 mb-4">
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  )
}
