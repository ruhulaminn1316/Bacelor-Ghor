export const stats = [
  { label: 'Total Members', value: '24', delta: '+2', tone: 'emerald' },
  { label: 'Meal Rate', value: '৳92', delta: '-৳3', tone: 'blue' },
  { label: 'Total Expense', value: '৳48,200', delta: '+14%', tone: 'amber' },
  { label: 'Due Amount', value: '৳12,460', delta: '-8%', tone: 'rose' },
]

export const activityFeed = [
  { title: 'Meal entry updated', meta: 'Today · 8:30 PM', type: 'Meal' },
  { title: 'Bazar receipt uploaded', meta: 'Today · 6:20 PM', type: 'Bazar' },
  { title: 'Rent collected from 3 members', meta: 'Yesterday', type: 'Rent' },
  { title: 'Utility bill reviewed', meta: '2 days ago', type: 'Utility' },
]

export const expenseTrend = [
  { name: 'Jan', expense: 42, meal: 55, utility: 18 },
  { name: 'Feb', expense: 45, meal: 59, utility: 22 },
  { name: 'Mar', expense: 39, meal: 63, utility: 20 },
  { name: 'Apr', expense: 52, meal: 66, utility: 24 },
  { name: 'May', expense: 58, meal: 69, utility: 28 },
  { name: 'Jun', expense: 61, meal: 71, utility: 26 },
]

export const budgetSplit = [
  { name: 'Bazar', value: 38 },
  { name: 'Rent', value: 26 },
  { name: 'Utilities', value: 18 },
  { name: 'Other', value: 18 },
]

export const members = [
  { name: 'Rakib Hasan', room: 'A-101', role: 'Admin', status: 'Active', due: '৳0' },
  { name: 'Sohan Ahmed', room: 'A-102', role: 'Member', status: 'Active', due: '৳860' },
  { name: 'Nayeem Islam', room: 'B-203', role: 'Treasurer', status: 'Away', due: '৳340' },
  { name: 'Jahidul Karim', room: 'B-204', role: 'Cook', status: 'Active', due: '৳120' },
]

export const mealEntries = [
  { date: 'Mon', breakfast: 18, lunch: 20, dinner: 17, guests: 2 },
  { date: 'Tue', breakfast: 20, lunch: 22, dinner: 21, guests: 1 },
  { date: 'Wed', breakfast: 19, lunch: 21, dinner: 20, guests: 3 },
  { date: 'Thu', breakfast: 21, lunch: 23, dinner: 22, guests: 2 },
  { date: 'Fri', breakfast: 18, lunch: 19, dinner: 18, guests: 0 },
  { date: 'Sat', breakfast: 22, lunch: 24, dinner: 23, guests: 4 },
  { date: 'Sun', breakfast: 17, lunch: 20, dinner: 19, guests: 1 },
]

export const expenses = [
  { title: 'Rice', category: 'Bazar', amount: '৳1,250', date: 'Today' },
  { title: 'Electricity', category: 'Utility', amount: '৳680', date: 'Yesterday' },
  { title: 'Cooking gas', category: 'Utility', amount: '৳1,450', date: '2 days ago' },
  { title: 'Cleaning supplies', category: 'Household', amount: '৳390', date: '2 days ago' },
]

export const notices = [
  { title: 'Monthly general meeting', meta: 'Friday · 9:00 PM', tone: 'blue' },
  { title: 'Electricity due reminder', meta: 'Pay before 24th', tone: 'amber' },
  { title: 'Mess menu update', meta: 'Posted by Admin', tone: 'emerald' },
]

export const logs = [
  { action: 'Login success', meta: 'Rakib Hasan · web', time: '2 min ago' },
  { action: 'Expense created', meta: 'Bazar receipt #3321', time: '15 min ago' },
  { action: 'Member invited', meta: 'Sohan Ahmed', time: '1 hour ago' },
  { action: 'Rent settled', meta: 'Room A-102', time: 'Today' },
]