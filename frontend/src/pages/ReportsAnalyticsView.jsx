import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Download, Filter, TrendingUp, CalendarRange, Share2 } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { BudgetBarChart, BudgetPieChart, MealLineChart } from '../components/charts/AnalyticsCharts'
import { budgetSplit, expenseTrend, mealEntries } from '../services/mockData'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'

export default function ReportsAnalyticsView() {
  const [period, setPeriod] = useState('This month')
  const [tab, setTab] = useState('Overview')
  const exportReport = (type) => toast.success(`${type} report ready for ${period}`)

  return (
    <ModulePage
      eyebrow="Analytics"
      title="Reports and analytics"
      description="Generate monthly reports with charts, export actions, and trend summaries."
      actions={[{ label: 'Export PDF', icon: <Download className="h-4 w-4" /> }]}
      summary="Interactive chart blocks for monthly reports, expense trends, meal trends, and export workflows."
    >
      <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white"><Filter className="h-4 w-4 text-blue-500" />Report filters</div>
          <div className="flex gap-2">
            {['This month', 'Last month', 'Quarter'].map((item) => (
              <button key={item} onClick={() => setPeriod(item)} className={`rounded-full px-3 py-1 text-xs font-semibold ${period === item ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>{item}</button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:bg-slate-900/70 dark:text-slate-300">
            <CalendarRange className="h-4 w-4 text-blue-500" />
            Jun 01, 2026 - Jun 30, 2026
          </div>
          <div className="flex rounded-2xl bg-slate-100 p-1 text-xs font-semibold dark:bg-slate-800">
            {['Overview', 'Meals', 'Expenses', 'Rent'].map((item) => (
              <button key={item} onClick={() => setTab(item)} className={`flex-1 rounded-xl px-3 py-2 ${tab === item ? 'bg-white text-slate-950 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-500 dark:text-slate-300'}`}>{item}</button>
            ))}
          </div>
          <Button variant="secondary" onClick={() => exportReport('Share link')}><Share2 className="h-4 w-4" />Share</Button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <BudgetBarChart data={expenseTrend} />
        <BudgetPieChart data={budgetSplit} />
        <MealLineChart data={mealEntries} />
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Export center</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Button variant="secondary" onClick={() => exportReport('CSV')}>Export CSV</Button>
            <Button variant="secondary" onClick={() => exportReport('XLSX')}>Export XLSX</Button>
            <Button variant="secondary" onClick={() => exportReport('Share')}>Share report</Button>
            <Button variant="secondary" onClick={() => exportReport('Print')}>Print summary</Button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Monthly report score', 'A+', 'emerald'],
          ['Expense trend', '+8.2%', 'amber'],
          ['Meal stability', '97%', 'blue'],
        ].map(([title, value, tone]) => (
          <div key={title} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500 dark:text-slate-400">{title}</div>
              <Badge tone={tone}><TrendingUp className="h-3.5 w-3.5" /></Badge>
            </div>
            <div className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{value}</div>
          </div>
        ))}
      </div>
    </ModulePage>
  )
}
