import React, { useState } from 'react'
import { MoonStar, Shield, BellRing, Languages, UserCircle2, KeyRound } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Button from '../components/common/Button'
import { useTheme } from '../context/ThemeContext'
import Badge from '../components/common/Badge'

export default function SettingsView() {
  const { theme, toggleTheme } = useTheme()
  const [toggles, setToggles] = useState({ email: true, push: false, sms: false })

  const switchItem = (key) => setToggles((current) => ({ ...current, [key]: !current[key] }))

  return (
    <ModulePage
      eyebrow="Preferences"
      title="Settings"
      description="Profile settings, theme mode, security, notification, and language preferences."
      summary="All major settings are organized into profile, password, theme, and notification control sections with reusable form shells."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {[
          ['Theme', MoonStar, 'Toggle dark and light mode'],
          ['Security', Shield, 'Password and login settings'],
          ['Notifications', BellRing, 'Push and email preferences'],
          ['Language', Languages, 'Interface language options'],
        ].map(([label, Icon, desc]) => (
          <div key={label} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><Icon className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold text-slate-950 dark:text-white">{label}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{desc}</div>
              </div>
            </div>
            <Button className="mt-4" variant="secondary" onClick={label === 'Theme' ? toggleTheme : undefined}>{label === 'Theme' ? `Current: ${theme}` : 'Configure'}</Button>
          </div>
        ))}

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
            <UserCircle2 className="h-4 w-4 text-blue-500" />
            Profile settings
          </div>
          <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Name and profile image</div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Phone and address</div>
          </div>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center gap-2 text-base font-semibold text-slate-950 dark:text-white">
            <KeyRound className="h-4 w-4 text-rose-500" />
            Password change
          </div>
          <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">Current password</div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">New password</div>
            <Button size="sm" className="mt-2">Update password</Button>
          </div>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Notification switches</h3>
            <Badge tone="blue">Live controls</Badge>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {Object.entries(toggles).map(([key, value]) => (
              <button key={key} onClick={() => switchItem(key)} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                {key}: {value ? 'On' : 'Off'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
