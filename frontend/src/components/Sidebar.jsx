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
    <aside className="hidden md:flex md:w-72 md:flex-col border-r border-white/70 bg-slate-950 text-white shadow-[8px_0_30px_rgba(15,23,42,0.08)]">
      <div className="p-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-white/10 ring-1 ring-white/15 overflow-hidden flex items-center justify-center">
            <img src="/logo.png" alt="Bachelor Ghor logo" className="h-11 w-11 object-contain" />
          </div>
          <div>
            <div className="text-base font-semibold tracking-wide">Bachelor Ghor</div>
            <div className="text-xs text-slate-300">Smart room management</div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <nav className="flex flex-col gap-2">
          <NavItem to="/security">Security</NavItem>
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/modules">Modules</NavItem>
          <NavItem to="/members">Members</NavItem>
          <NavItem to="/meals">Meals</NavItem>
          <NavItem to="/expenses">Expenses</NavItem>
        </nav>

        <div className="mt-6 rounded-3xl bg-white/8 p-4 ring-1 ring-white/10">
          <div className="text-sm font-medium text-white">Current cycle</div>
          <div className="mt-1 text-2xl font-semibold text-white">May 2026</div>
          <p className="mt-2 text-sm text-slate-300">Meal count, expenses, and balance synced in one place.</p>
        </div>
      </div>
    </aside>
  )
}
