import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { PrimaryButton } from '../components/Button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (isSignUp) {
        await signUp(email, password)
        // After signup, user might need to confirm email
        setError('Check your email to confirm your account!')
      } else {
        await signIn(email, password)
        navigate('/user')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-200px)] bg-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img
            className="mx-auto h-32 w-auto"
            src="/seagull-steve.png"
            alt="Steve Logo"
          />
          <h2 className="mt-6 text-5xl font-bebas text-primary-blue">
            {isSignUp ? 'Join Steve' : 'Welcome Back'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isSignUp ? 'Start tracking your cargo today' : 'Sign in to your account'}
          </p>
        </div>
        
        <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          {error && (
            <div className={`rounded-md p-4 ${error.includes('Check your email') ? 'bg-accent-green bg-opacity-10 text-accent-green' : 'bg-accent-red bg-opacity-10 text-accent-red'}`}>
              <p className="text-sm">{error}</p>
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-yellow focus:border-transparent outline-none transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-yellow focus:border-transparent outline-none transition-shadow"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError(null)
                }}
                className="font-medium text-primary-blue hover:text-primary-yellow"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
            {!isSignUp && (
              <div className="text-sm">
                <a href="#" className="font-medium text-primary-blue hover:text-primary-yellow">
                  Forgot password?
                </a>
              </div>
            )}
          </div>

          <div>
            <PrimaryButton
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
            </PrimaryButton>
          </div>
        </form>

        <div className="text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-primary-blue">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
