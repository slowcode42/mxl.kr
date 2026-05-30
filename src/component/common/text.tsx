import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

export function Text({ className, children, ...props }: React.ComponentProps<'span'>) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  )
}

export const TextL = createLink(Text)
export const TextM = motion.create(Text)
export const TextML = motion.create(TextL)
