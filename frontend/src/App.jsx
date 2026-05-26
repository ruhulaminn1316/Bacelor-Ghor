import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppShell from './components/AppShell'
import Dashboard from './pages/Dashboard'
import Modules from './pages/Modules'
import ModuleDetail from './pages/ModuleDetail'
import Members from './pages/Members'
import Meals from './pages/Meals'
import Expenses from './pages/Expenses'
import Security from './pages/Security'
import Bazar from './pages/Bazar'
import Rent from './pages/Rent'
import Utilities from './pages/Utilities'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppShell>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/modules" element={<ProtectedRoute><Modules /></ProtectedRoute>} />
              <Route path="/modules/:slug" element={<ProtectedRoute><ModuleDetail /></ProtectedRoute>} />
              <Route path="/security" element={<ProtectedRoute><Security /></ProtectedRoute>} />
              <Route path="/members" element={<ProtectedRoute><Members /></ProtectedRoute>} />
              <Route path="/meals" element={<ProtectedRoute><Meals /></ProtectedRoute>} />
              <Route path="/bazar" element={<ProtectedRoute><Bazar /></ProtectedRoute>} />
              <Route path="/expenses" element={<ProtectedRoute><Expenses /></ProtectedRoute>} />
              <Route path="/rent" element={<ProtectedRoute><Rent /></ProtectedRoute>} />
              <Route path="/utilities" element={<ProtectedRoute><Utilities /></ProtectedRoute>} />
            </Routes>
          </AppShell>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
