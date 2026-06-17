import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import { useUi } from '../../context/UiContext'
import { cn } from '../../utils/cn'
import { initials } from '../../utils/format'
import { footerNavItems, mainNavItems } from '../../routes/navigation'

function NavItem({ item, onNavigate }) {
  const Icon = item.icon
  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
          isActive
            ? 'bg-white/12 text-white shadow-lg shadow-blue-900/20 ring-1 ring-white/10'
            : 'text-slate-300 hover:bg-white/8 hover:text-white',
        )
      }
    >
      <Icon className="h-4.5 w-4.5" />
      <span>{item.label}</span>
    </NavLink>
  )
}

export default function Sidebar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { closeSidebar } = useUi()

  const handleLogout = () => {
    logout()
    closeSidebar()
    navigate('/login')
  }

  return (
    <aside className="hidden h-screen w-[300px] shrink-0 border-r border-white/10 bg-slate-950/80 text-white backdrop-blur-xl lg:sticky lg:top-0 lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="grid h-12 w-12 place-items-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
          BG
        </div>
        <div>
          <div className="text-lg font-semibold tracking-tight">BachelorGhor</div>
          <div className="text-xs text-slate-400">AI-powered mess management</div>
        </div>
      </div>

      <div className="px-4">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Current cycle</div>
          <div className="mt-2 text-2xl font-semibold">June 2026</div>
          <p className="mt-2 text-sm text-slate-300">Meals, dues, utilities, and savings in one workspace.</p>
        </div>
      </div>

      <nav className="scrollbar-thin mt-5 flex-1 space-y-1 overflow-y-auto px-3 pb-6">
        {mainNavItems.map((item) => <NavItem key={item.to} item={item} onNavigate={closeSidebar} />)}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="rounded-[1.5rem] bg-white/6 p-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 font-semibold text-white">
              {initials(user?.name)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-white">{user?.name || 'Rakib Hasan'}</div>
              <div className="truncate text-xs text-slate-400">{user?.email || 'admin@bachelorghor.app'}</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {footerNavItems.slice(0, 3).map((item) => (
              <NavLink key={item.label} to={item.to} onClick={closeSidebar} className="rounded-2xl bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10">
                {item.label}
              </NavLink>
            ))}
          </div>
          <button onClick={handleLogout} className="mt-3 w-full rounded-2xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/16">
            Logout
          </button>
        </div>
      </div>
    </aside>
  )
}
