import { useEffect } from 'react'

export function FontLoader() {
  useEffect(() => {
    const fonts = [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;700&family=Asap:wght@400;500;700&display=swap'
      }
    ]

    const loadedLinks = fonts.map(font => {
      const link = document.createElement('link')
      Object.entries(font).forEach(([key, value]) => {
        link.setAttribute(key, value)
      })
      return document.head.appendChild(link)
    })

    return () => {
      loadedLinks.forEach(link => link.remove())
    }
  }, [])

  return null
}