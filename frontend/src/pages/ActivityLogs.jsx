import React from 'react'
import { Clock3 } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { logs } from '../services/mockData'
import Badge from '../components/common/Badge'

export default function ActivityLogs() {
  return (
    <ModulePage
      eyebrow="Logs"
      title="Activity logs"
      description="Inspect login history, system logs, payment logs, and activity timeline events."
      actions={[{ label: 'Refresh logs', icon: <Clock3 className="h-4 w-4" /> }]}
      summary="Activity logs are laid out to support audit trails, recent actions, and event history from the backend."
    >
      <div className="space-y-3">
        {logs.map((item) => (
          <div key={item.action} className="surface rounded-[1.5rem] p-4 shadow-soft-lg">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-slate-950 dark:text-white">{item.action}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{item.meta}</div>
              </div>
              <Badge tone="slate">{item.time}</Badge>
            </div>
          </div>
        ))}
      </div>
    </ModulePage>
  )
}
import React from 'react'
import { Clock3, LogIn, CreditCard, Users } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import { logs } from '../services/mockData'

const icons = [LogIn, CreditCard, Users, Clock3]

export default function ActivityLogs() {
  return (
    <ModulePage
      eyebrow="Logs"
      title="Activity logs"
      description="View login history, system logs, payment logs, and a clean activity timeline for auditing."
      stats={[
        { label: 'Logins', value: '48', delta: 'this week', tone: 'blue' },
        { label: 'Payments', value: '22', delta: 'this week', tone: 'emerald' },
        { label: 'System Logs', value: '14', delta: 'events', tone: 'amber' },
        { label: 'Alerts', value: '3', delta: 'needs attention', tone: 'rose' },
      ]}
      summary="The activity timeline is structured to support future audit data while remaining easy to scan today."
    >
      <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
        <div className="space-y-4">
          {logs.map((log, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div key={log.action} className="flex gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><Icon className="h-4.5 w-4.5" /></div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-slate-950 dark:text-white">{log.action}</h3>
                    <Badge tone="slate">{log.time}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{log.meta}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ModulePage>
  )
}
