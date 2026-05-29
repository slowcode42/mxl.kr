import { z } from 'zod'

export const loginSchema = z.object({
  user: z.string().nonempty(),
  pass: z.string().nonempty()
})

export const sessionSchema = z.object({
  user: z.string().nonempty(),
  sessid: z.string().nonempty()
})
