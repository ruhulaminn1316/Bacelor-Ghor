import React from 'react'
import { Download } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { BudgetBarChart, BudgetPieChart, MealLineChart } from '../components/charts/AnalyticsCharts'
import { budgetSplit, expenseTrend, mealEntries } from '../services/mockData'
import Button from '../components/common/Button'

export default function ReportsAnalytics() {
  return (
    <ModulePage
      eyebrow="Analytics"
      title="Reports and analytics"
      description="Generate monthly reports with charts, export actions, and trend summaries."
      actions={[{ label: 'Export PDF', icon: <Download className="h-4 w-4" /> }]}
      summary="Analytics pages are ready for multi-chart reporting and export workflows once real metrics are wired in."
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
import React from 'react'
import { Download, FileDown, FileSpreadsheet } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Button from '../components/common/Button'
import { BudgetBarChart, BudgetPieChart, MealLineChart } from '../components/charts/AnalyticsCharts'
import { budgetSplit, expenseTrend, mealEntries } from '../services/mockData'

export default function ReportsAnalytics() {
  return (
    <ModulePage
      eyebrow="Reports"
      title="Reports & analytics"
      description="Generate monthly reports, review pie charts and bar charts, and prepare export-ready operational snapshots."
      actions={[
        { label: 'Export PDF', variant: 'secondary', icon: <FileDown className="h-4 w-4" /> },
        { label: 'Export CSV', variant: 'primary', icon: <FileSpreadsheet className="h-4 w-4" /> },
      ]}
      summary="The reporting surface combines trend analysis, monthly snapshots, and export controls for future backend integration."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        <BudgetBarChart data={expenseTrend} />
        <BudgetPieChart data={budgetSplit} />
        <MealLineChart data={mealEntries} />
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Export center</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Download reports for monthly review</p>
            </div>
            <Download className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Button variant="secondary">PDF report</Button>
            <Button variant="secondary">Spreadsheet</Button>
            <Button variant="secondary">Print summary</Button>
            <Button variant="secondary">Share report</Button>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
