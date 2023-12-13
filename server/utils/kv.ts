const OpenKV = () => import('@deno/kv')

export const useKv = async () => {
  if (globalThis.Deno) {
    return globalThis.Deno.openKv()
  }
  const { openKv } = await OpenKV()
  return openKv('kv.db')
}