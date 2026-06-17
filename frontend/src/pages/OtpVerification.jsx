import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import AuthLayout from '../layouts/AuthLayout'
import Button from '../components/common/Button'

export default function OtpVerification() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', ''])

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <AuthLayout title="Verify OTP" subtitle="Secure access">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              onChange={(event) => {
                const value = event.target.value.slice(-1)
                const next = [...otp]
                next[index] = value
                setOtp(next)
              }}
              className="h-14 rounded-2xl border border-slate-200 bg-white/90 text-center text-lg font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white"
              inputMode="numeric"
            />
          ))}
        </div>
        <Button type="submit" className="w-full" size="lg"><ShieldCheck className="h-4 w-4" />Verify and continue</Button>
        <p className="text-center text-sm text-slate-400">
          Missed it? <Link to="/forgot-password" className="font-semibold text-white">Resend code</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
