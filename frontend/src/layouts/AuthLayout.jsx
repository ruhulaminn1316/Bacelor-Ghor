import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Leaf, Sparkles, WalletCards } from 'lucide-react'

const highlights = [
  'Meal, rent, and expense management in one clean workspace.',
  'Dark mode, mobile-ready layouts, and animated SaaS interactions.',
  'Built for backend integration with reusable components and routes.',
]

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.22),transparent_26%),linear-gradient(180deg,rgba(2,6,23,1)_0%,rgba(15,23,42,1)_100%)]" />
      <div className="absolute left-12 top-12 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        <section className="hidden flex-col justify-between p-8 xl:flex">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 font-bold text-white shadow-lg shadow-blue-500/30">
              BG
            </div>
            <div>
              <div className="text-lg font-semibold">BachelorGhor</div>
              <div className="text-sm text-slate-400">AI-powered life management SaaS</div>
            </div>
          </div>

          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-semibold tracking-tight text-white">
              Modern hostel operations, designed for real life.
            </motion.h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              One dashboard for meals, bazar, rent, utility bills, reports, notices, and AI-guided budgeting.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.div key={item} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08 }} className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Leaf className="h-5 w-5 text-emerald-300" />
                <div className="mt-3 text-2xl font-semibold">92%</div>
                <div className="text-sm text-slate-400">Meal accuracy</div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <WalletCards className="h-5 w-5 text-blue-300" />
                <div className="mt-3 text-2xl font-semibold">৳48K</div>
                <div className="text-sm text-slate-400">Tracked expenses</div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Sparkles className="h-5 w-5 text-amber-300" />
                <div className="mt-3 text-2xl font-semibold">AI</div>
                <div className="text-sm text-slate-400">Budget assistant</div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl sm:p-6">
            <div className="mb-6 rounded-[1.5rem] bg-white/5 p-5">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">{subtitle || 'Welcome back'}</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">{title}</h2>
            </div>
            {children}
          </div>
        </section>
      </div>
    </div>
  )
}
