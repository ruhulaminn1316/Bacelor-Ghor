import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Home, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import GoogleSignInButton from '../components/auth/GoogleSignInButton'
import { authService } from '../services/auth'

const initialForm = {
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  phone: '',
  password: '',
  password_confirm: '',
}

export default function Register() {
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [form, setForm] = useState(initialForm)
  const [googleLoading, setGoogleLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const applySession = (payload) => {
    login(payload.user, payload)
    navigate('/dashboard')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await authService.register(form)
      applySession(response.data)
      if (response.data?.email_verification_required) {
        setMessage('Account created. Please verify your email when it arrives.')
      }
    } catch (error) {
      const data = error.response?.data || {}
      const firstError = Object.values(data).flat?.()?.[0]
      setMessage(firstError || data.detail || 'Registration failed. Please check the form and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleRegister = async (idToken) => {
    setGoogleLoading(true)
    setMessage('')

    try {
      const response = await authService.googleLogin({ id_token: idToken })
      applySession(response.data)
    } catch (error) {
      setMessage(error.response?.data?.detail || 'Google sign-in failed. Try again.')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#0a0f1a]">
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-gradient-to-br from-violet-600 via-brand-500 to-cyan-500 p-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-violet-300/20 blur-3xl" />
        </div>
        {[...Array(8)].map((_, i) => (
          <motion.div key={i} animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }} className="absolute w-3 h-3 rounded-full bg-white/40" style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 18}%` }} />
        ))}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-white text-xl">BachelorGhor</span>
        </div>
        <div className="relative z-10">
          <div className="text-white/60 text-sm font-mono mb-4">// Join the platform</div>
          <h2 className="font-display text-4xl font-bold text-white leading-tight">Start managing<br />your mess<br /><span className="text-white/60">for free.</span></h2>
          <p className="text-white/70 mt-4 text-sm leading-relaxed max-w-xs">Set up your mess in minutes. Invite members, track meals and split expenses automatically.</p>
        </div>
        <div className="relative z-10">
          <div className="flex gap-2">
            {['✓ Free Forever', '✓ AI Powered', '✓ Mobile Ready'].map(t => (<span key={t} className="text-white/80 text-xs bg-white/10 px-3 py-1.5 rounded-full">{t}</span>))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center"><Home className="w-4 h-4 text-white" /></div>
            <span className="font-display font-bold text-slate-900 dark:text-white">BachelorGhor</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-brand-500 text-white">1</div>
              <div className="h-px w-8 bg-brand-500" />
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-brand-500 text-white">2</div>
            </div>
            <span className="text-xs text-slate-400 ml-1">Quick Gmail or email signup</span>
          </div>

          <div className="mb-6">
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Create account</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Register with Gmail or with your email and password.</p>
          </div>

          {message ? (
            <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              {message}
            </div>
          ) : null}

          <div className="mb-6 rounded-2xl border border-slate-200 bg-white/70 p-3 dark:border-slate-800 dark:bg-slate-900/60">
            <GoogleSignInButton
              clientId={googleClientId}
              onSuccess={handleGoogleRegister}
              onError={(errorMessage) => setMessage(errorMessage)}
              className="flex justify-center"
            />
            {!googleClientId ? (
              <p className="mt-2 text-center text-xs text-slate-400">Set VITE_GOOGLE_CLIENT_ID to enable Gmail signup.</p>
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
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Username</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input name="username" type="text" className="input pl-10" placeholder="arif_hossain" value={form.username} onChange={updateField} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">First name</label>
                <input name="first_name" type="text" className="input" placeholder="Arif" value={form.first_name} onChange={updateField} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Last name</label>
                <input name="last_name" type="text" className="input" placeholder="Hossain" value={form.last_name} onChange={updateField} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input name="email" type="email" className="input pl-10" placeholder="arif@example.com" value={form.email} onChange={updateField} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input name="phone" type="tel" className="input pl-10" placeholder="+880 1711-234567" value={form.phone} onChange={updateField} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input name="password" type={showPass ? 'text' : 'password'} className="input pl-10 pr-10" placeholder="••••••••" value={form.password} onChange={updateField} />
                <button type="button" onClick={() => setShowPass(v => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">{showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Confirm password</label>
              <input name="password_confirm" type={showPass ? 'text' : 'password'} className="input" placeholder="Repeat password" value={form.password_confirm} onChange={updateField} />
            </div>

            <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-sm mt-2">
              {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Create Account <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">Already have an account? <Link to="/login" className="text-brand-600 dark:text-brand-400 font-medium hover:underline">Sign in</Link></p>
        </motion.div>
      </div>
    </div>
  )
}
