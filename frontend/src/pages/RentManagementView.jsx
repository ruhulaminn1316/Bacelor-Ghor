import React from 'react'
import { WalletCards } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'

const rows = [
  { name: 'Rakib Hasan', room: 'A-101', amount: '৳0', status: 'Paid' },
  { name: 'Sohan Ahmed', room: 'A-102', amount: '৳860', status: 'Due' },
  { name: 'Nayeem Islam', room: 'B-203', amount: '৳340', status: 'Partial' },
  { name: 'Jahidul Karim', room: 'B-204', amount: '৳120', status: 'Paid' },
]

export default function RentManagementView() {
  const columns = [
    { key: 'name', label: 'Member' },
    { key: 'room', label: 'Room' },
    { key: 'amount', label: 'Due' },
    { key: 'status', label: 'Status', render: (row) => <Badge tone={row.status === 'Paid' ? 'emerald' : row.status === 'Due' ? 'rose' : 'amber'}>{row.status}</Badge> },
  ]

  return (
    <ModulePage
      eyebrow="Rent workflow"
      title="Rent management"
      description="See monthly collection, due status, payment history, and room-wise dues."
      actions={[{ label: 'Collect rent', icon: <WalletCards className="h-4 w-4" /> }]}
      table={{ columns, rows }}
    />
  )
}
