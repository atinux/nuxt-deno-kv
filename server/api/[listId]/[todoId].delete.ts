import { z } from 'zod'

export default eventHandler(async (event) => {
  const { listId, todoId } = await getValidatedRouterParams(event, z.object({
    listId: z.string().length(36),
    todoId: z.string().length(36)
  }).parse)
  const kv = await useKv()
  const op = kv.atomic()
  op.delete(['list', listId, todoId])
  op.set(['list_updated', listId], true)
  await op.commit()

  return { deleted: true }
})