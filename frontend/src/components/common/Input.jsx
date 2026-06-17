import React from 'react'
import { cn } from '../../utils/cn'

export default function Input({ className, label, hint, ...props }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label && <span>{label}</span>}
      <input
        className={cn(
          'h-11 rounded-2xl border border-slate-200 bg-white/90 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100',
          className,
        )}
        {...props}
      />
      {hint && <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{hint}</span>}
    </label>
  )
}