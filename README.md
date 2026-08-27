# thecodedestroyer.com

Personal portfolio / about-me site, built with [Next.js](https://nextjs.org/) and deployed to Vercel.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** for animations, **Zustand** for client state
- **Headless UI** + **Heroicons** for accessible UI primitives

## Prerequisites

- **Node.js** — see [`.nvmrc`](./.nvmrc) (Node 24)
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
pnpm lint          # ESLint + Prettier + tsc
pnpm format        # Prettier
```

## Tests

End-to-end only, with [Playwright](https://playwright.dev/). The suite lives in
[`e2e/`](./e2e) and always runs against the production build; see
[`playwright.config.ts`](./playwright.config.ts) for why.

```sh
pnpm exec playwright install chromium   # once, to fetch the browser
pnpm test                               # boots `next start` on :3111, then runs
```

`playwright.config.ts` starts and stops the server itself, so no separate
`pnpm start` is needed. Locally it reuses an already-running server on that port.

When a CI run fails it uploads a `playwright-report` artifact. Open it with
`pnpm exec playwright show-report <unzipped-dir>` — the report fetches its own
data over HTTP, so opening `index.html` from `file://` shows an empty page.

### Dependency conventions

- Every dependency is pinned exactly — no `^` or `~`.
- `pnpm-lock.yaml` is **Prettier-formatted and lint-checked**. A raw `pnpm install`
  rewrites it in pnpm's own compact style and turns `pnpm lint` red, so run
  `pnpm exec prettier --write pnpm-lock.yaml` after any install that changes it.
- pnpm 10.25's default `minimumReleaseAge` is interpreted in _minutes_ (~840 days),
  which blocks resolution of anything recent. Pass `--config.minimumReleaseAge=0`
  when installing until this is settled repo-wide.

## Deployment

Pushes to the default branch are deployed automatically by Vercel.
