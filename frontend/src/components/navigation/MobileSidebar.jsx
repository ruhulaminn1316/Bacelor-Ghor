import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Sidebar from './Sidebar'
import { useUi } from '../../context/UiContext'

export default function MobileSidebar() {
  const { sidebarOpen, closeSidebar } = useUi()

  return (
    <AnimatePresence>
      {sidebarOpen ? (
        <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button aria-label="Close sidebar" onClick={closeSidebar} className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm" />
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative h-full w-[300px] max-w-[85vw]"
          >
            <button onClick={closeSidebar} className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <X className="h-5 w-5" />
            </button>
            <Sidebar />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
