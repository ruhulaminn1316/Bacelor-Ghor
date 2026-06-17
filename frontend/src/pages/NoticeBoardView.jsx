import React from 'react'
import { Pin } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { notices } from '../services/mockData'
import Badge from '../components/common/Badge'

export default function NoticeBoardView() {
  return (
    <ModulePage
      eyebrow="Notices"
      title="Notice board"
      description="Publish reminders, events, and announcements for the mess community."
      actions={[{ label: 'Create notice', icon: <Pin className="h-4 w-4" /> }]}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {notices.map((item) => (
          <div key={item.title} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <Badge tone={item.tone}>{item.meta}</Badge>
            <div className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</div>
          </div>
        ))}
      </div>
    </ModulePage>
  )
}
