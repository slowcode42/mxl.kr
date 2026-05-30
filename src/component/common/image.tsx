import { createLink } from '@tanstack/react-router'
import { motion } from 'motion/react'

export function Image({ className, alt = '', ...props }: React.ComponentProps<'img'>) {
  return <img className={className} alt={alt} {...props} />
}

export const ImageL = createLink(Image)
export const ImageM = motion.create(Image)
export const ImageML = motion.create(ImageL)
