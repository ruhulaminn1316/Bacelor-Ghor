import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      'flex items-center gap-3 rounded-2xl px-4 py-3 transition ' + (isActive ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/70 hover:text-slate-900')
    }
  >
    <span className="h-2 w-2 rounded-full bg-current opacity-60" />
    {children}
  </NavLink>
)

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-80 md:flex-col bg-gradient-to-b from-primary to-primaryLight text-white shadow-soft-lg">
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
    </aside>
  )
}
