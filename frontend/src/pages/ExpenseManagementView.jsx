import React from 'react'
import { PlusCircle } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { BudgetBarChart } from '../components/charts/AnalyticsCharts'
import { expenseTrend, expenses } from '../services/mockData'
import Button from '../components/common/Button'

export default function ExpenseManagementView() {
  return (
    <ModulePage
      eyebrow="Expense control"
      title="Expense management"
      description="Track daily and shared expenses with analytics, filters, and add-expense flows."
      actions={[{ label: 'Add expense', icon: <PlusCircle className="h-4 w-4" /> }]}
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
