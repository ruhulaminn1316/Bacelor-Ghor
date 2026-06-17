import React from 'react'
import { NavLink } from 'react-router-dom'
import { mainNavItems } from '../../routes/navigation'
import { cn } from '../../utils/cn'

const mobileItems = mainNavItems.slice(0, 5)

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/90 px-2 py-2 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85 lg:hidden">
      <div className="grid grid-cols-5 gap-1">
        {mobileItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center justify-center rounded-xl px-1 py-2 text-[11px] font-semibold transition',
                  isActive
                    ? 'bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300'
                    : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/80',
                )
              }
            >
              <Icon className="h-4 w-4" />
              <span className="mt-1 truncate">{item.label.split(' ')[0]}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
