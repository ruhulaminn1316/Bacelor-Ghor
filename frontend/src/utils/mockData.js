// Mock Data for BachelorGhor

export const mockUser = {
  id: 1,
  name: 'Arif Hossain',
  email: 'arif@bachelorghor.com',
  role: 'Manager',
  avatar: null,
  room: '101',
  phone: '+880 1711-234567',
  joinDate: '2024-01-15',
  profileComplete: 78,
}

export const mockMembers = [
  { id: 1, name: 'Arif Hossain', room: '101', role: 'Manager', status: 'Active', meals: 24, due: 0, phone: '+880 1711-234567', joinDate: '2024-01-15' },
  { id: 2, name: 'Rakib Hasan', room: '102', role: 'Member', status: 'Active', meals: 22, due: 500, phone: '+880 1812-345678', joinDate: '2024-02-01' },
  { id: 3, name: 'Sumon Ahmed', room: '103', role: 'Member', status: 'Active', meals: 20, due: 1200, phone: '+880 1913-456789', joinDate: '2024-01-20' },
  { id: 4, name: 'Limon Mia', room: '201', role: 'Member', status: 'Active', meals: 18, due: 0, phone: '+880 1614-567890', joinDate: '2024-03-01' },
  { id: 5, name: 'Nayan Roy', room: '202', role: 'Member', status: 'Inactive', meals: 0, due: 2400, phone: '+880 1515-678901', joinDate: '2023-12-10' },
  { id: 6, name: 'Tanjim Islam', room: '203', role: 'Member', status: 'Active', meals: 25, due: 0, phone: '+880 1716-789012', joinDate: '2024-02-15' },
]

export const mockRooms = [
  { id: 1, number: '101', floor: '1st', capacity: 2, occupied: 2, type: 'Double', rent: 3500, status: 'Full' },
  { id: 2, number: '102', floor: '1st', capacity: 2, occupied: 1, type: 'Double', rent: 3500, status: 'Available' },
  { id: 3, number: '103', floor: '1st', capacity: 1, occupied: 1, type: 'Single', rent: 4500, status: 'Full' },
  { id: 4, number: '201', floor: '2nd', capacity: 3, occupied: 2, type: 'Triple', rent: 3000, status: 'Available' },
  { id: 5, number: '202', floor: '2nd', capacity: 2, occupied: 2, type: 'Double', rent: 3500, status: 'Full' },
  { id: 6, number: '203', floor: '2nd', capacity: 1, occupied: 1, type: 'Single', rent: 4500, status: 'Full' },
  { id: 7, number: '301', floor: '3rd', capacity: 2, occupied: 0, type: 'Double', rent: 3500, status: 'Empty' },
  { id: 8, number: '302', floor: '3rd', capacity: 3, occupied: 1, type: 'Triple', rent: 3000, status: 'Available' },
]

export const mockMeals = [
  { id: 1, member: 'Arif Hossain', date: '2024-05-01', breakfast: 1, lunch: 1, dinner: 1, total: 3, guest: 0 },
  { id: 2, member: 'Rakib Hasan', date: '2024-05-01', breakfast: 0, lunch: 1, dinner: 1, total: 2, guest: 0 },
  { id: 3, member: 'Sumon Ahmed', date: '2024-05-01', breakfast: 1, lunch: 0, dinner: 1, total: 2, guest: 1 },
  { id: 4, member: 'Limon Mia', date: '2024-05-01', breakfast: 1, lunch: 1, dinner: 0, total: 2, guest: 0 },
  { id: 5, member: 'Tanjim Islam', date: '2024-05-01', breakfast: 1, lunch: 1, dinner: 1, total: 3, guest: 0 },
  { id: 6, member: 'Arif Hossain', date: '2024-05-02', breakfast: 1, lunch: 1, dinner: 1, total: 3, guest: 0 },
  { id: 7, member: 'Rakib Hasan', date: '2024-05-02', breakfast: 1, lunch: 1, dinner: 1, total: 3, guest: 0 },
]

