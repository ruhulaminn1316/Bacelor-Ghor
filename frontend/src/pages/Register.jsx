import React, { useState } from 'react'
import { Eye, EyeOff, Sparkles } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    register(form)
    navigate('/otp-verification')
  }

  return (
    <AuthLayout title="Create your account" subtitle="Join BachelorHub">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="First name" value={form.firstName} onChange={(event) => setForm({ ...form, firstName: event.target.value })} />
          <Input label="Last name" value={form.lastName} onChange={(event) => setForm({ ...form, lastName: event.target.value })} />
        </div>
        <Input label="Email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Password
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 dark:border-slate-700 dark:bg-slate-900/70">
            <input className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-slate-400 dark:text-slate-100" type={showPassword ? 'text' : 'password'} value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="Create a password" />
            <button type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? <EyeOff className="h-4.5 w-4.5 text-slate-500" /> : <Eye className="h-4.5 w-4.5 text-slate-500" />}</button>
          </div>
        </label>

        <Button type="submit" className="w-full" size="lg">Create account</Button>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 text-sm text-slate-200">
          <div className="flex items-center gap-2 font-semibold text-white"><Sparkles className="h-4 w-4 text-cyan-300" /> Premium trial workspace</div>
          <p className="mt-2 text-slate-300">The signup flow is ready for backend hookup, role assignment, and OTP verification.</p>
        </div>

        <p className="text-center text-sm text-slate-400">
          Already have an account? <Link to="/login" className="font-semibold text-white">Login here</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
