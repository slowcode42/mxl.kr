import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

export function Box({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  )
}

export const BoxL = createLink(Box)
export const BoxM = motion.create(Box)
export const BoxML = motion.create(BoxL)
