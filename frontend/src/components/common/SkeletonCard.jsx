import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="surface rounded-[1.5rem] p-5 shadow-soft-lg">
      <div className="h-4 w-28 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div className="mt-4 h-8 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div className="mt-3 h-3 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
    </div>
  )
}
