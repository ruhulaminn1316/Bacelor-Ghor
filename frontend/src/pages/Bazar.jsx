import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, ShoppingCart, Upload, Receipt, Search } from 'lucide-react'
import PageHeader from '../components/common/PageHeader'
import Modal from '../components/modals/Modal'
import Badge from '../components/common/Badge'
import { mockBazar, mockMembers } from '../utils/mockData'
import { formatDate, formatCurrency } from '../utils/helpers'

const categories = ['All', 'Grocery', 'Protein', 'Utility', 'Misc']

export default function Bazar() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = mockBazar.filter(b => (activeCategory === 'All' || b.category === activeCategory) && (b.buyer.toLowerCase().includes(search.toLowerCase()) || b.items.toLowerCase().includes(search.toLowerCase())))
  const total = mockBazar.reduce((s, b) => s + b.amount, 0)

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-7xl">
      <PageHeader title="Bazar Management" subtitle="Track daily purchases and grocery expenses" actions={<button onClick={() => setModalOpen(true)} className="btn-primary flex items-center gap-2 text-sm"><Plus className="w-4 h-4" /> Add Bazar</button>} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[{ label: 'Total Bazar (May)', value: formatCurrency(total), color: 'text-brand-500' }, { label: 'This Week', value: '৳1,950', color: 'text-cyan-500' }, { label: 'Entries', value: mockBazar.length, color: 'text-violet-500' }, { label: 'With Receipt', value: mockBazar.filter(b => b.receipt).length, color: 'text-amber-500' }].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card p-4">
            <div className={`text-xl font-display font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input className="input pl-10" placeholder="Search by buyer or item..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-1.5 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl overflow-x-auto">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>{cat}</button>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="table-wrapper">
        <table className="table-base">
          <thead>
            <tr><th>Date</th><th>Buyer</th><th>Items</th><th>Category</th><th>Amount</th><th>Receipt</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {filtered.map(bazar => (
              <tr key={bazar.id}>
                <td className="whitespace-nowrap">{formatDate(bazar.date)}</td>
                <td className="font-medium text-slate-800 dark:text-slate-200">{bazar.buyer}</td>
                <td className="max-w-[200px] truncate text-slate-500">{bazar.items}</td>
                <td><span className="badge badge-blue">{bazar.category}</span></td>
                <td className="font-semibold text-slate-800 dark:text-white">{formatCurrency(bazar.amount)}</td>
                <td>{bazar.receipt ? <span className="badge badge-green"><Receipt className="w-3 h-3" /> Yes</span> : <span className="badge text-slate-400 bg-slate-50 dark:bg-slate-800">No</span>}</td>
                <td><div className="flex items-center gap-1.5"><button className="text-xs text-brand-600 dark:text-brand-400 hover:underline">Edit</button><button className="text-xs text-rose-500 hover:underline">Delete</button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Bazar Entry">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Buyer</label>
              <select className="input">{mockMembers.map(m => <option key={m.id}>{m.name}</option>)}</select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Date</label>
              <input type="date" className="input" defaultValue="2024-05-26" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Items Purchased</label>
            <textarea className="input h-20 resize-none" placeholder="e.g. Rice 5kg, Oil 1L, Vegetables..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Category</label>
              <select className="input">{categories.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}</select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Amount (৳)</label>
              <input type="number" className="input" placeholder="0.00" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Receipt Upload</label>
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center hover:border-brand-400 transition-colors cursor-pointer">
              <Upload className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
              <div className="text-sm text-slate-400">Click to upload or drag receipt</div>
              <div className="text-xs text-slate-400 mt-1">JPG, PNG, PDF up to 5MB</div>
            </div>
          </div>
          <div className="flex gap-3 pt-2"><button onClick={() => setModalOpen(false)} className="flex-1 btn-secondary">Cancel</button><button onClick={() => setModalOpen(false)} className="flex-1 btn-primary">Save Bazar</button></div>
        </div>
      </Modal>
    </div>
  )
}
