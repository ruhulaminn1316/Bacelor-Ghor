import React, { useEffect, useRef } from 'react'

const GOOGLE_SCRIPT_ID = 'google-identity-services'

export default function GoogleSignInButton({ clientId, onSuccess, onError, className = '' }) {
  const containerRef = useRef(null)
  const successRef = useRef(onSuccess)
  const errorRef = useRef(onError)

  useEffect(() => {
    successRef.current = onSuccess
  }, [onSuccess])

  useEffect(() => {
    errorRef.current = onError
  }, [onError])

  useEffect(() => {
    if (!clientId || !containerRef.current) return undefined

    const renderButton = () => {
      if (!window.google?.accounts?.id || !containerRef.current) return

      try {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: (response) => {
            if (response?.credential) {
              successRef.current?.(response.credential)
            } else {
              errorRef.current?.('Google sign-in failed.')
            }
          },
        })

        window.google.accounts.id.renderButton(containerRef.current, {
          theme: 'outline',
          size: 'large',
          shape: 'pill',
          width: containerRef.current.parentElement?.clientWidth || 320,
        })
      } catch (error) {
        errorRef.current?.('Google sign-in failed.')
      }
    }

    if (window.google?.accounts?.id) {
      renderButton()
      return undefined
    }

    const existingScript = document.getElementById(GOOGLE_SCRIPT_ID)
    const script = existingScript || document.createElement('script')

    if (!existingScript) {
      script.id = GOOGLE_SCRIPT_ID
      script.src = 'https://accounts.google.com/gsi/client'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    script.addEventListener('load', renderButton)

    return () => {
      script.removeEventListener('load', renderButton)
    }
  }, [clientId])

  if (!clientId) {
    return null
  }

  return <div ref={containerRef} className={className} />
}