import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { cn } from '~/library'

export function Grid({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('grid', className)} {...props}>
      {children}
    </div>
  )
}

export const GridL = createLink(Grid)
export const GridM = motion.create(Grid)
export const GridML = motion.create(GridL)
