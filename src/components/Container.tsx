import React from 'react'
import { cn } from '@utils/cn'
import './container.css'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: As = 'div',
}) => {
  return (
    <As className={cn('container', className)}>
      {children}
    </As>
  )
}