export const monthlyMealData = [
  { month: 'Jan', meals: 280, rate: 42 },
  { month: 'Feb', meals: 310, rate: 38 },
  { month: 'Mar', meals: 295, rate: 40 },
  { month: 'Apr', meals: 320, rate: 37 },
  { month: 'May', meals: 298, rate: 41 },
  { month: 'Jun', meals: 315, rate: 39 },
]

export const mockBazar = [
  { id: 1, date: '2024-05-26', buyer: 'Arif Hossain', items: 'Vegetables, Oil, Rice', amount: 850, category: 'Grocery', receipt: true },
  { id: 2, date: '2024-05-25', buyer: 'Rakib Hasan', items: 'Fish, Spices', amount: 420, category: 'Protein', receipt: false },
  { id: 3, date: '2024-05-24', buyer: 'Sumon Ahmed', items: 'Chicken, Eggs', amount: 680, category: 'Protein', receipt: true },
  { id: 4, date: '2024-05-23', buyer: 'Limon Mia', items: 'Fruits, Bread', amount: 310, category: 'Misc', receipt: false },
  { id: 5, date: '2024-05-22', buyer: 'Arif Hossain', items: 'Gas Cylinder', amount: 1200, category: 'Utility', receipt: true },
]

export const mockExpenses = [
  { id: 1, title: 'Electricity Bill', category: 'Utility', amount: 2400, date: '2024-05-05', split: true, status: 'Paid' },
  { id: 2, title: 'Water Bill', category: 'Utility', amount: 600, date: '2024-05-05', split: true, status: 'Paid' },
  { id: 3, title: 'Internet Bill', category: 'Utility', amount: 800, date: '2024-05-10', split: true, status: 'Pending' },
  { id: 4, title: 'Cook Salary', category: 'Salary', amount: 6000, date: '2024-05-01', split: true, status: 'Paid' },
  { id: 5, title: 'Cleaning', category: 'Maintenance', amount: 500, date: '2024-05-15', split: true, status: 'Paid' },
  { id: 6, title: 'Repair - Fan', category: 'Maintenance', amount: 350, date: '2024-05-18', split: false, status: 'Paid' },
]

export const expenseCategoryData = [
  { name: 'Grocery', value: 12400, color: '#22c55e' },
  { name: 'Utility', value: 3800, color: '#06b6d4' },
  { name: 'Salary', value: 6000, color: '#8b5cf6' },
  { name: 'Maintenance', value: 850, color: '#f59e0b' },
  { name: 'Misc', value: 1200, color: '#f43f5e' },
]

export const monthlyExpenseData = [
  { month: 'Jan', bazar: 11200, utility: 3600, salary: 6000, misc: 1400 },
  { month: 'Feb', bazar: 12400, utility: 3800, salary: 6000, misc: 800 },
  { month: 'Mar', bazar: 10800, utility: 4100, salary: 6000, misc: 1200 },
  { month: 'Apr', bazar: 13200, utility: 3500, salary: 6000, misc: 900 },
  { month: 'May', bazar: 11900, utility: 3800, salary: 6000, misc: 1100 },
  { month: 'Jun', bazar: 12800, utility: 3900, salary: 6000, misc: 700 },
]

export const mockRent = [
  { id: 1, member: 'Arif Hossain', room: '101', amount: 3500, month: 'May 2024', status: 'Paid', paidDate: '2024-05-02' },
  { id: 2, member: 'Rakib Hasan', room: '102', amount: 3500, month: 'May 2024', status: 'Pending', paidDate: null },
  { id: 3, member: 'Sumon Ahmed', room: '103', amount: 4500, month: 'May 2024', status: 'Paid', paidDate: '2024-05-01' },
  { id: 4, member: 'Limon Mia', room: '201', amount: 3000, month: 'May 2024', status: 'Paid', paidDate: '2024-05-03' },
  { id: 5, member: 'Nayan Roy', room: '202', amount: 3500, month: 'May 2024', status: 'Overdue', paidDate: null },
  { id: 6, member: 'Tanjim Islam', room: '203', amount: 4500, month: 'May 2024', status: 'Paid', paidDate: '2024-05-04' },
]

