# thecodedestroyer.com

Personal portfolio / about-me site, built with [Next.js](https://nextjs.org/) and deployed to Vercel.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for animations, **Zustand** for client state
- **Headless UI** + **Heroicons** for accessible UI primitives

## Prerequisites

- **Node.js** — see [`.nvmrc`](./.nvmrc) (Node 22)
- **pnpm** — see the `packageManager` field in [`package.json`](./package.json)

```sh
nvm use            # or: nvm install
corepack enable    # provisions the pinned pnpm version
```

## Setup

```sh
pnpm install
```

## Development

```sh
pnpm dev           # start the dev server at http://localhost:3000
```

## Build & run

```sh
pnpm build         # production build
pnpm start         # serve the production build
```

## Quality

```sh
pnpm lint          # ESLint
pnpm format        # Prettier
```

## Deployment

Pushes to the default branch are deployed automatically by Vercel.
