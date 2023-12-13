export const useKv = async () => {
  if (globalThis.Deno) {
    return globalThis.Deno.openKv()
  }
  if (process.dev) {
    const OpenKV = () => import('@deno/kv')
    const { openKv } = await OpenKV()
    return openKv('kv.db')
  }
}