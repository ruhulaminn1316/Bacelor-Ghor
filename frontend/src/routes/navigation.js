import {
  BarChart3,
  Bell,
  ClipboardList,
  CreditCard,
  FileText,
  Home,
  LayoutGrid,
  Leaf,
  Receipt,
  Scale,
  Settings,
  Shield,
  UserCog,
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
  { label: 'Settlement', to: '/settlement', icon: Scale },
  { label: 'Rooms & Seats', to: '/rooms-seats', icon: BedDouble },
  { label: 'Reports', to: '/reports-analytics', icon: BarChart3 },
  { label: 'Notice Board', to: '/notice-board', icon: FileText },
  { label: 'Admin Panel', to: '/admin-panel', icon: UserCog },
  { label: 'Activity Logs', to: '/activity-logs', icon: ClipboardList },
  { label: 'Settings', to: '/settings', icon: Settings },
  { label: 'Profile', to: '/profile', icon: UserCircle2 },
]

export const footerNavItems = [
  { label: 'Security', to: '/settings', icon: Shield },
  { label: 'Modules', to: '/reports-analytics', icon: LayoutGrid },
  { label: 'Logout', to: '/logout', icon: LogOut },
]
