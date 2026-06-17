import React from 'react'
import { Bot, Sparkles } from 'lucide-react'
import ModulePage from './_shared/ModulePage'
import Button from '../components/common/Button'

export default function AIAssistantView() {
  return (
    <ModulePage
      eyebrow="AI cockpit"
      title="AI assistant"
      description="Chat with a futuristic finance assistant for smart suggestions, predictions, and budget insights."
      actions={[{ label: 'Ask AI', icon: <Bot className="h-4 w-4" /> }]}
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
