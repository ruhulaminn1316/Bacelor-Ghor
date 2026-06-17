import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../common/Button'

export default function BaseModal({ open, title, description, children, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 px-4 py-6 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.18 }}
            className="surface w-full max-w-2xl rounded-[1.9rem] p-6 shadow-soft-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
                {description ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p> : null}
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>Close</Button>
            </div>
            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}