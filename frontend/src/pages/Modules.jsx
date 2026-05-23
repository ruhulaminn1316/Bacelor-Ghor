import React from 'react'
import ModuleCard from '../components/ModuleCard'
import { moduleCatalog, moduleCategories } from '../data/moduleCatalog'

export default function Modules() {
  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">All modules</div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A full product map for the mess management platform.
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Every requested feature has been grouped into a module card so the product can be implemented in phases without losing the full scope.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-slate-950 p-4 text-white ring-1 ring-slate-900/10">
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Modules</div>
              <div className="mt-2 text-3xl font-semibold">{moduleCatalog.length}</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Categories</div>
              <div className="mt-2 text-3xl font-semibold">{moduleCategories.length}</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Core</div>
              <div className="mt-2 text-3xl font-semibold">08</div>
            </div>
            <div className="rounded-2xl bg-emerald-400/15 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-100">Phase</div>
              <div className="mt-2 text-3xl font-semibold">Roadmap</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {moduleCatalog.map((module) => (
          <ModuleCard key={module.slug} module={module} />
        ))}
      </div>
    </div>
  )
}
