import { sqliteTable, text, integer, unique } from 'drizzle-orm/sqlite-core'

export const comments = sqliteTable('comments', {
  id: integer('id').primaryKey(),
  author: text('author').notNull(),
  body: text('body').notNull()
}, (table) => ({
  uniqueAuthor: unique().on(table.author)
}))