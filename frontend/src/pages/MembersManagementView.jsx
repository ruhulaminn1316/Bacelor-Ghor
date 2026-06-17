import React from 'react'
import { UserPlus } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import { members } from '../services/mockData'
import Badge from '../components/common/Badge'

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
      actions={[{ label: 'Add member', icon: <UserPlus className="h-4 w-4" /> }]}
      table={{ columns, rows: members }}
    />
  )
}
