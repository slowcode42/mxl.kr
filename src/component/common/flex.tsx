import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

import { cn } from '~/library'

export function Flex({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('flex', className)}>
      {children}
    </div>
  )
}

export const FlexL = createLink(Flex)
export const FlexM = motion.create(Flex)
export const FlexML = motion.create(FlexL)
