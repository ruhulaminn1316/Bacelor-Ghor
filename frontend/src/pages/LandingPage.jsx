import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CreditCard,
  DollarSign,
  MoonStar,
  MessageSquareText,
  Receipt,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'

const features = [
  { title: 'Meal Command Center', description: 'Daily entry, guest meal, monthly report, and rate auto-calculation.', icon: Receipt },
  { title: 'Smart Rent & Utility', description: 'Track due, paid, and advance across rent, electricity, gas, water, and internet.', icon: Building2 },
  { title: 'Member & Admin Tools', description: 'Member lifecycle, approvals, role permissions, and admin-grade controls.', icon: Users },
  { title: 'Live Settlement Engine', description: 'Instant monthly settlement sheet with PDF-ready data blocks.', icon: DollarSign },
]

const testimonials = [
  { name: 'Rakib Hasan', role: 'Mess Manager', quote: 'BachelorHub removed spreadsheet chaos. Month-end settlement now takes minutes.' },
  { name: 'Sohan Ahmed', role: 'Boarding Member', quote: 'Meal entries and dues are transparent. Everyone can see where money goes.' },
  { name: 'Nayeem Islam', role: 'Treasurer', quote: 'The dashboard looks premium and keeps every module connected in one place.' },
]

const faqs = [
  { q: 'Can we use this with our existing process?', a: 'Yes. Start with meals and expenses, then enable rent, utility, and settlement workflows gradually.' },
  { q: 'Is this ready for backend integration?', a: 'All screens, forms, states, and table layouts are built as frontend modules ready for API wiring.' },
  { q: 'Does it support both mobile and desktop?', a: 'Yes. The layout includes mobile navigation, responsive cards, and adaptive data sections.' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-sm font-bold text-white shadow-lg shadow-blue-500/30">BH</div>
            <div>
              <div className="text-base font-semibold">BachelorHub</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Meal & Rent Management System</div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login"><Button variant="secondary" size="sm">Login</Button></Link>
            <Link to="/register"><Button size="sm">Register</Button></Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.14),transparent_26%),radial-gradient(circle_at_90%_0%,rgba(14,165,233,0.15),transparent_30%)]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl text-center">
              <Badge tone="blue">Premium SaaS for Shared Living</Badge>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Manage meals, rent, utilities, and settlement from one elegant dashboard.</h1>
              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                BachelorHub gives mess managers and members a production-ready workspace for daily operations, finance transparency, and monthly closure.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/register"><Button size="lg">Get Started <ArrowRight className="h-4 w-4" /></Button></Link>
                <Link to="/dashboard"><Button variant="secondary" size="lg">View Product Demo</Button></Link>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-4 rounded-[2rem] border border-slate-200/80 bg-white/70 p-4 shadow-soft-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.26em] text-blue-200">Live Dashboard Preview</p>
                <h3 className="mt-3 text-2xl font-semibold">Monthly control panel</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ['Total Meals', '1,840'],
                    ['Total Expense', '৳48,200'],
                    ['Due Pending', '৳12,460'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white/10 p-3">
                      <div className="text-xs text-slate-300">{label}</div>
                      <div className="mt-2 text-lg font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Settlement Health</div>
                    <Badge tone="emerald">92% Complete</Badge>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <div className="text-sm font-semibold">Notifications</div>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">2 utility bills pending. 1 member has advance balance.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <div className="text-sm font-semibold">AI Recommendation</div>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Reduce meal rate by ৳2 with optimized bazar purchase cycle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">Features</p>
              <h2 className="text-3xl font-semibold tracking-tight">Purpose-built for bachelor mess management</h2>
            </div>
            <Badge tone="slate">End-to-End Frontend</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="surface rounded-[1.75rem] p-6 shadow-soft-lg">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">Screenshots preview</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Every operational screen is connected</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface overflow-hidden rounded-[1.75rem] p-5 shadow-soft-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-950 dark:text-white">Dashboard</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Statistics, charts, quick actions, notices</div>
                </div>
                <Badge tone="blue"><BarChart3 className="h-3.5 w-3.5" /> Analytics</Badge>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {['৳48.2K expense', '1,840 meals', '92% rent'].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-100 p-4 text-sm font-semibold dark:bg-slate-900">{item}</div>
                ))}
              </div>
              <div className="mt-5 h-44 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(14,165,233,0.08)),repeating-linear-gradient(90deg,rgba(37,99,235,0.18)_0_18px,transparent_18px_38px)]" />
            </div>
            <div className="grid gap-4">
              {[
                ['Meal management', 'Add meal, edit meal, guests, monthly report'],
                ['Settlement system', 'Individual due, advance, final PDF sheet'],
                ['Admin panel', 'User, member, expense, report, system controls'],
              ].map(([title, text]) => (
                <div key={title} className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
                  <div className="text-base font-semibold text-slate-950 dark:text-white">{title}</div>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="surface rounded-[1.75rem] p-6 shadow-soft-lg">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">Design system</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Tailwind + DaisyUI-inspired component language</h2>
              </div>
              <Badge tone="slate"><MoonStar className="h-3.5 w-3.5" /> Light & dark</Badge>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['Primary', '#2563EB'],
                ['Secondary', '#0EA5E9'],
                ['Success', '#22C55E'],
                ['Warning', '#F59E0B'],
              ].map(([name, color]) => (
                <div key={name} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <div className="h-16 rounded-xl" style={{ backgroundColor: color }} />
                  <div className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">{name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{color}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="surface rounded-[1.75rem] p-6 shadow-soft-lg">
                <MessageSquareText className="h-5 w-5 text-blue-500" />
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.quote}</p>
                <div className="mt-4 text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{item.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              { name: 'Starter', price: '৳0', description: 'Up to 8 members' },
              { name: 'Growth', price: '৳799', description: 'Unlimited members + reports', featured: true },
              { name: 'Scale', price: '৳1599', description: 'Admin tools + priority support' },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-[1.9rem] border p-6 shadow-soft-lg ${plan.featured ? 'border-blue-400 bg-blue-600 text-white' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'}`}>
                <div className="text-sm font-semibold">{plan.name}</div>
                <div className="mt-3 text-4xl font-semibold">{plan.price}<span className="text-base font-medium">/month</span></div>
                <p className={`mt-3 text-sm ${plan.featured ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>{plan.description}</p>
                <button className={`mt-6 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${plan.featured ? 'bg-white text-blue-700 hover:bg-blue-50' : 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900'}`}>Choose Plan</button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h3 className="text-center text-3xl font-semibold tracking-tight">Frequently asked questions</h3>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="surface rounded-2xl p-5 shadow-soft-lg">
                <summary className="cursor-pointer text-sm font-semibold">{item.q}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/80 py-8 dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span>BachelorHub © 2026. Commercially-ready frontend UI system.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Secure-ready</span>
            <span className="inline-flex items-center gap-1"><CreditCard className="h-4 w-4" /> Billing-ready</span>
            <span className="inline-flex items-center gap-1"><BadgeCheck className="h-4 w-4" /> Accessible UI</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
