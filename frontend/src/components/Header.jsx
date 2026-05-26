import React from 'react'

export default function Header() {
  const onAvatarError = (e) => { e.target.src = '/avatar-fallback.png' }

  return (
    <header className="sticky top-0 z-20 bg-transparent px-4 sm:px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4 min-w-0">
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">☰</button>
        <div className="relative w-full max-w-2xl">
          <input placeholder="Search anything... (Ctrl + K)" className="w-full rounded-3xl bg-white/5 px-4 py-2 pr-12 text-sm outline-none" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">🔔</button>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">💬</button>
        <div className="flex items-center gap-3 rounded-3xl bg-white/6 px-3 py-2 ring-1 ring-white/10">
          <img src="/avatar.png" onError={onAvatarError} alt="User" className="h-9 w-9 rounded-full object-cover" />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-medium">Rakib Hasan</div>
            <div className="text-xs opacity-80">Admin</div>
          </div>
        </div>
      </div>
    </header>
  )
}
