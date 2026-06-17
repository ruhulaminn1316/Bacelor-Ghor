import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Bell, Home, Leaf, Receipt, Settings, Users, WalletCards, Scale } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useUi } from '../../context/UiContext'
import { cn } from '../../utils/cn'
import { initials } from '../../utils/format'

const navGroups = [
  {
    label: 'MAIN',
    items: [
      { label: 'Dashboard', to: '/dashboard', icon: Home },
      { label: 'Meals', to: '/meal-management', icon: Leaf, badge: '3' },
      { label: 'Bazar', to: '/bazar-management', icon: Receipt },
    ],
  },
  {
    label: 'FINANCE',
    items: [
      { label: 'Bills & Rent', to: '/rent-management', icon: WalletCards },
      { label: 'Settlement', to: '/settlement', icon: Scale },
    ],
  },
  {
    label: 'HOUSE',
    items: [
      { label: 'Members', to: '/members-management', icon: Users },
      { label: 'Notice Board', to: '/notice-board', icon: Bell, badge: '2' },
      { label: 'Settings', to: '/settings', icon: Settings },
    ],
  },
]

function NavItem({ item, onNavigate }) {
  const Icon = item.icon
  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'group flex h-8 items-center gap-2 rounded-md px-2.5 text-[11px] font-semibold transition',
          isActive
            ? 'bg-blue-600/40 text-white shadow-sm ring-1 ring-blue-400/10'
            : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-100',
        )
      }
    >
      <Icon className="h-3.5 w-3.5 shrink-0 text-sky-400" />
      <span className="min-w-0 flex-1 truncate">{item.label}</span>
      {item.badge ? (
        <span className="grid h-4 min-w-4 place-items-center rounded-full bg-blue-500 px-1.5 text-[10px] font-bold leading-none text-white">
          {item.badge}
        </span>
      ) : null}
    </NavLink>
  )
}

export default function Sidebar({ mobile = false }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { closeSidebar } = useUi()

  const handleLogout = () => {
    logout()
    closeSidebar()
    navigate('/login')
  }

  return (
    <aside className={cn('h-screen w-[185px] shrink-0 overflow-hidden border-r border-slate-700/80 bg-[#0b1726] text-white shadow-2xl shadow-slate-950/30', mobile ? 'flex flex-col' : 'hidden lg:sticky lg:top-0 lg:flex lg:flex-col')}>
      <div className="border-b border-slate-800/90 px-4 py-5">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-sm shadow-lg shadow-blue-500/20">
            🏠
          </div>
          <div className="text-[13px] font-bold tracking-tight text-white">
            Bachelor<span className="text-cyan-400">Hub</span>
          </div>
        </div>
      </div>

      <nav className="scrollbar-thin flex-1 overflow-y-auto px-2.5 py-4">
        <div className="space-y-5">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-600">{group.label}</div>
              <div className="space-y-1">
                {group.items.map((item) => <NavItem key={item.to} item={item} onNavigate={closeSidebar} />)}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-800/90 px-3 py-3">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-[10px] font-bold text-white">
            {initials(user?.name || 'Rahman Ali')}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[11px] font-bold leading-tight text-white">{user?.name || 'Rahman Ali'}</div>
            <div className="truncate text-[10px] leading-tight text-slate-500">Admin · Mirpur House</div>
          </div>
          <button onClick={handleLogout} className="h-7 rounded-md px-1.5 text-[10px] font-semibold text-slate-500 transition hover:bg-slate-800 hover:text-white">
            Exit
          </button>
        </div>
      </div>
    </aside>
  )
}
