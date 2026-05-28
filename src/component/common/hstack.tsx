import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { cn } from '~/library'

export function HStack({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('flex flex-row', className)}>
      {children}
    </div>
  )
}

export const HStackL = createLink(HStack)
export const HStackM = motion.create(HStack)
export const HStackML = motion.create(HStackL)
