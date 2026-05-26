import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, CreditCard, CheckCircle, Clock, AlertTriangle } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import Modal from '../components/modals/Modal'
import Badge from '../components/common/Badge'
import { mockRent } from '../utils/mockData'
import { formatDate, formatCurrency } from '../utils/helpers'

export default function Rent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeMonth, setActiveMonth] = useState('May 2024')

  const paid = mockRent.filter(r => r.status === 'Paid')
  const pending = mockRent.filter(r => r.status === 'Pending')
  const overdue = mockRent.filter(r => r.status === 'Overdue')
  const totalCollected = paid.reduce((s, r) => s + r.amount, 0)
  const totalPending = [...pending, ...overdue].reduce((s, r) => s + r.amount, 0)

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl">
      <PageHeader title="Rent Management" subtitle="Track monthly rent collection and dues" actions={<button onClick={() => setModalOpen(true)} className="btn-primary flex items-center gap-2 text-sm"><Plus className="w-4 h-4" /> Record Payment</button>} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[ { label: 'Collected', value: formatCurrency(totalCollected), icon: CheckCircle, color: 'text-brand-500', bg: 'bg-brand-50 dark:bg-brand-900/20' }, { label: 'Pending', value: formatCurrency(totalPending), icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' }, { label: 'Overdue Members', value: overdue.length, icon: AlertTriangle, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20' }, { label: 'Total Expected', value: formatCurrency(mockRent.reduce((s, r) => s + r.amount, 0)), icon: CreditCard, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-900/20' } ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card p-4">
            <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
              <s.icon className={`w-4.5 h-4.5 ${s.color}`} style={{ width: 18, height: 18 }} />
            </div>
            <div className={`text-xl font-display font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="font-display font-semibold text-slate-900 dark:text-white">Collection Progress — {activeMonth}</div>
          <span className="text-sm font-bold text-brand-500">{Math.round((paid.length / mockRent.length) * 100)}%</span>
        </div>
        <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: `${(paid.length / mockRent.length) * 100}%` }} transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-brand-400 to-brand-500 rounded-full" />
        </div>
        <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400"><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-500" /> {paid.length} Paid</span><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> {pending.length} Pending</span><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" /> {overdue.length} Overdue</span></div>
      </motion.div>

      <div className="table-wrapper">
        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800"><span className="text-sm font-medium text-slate-700 dark:text-slate-300">Rent Details — {activeMonth}</span></div>
        <table className="table-base">
          <thead><tr><th>Member</th><th>Room</th><th>Amount</th><th>Month</th><th>Status</th><th>Paid Date</th><th>Actions</th></tr></thead>
          <tbody>{mockRent.map(rent => (<tr key={rent.id}><td className="font-medium text-slate-800 dark:text-slate-200">{rent.member}</td><td><span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{rent.room}</span></td><td className="font-semibold text-slate-800 dark:text-white">{formatCurrency(rent.amount)}</td><td className="text-slate-500">{rent.month}</td><td><Badge status={rent.status} /></td><td className="text-slate-500">{rent.paidDate ? formatDate(rent.paidDate) : '—'}</td><td><div className="flex gap-1.5">{rent.status !== 'Paid' && (<button className="text-xs text-brand-600 dark:text-brand-400 hover:underline">Mark Paid</button>)}<button className="text-xs text-slate-400 hover:underline">History</button></div></td></tr>))}</tbody>
        </table>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Record Rent Payment">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Member</label>
            <select className="input">{mockRent.map(r => <option key={r.id}>{r.member} — Room {r.room}</option>)}</select>
          </div>
          <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Amount (৳)</label><input type="number" className="input" placeholder="3500" /></div><div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Payment Date</label><input type="date" className="input" defaultValue="2024-05-26" /></div></div>
          <div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Payment Method</label><select className="input"><option>Cash</option><option>bKash</option><option>Nagad</option><option>Bank Transfer</option></select></div>
          <div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Note (optional)</label><input type="text" className="input" placeholder="Any note..." /></div>
          <div className="flex gap-3 pt-2"><button onClick={() => setModalOpen(false)} className="flex-1 btn-secondary">Cancel</button><button onClick={() => setModalOpen(false)} className="flex-1 btn-primary">Save Payment</button></div>
        </div>
      </Modal>
    </div>
  )
}
