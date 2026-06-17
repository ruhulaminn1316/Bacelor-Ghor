import React from 'react'
import { UserPlus } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { members } from '../services/mockData'
import Badge from '../components/common/Badge'

export default function MembersManagement() {
  const table = {
    columns: [
      { key: 'name', label: 'Member' },
      { key: 'room', label: 'Room' },
      { key: 'role', label: 'Role' },
      { key: 'status', label: 'Status', render: (row) => <Badge tone={row.status === 'Active' ? 'emerald' : 'amber'}>{row.status}</Badge> },
      { key: 'due', label: 'Due' },
    ],
    rows: members,
  }

  return (
    <ModulePage
      eyebrow="Members"
      title="Members management"
      description="Manage member table, roles, seat allocation, profile status, and onboarding flows."
      actions={[{ label: 'Add member', icon: <UserPlus className="h-4 w-4" /> }]}
      summary="Member management supports role assignment, status badges, and room allocation data from the backend."
      table={table}
    />
  )
}
import React from 'react'
import { UserPlus2, ShieldUser, House } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import { members } from '../services/mockData'

export default function MembersManagement() {
  const columns = [
    { key: 'name', label: 'Member' },
    { key: 'room', label: 'Room' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status', render: (row) => <Badge tone={row.status === 'Active' ? 'emerald' : 'amber'}>{row.status}</Badge> },
    { key: 'due', label: 'Due' },
  ]

  return (
    <ModulePage
      eyebrow="Members"
      title="Members management"
      description="Keep member records, roles, room allocation, status, and profile insights organized in one table-first UI."
      stats={[
        { label: 'Active', value: '22', delta: 'members', tone: 'emerald' },
        { label: 'Away', value: '2', delta: 'members', tone: 'amber' },
        { label: 'Admins', value: '3', delta: 'roles', tone: 'blue' },
        { label: 'Pending', value: '1', delta: 'invitation', tone: 'rose' },
      ]}
      actions={[
        { label: 'Add member', variant: 'primary', icon: <UserPlus2 className="h-4 w-4" /> },
        { label: 'Room allocation', variant: 'secondary', icon: <House className="h-4 w-4" /> },
      ]}
      summary="Members, roles, and rooms are designed around quick scanning and immediate admin actions."
    >
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <ResponsiveTable columns={columns} rows={members} emptyTitle="No members yet" />
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><ShieldUser className="h-5 w-5" /></div>
            <div>
              <h3 className="text-base font-semibold text-slate-950 dark:text-white">Member profile</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Role, contact, room, and status details</p>
            </div>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Academic / job info</div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Emergency contact</div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Address and profile completion</div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
