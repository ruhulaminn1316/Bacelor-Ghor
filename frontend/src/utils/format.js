export function formatCurrency(value) {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value)
}

export function initials(name = 'Guest') {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}