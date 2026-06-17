import React from 'react'
import { Upload, PlusCircle } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { expenses } from '../services/mockData'
import Button from '../components/common/Button'

export default function BazarManagement() {
  return (
    <ModulePage
      eyebrow="Bazar workflow"
      title="Bazar management"
      description="Record add-bazar entries, product lines, receipts, categories, and spend summaries."
      actions={[
        { label: 'Add bazar', icon: <PlusCircle className="h-4 w-4" /> },
        { label: 'Upload receipt', icon: <Upload className="h-4 w-4" />, variant: 'secondary' },
      ]}
      summary="This screen is prepared for product lists, receipt upload UI, category filters, and bazar history data from the backend."
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
import React from 'react'
import { Upload, PlusCircle, Filter, ScanLine } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import { expenses } from '../services/mockData'

export default function BazarManagement() {
  const columns = [
    { key: 'title', label: 'Product' },
    { key: 'category', label: 'Category', render: (row) => <Badge tone="blue">{row.category}</Badge> },
    { key: 'amount', label: 'Amount' },
    { key: 'date', label: 'Date' },
  ]

  return (
    <ModulePage
      eyebrow="Bazar workflow"
      title="Bazar management"
      description="Capture daily bazar entries, receipt uploads, product lists, category filters, and monthly expense summaries."
      stats={[
        { label: 'Today Bazar', value: '৳3,850', delta: '+12 items', tone: 'blue' },
        { label: 'This Month', value: '৳18,450', delta: '+8%', tone: 'emerald' },
        { label: 'Receipts', value: '18', delta: 'uploaded', tone: 'amber' },
        { label: 'Pending', value: '4', delta: 'needs review', tone: 'rose' },
      ]}
      actions={[
        { label: 'Add bazar', variant: 'primary', icon: <PlusCircle className="h-4 w-4" /> },
        { label: 'Upload receipt', variant: 'secondary', icon: <Upload className="h-4 w-4" /> },
      ]}
      summary="Bazar entries are designed around real receipt-heavy workflows: fast upload, product capture, and category-level accounting."
    >
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <ResponsiveTable columns={columns} rows={expenses} emptyTitle="No bazar entries" />
        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Receipt upload</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Drop files or scan invoices</p>
              </div>
              <ScanLine className="h-5 w-5 text-blue-500" />
            </div>
            <div className="mt-4 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-900/70">
              Drag, drop, or click to upload receipt files.
            </div>
          </div>
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"><Filter className="h-4 w-4" />Category filters</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Bazar', 'Utility', 'Household', 'Fuel'].map((item) => <Badge key={item} tone="slate">{item}</Badge>)}
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
