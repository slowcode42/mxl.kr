import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { cn } from '~/library'

export function HStack({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-row', className)} {...props}>
      {children}
    </div>
  )
}

export const HStackL = createLink(HStack)
export const HStackM = motion.create(HStack)
export const HStackML = motion.create(HStackL)
