import React from 'react'
import { UserCircle2 } from 'lucide-react'
import ModulePage from './_shared/ModulePage'

export default function UserProfile() {
  return (
    <ModulePage
      eyebrow="Profile"
      title="User profile"
      description="Review personal information, job or academic info, emergency contact, address, and profile completion."
      actions={[{ label: 'Edit profile', icon: <UserCircle2 className="h-4 w-4" /> }]}
      summary="Profile content is wired as a structured page so you can later bind it to backend user data."
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="h-48 rounded-[1.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
          <div className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">Rakib Hasan</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">Admin · BachelorGhor</div>
        </div>
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Profile completion</h3>
          <div className="mt-4 h-3 rounded-full bg-slate-200 dark:bg-slate-800">
            <div className="h-3 w-[76%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">76% complete</p>
        </div>
      </div>
    </ModulePage>
  )
}
import React from 'react'
import { MapPin, Phone, Mail, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'

export default function UserProfile() {
  return (
    <ModulePage
      eyebrow="Profile"
      title="User profile"
      description="A detailed member profile with personal info, academic/job data, emergency contact, address, and completion status."
      summary="This profile screen is structured for backend-driven user management, yet already feels like a real SaaS profile page."
    >
      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-5 text-white">
            <div className="text-sm opacity-80">Profile completion</div>
            <div className="mt-2 text-3xl font-semibold">78%</div>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70"><div className="text-xs text-slate-500">Personal info</div><div className="mt-1 font-medium text-slate-950 dark:text-white">Rakib Hasan</div></div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70"><div className="text-xs text-slate-500">Room</div><div className="mt-1 font-medium text-slate-950 dark:text-white">A-101</div></div>
          </div>
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
