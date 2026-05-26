import React from 'react'
import { getStatusColor } from '../../utils/helpers'

export default function Badge({ status, children, className = '' }) {
  const label = children || status
  const colorClass = getStatusColor(status || label)
  return (
    <span className={`${colorClass} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 mr-2 inline-block" />
      {label}
    </span>
  )
}
