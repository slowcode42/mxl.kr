import { sql } from 'drizzle-orm'
import { uuid, pgTable, text } from 'drizzle-orm/pg-core'

export const testTable = pgTable('testTable', {
  testId: uuid()
    .primaryKey()
    .default(sql`uuidv7()`),
  testData: text()
})
