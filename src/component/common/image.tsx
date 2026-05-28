import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

export function Image({ ...props }: React.ComponentProps<'img'>) {
  return <img {...props} alt='' />
}

export const ImageL = createLink(Image)
export const ImageM = motion.create(Image)
export const ImageML = motion.create(ImageL)
