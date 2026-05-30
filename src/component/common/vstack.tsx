import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { cn } from '~/library'

export function VStack({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col', className)} {...props}>
      {children}
    </div>
  )
}

export const VStackL = createLink(VStack)
export const VStackM = motion.create(VStack)
export const VStackML = motion.create(VStackL)
