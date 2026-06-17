import React, { useState } from 'react'
import { Eye, EyeOff, Github, Mail, ShieldCheck } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: 'admin@bachelorhub.app', password: 'password' })

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ name: 'Rakib Hasan', email: form.email, role: 'Admin' })
    navigate('/dashboard')
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Login to continue">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          placeholder="admin@bachelorhub.app"
        />

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Password
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 dark:border-slate-700 dark:bg-slate-900/70">
            <input
              className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-slate-400 dark:text-slate-100"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              placeholder="Your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="text-slate-500 transition hover:text-slate-900 dark:hover:text-white"
            >
              {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>
        </label>

        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" /> Remember me
          </label>
          <Link to="/forgot-password" className="font-medium text-cyan-300 hover:text-cyan-200">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full" size="lg">
          Login to dashboard
        </Button>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary">
            <Mail className="h-4 w-4" />
            Continue with Google
          </Button>
          <Button type="button" variant="secondary">
            <Github className="h-4 w-4" />
            Continue with GitHub
          </Button>
        </div>

        <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-50">
          <div className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="h-4 w-4" /> Demo access enabled
          </div>
          <p className="mt-2 text-cyan-50/80">This frontend uses local session state so you can test the product UI before connecting the backend.</p>
        </div>

        <p className="text-center text-sm text-slate-400">
          New to BachelorHub?{' '}
          <Link to="/register" className="font-semibold text-white">
            Create an account
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
