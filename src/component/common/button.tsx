import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

export function Button({ children, className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}

export const ButtonL = createLink(Button)
export const ButtonM = motion.create(Button)
export const ButtonML = motion.create(ButtonL)
