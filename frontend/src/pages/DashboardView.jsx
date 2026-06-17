import React from 'react'
import { CalendarDays, PlusCircle, WalletCards, Receipt, FileText, Utensils, Banknote, UserCheck, CalendarCheck } from 'lucide-react'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import StatCard from '../components/common/StatCard'
import { BudgetPieChart, MealLineChart, MonthlyTrendChart } from '../components/charts/AnalyticsCharts'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import { activityFeed, budgetSplit, expenseTrend, mealEntries } from '../services/mockData'

const dashboardStats = [
  { label: 'Total Meal', value: '1,840', delta: 'This month', tone: 'blue', icon: Utensils },
  { label: 'Total Amount', value: '৳48,200', delta: 'All expenses', tone: 'emerald', icon: Banknote },
  { label: 'My Meal Today', value: '3', delta: 'Breakfast, lunch, dinner', tone: 'amber', icon: UserCheck },
  { label: 'Today Total Meal', value: '62', delta: 'All members', tone: 'rose', icon: CalendarCheck },
]

export default function DashboardView() {
  const columns = [
    { key: 'title', label: 'Activity' },
    { key: 'meta', label: 'Details' },
    { key: 'type', label: 'Type', render: (row) => <Badge tone={row.type === 'Meal' ? 'blue' : row.type === 'Rent' ? 'emerald' : 'amber'}>{row.type}</Badge> },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">Dashboard</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Meal and amount overview</h1>
        </div>
        <Button key="new" variant="primary"><PlusCircle className="h-4 w-4" />New entry</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => <StatCard key={item.label} {...item} />)}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.65fr_0.95fr]">
        <div className="space-y-4">
          <MonthlyTrendChart data={expenseTrend} />
          <div className="grid gap-4 lg:grid-cols-2">
            <MealLineChart data={mealEntries} />
            <BudgetPieChart data={budgetSplit} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Quick actions</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Move fast across core workflows</p>
              </div>
              <Badge tone="blue">Live</Badge>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {[
                ['Add meal entry', PlusCircle],
                ['Upload bazar receipt', Receipt],
                ['Collect monthly rent', WalletCards],
                ['Review monthly report', FileText],
              ].map(([label, Icon]) => (
                <button key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:hover:bg-slate-800/80">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-blue-600 dark:text-blue-300"><Icon className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{label}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Open the modal and continue</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Calendar</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">This week's planning view</p>
              </div>
              <CalendarDays className="h-5 w-5 text-blue-500" />
            </div>
            <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className={`rounded-2xl p-3 ${index === 5 ? 'bg-blue-500 text-white' : 'bg-slate-100 dark:bg-slate-900/70'}`}>
                  <div>{day}</div>
                  <div className="mt-1 text-sm">{12 + index}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Recent activities</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Latest workflow updates across the system</p>
            </div>
            <Badge tone="emerald">Today</Badge>
          </div>
          <ResponsiveTable columns={columns} rows={activityFeed} emptyTitle="No activities yet" emptyDescription="Activities will appear as users interact with the system." />
        </div>
      </div>
    </div>
  )
}
