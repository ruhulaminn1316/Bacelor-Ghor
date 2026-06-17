import React from 'react'
import Button from './Button'

export default function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className="surface flex min-h-[280px] flex-col items-center justify-center rounded-[1.75rem] p-8 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-blue-600 dark:text-blue-300">
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">{description}</p>
      {actionLabel ? <Button className="mt-5" onClick={onAction}>{actionLabel}</Button> : null}
    </div>
  )
}
