import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const FullScreenSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-blue"></div>
  </div>
)

export default function ProtectedRoute({ requiredRole }) {
  const { user, role, loading } = useAuth()

  if (loading) return <FullScreenSpinner />

  if (!user) {
    return <Navigate to="/" replace />
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to={role === 'admin' ? '/admin' : '/dashboard'} replace />
  }

  return <Outlet />
}
