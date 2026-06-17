import React from 'react'
import { CalendarPlus, PlusCircle } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { MealLineChart } from '../components/charts/AnalyticsCharts'
import { mealEntries, stats } from '../services/mockData'
import Button from '../components/common/Button'

export default function MealManagementView() {
  return (
    <ModulePage
      eyebrow="Meal operations"
      title="Meal management"
      description="Log meals, guest meals, meal rate, and monthly summaries with a polished workflow."
      stats={stats.slice(0, 4)}
      actions={[
        { label: 'Add meal', icon: <PlusCircle className="h-4 w-4" /> },
        { label: 'Calendar', icon: <CalendarPlus className="h-4 w-4" />, variant: 'secondary' },
      ]}
    >
      <MealLineChart data={mealEntries} />
      <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Add meal modal</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Ready for integration with actual form logic</p>
          </div>
          <Button>Add meal entry</Button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {['Breakfast', 'Lunch', 'Dinner'].map((slot) => <div key={slot} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{slot}</div>)}
        </div>
      </div>
    </ModulePage>
  )
}
