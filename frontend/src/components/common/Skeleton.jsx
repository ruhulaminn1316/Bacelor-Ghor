import React from 'react'

export function SkeletonLine({ className = '' }) {
  return <div className={`h-4 rounded-lg bg-slate-100 dark:bg-slate-800 skeleton ${className}`} />
}

export function SkeletonCard() {
  return (
    <div className="card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 skeleton" />
        <SkeletonLine className="w-16" />
      </div>
      <SkeletonLine className="w-24 h-7 mt-2" />
      <SkeletonLine className="w-32" />
    </div>
  )
}

export default function Skeleton({ className = '' }) {
  return <div className={`rounded-xl bg-slate-100 dark:bg-slate-800 skeleton ${className}`} />
}
