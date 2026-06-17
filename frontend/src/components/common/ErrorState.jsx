import React from 'react'
import { AlertTriangle, RefreshCcw } from 'lucide-react'
import Button from './Button'

export default function ErrorState({ title = 'Failed to load data', description = 'Please retry or check your connection.' }) {
  return (
    <div className="rounded-[1.75rem] border border-rose-200 bg-rose-50/70 p-6 shadow-soft-lg dark:border-rose-900/40 dark:bg-rose-950/30">
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-300">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-rose-700 dark:text-rose-200">{title}</h3>
          <p className="mt-1 text-sm text-rose-600/90 dark:text-rose-200/80">{description}</p>
          <Button variant="danger" size="sm" className="mt-4"><RefreshCcw className="h-4 w-4" />Retry</Button>
        </div>
      </div>
    </div>
  )
}
