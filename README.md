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
- A 7-day supply-chain cooldown (`minimumReleaseAge`) is pinned in
  [`pnpm-workspace.yaml`](./pnpm-workspace.yaml): pnpm will not resolve a version
  published less than a week ago. Two traps worth knowing:
  - **The unit is minutes, not seconds.** `10080` is 7 days; a seconds-shaped
    `1209600` is ~840 days and blocks essentially all of npm.
  - **pnpm ships no default for it**, so an unpinned repo silently inherits
    whatever is in each contributor's global pnpm rc (`pnpm config list` shows
    where a value came from). That is why it is pinned here rather than left off.

  To pull something newer than the window — an urgent security patch, say — use
  `pnpm add <pkg> --config.minimumReleaseAge=0`, or give a package a standing
  exemption via `minimumReleaseAgeExclude`. CI installs with `--frozen-lockfile`,
  which skips resolution, so it is never affected.

## Deployment

Pushes to the default branch are deployed automatically by Vercel.
