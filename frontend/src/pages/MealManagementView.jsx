import React from 'react'
import { CalendarPlus, PlusCircle, Calculator, UserRoundPlus, Save, Pencil, Search, CalendarDays } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { MealLineChart } from '../components/charts/AnalyticsCharts'
import { mealEntries, stats } from '../services/mockData'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import Input from '../components/common/Input'

export default function MealManagementView() {
  const columns = [
    { key: 'date', label: 'Day' },
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'lunch', label: 'Lunch' },
    { key: 'dinner', label: 'Dinner' },
    { key: 'guests', label: 'Guest', render: (row) => <Badge tone={row.guests ? 'amber' : 'slate'}>{row.guests}</Badge> },
  ]

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
      summary="Includes add/edit meal flows, history table, daily entry blocks, guest meal management, and monthly meal rate calculation shell."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Add meal</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">API-ready daily meal form with member and slot controls.</p>
            </div>
            <Badge tone="blue"><Save className="h-3.5 w-3.5" /> Draft</Badge>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Input label="Date" type="date" defaultValue="2026-06-18" />
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              Member
              <select className="h-11 rounded-2xl border border-slate-200 bg-white/90 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100">
                <option>All active members</option>
                <option>Rakib Hasan</option>
                <option>Sohan Ahmed</option>
              </select>
            </label>
            <Input label="Breakfast" type="number" defaultValue="18" />
            <Input label="Lunch" type="number" defaultValue="22" />
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <Input label="Dinner" type="number" defaultValue="20" />
            <Input label="Guest meals" type="number" defaultValue="2" />
            <Button className="self-end"><PlusCircle className="h-4 w-4" />Save meal</Button>
          </div>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Edit meal</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Find an existing row and update counts.</p>
            </div>
            <Pencil className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 dark:border-slate-700 dark:bg-slate-900/70">
            <Search className="h-4 w-4 text-slate-400" />
            <input className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none dark:text-white" placeholder="Search date, member, or meal ID" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {['Meal #BH-1048', 'Meal #BH-1047'].map((item) => (
              <button key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm transition hover:bg-slate-100 dark:bg-slate-900/70 dark:hover:bg-slate-800">
                <div className="font-semibold text-slate-950 dark:text-white">{item}</div>
                <div className="mt-1 text-slate-500 dark:text-slate-400">Today · breakfast/lunch/dinner active</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <MealLineChart data={mealEntries} />
          <ResponsiveTable columns={columns} rows={mealEntries} emptyTitle="No meal history" />
        </div>

        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Daily meal entry</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Add or edit breakfast, lunch, and dinner counts.</p>
              </div>
              <Button size="sm">Add meal</Button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3 xl:grid-cols-1">
              {['Breakfast', 'Lunch', 'Dinner'].map((slot) => (
                <div key={slot} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                  <span>{slot}</span>
                  <Badge tone="emerald">Open</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
              <UserRoundPlus className="h-4 w-4 text-amber-500" />
              Guest meal management
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Track guest meal counts, rates, and settlement adjustments.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Input label="Guest name" placeholder="Optional" />
              <Input label="Guest count" type="number" defaultValue="1" />
            </div>
            <Button variant="secondary" className="mt-4 w-full">Add guest meal</Button>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
              <Calculator className="h-4 w-4 text-blue-500" />
              Meal rate calculator
            </div>
            <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Total bazar cost: ৳18,450</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Total meals: 200</div>
              <div className="rounded-2xl bg-blue-500/10 px-4 py-3 font-semibold text-blue-700 dark:text-blue-200">Meal rate: ৳92.25</div>
            </div>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
              <CalendarDays className="h-4 w-4 text-emerald-500" />
              Monthly meal report
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              {['Total 1,840', 'Guest 42', 'Skipped 18'].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-2 py-3 font-semibold text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{item}</div>
              ))}
            </div>
            <Button variant="secondary" className="mt-4 w-full">Preview monthly report</Button>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
