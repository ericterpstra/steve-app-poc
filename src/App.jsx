import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import UserHome from './pages/UserHome'
import AdminHome from './pages/AdminHome'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './AuthContext'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <LoginPage /> },
      { path: '/home', element: <LandingPage /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/about', element: <AboutPage /> },
      {
        element: <ProtectedRoute requiredRole="user" />,
        children: [{ path: '/dashboard', element: <UserHome /> }],
      },
      {
        element: <ProtectedRoute requiredRole="admin" />,
        children: [{ path: '/admin', element: <AdminHome /> }],
      },
    ],
  },
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
