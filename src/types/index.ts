/**
 * Global TypeScript types and interfaces
 */

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
}

export interface ScrollConfig {
  lerp?: number
  friction?: number
  class?: string
}

export type Theme = 'light' | 'dark'
