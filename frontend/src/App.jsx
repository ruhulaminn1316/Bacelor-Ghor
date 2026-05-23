import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppShell from './components/AppShell'
import Dashboard from './pages/Dashboard'
import Modules from './pages/Modules'
import ModuleDetail from './pages/ModuleDetail'
import Members from './pages/Members'
import Meals from './pages/Meals'
import Expenses from './pages/Expenses'
import './App.css'

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/:slug" element={<ModuleDetail />} />
          <Route path="/members" element={<Members />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </AppShell>
    </Router>
  )
}

export default App
