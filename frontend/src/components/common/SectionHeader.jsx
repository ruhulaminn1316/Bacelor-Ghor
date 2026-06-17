import React from 'react'
import Badge from './Badge'

export default function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-4 rounded-[1.75rem] surface p-6 shadow-soft-lg md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl space-y-3">
        {eyebrow ? <Badge tone="blue">{eyebrow}</Badge> : null}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">{title}</h1>
          {description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">{description}</p> : null}
        </div>
      </div>
      {action ? <div className="flex flex-wrap gap-3">{action}</div> : null}
    </div>
  )
}