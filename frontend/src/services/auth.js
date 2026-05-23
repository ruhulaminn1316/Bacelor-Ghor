import api from './api'

export const authService = {
  register: (payload) => api.post('/auth/register/', payload),
  login: (payload) => api.post('/auth/login/', payload),
  verifyOtp: (payload) => api.post('/auth/verify_otp/', payload),
  requestEmailVerification: (payload) => api.post('/auth/request_email_verification/', payload),
  verifyEmail: (payload) => api.post('/auth/verify_email/', payload),
  resendVerificationEmail: (payload) => api.post('/auth/resend_verification_email/', payload),
  forgotPassword: (payload) => api.post('/auth/forgot_password/', payload),
  resetPassword: (payload) => api.post('/auth/reset_password/', payload),
  changePassword: (payload) => api.post('/auth/change_password/', payload),
  deactivateAccount: (payload) => api.post('/auth/deactivate_account/', payload),
  googleLogin: (payload) => api.post('/auth/google_login/', payload),
}

export const authStorage = {
  setTokens: ({ access, refresh }) => {
    if (access) localStorage.setItem('access_token', access)
    if (refresh) localStorage.setItem('refresh_token', refresh)
  },
  clearTokens: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  },
}
