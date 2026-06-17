import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircleMore, X } from 'lucide-react'

export default function FloatingChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen((value) => !value)} className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-2xl shadow-blue-700/30">
        {open ? <X className="h-5 w-5" /> : <MessageCircleMore className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }} className="fixed bottom-24 right-5 z-40 w-[min(92vw,360px)] rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-4 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                <Bot className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <div className="font-semibold">AI Assistant</div>
                <div className="text-xs text-slate-400">Real-time budget help</div>
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div className="rounded-2xl bg-white/6 p-3">Your meal rate can drop by ৳3 if three pending bazar entries are reconciled.</div>
              <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-100">Estimated due amounts are trending down by 8% this cycle.</div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
