# Nuxt with Deno KV

A collaborative todo-list app built using [Nuxt](https://nuxt.com) with server-side rendering on the edge on [Deno Deploy](https://deno.com/deploy) and [Deno KV](https://docs.deno.com/kv/manual) as database.

Demo: https://nuxt-todos-kv.deno.dev

It also leverages [Deno KV Watch](https://deno.com/blog/kv-watch) and Server-Sent Events to update the UI in real-time for a shared todo list.

https://github.com/Atinux/nuxt-deno-kv/assets/904724/2eeaa1a2-a4ab-47d2-b40a-17cd08d0c20b

## Features

- [Server-Side Rendering on the Edge](https://nuxt.com/blog/nuxt-on-the-edge)
- Expose `useKv()` hook to use Deno KV as database
- User interface made with [Nuxt UI](https://ui.nuxt.com) and [Nuxt UI Pro](https://ui.nuxt.com/pro)

## Setup

Make sure to install the dependencies using [pnpm](https://pnpm.io/):

```bash
pnpm i
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Deploy on Deno Deploy

You can take a look at the [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) file to see how the deployment is done.

To build the demo in production, you need a [Nuxt UI Pro](https://ui.nuxt.com/pro) license, if you don't want to use UI Pro, you can remove the `@nuxt/ui-pro` from the dependencies abd `nuxt.config.ts`.

Otherwise, you can set the `NUXT_UI_PRO_LICENSE` secret in your GitHub repository settings.

## Credits

- [denoland/showcase_todo](https://github.com/denoland/showcase_todo)

## License

[MIT License](./LICENSE)
