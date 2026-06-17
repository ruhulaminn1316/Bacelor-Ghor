import React from 'react'
import { UserPlus, UserMinus, ShieldCheck, Home, Search, Phone, Mail } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { members } from '../services/mockData'
import Badge from '../components/common/Badge'
import ResponsiveTable from '../components/tables/ResponsiveTable'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

export default function MembersManagementView() {
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
      description="Manage member table, roles, seat allocation, profile status, and onboarding flows."
      actions={[
        { label: 'Add member', icon: <UserPlus className="h-4 w-4" /> },
        { label: 'Remove member', variant: 'secondary', icon: <UserMinus className="h-4 w-4" /> },
      ]}
      stats={[
        { label: 'Active', value: '22', delta: 'members', tone: 'emerald' },
        { label: 'Away', value: '2', delta: 'members', tone: 'amber' },
        { label: 'Admins', value: '3', delta: 'roles', tone: 'blue' },
        { label: 'Pending', value: '1', delta: 'invitation', tone: 'rose' },
      ]}
      summary="Member list, profile cards, add/remove actions, and role-level statistics are ready for API-backed workflows."
    >
      <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Add member</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Invite a new member with room, role, contact, and starting balance.</p>
          </div>
          <Badge tone="emerald">Invitation-ready</Badge>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <Input label="Full name" placeholder="Member name" />
          <Input label="Phone" placeholder="+880..." />
          <Input label="Room / Seat" placeholder="A-102 / S3" />
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Role
            <select className="h-11 rounded-2xl border border-slate-200 bg-white/90 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100">
              <option>Member</option>
              <option>Manager</option>
              <option>Treasurer</option>
            </select>
          </label>
          <Button className="self-end"><UserPlus className="h-4 w-4" />Invite</Button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-4 shadow-soft-lg">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 dark:border-slate-700 dark:bg-slate-900/70">
              <Search className="h-4 w-4 text-slate-400" />
              <input className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none dark:text-white" placeholder="Search member list" />
            </div>
          </div>
          <ResponsiveTable columns={columns} rows={members} emptyTitle="No members yet" />
        </div>

        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><ShieldCheck className="h-5 w-5" /></div>
              <div>
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">Member profile</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">View personal details, emergency contact, and role access.</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70"><Mail className="h-4 w-4 text-blue-500" /> rakib@bachelorhub.app</div>
              <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70"><Phone className="h-4 w-4 text-emerald-500" /> +880 1700 000000</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Role and permission map</div>
            </div>
            <Button variant="secondary" className="mt-4 w-full">Open full profile</Button>
          </div>

          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
              <Home className="h-4 w-4 text-emerald-500" />
              Member statistics
            </div>
            <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Room occupancy: 88%</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Average due per member: ৳210</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Avg meal per day: 2.7</div>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
