import { defineRelations } from 'drizzle-orm'

import {
  versionTable,
  sourceTable,
  entryTable,
  transTable,
  transCommentTable,
  historyTable
} from './schema'

export const relations = defineRelations(
  { versionTable, sourceTable, entryTable, transTable, transCommentTable, historyTable },
  () => ({})
)
