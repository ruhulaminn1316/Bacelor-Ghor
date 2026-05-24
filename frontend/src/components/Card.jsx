import React from 'react'

export default function Card({ title, value, children }) {
  return (
    <div className="card-panel p-5">
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-slateDark">{value}</div>
      {children}
    </div>
  )
}
