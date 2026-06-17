import React from 'react'
import { Upload, PlusCircle, Filter, ScanLine, BarChart3, Search, Tags, WalletCards } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { expenses } from '../services/mockData'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import Input from '../components/common/Input'

export default function BazarManagementView() {
  const columns = [
    { key: 'title', label: 'Item' },
    { key: 'category', label: 'Category', render: (row) => <Badge tone="blue">{row.category}</Badge> },
    { key: 'amount', label: 'Amount' },
    { key: 'date', label: 'Date' },
  ]

  return (
    <ModulePage
      eyebrow="Bazar workflow"
      title="Bazar management"
      description="Record add-bazar entries, product lines, receipts, categories, and spend summaries."
      actions={[
        { label: 'Add bazar', icon: <PlusCircle className="h-4 w-4" /> },
        { label: 'Upload receipt', icon: <Upload className="h-4 w-4" />, variant: 'secondary' },
      ]}
      summary="Provides add expense, receipt upload, category filter, and analytics-ready transaction view for market operations."
    >
      <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Add market expense</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Capture item, category, payer, split logic, and receipt attachment.</p>
          </div>
          <Badge tone="emerald"><WalletCards className="h-3.5 w-3.5" /> Split equally</Badge>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <Input label="Item name" placeholder="Rice, fish, spices" />
          <Input label="Amount" type="number" placeholder="1250" />
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Category
            <select className="h-11 rounded-2xl border border-slate-200 bg-white/90 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100">
              <option>Grocery</option>
              <option>Vegetables</option>
              <option>Fish & meat</option>
              <option>Cleaning</option>
            </select>
          </label>
          <Input label="Purchased by" placeholder="Rakib Hasan" />
          <Button className="self-end"><PlusCircle className="h-4 w-4" />Add expense</Button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-4 shadow-soft-lg">
            <div className="grid gap-3 md:grid-cols-[1fr_auto]">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 dark:border-slate-700 dark:bg-slate-900/70">
                <Search className="h-4 w-4 text-slate-400" />
                <input className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none dark:text-white" placeholder="Search expense history" />
              </div>
              <Button variant="secondary"><Tags className="h-4 w-4" />Bulk categorize</Button>
            </div>
          </div>
          <ResponsiveTable columns={columns} rows={expenses} emptyTitle="No bazar entries" />
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white">
                <Filter className="h-5 w-5 text-blue-500" />
                Category filters
              </div>
              <Badge tone="slate">Multi-select</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Vegetables', 'Fish', 'Meat', 'Grocery', 'Cleaning'].map((item) => (
                <button key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Receipt upload UI</h3>
              <ScanLine className="h-5 w-5 text-blue-500" />
            </div>
            <div className="mt-4 rounded-[1.5rem] border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
              <Upload className="mx-auto h-8 w-8 text-blue-500" />
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Drag and drop receipt images or attach files here.</p>
              <Button className="mt-4" variant="secondary">Browse files</Button>
            </div>
            <div className="mt-4 grid gap-2 text-sm">
              {['receipt-rice-18-jun.jpg', 'fish-market-invoice.png'].map((file) => (
                <div key={file} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">
                  <span className="truncate text-slate-700 dark:text-slate-200">{file}</span>
                  <Badge tone="blue">Queued</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white">
              <BarChart3 className="h-5 w-5 text-emerald-500" />
              Expense analytics
            </div>
            <div className="mt-4 space-y-3">
              {[
                ['Weekly total', '৳8,450'],
                ['Top category', 'Protein items'],
                ['Average receipt value', '৳1,250'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">
                  <div className="text-sm text-slate-600 dark:text-slate-300">{label}</div>
                  <div className="text-sm font-semibold text-slate-950 dark:text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
