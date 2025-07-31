import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { PrimaryButton } from '../components/Button'

export default function UserHome() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                className="h-8 w-auto mr-3"
                src="/seagull-steve.png"
                alt="Steve Logo"
              />
              <h1 className="text-2xl font-bebas text-primary-blue">User Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.email}</span>
              <PrimaryButton onClick={handleSignOut} className="text-sm">
                Sign Out
              </PrimaryButton>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Welcome to your dashboard!</h2>
          <p className="text-gray-600">
            This is your user dashboard where you can track your cargo and manage your shipments.
          </p>
        </div>
      </main>
    </div>
  )
}
