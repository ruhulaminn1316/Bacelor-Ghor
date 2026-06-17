import React from 'react'
import { CalendarPlus, PlusCircle } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { MealLineChart } from '../components/charts/AnalyticsCharts'
import { mealEntries, stats } from '../services/mockData'
import Button from '../components/common/Button'

export default function MealManagement() {
  return (
    <ModulePage
      eyebrow="Meal operations"
      title="Meal management"
      description="Log meals, guest meals, meal rate, and monthly summaries with a polished workflow."
      stats={stats.slice(0, 4)}
      actions={[
        { label: 'Add meal', icon: <PlusCircle className="h-4 w-4" /> },
        { label: 'Calendar', icon: <CalendarPlus className="h-4 w-4" />, variant: 'secondary' },
      ]}
      summary="The meal module is structured to support meal entry tables, guest meals, history views, rate cards, and modal-driven add flows once the backend is connected."
    >
      <MealLineChart data={mealEntries} />
      <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Add meal modal</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Ready for integration with actual form logic</p>
          </div>
          <Button>Add meal entry</Button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {['Breakfast', 'Lunch', 'Dinner'].map((slot) => <div key={slot} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{slot}</div>)}
        </div>
      </div>
    </ModulePage>
  )
}
import React, { useState } from 'react'
import { Plus, CalendarDays, UserRoundPlus, CirclePlus } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import BaseModal from '../components/modals/BaseModal'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import { mealEntries } from '../services/mockData'

export default function MealManagement() {
  const [open, setOpen] = useState(false)

  const columns = [
    { key: 'date', label: 'Day' },
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'lunch', label: 'Lunch' },
    { key: 'dinner', label: 'Dinner' },
    { key: 'guests', label: 'Guest Meals', render: (row) => <Badge tone={row.guests ? 'amber' : 'slate'}>{row.guests}</Badge> },
  ]

  return (
    <ModulePage
      eyebrow="Meal operations"
      title="Meal management"
      description="Track daily meal entries, guest meals, meal rates, history, and monthly summaries with a clean operations view."
      stats={[
        { label: 'Meal Rate', value: '৳92', delta: '-3 vs last month', tone: 'blue' },
        { label: 'Today Meals', value: '69', delta: '+6 guest meals', tone: 'emerald' },
        { label: 'Pending Entry', value: '2', delta: 'needs review', tone: 'amber' },
        { label: 'Monthly Cost', value: '৳18,450', delta: '+8%', tone: 'rose' },
      ]}
      actions={[
        { label: 'Add meal', variant: 'primary', icon: <Plus className="h-4 w-4" />, onClick: () => setOpen(true) },
        { label: 'Calendar view', variant: 'secondary', icon: <CalendarDays className="h-4 w-4" /> },
      ]}
      summary="All meal-related workflows sit inside a single command surface, ready for backend-connected entry validation, meal rate calculations, and guest meal handling."
    >
      <div className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4">
          <ResponsiveTable columns={columns} rows={mealEntries} emptyTitle="No meals recorded" />
        </div>
        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Meal calendar</h3>
            <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs">
              {mealEntries.map((entry, index) => (
                <div key={entry.date} className={`rounded-2xl p-3 ${index === 5 ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-900/70 dark:text-slate-200'}`}>
                  <div className="font-semibold">{entry.date}</div>
                  <div className="mt-1">{entry.breakfast + entry.lunch + entry.dinner}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><UserRoundPlus className="h-5 w-5" /></div>
              <div>
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">Guest meal control</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Mark guests, settle counts, and update the monthly rate automatically.</p>
              </div>
            </div>
            <Button className="mt-4 w-full" onClick={() => setOpen(true)}><CirclePlus className="h-4 w-4" />Add guest meal</Button>
          </div>
        </div>
      </div>

      <BaseModal open={open} title="Add meal entry" description="A production-ready modal shell for meal input, member selection, and guest counts." onClose={() => setOpen(false)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">Member selector</div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">Meal count controls</div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70 sm:col-span-2">Guest meal notes</div>
        </div>
      </BaseModal>
    </ModulePage>
  )
}
