import { randomUUID } from 'uncrypto'
import { z } from 'zod'

export default eventHandler(async (event) => {
  const { listId } = await getValidatedRouterParams(event, z.object({
    listId: z.string().length(36)
  }).parse)
  const todo = await readValidatedBody(event, z.object({
    id: z.string().optional().default(() => randomUUID()),
    text: z.string().trim().min(1),
    completed: z.boolean().default(false),
    createdAt: z.string().default(Date),
    updatedAt: z.string().default(Date),
  }).parse)

  const kv = await useKv()
  const op = kv.atomic()
  op.set(['list', listId, todo.id], todo)
  op.set(['list_updated', listId], true)
  await op.commit()

  return todo
})