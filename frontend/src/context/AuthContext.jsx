import React, { createContext, useContext, useState } from 'react'
import { authStorage } from '../services/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('bg-user')
    return stored ? JSON.parse(stored) : null
  })

  const login = (userData, tokens = null) => {
    setUser(userData)
    localStorage.setItem('bg-user', JSON.stringify(userData))
    if (tokens) {
      authStorage.setTokens(tokens)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('bg-user')
    authStorage.clearTokens()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
