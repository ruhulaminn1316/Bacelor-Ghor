import React from 'react'
import { Download } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { BudgetBarChart, BudgetPieChart, MealLineChart } from '../components/charts/AnalyticsCharts'
import { budgetSplit, expenseTrend, mealEntries } from '../services/mockData'
import Button from '../components/common/Button'

export default function ReportsAnalyticsView() {
  return (
    <ModulePage
      eyebrow="Analytics"
      title="Reports and analytics"
      description="Generate monthly reports with charts, export actions, and trend summaries."
      actions={[{ label: 'Export PDF', icon: <Download className="h-4 w-4" /> }]}
    >
      <div className="grid gap-4 xl:grid-cols-2">
        <BudgetBarChart data={expenseTrend} />
        <BudgetPieChart data={budgetSplit} />
        <MealLineChart data={mealEntries} />
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Export center</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Button variant="secondary">Export CSV</Button>
            <Button variant="secondary">Export XLSX</Button>
            <Button variant="secondary">Share report</Button>
            <Button variant="secondary">Print summary</Button>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
