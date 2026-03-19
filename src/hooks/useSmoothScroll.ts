/**
 * Hook for smooth scrolling - uses native browser smooth scroll
 */
import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    // Configurar scroll suave globalmente
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      // Limpiar al desmontar
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
}

export const scrollToElement = (element: HTMLElement | string) => {
  if (typeof element === 'string') {
    const el = document.querySelector(element) as HTMLElement
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
