import React from 'react'
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, CartesianGrid, PieChart, Pie, Cell, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts'

const COLORS = ['#2563eb', '#14b8a6', '#f59e0b', '#f43f5e']

function ChartFrame({ title, description, children }) {
  return (
    <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        {description ? <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p> : null}
      </div>
      <div className="h-[300px]">{children}</div>
    </div>
  )
}

const chartTooltipStyle = {
  background: 'rgba(15, 23, 42, 0.92)',
  border: '1px solid rgba(148, 163, 184, 0.18)',
  borderRadius: '16px',
  color: '#fff',
}

export function MonthlyTrendChart({ data }) {
  return (
    <ChartFrame title="Monthly overview" description="Expense, meal, and utility trends in one glance.">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.34} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.18)" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip contentStyle={chartTooltipStyle} />
          <Area type="monotone" dataKey="expense" stroke="#2563eb" fillOpacity={1} fill="url(#expenseGradient)" strokeWidth={3} />
          <Area type="monotone" dataKey="meal" stroke="#14b8a6" fillOpacity={0} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartFrame>
  )
}

export function BudgetBarChart({ data }) {
  return (
    <ChartFrame title="Budget comparison" description="Meal rate and utility share against the month plan.">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.18)" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip contentStyle={chartTooltipStyle} />
          <Bar dataKey="expense" fill="#2563eb" radius={[10, 10, 0, 0]} />
          <Bar dataKey="utility" fill="#14b8a6" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  )
}

export function MealLineChart({ data }) {
  return (
    <ChartFrame title="Meal trends" description="Daily meals, guests, and room activity over the week.">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.18)" />
          <XAxis dataKey="date" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip contentStyle={chartTooltipStyle} />
          <Line type="monotone" dataKey="breakfast" stroke="#2563eb" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="lunch" stroke="#14b8a6" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="dinner" stroke="#f59e0b" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  )
}

export function BudgetPieChart({ data }) {
  return (
    <ChartFrame title="Expense split" description="See how the month is distributed across categories.">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={4}>
            {data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip contentStyle={chartTooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
    </ChartFrame>
  )
}