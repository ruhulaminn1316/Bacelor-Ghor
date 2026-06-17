import React from 'react'
import { Download, FileSpreadsheet, HandCoins, Calculator, CheckCircle2 } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import Input from '../components/common/Input'

const settlementRows = [
  { member: 'Rakib Hasan', meal: '৳8,240', expense: '৳4,120', paid: '৳13,000', status: 'Advance ৳640' },
  { member: 'Sohan Ahmed', meal: '৳7,950', expense: '৳3,920', paid: '৳10,200', status: 'Due ৳1,670' },
  { member: 'Nayeem Islam', meal: '৳8,100', expense: '৳3,880', paid: '৳12,400', status: 'Advance ৳420' },
  { member: 'Jahidul Karim', meal: '৳7,600', expense: '৳3,500', paid: '৳9,800', status: 'Due ৳1,300' },
]

export default function SettlementView() {
  const columns = [
    { key: 'member', label: 'Member' },
    { key: 'meal', label: 'Meal Cost' },
    { key: 'expense', label: 'Shared Expense' },
    { key: 'paid', label: 'Paid Amount' },
    {
      key: 'status',
      label: 'Final Status',
      render: (row) => <Badge tone={row.status.startsWith('Advance') ? 'emerald' : 'amber'}>{row.status}</Badge>,
    },
  ]

  return (
    <ModulePage
      eyebrow="Monthly closure"
      title="Settlement system"
      description="Calculate monthly totals, individual due/advance, and generate final settlement sheets for every member."
      stats={[
        { label: 'Total Meal Cost', value: '৳31,890', delta: 'current month', tone: 'blue' },
        { label: 'Total Shared Cost', value: '৳15,420', delta: 'includes utilities', tone: 'emerald' },
        { label: 'Total Due', value: '৳2,970', delta: '2 members', tone: 'amber' },
        { label: 'Total Advance', value: '৳1,060', delta: '2 members', tone: 'rose' },
      ]}
      actions={[
        { label: 'Run monthly calculation', icon: <HandCoins className="h-4 w-4" /> },
        { label: 'Download PDF', variant: 'secondary', icon: <Download className="h-4 w-4" /> },
      ]}
      summary="Settlement is arranged as a finance-grade workflow: calculate totals, review sheet, and export monthly closure."
    >
      <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Monthly calculation</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Run a final settlement using meals, bazar, rent, utility, advance, and dues.</p>
          </div>
          <Badge tone="blue"><Calculator className="h-3.5 w-3.5" /> Formula mapped</Badge>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <Input label="Month" type="month" defaultValue="2026-06" />
          <Input label="Total meal cost" defaultValue="31890" />
          <Input label="Shared utility" defaultValue="15420" />
          <Input label="Rent cycle" defaultValue="June rent" />
          <Button className="self-end"><HandCoins className="h-4 w-4" />Calculate</Button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <ResponsiveTable columns={columns} rows={settlementRows} emptyTitle="No settlement entries" />
        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><FileSpreadsheet className="h-5 w-5" /></div>
              <div>
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">Final settlement sheet</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Ready for backend calculation API and PDF generation service.</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {['Meal Total = Total Bazar / Total Meals', 'Individual Cost = Meal Consumed × Meal Rate', 'Final Amount = Paid - Total Cost'].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{item}</div>
              ))}
            </div>
            <Button className="mt-4 w-full">Generate statement</Button>
          </div>
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Download package
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">PDF, CSV, member-wise receipt, and manager summary actions are wired as frontend controls.</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Button variant="secondary"><Download className="h-4 w-4" />PDF</Button>
              <Button variant="secondary">CSV</Button>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
