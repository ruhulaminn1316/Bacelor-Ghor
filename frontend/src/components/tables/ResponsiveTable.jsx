import React from 'react'
import Badge from '../common/Badge'

export default function ResponsiveTable({ columns, rows, emptyTitle = 'No rows yet', emptyDescription = 'Connect your backend to populate this table.' }) {
  if (!rows?.length) {
    return (
      <div className="surface rounded-[1.75rem] p-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-3xl bg-slate-100 dark:bg-slate-800">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{emptyTitle}</h3>
        <p className="mt-1">{emptyDescription}</p>
      </div>
    )
  }

  return (
    <div className="surface overflow-hidden rounded-[1.75rem] shadow-soft-lg">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="min-w-full divide-y divide-slate-200/80 text-left text-sm dark:divide-slate-700/80">
          <thead className="bg-slate-50/80 text-slate-500 dark:bg-slate-900/40 dark:text-slate-400">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-5 py-4 font-medium uppercase tracking-[0.16em]">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
            {rows.map((row, index) => (
              <tr key={row.id || index} className="transition hover:bg-slate-50/70 dark:hover:bg-slate-900/60">
                {columns.map((column) => (
                  <td key={column.key} className="px-5 py-4 align-middle text-slate-700 dark:text-slate-200">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}