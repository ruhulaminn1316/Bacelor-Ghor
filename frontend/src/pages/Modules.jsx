import React from 'react'

const moduleGroups = [
  {
    title: 'Authentication & Security',
    accent: 'from-cyan-500 to-blue-600',
    items: [
      'User registration, login/logout, password reset',
      'Email and OTP verification',
      'Google login and JWT auth',
      'Role-based access and session/device history',
      '2FA, account blocking, profile photo upload',
    ],
  },
  {
    title: 'User Profile',
    accent: 'from-emerald-500 to-teal-600',
    items: [
      'Personal profile and student/job info',
      'Phone, emergency contact, and blood group',
      'NID/passport, seat number, joining/leaving date',
      'Profile settings and notification preferences',
      'Profile completion status',
    ],
  },
  {
    title: 'Mess / Basa Management',
    accent: 'from-violet-500 to-indigo-600',
    items: [
      'Create mess, multi-mess support, room and floor management',
      'Seat, bed, guest room, and transfer handling',
      'Empty seat tracking and sublet management',
      'Mess rules and room photo uploads',
    ],
  },
  {
    title: 'Meal Management',
    accent: 'from-orange-500 to-rose-600',
    items: [
      'Daily meal entry and meal ON/OFF system',
      'Breakfast, lunch, dinner, guest, and special meals',
      'Monthly meal summary, history, calendar view, notifications',
      'Meal closing, archive, and rate auto calculation',
    ],
  },
  {
    title: 'Bazar Management',
    accent: 'from-amber-500 to-orange-600',
    items: [
      'Daily bazar entry and product catalog',
      'Quantity, unit price, receipt upload, and history',
      'Shared expense split, monthly summary, and vendor tracking',
      'Inventory tracking and stock alerts',
    ],
  },
  {
    title: 'Expense & Rent',
    accent: 'from-sky-500 to-cyan-600',
    items: [
      'Personal/shared expense, recurring and emergency expenses',
      'Rent tracking with advance payment, due calculation, late fee',
      'Utility bills, payment status, auto split, and reminders',
      'Due tracking, payment history, and formulas',
    ],
  },
  {
    title: 'Payments & Dashboard',
    accent: 'from-fuchsia-500 to-pink-600',
    items: [
      'bKash, Nagad, Rocket, Stripe, and SSLCommerz',
      'Payment requests, confirmations, receipts, and online/offline history',
      'Dashboard totals, meal rate, due amount, charts, analytics, timeline',
      'Member statistics, empty seats, and collection graphs',
    ],
  },
  {
    title: 'Advanced Platform Features',
    accent: 'from-slate-600 to-slate-900',
    items: [
      'Notice board, internal chat, poll/voting, and notifications',
      'AI budget suggestions, fraud detection, OCR, and expense prediction',
      'Calendar, cleaning, maintenance, reports, export, PWA, language support',
      'Admin panel, backup, cloud sync, APIs, and advanced integrations',
    ],
  },
]

export default function Modules() {
  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
              Product modules roadmap
            </div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Everything your mess platform needs, grouped into a clean product structure.
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              This page turns the feature list into a buildable roadmap so we can ship the core system first,
              then layer in advanced automation, analytics, and AI features.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-slate-950 p-4 text-white ring-1 ring-slate-900/10">
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Modules</div>
              <div className="mt-2 text-3xl font-semibold">25</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Core</div>
              <div className="mt-2 text-3xl font-semibold">08</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Phase 1</div>
              <div className="mt-2 text-3xl font-semibold">MVP</div>
            </div>
            <div className="rounded-2xl bg-emerald-400/15 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-100">Focus</div>
              <div className="mt-2 text-3xl font-semibold">Launch</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        {moduleGroups.map((group) => (
          <section key={group.title} className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${group.accent}`} />
            <h3 className="mt-4 text-xl font-semibold text-slate-950">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
