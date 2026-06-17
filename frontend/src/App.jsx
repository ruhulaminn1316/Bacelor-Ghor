import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './layouts/DashboardLayout'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import OtpVerification from './pages/OtpVerification'
import Dashboard from './pages/DashboardView'
import MealManagement from './pages/MealManagementView'
import BazarManagement from './pages/BazarManagementView'
import ExpenseManagement from './pages/ExpenseManagementView'
import RentManagement from './pages/RentManagementView'
import UtilityBills from './pages/UtilityBillsView'
import MembersManagement from './pages/MembersManagementView'
import RoomsSeats from './pages/RoomsSeatsView'
import ReportsAnalytics from './pages/ReportsAnalyticsView'
import NoticeBoard from './pages/NoticeBoardView'
import Settings from './pages/SettingsView'
import UserProfile from './pages/UserProfileView'
import ActivityLogs from './pages/ActivityLogsView'
import SettlementView from './pages/SettlementView'
import AdminPanelView from './pages/AdminPanelView'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { UiProvider } from './context/UiContext'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OtpVerification />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meal-management" element={<MealManagement />} />
        <Route path="/bazar-management" element={<BazarManagement />} />
        <Route path="/expense-management" element={<ExpenseManagement />} />
        <Route path="/rent-management" element={<RentManagement />} />
        <Route path="/utility-bills" element={<UtilityBills />} />
        <Route path="/members-management" element={<MembersManagement />} />
        <Route path="/rooms-seats" element={<RoomsSeats />} />
        <Route path="/reports-analytics" element={<ReportsAnalytics />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/activity-logs" element={<ActivityLogs />} />
        <Route path="/settlement" element={<SettlementView />} />
        <Route path="/admin-panel" element={<AdminPanelView />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UiProvider>
          <BrowserRouter>
            <AnimatePresence mode="wait">
              <AppRoutes />
            </AnimatePresence>
            <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
          </BrowserRouter>
        </UiProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
