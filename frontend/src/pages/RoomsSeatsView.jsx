import React from 'react'
import { BedDouble } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'

const rooms = ['A-101', 'A-102', 'B-203', 'B-204', 'C-301', 'C-302']

export default function RoomsSeatsView() {
  return (
    <ModulePage
      eyebrow="Rooms"
      title="Rooms and seats"
      description="Visualize room lists, seat allocation, empty seats, and occupancy status."
      actions={[{ label: 'Allocate seat', icon: <BedDouble className="h-4 w-4" /> }]}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rooms.map((room, index) => (
          <div key={room} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Room {room}</h3>
              <Badge tone={index % 2 === 0 ? 'emerald' : 'amber'}>{index % 2 === 0 ? '2 seats open' : 'Full'}</Badge>
            </div>
            <div className="mt-4 h-40 rounded-[1.5rem] bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
          </div>
        ))}
      </div>
    </ModulePage>
  )
}
