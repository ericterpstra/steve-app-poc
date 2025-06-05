import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function ProtectedRoute({ requiredRole }) {
  const { user, loading } = useAuth()

  if (loading) return null

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
