import React from 'react'
import { Link } from 'react-router-dom'
import ModuleSection from './ModuleSection'
import { getModuleBySlug } from '../data/moduleCatalog'

export default function FeaturePage({ slug }) {
  const module = getModuleBySlug(slug)

  if (!module) {
    return (
      <div className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <h2 className="text-2xl font-semibold text-slate-950">Feature not found</h2>
        <Link to="/modules" className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
          Back to modules
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <Link to="/modules" className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              Back to all modules
            </Link>
            <div className={`h-2 w-24 rounded-full bg-gradient-to-r ${module.color}`} />
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{module.title}</h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{module.summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-slate-950 p-4 text-white ring-1 ring-slate-900/10">
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Category</div>
              <div className="mt-2 text-lg font-semibold">{module.category}</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Status</div>
              <div className="mt-2 text-lg font-semibold">{module.status}</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Metrics</div>
              <div className="mt-2 text-lg font-semibold">{module.metrics.length}</div>
            </div>
            <div className="rounded-2xl bg-emerald-400/15 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-100">Focus</div>
              <div className="mt-2 text-lg font-semibold">Implementation ready</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        {module.sections.map((section) => (
          <ModuleSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  )
}