export const mockUtilities = [
  { id: 1, type: 'Electricity', provider: 'BPDB', amount: 2400, month: 'May 2024', unit: 120, status: 'Paid', dueDate: '2024-05-15' },
  { id: 2, type: 'Water', provider: 'WASA', amount: 600, month: 'May 2024', unit: null, status: 'Paid', dueDate: '2024-05-20' },
  { id: 3, type: 'Gas', provider: 'Titas', amount: 950, month: 'May 2024', unit: null, status: 'Pending', dueDate: '2024-05-25' },
  { id: 4, type: 'Internet', provider: 'Grameenphone', amount: 800, month: 'May 2024', unit: null, status: 'Paid', dueDate: '2024-05-10' },
]

export const utilityTrendData = [
  { month: 'Jan', electricity: 2100, water: 580, gas: 900, internet: 800 },
  { month: 'Feb', electricity: 2300, water: 600, gas: 950, internet: 800 },
  { month: 'Mar', electricity: 2600, water: 620, gas: 900, internet: 800 },
  { month: 'Apr', electricity: 2800, water: 590, gas: 1000, internet: 800 },
  { month: 'May', electricity: 2400, water: 600, gas: 950, internet: 800 },
  { month: 'Jun', electricity: 3100, water: 650, gas: 1050, internet: 800 },
]

export const mockNotices = [
  { id: 1, title: 'Electricity Bill Due', type: 'reminder', priority: 'high', date: '2024-05-26', content: 'Please pay your electricity bill by May 31st to avoid late fees.', author: 'Manager' },
  { id: 2, title: 'Monthly Meeting', type: 'event', priority: 'medium', date: '2024-05-28', content: 'Monthly house meeting on May 28th at 8 PM in the common room.', author: 'Manager' },
  { id: 3, title: 'Water Supply Interruption', type: 'announcement', priority: 'high', date: '2024-05-25', content: 'Water supply will be unavailable on May 27th from 10 AM to 2 PM for maintenance.', author: 'Manager' },
  { id: 4, title: 'Cleanliness Notice', type: 'notice', priority: 'low', date: '2024-05-24', content: 'Please keep the common kitchen and bathroom clean. A cleaning schedule is posted on the board.', author: 'Manager' },
  { id: 5, title: 'New Member Welcome', type: 'announcement', priority: 'low', date: '2024-05-20', content: 'Welcome Tanjim Islam to room 203! Please make him feel at home.', author: 'Manager' },
]

export const mockActivities = [
  { id: 1, action: 'Meal entry added', user: 'Arif Hossain', time: '2 hours ago', type: 'meal', icon: 'utensils' },
  { id: 2, action: 'Rent paid', user: 'Sumon Ahmed', time: '5 hours ago', type: 'payment', icon: 'credit-card' },
  { id: 3, action: 'Bazar added', user: 'Rakib Hasan', time: '8 hours ago', type: 'bazar', icon: 'shopping-cart' },
  { id: 4, action: 'New notice posted', user: 'Manager', time: '1 day ago', type: 'notice', icon: 'bell' },
  { id: 5, action: 'Member added', user: 'Admin', time: '2 days ago', type: 'member', icon: 'user-plus' },
  { id: 6, action: 'Utility bill updated', user: 'Arif Hossain', time: '3 days ago', type: 'utility', icon: 'zap' },
]

export const dashboardStats = {
  totalMembers: 6,
  activeMembers: 5,
  mealRate: 41.50,
  totalExpense: 24250,
  totalDue: 4100,
  totalRent: 22500,
  occupiedRooms: 7,
  totalRooms: 8,
}
