import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { supabase } from './supabaseClient'

// A lightweight React context that exposes the Supabase authentication state
// along with convenience helpers that are used throughout the application.

const AuthContext = createContext({
  user: null,
  role: null,
  loading: true,
  // eslint-disable-next-line no-unused-vars
  signIn: async (_email, _password) => {},
  // eslint-disable-next-line no-unused-vars
  signUp: async (_email, _password) => {},
  signOut: async () => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch the current session when the provider is first mounted
  useEffect(() => {
    let isMounted = true

    const getInitialSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (!isMounted) return

        const currentUser = session?.user ?? null
        setUser(currentUser)
        setRole(currentUser?.app_metadata?.role ?? null)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth state changes so every consumer stays in sync
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      setRole(currentUser?.app_metadata?.role ?? null)
      setLoading(false)
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  // Authentication helpers --------------------------------------------------

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    return { data }
  }

  const signUp = async (email, password) => {
    // By default new users are created with the "user" role.
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role: 'user' },
      },
    })

    if (error) throw error

    return { data }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  // Memo-ize the context value to avoid unnecessary re-renders.
  const value = useMemo(
    () => ({ user, role, loading, signIn, signUp, signOut }),
    [user, role, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

