import React from 'react'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FloatingActionButton() {
  return (
    <motion.button
      type="button"
      aria-label="Quick create"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_16px_35px_rgba(37,99,235,0.36)] lg:bottom-8 lg:right-8"
    >
      <Plus className="h-6 w-6" />
    </motion.button>
  )
}
