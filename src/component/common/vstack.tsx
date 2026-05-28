import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { cn } from '~/library'

export function VStack({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('flex flex-col', className)}>
      {children}
    </div>
  )
}

export const VStackL = createLink(VStack)
export const VStackM = motion.create(VStack)
export const VStackML = motion.create(VStackL)
