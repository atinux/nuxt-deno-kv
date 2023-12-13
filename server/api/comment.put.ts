import { z } from 'zod'

export default eventHandler(async (event) => {
  const { body } = await readValidatedBody(event, z.object({
    body: z.string().trim().min(1)
  }).parse)
  const { user } = await requireUserSession(event)

  const comment = await useDB().insert(tables.comments).values({
    author: user.username,
    body
  }).onConflictDoUpdate({
    target: tables.comments.author,
    set: { body }
  })
  .returning().get()

  return comment
})