import React from 'react'
import { WalletCards } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'

export default function RentManagement() {
  return (
    <ModulePage
      eyebrow="Rent workflow"
      title="Rent management"
      description="See monthly collection, due status, payment history, and room-wise dues."
      actions={[{ label: 'Collect rent', icon: <WalletCards className="h-4 w-4" /> }]}
      summary="This page is ready for payment history tables, room-wise aggregation, and member due breakdowns."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ['Collected', '৳36,000', 'emerald'],
          ['Pending', '৳12,460', 'amber'],
          ['Members cleared', '18/24', 'blue'],
        ].map(([label, value, tone]) => (
          <div key={label} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <Badge tone={tone}>{label}</Badge>
            <div className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{value}</div>
          </div>
        ))}
      </div>
    </ModulePage>
  )
}
import React from 'react'
import { WalletCards, Landmark, BadgeDollarSign } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import ResponsiveTable from '../components/tables/ResponsiveTable'

const rentRows = [
  { name: 'Rakib Hasan', room: 'A-101', amount: '৳0', status: 'Paid' },
  { name: 'Sohan Ahmed', room: 'A-102', amount: '৳860', status: 'Due' },
  { name: 'Nayeem Islam', room: 'B-203', amount: '৳340', status: 'Partial' },
  { name: 'Jahidul Karim', room: 'B-204', amount: '৳120', status: 'Paid' },
]

export default function RentManagement() {
  const columns = [
    { key: 'name', label: 'Member' },
    { key: 'room', label: 'Room' },
    { key: 'amount', label: 'Due' },
    { key: 'status', label: 'Status', render: (row) => <Badge tone={row.status === 'Paid' ? 'emerald' : row.status === 'Due' ? 'rose' : 'amber'}>{row.status}</Badge> },
  ]

  return (
    <ModulePage
      eyebrow="Rent collection"
      title="Rent management"
      description="Handle rent collection, due tracking, payment history, monthly summaries, room-wise rent, and member-wise dues."
      stats={[
        { label: 'Collected', value: '৳45,000', delta: '92% complete', tone: 'emerald' },
        { label: 'Pending Due', value: '৳4,460', delta: '4 members', tone: 'rose' },
        { label: 'Average Rent', value: '৳3,800', delta: 'room average', tone: 'blue' },
        { label: 'Late Payments', value: '2', delta: 'this month', tone: 'amber' },
      ]}
      actions={[
        { label: 'Collect rent', variant: 'primary', icon: <WalletCards className="h-4 w-4" /> },
        { label: 'Payment history', variant: 'secondary', icon: <Landmark className="h-4 w-4" /> },
      ]}
      summary="Rent flows are laid out for fast collection, dues analysis, and room-level settlement in a single workspace."
    >
      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <ResponsiveTable columns={columns} rows={rentRows} emptyTitle="No rent entries" />
        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"><BadgeDollarSign className="h-5 w-5" /></div>
              <div>
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">Monthly summary</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Projected collection and due status</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ['Room A', '৳14,200'],
                ['Room B', '৳16,800'],
                ['Room C', '৳13,500'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">
                  <div className="text-sm font-medium text-slate-900 dark:text-white">{label}</div>
                  <div className="font-semibold text-slate-950 dark:text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
