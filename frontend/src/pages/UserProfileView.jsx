import React from 'react'
import { MapPin, Phone, Mail, BriefcaseBusiness, GraduationCap, UserCircle2 } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'

export default function UserProfileView() {
  return (
    <ModulePage
      eyebrow="Profile"
      title="User profile"
      description="Review personal information, academic/job data, emergency contact, address, and profile completion."
      actions={[{ label: 'Edit profile', icon: <UserCircle2 className="h-4 w-4" /> }]}
    >
      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="h-48 rounded-[1.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
          <div className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">Rakib Hasan</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">Admin · BachelorGhor</div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [Mail, 'Email', 'rakib@example.com'],
            [Phone, 'Phone', '+880 1711 000000'],
            [GraduationCap, 'Academic', 'Computer Science'],
            [BriefcaseBusiness, 'Job', 'Product Designer'],
            [MapPin, 'Address', 'Dhaka, Bangladesh'],
          ].map(([Icon, label, value]) => (
            <div key={label} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
              <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-blue-500" /><h3 className="text-sm font-semibold text-slate-950 dark:text-white">{label}</h3></div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{value}</p>
            </div>
          ))}
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg sm:col-span-2">
            <Badge tone="emerald">Emergency contact ready</Badge>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
