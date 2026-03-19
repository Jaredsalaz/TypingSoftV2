/**
 * Hook for responsive design using media queries
 */
import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    
    window.addEventListener('change', listener)
    media.addEventListener('change', listener)

    return () => {
      window.removeEventListener('change', listener)
      media.removeEventListener('change', listener)
    }
  }, [matches, query])

  return matches
}
