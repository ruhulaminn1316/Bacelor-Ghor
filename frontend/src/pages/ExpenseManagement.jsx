import React from 'react'
import { PlusCircle } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { BudgetBarChart } from '../components/charts/AnalyticsCharts'
import { expenseTrend, expenses } from '../services/mockData'
import Button from '../components/common/Button'

export default function ExpenseManagement() {
  return (
    <ModulePage
      eyebrow="Expense control"
      title="Expense management"
      description="Track daily and shared expenses with analytics, filters, and add-expense flows."
      actions={[{ label: 'Add expense', icon: <PlusCircle className="h-4 w-4" /> }]}
      summary="Expense management is structured around analytics cards, category filtering, charting, and a modal-based create flow."
    >
      <BudgetBarChart data={expenseTrend} />
      <div className="grid gap-4 lg:grid-cols-2">
        {expenses.map((item) => (
          <div key={item.title} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="text-sm text-slate-500 dark:text-slate-400">{item.category}</div>
            <div className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</div>
            <div className="mt-4 text-3xl font-semibold text-blue-600 dark:text-blue-300">{item.amount}</div>
            <Button className="mt-4" variant="secondary">Add similar expense</Button>
          </div>
        ))}
      </div>
    </ModulePage>
  )
}
import React, { useState } from 'react'
import { PlusCircle, PieChart, Filter } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import BaseModal from '../components/modals/BaseModal'
import { BudgetBarChart, BudgetPieChart } from '../components/charts/AnalyticsCharts'
import { budgetSplit, expenseTrend } from '../services/mockData'

export default function ExpenseManagement() {
  const [open, setOpen] = useState(false)

  return (
    <ModulePage
      eyebrow="Expense analytics"
      title="Expense management"
      description="Monitor daily expenses, shared expenses, analytics, category filters, and predictive charted views."
      stats={[
        { label: 'Daily Expense', value: '৳3,460', delta: '+6%', tone: 'blue' },
        { label: 'Shared Expense', value: '৳12,280', delta: '+3 contributors', tone: 'emerald' },
        { label: 'Utilities', value: '৳2,740', delta: 'this month', tone: 'amber' },
        { label: 'Category Count', value: '8', delta: 'active', tone: 'rose' },
      ]}
      actions={[
        { label: 'Add expense', variant: 'primary', icon: <PlusCircle className="h-4 w-4" />, onClick: () => setOpen(true) },
        { label: 'Filters', variant: 'secondary', icon: <Filter className="h-4 w-4" /> },
      ]}
      summary="Expense intelligence is laid out as a dashboard-first workflow with clear charting, filters, and modal entry points."
    >
      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <BudgetBarChart data={expenseTrend} />
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Expense cards</h3>
              <Badge tone="emerald">Live</Badge>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {['Bazar', 'Utility', 'Household', 'Food'].map((item, index) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{item}</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">৳{index * 1200 + 1800}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BudgetPieChart data={budgetSplit} />
      </div>

      <BaseModal open={open} title="Add expense" description="Modal shell for shared and daily expense entry." onClose={() => setOpen(false)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">Amount</div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">Category</div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70 sm:col-span-2">Description and split logic</div>
        </div>
      </BaseModal>
    </ModulePage>
  )
}
