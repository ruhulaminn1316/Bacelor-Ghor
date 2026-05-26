import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Home, Mail, Lock, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import GoogleSignInButton from '../components/auth/GoogleSignInButton'
import { authService } from '../services/auth'

const initialForm = {
  identifier: '',
  password: '',
  device_name: 'Web browser',
}

export default function Login() {
  const [form, setForm] = useState(initialForm)
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [googleLoading, setGoogleLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  useEffect(() => {
    const savedVerificationId = localStorage.getItem('bg-otp-verification-id')
    if (savedVerificationId) {
      setMessage('Two-factor verification is waiting in Security page.')
    }
  }, [])

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const applySession = (payload) => {
    login(payload.user, payload)
    navigate('/dashboard')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await authService.login(form)
      if (response.data?.requires_otp) {
        localStorage.setItem('bg-otp-verification-id', String(response.data.verification_id))
        setMessage(response.data.message || 'Two-factor verification required. Open Security page to finish login.')
        navigate('/security')
        return
      }

      localStorage.removeItem('bg-otp-verification-id')
      applySession(response.data)
    } catch (error) {
      setMessage(error.response?.data?.detail || 'Login failed. Check your credentials and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async (idToken) => {
    setGoogleLoading(true)
    setMessage('')

    try {
      const response = await authService.googleLogin({ id_token: idToken })
      localStorage.removeItem('bg-otp-verification-id')
      applySession(response.data)
    } catch (error) {
      setMessage(error.response?.data?.detail || 'Google sign-in failed. Try again.')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#0a0f1a]">
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-500 p-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-white text-xl">BachelorGhor</span>
          </div>
        </div>

        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="text-white/60 text-sm font-mono mb-4">// Smart Mess Management</div>
            <h2 className="font-display text-4xl font-bold text-white leading-tight">Manage your<br />mess smarter<br /><span className="text-white/60">with AI.</span></h2>
            <p className="text-white/70 mt-4 text-sm leading-relaxed max-w-xs">Track meals, expenses, rent and utilities for your bachelor house in one beautiful dashboard.</p>
          </motion.div>
        </div>

        <div className="relative z-10 flex gap-4">
          {[['6+', 'Members'], ['৳24K', 'Monthly'], ['98%', 'Accuracy']].map(([val, label]) => (
            <div key={label} className="text-white">
              <div className="font-display font-bold text-2xl">{val}</div>
              <div className="text-white/60 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-slate-900 dark:text-white">BachelorGhor</span>
          </div>

          <div className="mb-8">
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Welcome back</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Sign in to your mess account</p>
          </div>

          {message ? (
            <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              {message}
            </div>
          ) : null}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-white/70 p-3 dark:border-slate-800 dark:bg-slate-900/60">
            <GoogleSignInButton
              clientId={googleClientId}
              onSuccess={handleGoogleLogin}
              onError={(errorMessage) => setMessage(errorMessage)}
              className="flex justify-center"
            />
            {!googleClientId ? (
              <p className="mt-2 text-center text-xs text-slate-400">Set VITE_GOOGLE_CLIENT_ID to enable Gmail sign-in.</p>
            ) : null}
            {googleLoading ? <p className="mt-2 text-center text-xs text-slate-400">Connecting Google account...</p> : null}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            <span className="text-xs text-slate-400">or continue with email</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input name="identifier" type="email" className="input pl-10" placeholder="arif@example.com" value={form.identifier} onChange={updateField} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <Link to="/forgot-password" className="text-xs text-brand-600 dark:text-brand-400 hover:underline">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input name="password" type={showPass ? 'text' : 'password'} className="input pl-10 pr-10" placeholder="••••••••" value={form.password} onChange={updateField} />
                <button type="button" onClick={() => setShowPass(v => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">{showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Device name</label>
              <input name="device_name" type="text" className="input" placeholder="Web browser" value={form.device_name} onChange={updateField} />
            </div>

            <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-sm">
              {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Sign In <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">No account? <Link to="/register" className="text-brand-600 dark:text-brand-400 font-medium hover:underline">Create one</Link></p>

          <p className="text-center text-xs text-slate-400 mt-8">Use email/password or Gmail sign-in.</p>
        </motion.div>
      </div>
    </div>
  )
}
