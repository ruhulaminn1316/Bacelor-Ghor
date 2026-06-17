import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import SectionHeader from '../../components/common/SectionHeader'
import StatCard from '../../components/common/StatCard'
import ResponsiveTable from '../../components/tables/ResponsiveTable'

export default function ModulePage({ eyebrow, title, description, stats = [], actions = [], table, children, summary }) {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={actions.length ? actions.map((action) => <Button key={action.label} variant={action.variant || 'secondary'} onClick={action.onClick}>{action.icon}{action.label}</Button>) : null}
      />

      {summary ? <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="surface rounded-[1.75rem] p-5 shadow-soft-lg"><Badge tone="emerald">Summary</Badge><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{summary}</p></motion.div> : null}

      {stats.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{stats.map((item) => <StatCard key={item.label} {...item} />)}</div> : null}

      {children}

      {table ? <ResponsiveTable {...table} /> : null}
    </div>
  )
}
