import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Layout() {
  const { user } = useAuth()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-primary-blue shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                to="/" 
                className="text-primary-yellow text-3xl font-bebas hover:text-yellow-300"
              >
                STEVE
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-secondary-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu')
                  menu.classList.toggle('hidden')
                }}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Desktop and mobile menu */}
          <div className="hidden md:flex items-center space-x-4" id="mobile-menu">
            <Link 
              to="/" 
              className={`my-1 text-sm font-semibold md:mx-4 md:my-0 ${
                isActive('/') ? 'text-primary-yellow' : 'text-secondary-white hover:text-primary-yellow'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`my-1 text-sm font-semibold md:mx-4 md:my-0 ${
                isActive('/about') ? 'text-primary-yellow' : 'text-secondary-white hover:text-primary-yellow'
              }`}
            >
              About
            </Link>
            <Link 
              to="/pricing" 
              className={`my-1 text-sm font-semibold md:mx-4 md:my-0 ${
                isActive('/pricing') ? 'text-primary-yellow' : 'text-secondary-white hover:text-primary-yellow'
              }`}
            >
              Pricing
            </Link>
            {user ? (
              <Link 
                to="/user" 
                className={`my-1 text-sm font-semibold md:mx-4 md:my-0 ${
                  isActive('/user') || isActive('/admin') ? 'text-primary-yellow' : 'text-secondary-white hover:text-primary-yellow'
                }`}
              >
                Dashboard
              </Link>
            ) : (
              <Link 
                to="/login" 
                className={`my-1 text-sm font-semibold md:mx-4 md:my-0 ${
                  isActive('/login') ? 'text-primary-yellow' : 'text-secondary-white hover:text-primary-yellow'
                }`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary-blue text-secondary-white py-10 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="font-bebas text-primary-yellow text-2xl mb-2">STEVE</p>
          <p className="text-sm opacity-80 mb-4 max-w-md mx-auto">
            Making cargo tracking simple, reliable, and maybe even a little fun.
          </p>
          <p className="text-xs opacity-70">
            &copy; {new Date().getFullYear()} Steve Adore App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
