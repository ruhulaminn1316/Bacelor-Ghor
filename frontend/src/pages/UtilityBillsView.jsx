import React from 'react'
import { PlugZap, Zap, Droplets, Flame, Wifi } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { BudgetPieChart } from '../components/charts/AnalyticsCharts'
import { budgetSplit } from '../services/mockData'
import Badge from '../components/common/Badge'

export default function UtilityBillsView() {
  return (
    <ModulePage
      eyebrow="Utilities"
      title="Utility bills"
      description="Track electricity, water, gas, and internet with monthly analytics."
      actions={[{ label: 'Log bill', icon: <PlugZap className="h-4 w-4" /> }]}
      summary="Dedicated cards for electricity, water, gas, and internet with due tracking and payment status overview."
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <BudgetPieChart data={budgetSplit} />
        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Monthly utility breakdown</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {[
                ['Electricity', '৳1,480', Zap, 'Due in 2 days'],
                ['Water', '৳320', Droplets, 'Paid'],
                ['Gas', '৳1,250', Flame, 'Pending'],
                ['Internet', '৳1,200', Wifi, 'Paid'],
              ].map(([name, amount, Icon, state]) => (
                <div key={name} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white"><Icon className="h-4 w-4 text-blue-500" />{name}</div>
                    <div className="text-sm font-semibold text-slate-950 dark:text-white">{amount}</div>
                  </div>
                  <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">{state}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">Payment status</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge tone="emerald">Paid: 2</Badge>
              <Badge tone="amber">Pending: 1</Badge>
              <Badge tone="rose">Due soon: 1</Badge>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
