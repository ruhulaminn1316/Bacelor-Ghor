import React from 'react'
import { MoonStar, Shield, BellRing, Languages } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Button from '../components/common/Button'

export default function Settings() {
  return (
    <ModulePage
      eyebrow="Preferences"
      title="Settings"
      description="Profile settings, theme mode, security, notification, and language preferences."
      summary="Settings is prepared as a control panel for user profile, security, notification, and localization features."
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
            <Button className="mt-4" variant="secondary">Configure</Button>
          </div>
        ))}
      </div>
    </ModulePage>
  )
}
import React, { useState } from 'react'
import { Bell, ShieldCheck, Languages, SunMoon, UserCog } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import { useTheme } from '../context/ThemeContext'

export default function Settings() {
  const { theme, toggleTheme } = useTheme()
  const [toggles, setToggles] = useState({ email: true, push: false, sms: false })

  const switchItem = (key) => setToggles((current) => ({ ...current, [key]: !current[key] }))

  return (
    <ModulePage
      eyebrow="Settings"
      title="Settings"
      description="Manage profile settings, security settings, theme, notifications, and language preferences."
      summary="This panel is intentionally modular so backend-backed preferences can be dropped in later without a redesign."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg space-y-4">
          <div className="flex items-center gap-3"><UserCog className="h-5 w-5 text-blue-500" /><h3 className="text-lg font-semibold text-slate-950 dark:text-white">Profile settings</h3></div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">Display name</div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">Email address</div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70 sm:col-span-2">Avatar upload</div>
          </div>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg space-y-4">
          <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-emerald-500" /><h3 className="text-lg font-semibold text-slate-950 dark:text-white">Security settings</h3></div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">Password change and 2FA controls</div>
          <Badge tone="emerald">Session security ready</Badge>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg space-y-4">
          <div className="flex items-center gap-3"><SunMoon className="h-5 w-5 text-amber-500" /><h3 className="text-lg font-semibold text-slate-950 dark:text-white">Theme</h3></div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/70">
            <span className="text-sm">Current theme: {theme}</span>
            <Button size="sm" onClick={toggleTheme}>Toggle theme</Button>
          </div>
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg space-y-4">
          <div className="flex items-center gap-3"><Bell className="h-5 w-5 text-blue-500" /><h3 className="text-lg font-semibold text-slate-950 dark:text-white">Notifications</h3></div>
          {Object.entries(toggles).map(([key, value]) => (
            <button key={key} onClick={() => switchItem(key)} className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm dark:bg-slate-900/70">
              <span className="capitalize">{key} alerts</span>
              <span>{value ? 'On' : 'Off'}</span>
            </button>
          ))}
        </div>

        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg space-y-4 lg:col-span-2">
          <div className="flex items-center gap-3"><Languages className="h-5 w-5 text-cyan-500" /><h3 className="text-lg font-semibold text-slate-950 dark:text-white">Language</h3></div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['English', 'বাংলা', 'Hindi'].map((item) => <Badge key={item} tone={item === 'English' ? 'blue' : 'slate'}>{item}</Badge>)}
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
