import React from 'react'
import { Pin } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { notices } from '../services/mockData'
import Badge from '../components/common/Badge'

export default function NoticeBoard() {
  return (
    <ModulePage
      eyebrow="Notices"
      title="Notice board"
      description="Publish reminders, events, and announcements for the mess community."
      actions={[{ label: 'Create notice', icon: <Pin className="h-4 w-4" /> }]}
      summary="Notice board cards are ready for live data, pinned announcements, and event scheduling."
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
import React from 'react'
import { Megaphone, CalendarDays, BellRing } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import { notices } from '../services/mockData'

export default function NoticeBoard() {
  return (
    <ModulePage
      eyebrow="Notice board"
      title="Notice board"
      description="Post notices, reminders, events, and announcements with a clean community-facing layout."
      stats={[
        { label: 'Notices', value: '12', delta: 'active', tone: 'blue' },
        { label: 'Reminders', value: '4', delta: 'scheduled', tone: 'emerald' },
        { label: 'Events', value: '2', delta: 'this week', tone: 'amber' },
        { label: 'Announcements', value: '8', delta: 'published', tone: 'rose' },
      ]}
      summary="The board supports fast publishing, scheduled reminders, and a strong visual hierarchy for community updates."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {notices.map((notice) => (
          <div key={notice.title} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <Badge tone={notice.tone}>{notice.meta}</Badge>
              <Megaphone className="h-5 w-5 text-blue-500" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{notice.title}</h3>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Community updates, reminders, and event information appear in a calm card format.</p>
          </div>
        ))}
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-emerald-500" />
            <div>
              <h3 className="text-base font-semibold text-slate-950 dark:text-white">Upcoming event</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Mess meeting · Friday 9 PM</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
            <div className="flex items-center gap-2 text-sm font-medium"><BellRing className="h-4 w-4" />Pin a reminder to everyone</div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
