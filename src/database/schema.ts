import { sql } from 'drizzle-orm'
import {
  pgTable,
  text,
  serial,
  char,
  index,
  uniqueIndex,
  integer,
  pgEnum,
  unique,
  timestamp,
  uuid,
  boolean
} from 'drizzle-orm/pg-core'

export const contextEnum = pgEnum('context', [
  'note',
  'docs',
  'string.tbl',
  'patchstring.tbl',
  'expansionstring.tbl'
])
export const statusEnum = pgEnum('status', ['approved', 'rejected', 'replaced', 'suggested'])

export const versionTable = pgTable('version', {
  version: text().primaryKey(),
  created: timestamp({ withTimezone: true }).notNull().defaultNow()
})

export const sourceTable = pgTable(
  'source',
  {
    sourceId: serial().primaryKey(),
    value: text().notNull(),
    hash: char({ length: 64 }).notNull()
  },
  ({ hash }) => [uniqueIndex('source_hash').on(hash)]
)

export const entryTable = pgTable(
  'entry',
  {
    entryId: serial().primaryKey(),
    version: text()
      .notNull()
      .references(() => versionTable.version),
    context: contextEnum().notNull(),
    idx: integer().notNull(),
    key: text().notNull(),
    sourceId: integer().references(() => sourceTable.sourceId)
  },
  ({ key, sourceId, idx, version, context }) => [
    index('entry_key').on(key),
    index('entry_source').on(sourceId),
    unique('entry_idx_version_context').on(idx, version, context)
  ]
)

export const transTable = pgTable(
  'trans',
  {
    transId: serial().primaryKey(),
    sourceId: integer()
      .notNull()
      .references(() => sourceTable.sourceId),
    value: text().notNull(),
    status: statusEnum().notNull().default('suggested'),
    author: text().notNull(),
    deleted: boolean().notNull().default(false),
    modified: timestamp({ withTimezone: true }).notNull().defaultNow()
  },
  ({ sourceId, status, deleted }) => [
    index('trans_source_status').on(sourceId, status),
    uniqueIndex('trans_source_approved')
      .on(sourceId)
      .where(sql`${status} = 'approved' AND ${deleted} = false`)
  ]
)

export const transCommentTable = pgTable(
  'trans_comment',
  {
    commentId: uuid()
      .primaryKey()
      .default(sql`uuidv7()`),
    transId: integer()
      .notNull()
      .references(() => transTable.transId),
    author: text().notNull(),
    content: text().notNull(),
    deleted: boolean().notNull().default(false),
    created: timestamp({ withTimezone: true }).notNull().defaultNow()
  },
  ({ transId, deleted }) => [index('trans_comment_trans_deleted').on(transId, deleted)]
)

export const historyTable = pgTable(
  'history',
  {
    historyId: serial().primaryKey(),
    transId: integer()
      .notNull()
      .references(() => transTable.transId),
    oldValue: text().notNull(),
    newValue: text().notNull(),
    oldStatus: statusEnum().notNull(),
    newStatus: statusEnum().notNull(),
    author: text().notNull(),
    created: timestamp({ withTimezone: true }).notNull().defaultNow()
  },
  ({ transId }) => [index('history_trans').on(transId)]
)
