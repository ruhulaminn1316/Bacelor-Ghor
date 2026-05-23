import React from 'react'
import { Link } from 'react-router-dom'

export default function ModuleCard({ module }) {
  return (
    <Link
      to={`/modules/${module.slug}`}
      className="group rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm"
    >
      <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${module.color}`} />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{module.category}</div>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{module.title}</h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{module.status}</span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">{module.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {module.metrics.map((metric) => (
          <span key={metric} className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200/70">
            {metric}
          </span>
        ))}
      </div>
    </Link>
  )
}
