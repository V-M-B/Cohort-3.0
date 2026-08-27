# MonoRepo

This repository is a small [Turborepo](https://turborepo.dev/) monorepo example. It keeps two Next.js applications and shared packages in one Yarn workspace so code, tooling, and build tasks can be managed from the repository root.

## Repository structure

```text
apps/
	docs/       Next.js app running on port 3001
	web/        Next.js app running on port 3000
packages/
	ui/         Shared React components
	eslint-config/
	typescript-config/
turbo.json    Turborepo task and cache configuration
```

Both applications use the shared `@repo/ui`, `@repo/eslint-config`, and `@repo/typescript-config` packages. The codebase is written in TypeScript.

## Requirements

- Node.js 22 or later
- Yarn 1.22.4

Install dependencies from the repository root:

```sh
yarn install
```

## Common commands

Run tasks across all apps and packages:

```sh
yarn dev
yarn build
yarn lint
yarn check-types
```

Start a single app with a Turborepo filter:

```sh
yarn turbo dev --filter=web
yarn turbo dev --filter=docs
```

The apps are available at `http://localhost:3000` and `http://localhost:3001` while developing.

Format TypeScript and Markdown files:

```sh
yarn format
```

## How Turborepo is used here

The root scripts delegate work to Turborepo. The configuration in `turbo.json` builds packages before the apps that depend on them, shares build results through the local `.turbo` cache, and keeps development tasks running without caching. Use `--filter` when you only need to work on one app or package.

## Remote caching

Turborepo can share cache artifacts with a team or CI pipeline through Vercel Remote Cache. This is optional; local caching works without any account. See the [Turborepo remote caching documentation](https://turborepo.dev/docs/core-concepts/remote-caching) for setup instructions.

## Useful links

- [Turborepo documentation](https://turborepo.dev/docs)
- [Turborepo task configuration](https://turborepo.dev/docs/reference/configuration)
- [Next.js documentation](https://nextjs.org/docs)
- [Yarn Classic documentation](https://classic.yarnpkg.com/en/docs/)
