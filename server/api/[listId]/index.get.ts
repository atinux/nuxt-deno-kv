import type { Kv } from '@deno/kv'
import { z } from 'zod'

async function listTodos(kv: Kv, listId: string) {
  const iter = await kv.list({ prefix: ['list', listId] }, { consistency: 'strong' })
  const todos = []
  for await (const todo of iter) todos.push(todo.value)

  todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  return todos
}

export default eventHandler(async (event) => {
  const { listId } = await getValidatedRouterParams(event, z.object({
    listId: z.string().length(36)
  }).parse)
  const kv = await useKv()
  
  if (getHeader(event, 'accept') === 'text/event-stream') {
    setHeader(event, 'content-type', 'text/event-stream')
    const stream = kv.watch([['list_updated', listId]]).getReader()
    const body = new ReadableStream({
      async start(controller) {
        while (true) {
          try {
            if ((await stream.read()).done) {
              return
            }

            const todos = await listTodos(kv, listId)
            const chunk = `data: ${JSON.stringify(todos)}\n\n`
            controller.enqueue(new TextEncoder().encode(chunk))
          } catch (e) {
            console.error(`Error refreshing list ${listId}`, e)
          }
        }
      },
      cancel() {
        stream.cancel()
      }
    })

    return sendStream(event, body)
  }

  return listTodos(kv, listId)
})