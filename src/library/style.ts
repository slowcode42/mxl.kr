import * as clsx from 'clsx'
import { pipe } from 'effect'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs: clsx.ClassValue[]) => pipe(inputs, clsx.clsx, twMerge)

export { cn }
