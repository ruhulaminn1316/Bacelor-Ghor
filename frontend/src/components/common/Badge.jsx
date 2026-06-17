import React from 'react'
import { cn } from '../../utils/cn'

const tones = {
  blue: 'bg-blue-500/10 text-blue-700 ring-blue-500/20 dark:text-blue-300',
  emerald: 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-300',
  amber: 'bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-300',
  rose: 'bg-rose-500/10 text-rose-700 ring-rose-500/20 dark:text-rose-300',
  slate: 'bg-slate-500/10 text-slate-700 ring-slate-500/20 dark:text-slate-300',
}

export default function Badge({ tone = 'slate', className, children }) {
  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1', tones[tone], className)}>{children}</span>
}
