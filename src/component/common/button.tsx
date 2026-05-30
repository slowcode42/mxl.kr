import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

export function Button({ className, children, ...props }: React.ComponentProps<'button'>) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export const ButtonL = createLink(Button)
export const ButtonM = motion.create(Button)
export const ButtonML = motion.create(ButtonL)
