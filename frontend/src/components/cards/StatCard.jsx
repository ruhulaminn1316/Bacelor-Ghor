import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCard({ title, value, subtitle, icon: Icon, iconBg, trend, trendValue, delay = 0 }) {
  const isPositive = trend === 'up'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="stat-card"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
          {Icon && <Icon className="w-5 h-5" />}
        </div>
        {trendValue && (
          <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-brand-600 dark:text-brand-400' : 'text-rose-500'}`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trendValue}
          </div>
        )}
      </div>
      <div className="text-2xl font-display font-bold text-slate-900 dark:text-white">{value}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{title}</div>
      {subtitle && <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{subtitle}</div>}
    </motion.div>
  )
}
