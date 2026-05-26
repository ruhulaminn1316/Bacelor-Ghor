import React, { useState, useEffect } from 'react'
import { authService, authStorage } from '../services/auth'

const featureChecks = [
  'User registration and login/logout',
  'Forgot password, email verification, OTP verification',
  'Google login and JWT authentication',
  'Session history, activity logs, and account blocking',
  'Password change, profile photo upload, and 2FA',
]

const initialLogin = { identifier: '', password: '', device_name: '' }
const initialRegister = { username: '', email: '', password: '', password_confirm: '', first_name: '', last_name: '', phone: '' }

export default function Security() {
  const [loginForm, setLoginForm] = useState(initialLogin)
  const [registerForm, setRegisterForm] = useState(initialRegister)
  const [forgotEmail, setForgotEmail] = useState('')
  const [otpForm, setOtpForm] = useState({ verification_id: '', code: '' })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [otpMode, setOtpMode] = useState(false)
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''

  useEffect(() => {
    if (!googleClientId) return
    const id = 'google-identity'
    if (document.getElementById(id)) return
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.id = id
    script.onload = () => {
      try {
        /* global google */
        google.accounts.id.initialize({
          client_id: googleClientId,
          callback: handleGoogleCredentialResponse,
        })
        google.accounts.id.renderButton(document.getElementById('google-signin-button'), { theme: 'outline', size: 'large' })
      } catch (e) {
        // ignore
      }
    }
    document.head.appendChild(script)
    return () => { if (script.parentNode) script.parentNode.removeChild(script) }
  }, [googleClientId])

  useEffect(() => {
    const savedVerificationId = localStorage.getItem('bg-otp-verification-id')
    if (savedVerificationId) {
      setOtpMode(true)
      setOtpForm((current) => ({ ...current, verification_id: savedVerificationId }))
      setMessage('Two-factor verification code was sent. Enter it below to finish login.')
    }
  }, [])

  const updateForm = (setter) => (event) => setter((current) => ({ ...current, [event.target.name]: event.target.value }))

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const response = await authService.login(loginForm)
      if (response.data.requires_otp) {
        setOtpMode(true)
        setOtpForm({ verification_id: response.data.verification_id, code: '' })
        setMessage(response.data.message)
      } else {
        authStorage.setTokens(response.data)
        setMessage('Logged in successfully.')
      }
    } catch (error) {
      setMessage(error.response?.data?.detail || 'Login failed.')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const response = await authService.register(registerForm)
      authStorage.setTokens(response.data)
      setMessage('Registration complete. Verification email sent.')
    } catch (error) {
      setMessage('Registration failed. Check the form and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      await authService.forgotPassword({ email: forgotEmail })
      setMessage('If the account exists, reset instructions have been sent.')
    } catch (error) {
      setMessage('Unable to request reset right now.')
    } finally {
      setLoading(false)
    }
  }

  const handleOtpVerify = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const response = await authService.verifyOtp(otpForm)
      authStorage.setTokens(response.data)
      localStorage.removeItem('bg-otp-verification-id')
      setMessage('Two-factor verification successful.')
      setOtpMode(false)
    } catch (error) {
      setMessage(error.response?.data?.detail || 'OTP verification failed.')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogleCredentialResponse(response) {
    if (!response?.credential) return
    setLoading(true)
    setMessage('')
    try {
      const res = await authService.googleLogin({ id_token: response.credential })
      authStorage.setTokens(res.data)
      setMessage('Google sign-in successful.')
    } catch (err) {
      setMessage(err.response?.data?.detail || 'Google sign-in failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">Auth & Security module</div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Secure sign-in, account recovery, and access control in one place.</h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">This page wires the new auth backend to the frontend with login, registration, OTP verification, and forgot-password flows.</p>
            {message ? <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10">{message}</div> : null}
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-white/5 p-4 ring-1 ring-white/10">
            <div className="rounded-2xl bg-white/10 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-300">Flows</div><div className="mt-2 text-3xl font-semibold">05</div></div>
            <div className="rounded-2xl bg-white/10 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-300">Security</div><div className="mt-2 text-3xl font-semibold">2FA</div></div>
            <div className="rounded-2xl bg-white/10 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-300">Sessions</div><div className="mt-2 text-3xl font-semibold">Tracked</div></div>
            <div className="rounded-2xl bg-emerald-400/15 p-4"><div className="text-xs uppercase tracking-[0.2em] text-emerald-100">JWT</div><div className="mt-2 text-3xl font-semibold">Ready</div></div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-2">
          <form onSubmit={handleLogin} className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-950">Login / Logout</h3>
            <div className="mt-4 space-y-3">
              <input name="identifier" value={loginForm.identifier} onChange={updateForm(setLoginForm)} placeholder="Email or username" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300" />
              <input name="password" type="password" value={loginForm.password} onChange={updateForm(setLoginForm)} placeholder="Password" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300" />
              <input name="device_name" value={loginForm.device_name} onChange={updateForm(setLoginForm)} placeholder="Device name (optional)" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-300" />
              <button disabled={loading} className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:from-violet-700 hover:to-indigo-700">Login</button>
              <div className="text-center text-sm text-slate-500">or continue with</div>
              {googleClientId ? (
                <div className="flex justify-center">
                  <div id="google-signin-button" />
                </div>
              ) : (
                <div className="text-center text-xs text-slate-400">Set VITE_GOOGLE_CLIENT_ID to enable Google Sign-In.</div>
              )}
            </div>
          </form>

          <form onSubmit={handleRegister} className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-950">User Registration</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ['username', 'Username'],
                ['email', 'Email'],
                ['first_name', 'First name'],
                ['last_name', 'Last name'],
                ['phone', 'Phone number'],
                ['password', 'Password'],
                ['password_confirm', 'Confirm password'],
              ].map(([name, placeholder]) => (
                <input key={name} name={name} type={name.includes('password') ? 'password' : 'text'} value={registerForm[name]} onChange={updateForm(setRegisterForm)} placeholder={placeholder} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500" />
              ))}
              <button disabled={loading} className="sm:col-span-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:from-cyan-600 hover:to-blue-700">Register</button>
            </div>
          </form>

          <form onSubmit={handleForgotPassword} className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-950">Forgot Password</h3>
            <div className="mt-4 space-y-3">
              <input value={forgotEmail} onChange={(event) => setForgotEmail(event.target.value)} placeholder="Account email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500" />
              <button disabled={loading} className="w-full rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200">Send reset link</button>
            </div>
          </form>

          <form onSubmit={handleOtpVerify} className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-950">Email OTP Verification</h3>
            <div className="mt-4 space-y-3">
              <input name="verification_id" value={otpForm.verification_id} onChange={updateForm(setOtpForm)} placeholder="Verification ID" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500" />
              <input name="code" value={otpForm.code} onChange={updateForm(setOtpForm)} placeholder="OTP code" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500" />
              <button disabled={loading || !otpMode} className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50">Verify OTP</button>
            </div>
          </form>

          <div className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-950">Access & Safety tools</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">Role-based access is enforced by the backend `role` field and `is_active` state.</div>
              <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">Session history and activity logs are stored server-side.</div>
              <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">Account deactivation, blocking, and password change are available from the API.</div>
              <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">Google login is wired in the API and expects a real Google ID token.</div>
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-slate-950">Implemented auth scope</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {featureChecks.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-3xl bg-slate-950 p-4 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Backend routes</div>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              <div>/api/auth/register/</div>
              <div>/api/auth/login/</div>
              <div>/api/auth/verify_otp/</div>
              <div>/api/auth/forgot_password/</div>
              <div>/api/auth/change_password/</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
