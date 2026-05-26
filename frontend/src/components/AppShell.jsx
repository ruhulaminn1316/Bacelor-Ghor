import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom'

export default function AppShell({ children }) {
  const { pathname } = useLocation()
  const hideSidebar = pathname === '/login' || pathname === '/register'

  return (
    <div className="min-h-screen flex bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)]">
      {!hideSidebar && <Sidebar />}
      <div className={`flex-1 flex flex-col ${hideSidebar ? 'min-h-screen' : ''}`}>
        <Header />
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
