import React, { createContext, useContext, useMemo, useState } from 'react'

const UiContext = createContext(null)

export function UiProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const value = useMemo(
    () => ({
      sidebarOpen,
      setSidebarOpen,
      openSidebar: () => setSidebarOpen(true),
      closeSidebar: () => setSidebarOpen(false),
      toggleSidebar: () => setSidebarOpen((current) => !current),
    }),
    [sidebarOpen],
  )

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}

export function useUi() {
  const context = useContext(UiContext)
  if (!context) throw new Error('useUi must be used within UiProvider')
  return context
}