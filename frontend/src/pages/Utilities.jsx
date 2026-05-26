import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Zap, Droplets, Flame, Wifi } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import PageHeader from '../components/common/PageHeader'
import Modal from '../components/modals/Modal'
import Badge from '../components/common/Badge'
import { mockUtilities, utilityTrendData } from '../utils/mockData'
import { formatDate, formatCurrency } from '../utils/helpers'

const utilityIcons = { Electricity: Zap, Water: Droplets, Gas: Flame, Internet: Wifi }
const utilityColors = { Electricity: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20', Water: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20', Gas: 'text-rose-500 bg-rose-50 dark:bg-rose-900/20', Internet: 'text-violet-500 bg-violet-50 dark:bg-violet-900/20' }

export default function Utilities() {
  const [modalOpen, setModalOpen] = useState(false)
  const total = mockUtilities.reduce((s, u) => s + u.amount, 0)

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl">
      <PageHeader title="Utility Bills" subtitle="Track electricity, water, gas and internet bills" actions={<button onClick={() => setModalOpen(true)} className="btn-primary flex items-center gap-2 text-sm"><Plus className="w-4 h-4" /> Add Bill</button>} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {mockUtilities.map((u, i) => {
          const Icon = utilityIcons[u.type]
          const [textColor, bgColor] = utilityColors[u.type].split(' ')
          return (
            <motion.div key={u.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card p-4 hover:border-brand-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-xl ${bgColor} flex items-center justify-center`}>{Icon && <Icon className={`w-4.5 h-4.5 ${textColor}`} style={{ width: 18, height: 18 }} />}</div>
                <Badge status={u.status} />
              </div>
              <div className={`text-xl font-display font-bold ${textColor}`}>{formatCurrency(u.amount)}</div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">{u.type}</div>
              <div className="text-xs text-slate-400 mt-0.5">{u.provider}</div>
              {u.unit && <div className="text-xs text-slate-400 mt-0.5">{u.unit} units</div>}
              <div className="text-xs text-slate-400 mt-1">Due: {formatDate(u.dueDate)}</div>
            </motion.div>
          )
        })}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="card p-4 flex items-center gap-4 bg-gradient-to-r from-slate-50 to-slate-50/50 dark:from-slate-800/50 dark:to-slate-800/30">
        <div className="flex-1">
          <div className="text-sm text-slate-500 dark:text-slate-400">Total Utility Cost — May 2024</div>
          <div className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">{formatCurrency(total)}</div>
        </div>
        <div className="text-right"><div className="text-xs text-slate-400">Per member</div><div className="text-lg font-bold text-brand-500">৳{Math.round(total / 6).toLocaleString()}</div></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="card p-5">
        <div className="font-display font-semibold text-slate-900 dark:text-white mb-4">Utility Cost Trend</div>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={utilityTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-slate-100 dark:text-slate-800" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="electricity" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} name="Electricity" />
            <Line type="monotone" dataKey="water" stroke="#06b6d4" strokeWidth={2} dot={{ r: 3 }} name="Water" />
            <Line type="monotone" dataKey="gas" stroke="#f43f5e" strokeWidth={2} dot={{ r: 3 }} name="Gas" />
            <Line type="monotone" dataKey="internet" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} name="Internet" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="table-wrapper">
        <table className="table-base">
          <thead><tr><th>Type</th><th>Provider</th><th>Month</th><th>Amount</th><th>Due Date</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>{mockUtilities.map(u => {
            const Icon = utilityIcons[u.type]
            const [textColor] = utilityColors[u.type].split(' ')
            return (<tr key={u.id}><td><div className="flex items-center gap-2">{Icon && <Icon className={`w-4 h-4 ${textColor}`} />}<span className="font-medium text-slate-800 dark:text-slate-200">{u.type}</span></div></td><td className="text-slate-500">{u.provider}</td><td className="text-slate-500">{u.month}</td><td className="font-semibold text-slate-800 dark:text-white">{formatCurrency(u.amount)}</td><td className="text-slate-500">{formatDate(u.dueDate)}</td><td><Badge status={u.status} /></td><td><div className="flex gap-1.5">{u.status !== 'Paid' && <button className="text-xs text-brand-600 dark:text-brand-400 hover:underline">Mark Paid</button>}<button className="text-xs text-slate-400 hover:underline">Edit</button></div></td></tr>)
          })}</tbody>
        </table>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Utility Bill">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Type</label><select className="input"><option>Electricity</option><option>Water</option><option>Gas</option><option>Internet</option></select></div><div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Provider</label><input type="text" className="input" placeholder="e.g. BPDB" /></div></div>
          <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Amount (৳)</label><input type="number" className="input" placeholder="0" /></div><div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Units (optional)</label><input type="number" className="input" placeholder="0" /></div></div>
          <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Month</label><input type="month" className="input" defaultValue="2024-05" /></div><div><label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Due Date</label><input type="date" className="input" /></div></div>
          <div className="flex gap-3 pt-2"><button onClick={() => setModalOpen(false)} className="flex-1 btn-secondary">Cancel</button><button onClick={() => setModalOpen(false)} className="flex-1 btn-primary">Save Bill</button></div>
        </div>
      </Modal>
    </div>
  )
}
