import React from 'react'
import { BedDouble } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'

export default function RoomsSeats() {
  return (
    <ModulePage
      eyebrow="Rooms"
      title="Rooms and seats"
      description="Visualize room lists, seat allocation, empty seats, and occupancy status."
      actions={[{ label: 'Allocate seat', icon: <BedDouble className="h-4 w-4" /> }]}
      summary="Room detail cards and occupancy states are structured here for backend-driven seat mapping."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {['A-101', 'A-102', 'B-203', 'B-204', 'C-301', 'C-302'].map((room, index) => (
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
import React from 'react'
import { BedDouble, Grid2x2, SquarePlus } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'

const rooms = [
  { room: 'A-101', seats: 4, used: 4, status: 'Full' },
  { room: 'A-102', seats: 4, used: 3, status: '1 Empty' },
  { room: 'B-203', seats: 3, used: 2, status: '1 Empty' },
  { room: 'B-204', seats: 2, used: 2, status: 'Full' },
]

export default function RoomsSeats() {
  return (
    <ModulePage
      eyebrow="Rooms"
      title="Rooms & seats"
      description="Understand room layout, seat allocation, room status, and available capacity at a glance."
      stats={[
        { label: 'Rooms', value: '12', delta: 'active', tone: 'blue' },
        { label: 'Occupied', value: '34', delta: 'seats used', tone: 'emerald' },
        { label: 'Empty Seats', value: '5', delta: 'available', tone: 'amber' },
        { label: 'Full Rooms', value: '8', delta: 'locked', tone: 'rose' },
      ]}
      actions={[
        { label: 'Add room', variant: 'primary', icon: <SquarePlus className="h-4 w-4" /> },
        { label: 'Seat map', variant: 'secondary', icon: <Grid2x2 className="h-4 w-4" /> },
      ]}
      summary="Room-level occupancy data is ready for live allocation and seat expansion workflows."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {rooms.map((room) => (
          <div key={room.room} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Room</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{room.room}</div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><BedDouble className="h-5 w-5" /></div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>{room.used}/{room.seats} seats</span>
              <Badge tone={room.status === 'Full' ? 'rose' : 'emerald'}>{room.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </ModulePage>
  )
}
