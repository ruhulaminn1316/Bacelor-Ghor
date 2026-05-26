import React from 'react'
import { Inbox } from 'lucide-react'

export default function EmptyState({ icon: Icon = Inbox, title = 'No data', subtitle = 'Nothing here yet.', action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-slate-300 dark:text-slate-600" />
      </div>
      <div className="font-display font-semibold text-slate-700 dark:text-slate-300">{title}</div>
      <div className="text-sm text-slate-400 dark:text-slate-500 mt-1 max-w-xs">{subtitle}</div>
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
