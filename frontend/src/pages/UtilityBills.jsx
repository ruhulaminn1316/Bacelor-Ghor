import React from 'react'
import { PlugZap } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { BudgetPieChart } from '../components/charts/AnalyticsCharts'
import { budgetSplit } from '../services/mockData'

export default function UtilityBills() {
  return (
    <ModulePage
      eyebrow="Utilities"
      title="Utility bills"
      description="Track electricity, water, gas, and internet with monthly analytics."
      actions={[{ label: 'Log bill', icon: <PlugZap className="h-4 w-4" /> }]}
      summary="Utility bill management is staged for bill cards, category-specific totals, and monthly summary views."
    >
      <BudgetPieChart data={budgetSplit} />
    </ModulePage>
  )
}
import React from 'react'
import { Droplets, Flame, Wifi, Zap } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import { BudgetBarChart } from '../components/charts/AnalyticsCharts'
import { expenseTrend } from '../services/mockData'

const utilities = [
  { name: 'Electricity', amount: '৳1,480', icon: Zap, tone: 'blue' },
  { name: 'Water', amount: '৳320', icon: Droplets, tone: 'emerald' },
  { name: 'Gas', amount: '৳1,250', icon: Flame, tone: 'amber' },
  { name: 'Internet', amount: '৳1,200', icon: Wifi, tone: 'rose' },
]

export default function UtilityBills() {
  return (
    <ModulePage
      eyebrow="Utilities"
      title="Utility bills"
      description="Track electricity, water, gas, and internet bills with analytics and monthly summary views."
      stats={[
        { label: 'Electricity', value: '৳1,480', delta: 'current bill', tone: 'blue' },
        { label: 'Water', value: '৳320', delta: 'current bill', tone: 'emerald' },
        { label: 'Gas', value: '৳1,250', delta: 'current bill', tone: 'amber' },
        { label: 'Internet', value: '৳1,200', delta: 'current bill', tone: 'rose' },
      ]}
      summary="Utilities are visualized as a shared operating cost, with monthly analytics and bill-by-bill breakdowns."
    >
      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {utilities.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.name} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{item.name}</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{item.amount}</div>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><Icon className="h-5 w-5" /></div>
                </div>
                <Badge tone={item.tone} className="mt-4">Monthly bill</Badge>
              </div>
            )
          })}
        </div>
        <BudgetBarChart data={expenseTrend} />
      </div>
    </ModulePage>
  )
}
