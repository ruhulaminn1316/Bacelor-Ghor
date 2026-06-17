import React from 'react'
import { Clock3, LogIn, CreditCard, Users } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import { logs } from '../services/mockData'

const icons = [LogIn, CreditCard, Users, Clock3]

export default function ActivityLogsView() {
  return (
    <ModulePage
      eyebrow="Logs"
      title="Activity logs"
      description="Inspect login history, system logs, payment logs, and activity timeline events."
      actions={[{ label: 'Refresh logs', icon: <Clock3 className="h-4 w-4" /> }]}
    >
      <div className="space-y-3">
        {logs.map((item, index) => {
          const Icon = icons[index % icons.length]
          return (
            <div key={item.action} className="surface rounded-[1.5rem] p-4 shadow-soft-lg">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><Icon className="h-4.5 w-4.5" /></div>
                  <div>
                    <div className="font-semibold text-slate-950 dark:text-white">{item.action}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{item.meta}</div>
                  </div>
                </div>
                <Badge tone="slate">{item.time}</Badge>
              </div>
            </div>
          )
        })}
      </div>
    </ModulePage>
  )
}
