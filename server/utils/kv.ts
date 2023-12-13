import { openKv } from '@deno/kv'

export const useKv = () => {
  if (globalThis.Deno) {
    return globalThis.Deno.openKv()
  }
  return openKv('kv.db')
}