import React from 'react'
import Card from '../components/Card'

export default function Dashboard() {
  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">Bachelor’s Home management dashboard</div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">One clean place for meals, money, members, and room operations.</h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">Track daily meals, monthly expenses, balances, and active room members with a dashboard that feels calm and organized.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-white/5 p-4 ring-1 ring-white/10">
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Members</div>
              <div className="mt-2 text-2xl font-semibold">24</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Meals</div>
              <div className="mt-2 text-2xl font-semibold">56</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Expenses</div>
              <div className="mt-2 text-2xl font-semibold">৳12,400</div>
            </div>
            <div className="rounded-2xl bg-emerald-400/15 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-100">Balance</div>
              <div className="mt-2 text-2xl font-semibold">৳8,200</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card title="Active members" value="24" />
            <Card title="Meals today" value="56" />
            <Card title="Monthly expenses" value="৳12,400" />
            <Card title="Current balance" value="৳8,200" />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr]">
            <div className="card-panel p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-500">Weekly meal trend</div>
                  <div className="mt-1 text-lg font-semibold text-slateDark">Meals vs planned servings</div>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">+12% this week</div>
              </div>
              <div className="mt-6 grid grid-cols-7 gap-3 items-end h-56">
                {[42, 58, 36, 64, 72, 55, 80].map((height, index) => (
                  <div key={index} className="flex h-full flex-col justify-end gap-2">
                    <div className="rounded-2xl bg-gradient-to-t from-cyan-600 to-sky-400 shadow-sm" style={{ height: `${height}%` }} />
                    <div className="text-center text-xs text-slate-400">{['S','M','T','W','T','F','S'][index]}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-panel p-5">
              <div className="text-sm font-medium text-slate-500">Recent activity</div>
              <div className="mt-4 space-y-3">
                {[
                  ['Meal entry updated', 'Today, 8:30 PM'],
                  ['Expense added', 'Today, 6:20 PM'],
                  ['Member joined', 'Yesterday'],
                  ['Balance settled', 'Yesterday'],
                ].map(([title, time]) => (
                  <div key={title} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-slateDark">{title}</div>
                      <div className="text-xs text-slate-500">{time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card-panel p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Meal Management</div>
                <div className="mt-1 text-lg font-semibold text-slateDark">Daily Meal, Meal Rate</div>
              </div>
              <div className="text-sm text-slate-500">Today</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Total Bazar</div>
                <div className="mt-2 font-semibold">৳8,500</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Total Meals</div>
                <div className="mt-2 font-semibold">100</div>
              </div>
            </div>
            <div className="mt-3">
              <button className="w-full rounded-2xl bg-gradient-to-r from-primary to-primaryLight text-white px-3 py-2">Add Meal</button>
            </div>
          </div>

          <div className="card-panel p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Bazar Management</div>
                <div className="mt-1 text-lg font-semibold text-slateDark">Bazar & Inventory</div>
              </div>
              <div className="text-sm text-slate-500">Today</div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-sm"><div>Rice (5kg)</div><div className="font-semibold">৳650</div></div>
              <div className="flex items-center justify-between text-sm"><div>Oil (2L)</div><div className="font-semibold">৳320</div></div>
              <div className="flex items-center justify-between text-sm"><div>Potato (5kg)</div><div className="font-semibold">৳180</div></div>
            </div>
            <div className="mt-3">
              <button className="w-full rounded-2xl bg-white/90 text-slateDark px-3 py-2">Add Bazar</button>
            </div>
          </div>

          <div className="card-panel p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Rent Management</div>
                <div className="mt-1 text-lg font-semibold text-slateDark">Monthly Rent & Due</div>
              </div>
              <div className="text-sm text-slate-500">Total</div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-semibold">৳12,000</div>
              <div className="text-sm text-slate-500">4 Members</div>
            </div>
            <div className="mt-3">
              <button className="w-full rounded-2xl bg-gradient-to-r from-emerald to-primaryLight text-white px-3 py-2">Collect Rent</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
