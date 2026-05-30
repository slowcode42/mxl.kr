import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { cn } from '~/library'

export function Flex({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex', className)} {...props}>
      {children}
    </div>
  )
}

export const FlexL = createLink(Flex)
export const FlexM = motion.create(Flex)
export const FlexML = motion.create(FlexL)
