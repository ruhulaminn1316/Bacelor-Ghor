import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 backdrop-blur-xl px-4 sm:px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3 min-w-0">
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200">☰</button>
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-11 w-11 rounded-2xl bg-slate-900/5 ring-1 ring-slate-200 overflow-hidden flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="Bachelor Ghor" className="h-10 w-10 object-contain" />
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-semibold text-slate-900 truncate">Bachelor Ghor</h1>
            <p className="text-xs sm:text-sm text-slate-500 truncate">Room, meal and expense management</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200">🔔</button>
        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white text-sm font-semibold shadow-sm">
            A
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-medium text-slate-900">Admin</div>
            <div className="text-xs text-slate-500">Owner</div>
          </div>
        </div>
      </div>
    </header>
  )
}
