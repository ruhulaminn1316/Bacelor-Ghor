import React from 'react'
import { PlugZap } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { BudgetPieChart } from '../components/charts/AnalyticsCharts'
import { budgetSplit } from '../services/mockData'

export default function UtilityBillsView() {
  return (
    <ModulePage
      eyebrow="Utilities"
      title="Utility bills"
      description="Track electricity, water, gas, and internet with monthly analytics."
      actions={[{ label: 'Log bill', icon: <PlugZap className="h-4 w-4" /> }]}
    >
      <BudgetPieChart data={budgetSplit} />
    </ModulePage>
  )
}
