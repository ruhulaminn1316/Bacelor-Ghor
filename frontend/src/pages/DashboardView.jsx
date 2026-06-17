import React from 'react'
import { CalendarDays, MessageCircleMore, PlusCircle, Sparkles, WalletCards, Receipt, Activity, Bell, TrendingUp } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import StatCard from '../components/common/StatCard'
import { BudgetBarChart, BudgetPieChart, MealLineChart, MonthlyTrendChart } from '../components/charts/AnalyticsCharts'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import SkeletonCard from '../components/common/SkeletonCard'
import EmptyState from '../components/common/EmptyState'
import ErrorState from '../components/common/ErrorState'
import { activityFeed, budgetSplit, expenseTrend, mealEntries, stats } from '../services/mockData'

export default function DashboardView() {
  const columns = [
    { key: 'title', label: 'Activity' },
    { key: 'meta', label: 'Details' },
    { key: 'type', label: 'Type', render: (row) => <Badge tone={row.type === 'Meal' ? 'blue' : row.type === 'Rent' ? 'emerald' : 'amber'}>{row.type}</Badge> },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Command center"
        title="Bachelor life, upgraded into a premium operating system."
        description="Track meals, budgets, rent collection, utilities, notices, and AI recommendations from one polished dashboard."
        action={[
          <Button key="assistant" variant="secondary"><MessageCircleMore className="h-4 w-4" />Open assistant</Button>,
          <Button key="new" variant="primary"><PlusCircle className="h-4 w-4" />New entry</Button>,
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => <StatCard key={item.label} {...item} />)}
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
                ['Review AI insights', Sparkles],
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

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
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

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">AI insights</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-blue-500/10 p-4 text-sm text-blue-700 dark:text-blue-200">Meal rate can be reduced by ৳3 if three outstanding bazar items are reconciled.</div>
            <div className="rounded-2xl bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-200">Rent collection is 92% complete. Two members remain pending.</div>
            <div className="rounded-2xl bg-amber-500/10 p-4 text-sm text-amber-700 dark:text-amber-200">Electricity bill due in 2 days. Auto-reminder will notify all members tonight.</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Smart widgets</h3>
            <TrendingUp className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-4 space-y-3">
            {[
              ['Meal completion', '88%'],
              ['Rent collection', '92%'],
              ['Utility payment', '76%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-1 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white">
            <Bell className="h-5 w-5 text-amber-500" />
            Notifications
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="rounded-2xl bg-slate-50 px-3 py-2 dark:bg-slate-900/70">1 new notice from admin</div>
            <div className="rounded-2xl bg-slate-50 px-3 py-2 dark:bg-slate-900/70">3 members submitted bazar receipts</div>
            <div className="rounded-2xl bg-slate-50 px-3 py-2 dark:bg-slate-900/70">Monthly report generation ready</div>
          </div>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white">
            <Activity className="h-5 w-5 text-emerald-500" />
            System states
          </div>
          <div className="mt-4 space-y-3">
            <SkeletonCard />
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <EmptyState
          title="Waiting for backend chart stream"
          description="Interactive live usage charts will appear after API and websocket integration."
          actionLabel="Connect datasource"
        />
        <ErrorState title="Receipt service timeout" description="The upload service did not respond. Retry or check server status." />
      </div>
    </div>
  )
}
