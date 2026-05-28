import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { cn } from '~/library'

export function Grid({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('grid', className)}>
      {children}
    </div>
  )
}

export const GridL = createLink(Grid)
export const GridM = motion.create(Grid)
export const GridML = motion.create(GridL)
