import React from 'react'
import { cn } from '../../utils/cn'

export default function Button({ className, variant = 'primary', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:pointer-events-none'

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20 hover:scale-[1.01]',
    secondary: 'surface text-slate-900 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800/80',
    ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80',
    danger: 'bg-rose-500 text-white hover:bg-rose-600',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
  }

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}