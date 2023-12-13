import { randomUUID } from 'uncrypto'

export default eventHandler((event) => {
  const listId = randomUUID()
  return sendRedirect(event, `/${listId}`)
})