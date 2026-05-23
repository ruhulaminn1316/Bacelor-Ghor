import React from 'react'

export default function ModuleSection({ section }) {
  return (
    <section className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-slate-950">{section.title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
