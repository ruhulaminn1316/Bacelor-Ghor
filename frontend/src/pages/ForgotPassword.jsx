import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import AuthLayout from '../layouts/AuthLayout'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  return (
    <AuthLayout title="Reset your password" subtitle="Account recovery">
      <form className="space-y-5">
        <Input label="Recovery email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your account email" />
        <Button type="submit" className="w-full" size="lg"><Mail className="h-4 w-4" />Send recovery link</Button>
        <p className="text-center text-sm text-slate-400">
          Back to <Link to="/login" className="font-semibold text-white">Login</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
