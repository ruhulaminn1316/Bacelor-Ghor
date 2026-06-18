import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { WalletCards, Zap, Droplets, Flame, Wifi, Search, ReceiptText, CalendarClock } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import useLocalStorageState from '../hooks/useLocalStorageState'

const rows = [
  { name: 'Rakib Hasan', room: 'A-101', amount: '৳0', status: 'Paid' },
  { name: 'Sohan Ahmed', room: 'A-102', amount: '৳860', status: 'Due' },
  { name: 'Nayeem Islam', room: 'B-203', amount: '৳340', status: 'Partial' },
  { name: 'Jahidul Karim', room: 'B-204', amount: '৳120', status: 'Paid' },
]

export default function RentManagementView() {
  const [rentRows, setRentRows] = useLocalStorageState('bh-rent-payments', rows)
  const [form, setForm] = useState({ member: '', rent: '4500', paid: '4500' })

  const columns = [
    { key: 'name', label: 'Member' },
    { key: 'room', label: 'Room' },
    { key: 'amount', label: 'Due' },
    { key: 'status', label: 'Status', render: (row) => <Badge tone={row.status === 'Paid' ? 'emerald' : row.status === 'Due' ? 'rose' : 'amber'}>{row.status}</Badge> },
  ]

  const handleSavePayment = () => {
    if (!form.member.trim()) {
      toast.error('Member name required')
      return
    }

    const due = Math.max(Number(form.rent || 0) - Number(form.paid || 0), 0)
    setRentRows((current) => [
      { name: form.member.trim(), room: 'New', amount: `৳${due.toLocaleString()}`, status: due === 0 ? 'Paid' : 'Partial' },
      ...current,
    ])
    setForm({ member: '', rent: '4500', paid: '4500' })
    toast.success('Payment saved')
  }

  return (
    <ModulePage
      eyebrow="Rent workflow"
      title="Rent management"
      description="See monthly collection, due status, payment history, and room-wise dues."
      actions={[{ label: 'Collect rent', icon: <WalletCards className="h-4 w-4" /> }]}
      stats={[
        { label: 'Collected', value: '৳45,000', delta: '92% complete', tone: 'emerald' },
        { label: 'Pending Due', value: '৳4,460', delta: '4 members', tone: 'rose' },
        { label: 'Advance Paid', value: '৳2,350', delta: '3 members', tone: 'blue' },
        { label: 'Late Fees', value: '৳480', delta: 'this month', tone: 'amber' },
      ]}
      summary="Monthly rent tracking includes utility bill cards, due indicators, and payment status workflow blocks."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Monthly rent tracking</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Record rent, advance, due, and payment mode per member.</p>
            </div>
            <Badge tone="blue"><CalendarClock className="h-3.5 w-3.5" /> June 2026</Badge>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <Input label="Member" placeholder="Search member" value={form.member} onChange={(event) => setForm({ ...form, member: event.target.value })} />
            <Input label="Rent amount" type="number" value={form.rent} onChange={(event) => setForm({ ...form, rent: event.target.value })} />
            <Input label="Paid amount" type="number" value={form.paid} onChange={(event) => setForm({ ...form, paid: event.target.value })} />
            <Button className="self-end" onClick={handleSavePayment}><WalletCards className="h-4 w-4" />Save payment</Button>
          </div>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white">
            <Search className="h-5 w-5 text-blue-500" />
            Due tracking
          </div>
          <div className="mt-4 space-y-3">
            {['Overdue: 2 members', 'Partial: 4 members', 'Advance: 3 members'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm dark:bg-slate-900/70">
                <span className="font-medium text-slate-700 dark:text-slate-200">{item}</span>
                <Badge tone={item.startsWith('Overdue') ? 'rose' : item.startsWith('Partial') ? 'amber' : 'emerald'}>View</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <ResponsiveTable columns={columns} rows={rentRows} emptyTitle="No rent entries" />

        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Utility bills</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {[
                ['Electricity', '৳1,480', Zap],
                ['Water', '৳320', Droplets],
                ['Gas', '৳1,250', Flame],
                ['Internet', '৳1,200', Wifi],
              ].map(([name, amount, Icon]) => (
                <div key={name} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                    <Icon className="h-4 w-4 text-blue-500" />
                    {name}
                  </div>
                  <div className="text-sm font-semibold text-slate-950 dark:text-white">{amount}</div>
                </div>
              ))}
            </div>
            <Button variant="secondary" className="mt-4 w-full" onClick={() => toast.success('Utility bill form ready')}><ReceiptText className="h-4 w-4" />Add utility bill</Button>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">Payment status</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-emerald-700 dark:text-emerald-200">Paid members: 18</div>
              <div className="rounded-2xl bg-amber-500/10 px-4 py-3 text-amber-700 dark:text-amber-200">Partial payments: 4</div>
              <div className="rounded-2xl bg-rose-500/10 px-4 py-3 text-rose-700 dark:text-rose-200">Due members: 2</div>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
