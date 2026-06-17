import React from 'react'
import { Pin, Megaphone, BellRing, Send, Paperclip } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { notices } from '../services/mockData'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

export default function NoticeBoardView() {
  return (
    <ModulePage
      eyebrow="Notices"
      title="Notice board"
      description="Publish reminders, events, and announcements for the mess community."
      actions={[{ label: 'Create notice', icon: <Pin className="h-4 w-4" /> }]}
      summary="Includes notice creation, timeline feed, and priority-tagged announcements for all members."
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Notice feed</h3>
              <div className="flex rounded-xl bg-slate-100 p-1 text-xs font-semibold dark:bg-slate-800">
                <button className="rounded-lg bg-white px-3 py-1 text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white">All</button>
                <button className="rounded-lg px-3 py-1 text-slate-500 dark:text-slate-300">Important</button>
                <button className="rounded-lg px-3 py-1 text-slate-500 dark:text-slate-300">Events</button>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {notices.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
                  <Badge tone={item.tone}>{item.meta}</Badge>
                  <div className="mt-3 text-base font-semibold text-slate-950 dark:text-white">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
              <Megaphone className="h-5 w-5 text-blue-500" />
              Create notice
            </div>
            <div className="mt-3 space-y-3">
              <Input label="Title" placeholder="Monthly meeting" />
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Notice details
                <textarea className="min-h-[132px] rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100" placeholder="Write the announcement..." />
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                <Button variant="secondary"><Paperclip className="h-4 w-4" />Attach</Button>
                <Button><Send className="h-4 w-4" />Publish</Button>
              </div>
            </div>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
              <BellRing className="h-4 w-4 text-amber-500" />
              Important announcements
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="rounded-2xl bg-amber-500/10 px-4 py-3 text-amber-700 dark:text-amber-200">Water supply maintenance on Friday 11:00 PM.</div>
              <div className="rounded-2xl bg-rose-500/10 px-4 py-3 text-rose-700 dark:text-rose-200">Utility payment deadline is approaching.</div>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
