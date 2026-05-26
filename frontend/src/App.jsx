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
              <Route path="/" element={<Dashboard />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/modules/:slug" element={<ModuleDetail />} />
              <Route path="/security" element={<Security />} />
              <Route path="/members" element={<Members />} />
              <Route path="/meals" element={<Meals />} />
              <Route path="/bazar" element={<Bazar />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/utilities" element={<Utilities />} />
            </Routes>
          </AppShell>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
