export const formatCurrency = (amount, currency = '৳') => {
  return `${currency}${Number(amount).toLocaleString('en-BD')}`
}

export const formatDate = (dateStr) => {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-BD', {
    day: 'numeric', month: 'short', year: 'numeric'
  })
}

export const getInitials = (name) => {
  if (!name) return '?'
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

export const getStatusColor = (status) => {
  const map = {
    'Active': 'badge-green',
    'Inactive': 'badge-red',
    'Paid': 'badge-green',
    'Pending': 'badge-amber',
    'Overdue': 'badge-red',
    'Full': 'badge-red',
    'Available': 'badge-blue',
    'Empty': 'badge-amber',
    'High': 'badge-red',
    'Medium': 'badge-amber',
    'Low': 'badge-blue',
  }
  return map[status] || 'badge-blue'
}

export const cn = (...classes) => classes.filter(Boolean).join(' ')
