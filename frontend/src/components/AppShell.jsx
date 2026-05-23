import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen flex bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
