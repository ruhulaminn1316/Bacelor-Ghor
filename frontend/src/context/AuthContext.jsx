import React, { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const storedUser = () => {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem('bg-user')
  return raw ? JSON.parse(raw) : null
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storedUser)

  const login = (credentials = {}) => {
    const nextUser = {
      id: 'bg-admin',
      name: credentials.name || 'Rakib Hasan',
      email: credentials.email || 'admin@bachelorghor.app',
      role: 'Admin',
      avatar: credentials.avatar || '',
    }

    setUser(nextUser)
    localStorage.setItem('bg-user', JSON.stringify(nextUser))
  }

  const register = (payload = {}) => {
    login({
      name: `${payload.firstName || 'New'} ${payload.lastName || 'Member'}`.trim(),
      email: payload.email || 'member@bachelorghor.app',
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('bg-user')
  }

  const value = useMemo(
    () => ({ user, login, register, logout, isAuthenticated: Boolean(user) }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
