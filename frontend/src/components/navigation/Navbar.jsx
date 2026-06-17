import React, { useState } from 'react'
import { Bell, ChevronDown, Menu, MoonStar, SunMedium } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useUi } from '../../context/UiContext'
import { useAuth } from '../../context/AuthContext'
import { initials } from '../../utils/format'
import Button from '../common/Button'

export default function Navbar({ title, subtitle }) {
  const { toggleTheme, theme } = useTheme()
  const { openSidebar } = useUi()
  const { user } = useAuth()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-slate-950/60">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Button variant="ghost" size="sm" className="lg:hidden" onClick={openSidebar}>
          <Menu className="h-4 w-4" />
        </Button>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300">BachelorHub SaaS</p>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="truncate text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">{title}</h1>
            {subtitle ? <span className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</span> : null}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={toggleTheme}>
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="relative">
            <button onClick={() => setOpenMenu((current) => !current)} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-semibold text-white">
                {initials(user?.name)}
              </div>
              <div className="hidden min-w-0 sm:block">
                <div className="truncate text-sm font-semibold text-slate-950 dark:text-white">{user?.name || 'Rakib Hasan'}</div>
                <div className="truncate text-xs text-slate-500 dark:text-slate-400">{user?.role || 'Admin'}</div>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>

            {openMenu ? (
              <div className="absolute right-0 top-[calc(100%+10px)] w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft-lg dark:border-slate-800 dark:bg-slate-900">
                <Link to="/profile" className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">Profile</Link>
                <Link to="/settings" className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">Settings</Link>
                <Link to="/activity-logs" className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">Activity logs</Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}
