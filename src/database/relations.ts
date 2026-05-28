import { defineRelations } from 'drizzle-orm'

import { testTable } from './schema'

export const relations = defineRelations({ testTable }, () => ({}))
