import {
  BarChart3,
  Bell,
  ClipboardList,
  CreditCard,
  FileText,
  Home,
  LayoutGrid,
  Leaf,
  MessageSquare,
  Receipt,
  Settings,
  Shield,
  Sparkles,
  Users,
  Warehouse,
  UserCircle2,
  BedDouble,
  LogOut,
} from 'lucide-react'

export const mainNavItems = [
  { label: 'Dashboard', to: '/dashboard', icon: Home },
  { label: 'Meal Management', to: '/meal-management', icon: Leaf },
  { label: 'Bazar Management', to: '/bazar-management', icon: Receipt },
  { label: 'Expense Management', to: '/expense-management', icon: CreditCard },
  { label: 'Rent Management', to: '/rent-management', icon: Warehouse },
  { label: 'Utility Bills', to: '/utility-bills', icon: Bell },
  { label: 'Members', to: '/members-management', icon: Users },
  { label: 'Rooms & Seats', to: '/rooms-seats', icon: BedDouble },
  { label: 'Reports', to: '/reports-analytics', icon: BarChart3 },
  { label: 'Notice Board', to: '/notice-board', icon: FileText },
  { label: 'AI Assistant', to: '/ai-assistant', icon: Sparkles },
  { label: 'Activity Logs', to: '/activity-logs', icon: ClipboardList },
  { label: 'Settings', to: '/settings', icon: Settings },
  { label: 'Profile', to: '/profile', icon: UserCircle2 },
]

export const footerNavItems = [
  { label: 'Security', to: '/settings', icon: Shield },
  { label: 'Modules', to: '/reports-analytics', icon: LayoutGrid },
  { label: 'Messages', to: '/ai-assistant', icon: MessageSquare },
  { label: 'Logout', to: '/logout', icon: LogOut },
]
