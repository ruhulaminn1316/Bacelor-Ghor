import React from 'react'
import { Bot, Sparkles } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Button from '../components/common/Button'

export default function AIAssistant() {
  return (
    <ModulePage
      eyebrow="AI cockpit"
      title="AI assistant"
      description="Chat with a futuristic finance assistant for smart suggestions, predictions, and budget insights."
      actions={[{ label: 'Ask AI', icon: <Bot className="h-4 w-4" /> }]}
      summary="The AI section is designed for conversational UI, insight cards, prediction prompts, and floating chatbot integration."
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="space-y-3">
            <div className="rounded-2xl bg-blue-500/10 p-4 text-sm text-blue-700 dark:text-blue-200">Suggested optimization: shift 2 high-cost breakfast items to shared purchases this week.</div>
            <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">AI chat UI placeholder: connect your own LLM endpoint later and stream responses here.</div>
          </div>
          <div className="mt-4 flex gap-3">
            <Button>Smart suggestion</Button>
            <Button variant="secondary"><Sparkles className="h-4 w-4" />Budget insight</Button>
          </div>
        </div>
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Prediction cards</h3>
          <div className="mt-4 space-y-3">
            {['Expense forecast', 'Meal-rate prediction', 'Due reduction plan'].map((item) => <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{item}</div>)}
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
import React from 'react'
import { Bot, Sparkles, Lightbulb, TrendingUp } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Badge from '../components/common/Badge'

export default function AIAssistant() {
  return (
    <ModulePage
      eyebrow="AI assistant"
      title="AI assistant"
      description="A futuristic chat UI for smart expense suggestions, budget insights, prediction cards, and assistant-led workflows."
      stats={[
        { label: 'Budget health', value: '82%', delta: 'healthy', tone: 'emerald' },
        { label: 'Savings forecast', value: '৳3,800', delta: 'predicted', tone: 'blue' },
        { label: 'Risk alerts', value: '1', delta: 'watch item', tone: 'amber' },
        { label: 'Insights', value: '12', delta: 'generated', tone: 'rose' },
      ]}
      summary="The AI area is visually distinct so it can evolve into real LLM-backed interactions later without rethinking the interface."
    >
      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-300"><Bot className="h-5 w-5" /></div>
            <div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">AI chat panel</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Ask about expenses, meal rates, or due amounts</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            <div className="max-w-[85%] rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">How can we reduce meal cost this month?</div>
            <div className="ml-auto max-w-[85%] rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm text-white">I found three low-risk recommendations and one receipt reconciliation task.</div>
          </div>
          <div className="mt-5 rounded-[1.5rem] border border-dashed border-slate-300 p-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">Type a prompt and connect a backend AI endpoint later.</div>
        </div>

        <div className="space-y-4">
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white"><Sparkles className="h-5 w-5 text-cyan-500" />Smart insights</div>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-blue-500/10 p-4 text-sm text-blue-700 dark:text-blue-200">Meal rate can stay below ৳95 if bazar cost stays within the current forecast.</div>
              <div className="rounded-2xl bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-200">Utility spending is on track for a 6% decrease.</div>
            </div>
          </div>
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white"><Lightbulb className="h-5 w-5 text-amber-500" />Prediction cards</div>
            <div className="mt-4 grid gap-3">
              {['Expense spike risk', 'Rent collection delay', 'Meal savings opportunity'].map((item) => <Badge key={item} tone="slate" className="justify-start">{item}</Badge>)}
            </div>
          </div>
          <div className="surface rounded-[1.75rem] p-5 shadow-soft-lg">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white"><TrendingUp className="h-5 w-5 text-emerald-500" />Budget recommendations</div>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Review predicted overspend and surface actionable budget advice for the current month.</p>
          </div>
        </div>
      </div>
    </ModulePage>
  )
}
