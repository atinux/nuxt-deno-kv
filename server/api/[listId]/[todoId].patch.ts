import { z } from 'zod'

export default eventHandler(async (event) => {
  const { listId, todoId } = await getValidatedRouterParams(event, z.object({
    listId: z.string().length(36),
    todoId: z.string().length(36)
  }).parse)
  const { completed } = await readValidatedBody(event, z.object({
    completed: z.boolean()
  }).parse)
  const kv = await useKv()

  const todo = await kv.get(['list', listId, todoId])
  if (!todo.value) {
    throw createError({
      statusCode: 404,
      message: 'Todo not found'
    })
  }

  const op = kv.atomic()
  op.set(['list', listId, todoId], {
    ...todo.value,
    updatedAt: new Date(),
    completed
  })
  op.set(['list_updated', listId], true)
  await op.commit()

  return { updated: true }
})