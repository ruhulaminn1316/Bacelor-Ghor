import React from 'react'
import { Upload, PlusCircle } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { expenses } from '../services/mockData'
import Button from '../components/common/Button'

export default function BazarManagementView() {
  return (
    <ModulePage
      eyebrow="Bazar workflow"
      title="Bazar management"
      description="Record add-bazar entries, product lines, receipts, categories, and spend summaries."
      actions={[
        { label: 'Add bazar', icon: <PlusCircle className="h-4 w-4" /> },
        { label: 'Upload receipt', icon: <Upload className="h-4 w-4" />, variant: 'secondary' },
      ]}
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Receipt upload</h3>
          <div className="mt-4 rounded-[1.5rem] border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
            <Upload className="mx-auto h-8 w-8 text-blue-500" />
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Drag and drop receipt images or attach files here.</p>
            <Button className="mt-4" variant="secondary">Browse files</Button>
          </div>
        </div>
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Expense summary</h3>
          <div className="mt-4 space-y-3">
            {expenses.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">{item.title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{item.category}</div>
                </div>
                <div className="font-semibold text-slate-950 dark:text-white">{item.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
