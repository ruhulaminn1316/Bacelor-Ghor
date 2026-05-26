import React from 'react'
import { motion } from 'framer-motion'
import { Home, Sparkles, TrendingUp, Wallet, Users, CalendarDays } from 'lucide-react'

const statItems = [
  { label: 'Monthly Meal Rate', value: '৳2,450', icon: CalendarDays },
  { label: 'Current Balance', value: '৳18,920', icon: Wallet },
  { label: 'Active Members', value: '6 people', icon: Users },
]

function HeroCard({ icon: Icon, label, value, className = '' }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-slate-300/70">{label}</div>
          <div className="mt-1 text-lg font-semibold text-white">{value}</div>
        </div>
      </div>
    </div>
  )
}

export default function AuthLayout({ eyebrow, title, subtitle, children }) {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#020617] text-white">
      <div className="relative min-h-screen w-full">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.22),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.8),rgba(2,6,23,1))]" />
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl animate-pulse" />

        <div className="relative mx-auto grid min-h-screen w-full max-w-[1600px] lg:grid-cols-[1.15fr_0.85fr]">
          <section className="relative flex flex-col justify-between overflow-hidden px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute left-10 top-16 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl"
                animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-10 right-16 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl"
                animate={{ y: [0, -14, 0], x: [0, -8, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 shadow-lg shadow-sky-900/20">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">BachelorGhor</div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-slate-300/70">Premium Mess OS</div>
                </div>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200/80 backdrop-blur-xl sm:flex">
                <Sparkles className="h-4 w-4 text-sky-300" />
                AI-powered household management
              </div>
            </div>

            <div className="relative z-10 grid gap-10 py-10 lg:py-14">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-3xl"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300/70 backdrop-blur-xl">
                  {eyebrow}
                </div>
                <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300/80 sm:text-lg">
                  {subtitle}
                </p>
              </motion.div>

              <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
                {statItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + index * 0.1 }}
                  >
                    <HeroCard {...item} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="text-[11px] uppercase tracking-[0.3em] text-slate-300/60">Daily snapshot</div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm text-slate-200">
                  <div>
                    <div className="text-white">24</div>
                    <div className="mt-1 text-slate-300/60">Meals logged</div>
                  </div>
                  <div>
                    <div className="text-white">৳3,200</div>
                    <div className="mt-1 text-slate-300/60">Spent today</div>
                  </div>
                  <div>
                    <div className="text-white">92%</div>
                    <div className="mt-1 text-slate-300/60">On-time updates</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-sky-500 shadow-lg shadow-violet-900/20">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-300/70">Live balance trend</div>
                    <div className="mt-1 text-2xl font-semibold text-white">Stable growth</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex items-center justify-center px-5 pb-10 pt-4 sm:px-8 lg:px-10 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full max-w-[520px] rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.28em] text-slate-300/60">{eyebrow}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{title}</div>
                </div>
                <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-3 sm:block">
                  <img src="/logo.png" alt="BachelorGhor" className="h-10 w-10 rounded-xl object-contain" />
                </div>
              </div>

              <div className="mb-6 text-sm leading-6 text-slate-300/80">
                {subtitle}
              </div>

              {children}

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs leading-5 text-slate-300/80">
                Trusted by student mess teams who want meals, expenses, rent, utilities and members in one clean dashboard.
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
}