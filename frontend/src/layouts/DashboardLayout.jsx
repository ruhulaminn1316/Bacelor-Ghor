import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from '../components/navigation/Sidebar'
import MobileSidebar from '../components/navigation/MobileSidebar'
import Navbar from '../components/navigation/Navbar'
import FloatingChatWidget from '../components/navigation/FloatingChatWidget'
import { mainNavItems } from '../routes/navigation'

function getTitle(pathname) {
  const item = mainNavItems.find((entry) => entry.to === pathname)
  if (item) return item.label
  if (pathname === '/profile') return 'User Profile'
  if (pathname === '/dashboard') return 'Dashboard'
  if (pathname === '/') return 'Dashboard'
  return 'BachelorGhor'
}

export default function DashboardLayout() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <MobileSidebar />

      <div className="min-w-0 flex-1">
        <Navbar title={getTitle(pathname)} subtitle="Premium mess management workspace" />
        <main className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <AnimatePresence mode="wait">
            <motion.div key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <FloatingChatWidget />
    </div>
  )
}
