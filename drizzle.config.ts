import { defineConfig } from 'drizzle-kit'

const user = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD
const port = process.env.POSTGRES_PORT
const db = process.env.POSTGRES_DB

export const url = `postgresql://${user}:${password}@localhost:${port}/${db}`

export default defineConfig({
  casing: 'snake_case',
  schema: 'src/database/schema.ts',
  dialect: 'postgresql',
  schemaFilter: ['public'],
  dbCredentials: {
    url
  }
})
