import { drizzle } from 'drizzle-orm/bun-sql'

import { url } from '~/../drizzle.config'

import { relations } from './relations'
export * from './schema'

export const db = drizzle({
  casing: 'snake_case',
  relations,
  connection: { url, max: 32, idleTimeout: 5 }
})
