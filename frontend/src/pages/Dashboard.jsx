import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, PlusCircle, Sparkles, Users, WalletCards, Receipt, MessageCircleMore } from 'lucide-react'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import StatCard from '../components/common/StatCard'
import SectionHeader from '../components/common/SectionHeader'
import { BudgetBarChart, BudgetPieChart, MealLineChart, MonthlyTrendChart } from '../components/charts/AnalyticsCharts'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import { activityFeed, budgetSplit, expenseTrend, mealEntries, stats } from '../services/mockData'
import { formatCurrency } from '../utils/format'

const tasks = [
  { title: 'Add meal entry', icon: PlusCircle },
  { title: 'Upload bazar receipt', icon: Receipt },
  { title: 'Collect monthly rent', icon: WalletCards },
  { title: 'Review AI insights', icon: Sparkles },
]

const calendarDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function Dashboard() {
  const tableColumns = [
    { key: 'title', label: 'Activity' },
    { key: 'meta', label: 'Details' },
    {
      key: 'type',
      label: 'Type',
      render: (row) => <Badge tone={row.type === 'Meal' ? 'blue' : row.type === 'Rent' ? 'emerald' : 'amber'}>{row.type}</Badge>,
    },
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
              {tasks.map((task) => {
                const Icon = task.icon
                return (
                  <button key={task.title} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:hover:bg-slate-800/80">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-blue-600 dark:text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">{task.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Open the modal and continue</div>
                    </div>
                  </button>
                )
              })}
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
              {calendarDays.map((day, index) => (
                <div key={day} className={`rounded-2xl p-3 ${index === 5 ? 'bg-blue-500 text-white' : 'bg-slate-100 dark:bg-slate-900/70'}`}>
                  <div>{day}</div>
                  <div className="mt-1 text-sm">{12 + index}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">AI insights</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Smart suggestions based on current cycle</p>
              </div>
              <Sparkles className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-blue-500/10 p-4 text-sm text-blue-700 dark:text-blue-200">Meal rate can be reduced by ৳3 if three outstanding bazar items are reconciled.</div>
              <div className="rounded-2xl bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-200">Rent collection is 92% complete. Two members remain pending.</div>
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
          <ResponsiveTable columns={tableColumns} rows={activityFeed} emptyTitle="No activities yet" emptyDescription="Activities will appear as users interact with the system." />
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Monthly summary</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">What the current month looks like</p>
            </div>
            <Badge tone="amber">৳{formatCurrency(48200).replace('BDT', '').trim()}</Badge>
          </div>
          <div className="mt-4 space-y-3">
            {[
              ['Total meals', '1,840', 'up 12%'],
              ['Total bazar', '৳18,450', 'up 8%'],
              ['Due amount', '৳12,460', 'down 8%'],
            ].map(([label, value, trend]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-3 dark:bg-slate-900/70">
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">{label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{trend}</div>
                </div>
                <div className="text-base font-semibold text-slate-950 dark:text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import Card from '../components/Card'

export default function Dashboard() {
  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">Bachelor’s Home management dashboard</div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">One clean place for meals, money, members, and room operations.</h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">Track daily meals, monthly expenses, balances, and active room members with a dashboard that feels calm and organized.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-white/5 p-4 ring-1 ring-white/10">
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Members</div>
              <div className="mt-2 text-2xl font-semibold">24</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Meals</div>
              <div className="mt-2 text-2xl font-semibold">56</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Expenses</div>
              <div className="mt-2 text-2xl font-semibold">৳12,400</div>
            </div>
            <div className="rounded-2xl bg-emerald-400/15 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-100">Balance</div>
              <div className="mt-2 text-2xl font-semibold">৳8,200</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card title="Active members" value="24" />
            <Card title="Meals today" value="56" />
            <Card title="Monthly expenses" value="৳12,400" />
            <Card title="Current balance" value="৳8,200" />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr]">
            <div className="card-panel p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-500">Weekly meal trend</div>
                  <div className="mt-1 text-lg font-semibold text-slateDark">Meals vs planned servings</div>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">+12% this week</div>
              </div>
              <div className="mt-6 grid grid-cols-7 gap-3 items-end h-56">
                {[42, 58, 36, 64, 72, 55, 80].map((height, index) => (
                  <div key={index} className="flex h-full flex-col justify-end gap-2">
                    <div className="rounded-2xl bg-gradient-to-t from-cyan-600 to-sky-400 shadow-sm" style={{ height: `${height}%` }} />
                    <div className="text-center text-xs text-slate-400">{['S','M','T','W','T','F','S'][index]}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-panel p-5">
              <div className="text-sm font-medium text-slate-500">Recent activity</div>
              <div className="mt-4 space-y-3">
                {[
                  ['Meal entry updated', 'Today, 8:30 PM'],
                  ['Expense added', 'Today, 6:20 PM'],
                  ['Member joined', 'Yesterday'],
                  ['Balance settled', 'Yesterday'],
                ].map(([title, time]) => (
                  <div key={title} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-slateDark">{title}</div>
                      <div className="text-xs text-slate-500">{time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card-panel p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Meal Management</div>
                <div className="mt-1 text-lg font-semibold text-slateDark">Daily Meal, Meal Rate</div>
              </div>
              <div className="text-sm text-slate-500">Today</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Total Bazar</div>
                <div className="mt-2 font-semibold">৳8,500</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Total Meals</div>
                <div className="mt-2 font-semibold">100</div>
              </div>
            </div>
            <div className="mt-3">
              <button className="w-full rounded-2xl bg-gradient-to-r from-primary to-primaryLight text-white px-3 py-2">Add Meal</button>
            </div>
          </div>

          <div className="card-panel p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Bazar Management</div>
                <div className="mt-1 text-lg font-semibold text-slateDark">Bazar & Inventory</div>
              </div>
              <div className="text-sm text-slate-500">Today</div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-sm"><div>Rice (5kg)</div><div className="font-semibold">৳650</div></div>
              <div className="flex items-center justify-between text-sm"><div>Oil (2L)</div><div className="font-semibold">৳320</div></div>
              <div className="flex items-center justify-between text-sm"><div>Potato (5kg)</div><div className="font-semibold">৳180</div></div>
            </div>
            <div className="mt-3">
              <button className="w-full rounded-2xl bg-white/90 text-slateDark px-3 py-2">Add Bazar</button>
            </div>
          </div>

          <div className="card-panel p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Rent Management</div>
                <div className="mt-1 text-lg font-semibold text-slateDark">Monthly Rent & Due</div>
              </div>
              <div className="text-sm text-slate-500">Total</div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-semibold">৳12,000</div>
              <div className="text-sm text-slate-500">4 Members</div>
            </div>
            <div className="mt-3">
              <button className="w-full rounded-2xl bg-gradient-to-r from-emerald to-primaryLight text-white px-3 py-2">Collect Rent</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
