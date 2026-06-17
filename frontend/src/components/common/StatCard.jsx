import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const tones = {
  blue: 'from-blue-500/15 to-cyan-500/10 text-blue-600 dark:text-blue-300',
  emerald: 'from-emerald-500/15 to-teal-500/10 text-emerald-600 dark:text-emerald-300',
  amber: 'from-amber-500/15 to-orange-500/10 text-amber-600 dark:text-amber-300',
  rose: 'from-rose-500/15 to-pink-500/10 text-rose-600 dark:text-rose-300',
}

export default function StatCard({ label, value, delta, tone = 'blue', icon: Icon }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="surface rounded-[1.5rem] p-5 shadow-soft-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{value}</h3>
        </div>
        <div className={cn('rounded-2xl bg-gradient-to-br p-3', tones[tone])}>
          {Icon ? <Icon className="h-5 w-5" /> : null}
        </div>
      </div>
      <div className="mt-4 inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-300">
        {delta}
      </div>
    </motion.div>
  )
}