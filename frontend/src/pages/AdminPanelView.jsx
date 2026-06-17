import React from 'react'
import { FileBarChart2, Settings, ShieldCheck, Users, Search, SlidersHorizontal } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import Button from '../components/common/Button'

const users = [
  { name: 'Rakib Hasan', role: 'Super Admin', status: 'Active', lastLogin: '2 min ago' },
  { name: 'Sohan Ahmed', role: 'Manager', status: 'Active', lastLogin: '18 min ago' },
  { name: 'Nayeem Islam', role: 'Treasurer', status: 'Limited', lastLogin: '1 hour ago' },
  { name: 'Jahidul Karim', role: 'Member', status: 'Suspended', lastLogin: 'Yesterday' },
]

export default function AdminPanelView() {
  const columns = [
    { key: 'name', label: 'User' },
    { key: 'role', label: 'Role' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <Badge tone={row.status === 'Active' ? 'emerald' : row.status === 'Limited' ? 'amber' : 'rose'}>
          {row.status}
        </Badge>
      ),
    },
    { key: 'lastLogin', label: 'Last Login' },
  ]

  return (
    <ModulePage
      eyebrow="System control"
      title="Admin panel"
      description="Centralized user management, member controls, expense audit, report governance, and system settings."
      stats={[
        { label: 'Total Users', value: '48', delta: 'all roles', tone: 'blue' },
        { label: 'Active Members', value: '22', delta: 'verified', tone: 'emerald' },
        { label: 'Flagged Expense', value: '3', delta: 'needs review', tone: 'amber' },
        { label: 'System Alerts', value: '2', delta: 'high priority', tone: 'rose' },
      ]}
      summary="This admin workspace is structured for enterprise-style governance with clear control surfaces and audit-ready sections."
    >
      <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex rounded-2xl bg-slate-100 p-1 text-xs font-semibold dark:bg-slate-800">
            {['Users', 'Members', 'Expenses', 'Reports', 'System'].map((tab, index) => (
              <button key={tab} className={`rounded-xl px-4 py-2 ${index === 0 ? 'bg-white text-slate-950 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-500 dark:text-slate-300'}`}>{tab}</button>
            ))}
          </div>
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 md:max-w-md dark:border-slate-700 dark:bg-slate-900/70">
            <Search className="h-4 w-4 text-slate-400" />
            <input className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none dark:text-white" placeholder="Search admin records" />
          </div>
          <Button variant="secondary"><SlidersHorizontal className="h-4 w-4" />Policies</Button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <ResponsiveTable columns={columns} rows={users} emptyTitle="No user data" />
        <div className="space-y-4">
          {[
            ['User management', 'Invite, suspend, role assignment', Users],
            ['Expense management', 'Audit anomalies and high-value entries', FileBarChart2],
            ['System settings', 'Global preferences and module toggles', Settings],
          ].map(([title, info, Icon]) => (
            <div key={title} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><Icon className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-base font-semibold text-slate-950 dark:text-white">{title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{info}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Security and compliance
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">2FA, password policies, and event logs are ready for backend-driven enforcement.</p>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
