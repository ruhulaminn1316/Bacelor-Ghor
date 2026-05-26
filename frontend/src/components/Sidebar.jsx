import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
    }
  >
    <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
    <span className="truncate">{children}</span>
  </NavLink>
)

export default function Sidebar() {
  const { logout, user } = useAuth()
  const navigate = useNavigate()
  return (
    <aside className="relative hidden md:flex md:w-[260px] md:flex-col bg-gradient-to-b from-[#2b1462] to-[#3b1f6a] text-white shadow-soft-lg">
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-3xl bg-white/10 ring-1 ring-white/20 overflow-hidden flex items-center justify-center">
            <img src="/logo.png" alt="Bachelor Ghor logo" className="h-12 w-12 object-contain" />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-wide">BachelorGhor</div>
            <div className="text-xs opacity-90">Complete mess & life management</div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <nav className="flex flex-col gap-2">
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/security">Security</NavItem>
          <NavItem to="/meals">Meal Management</NavItem>
          <NavItem to="/expenses">Expenses</NavItem>
          <NavItem to="/members">Members</NavItem>
          <NavItem to="/modules">Modules</NavItem>
        </nav>

        <div className="mt-6 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
          <div className="text-sm font-medium">Current Cycle</div>
          <div className="mt-1 text-2xl font-semibold">May 2026</div>
          <p className="mt-2 text-sm opacity-90">Meals, expenses and balances overview</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center gap-3 rounded-xl bg-white/6 p-3 hover:bg-white/10 transition">
          <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm">{user?.first_name?.charAt(0) || 'G'}</div>
          <div className="flex-1 text-sm">
            <div className="font-medium text-gray-100">{user?.first_name || user?.name || 'Guest'}</div>
            <div className="text-xs text-gray-300">{user?.email || ''}</div>
          </div>
          <button
            onClick={() => { logout(); navigate('/login') }}
            className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  )
}
