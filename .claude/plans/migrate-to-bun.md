# Migrate from Node/PNPM/Fastify/Vite to Bun Fullstack

## Context

The site is a simple personal profile page with one API endpoint. The current setup — a pnpm monorepo with 3 workspaces, Fastify, Vite, 13+ dependencies — is overkill. Bun's fullstack dev server (`Bun.serve()`) can replace the entire stack with a single `server.ts` file, built-in Tailwind, and zero build config.

## Target File Structure

```
giacomo-rebonato/
  server.ts                 # single entry point (Bun.serve)
  server.test.ts            # test (bun:test)
  index.html                # the site
  src/
    index.css               # tailwindcss + daisyui
  public/                   # static assets (PWA icons, logo, etc.)
  .env                      # HOST, NODE_ENV, PORT
  package.json              # flat, bun scripts, ~5 deps
  Dockerfile                # oven/bun base
  tsconfig.json             # editor type support
  biome.json                # formatter/linter
  lefthook.yml              # pre-commit hook
  fly.toml                  # Fly.io config
```

## What Changed

- **Deleted**: `backend/`, `frontend/`, `shared/`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `.nvmrc`
- **Created**: `server.ts`, `server.test.ts`, `tsconfig.json`
- **Moved to root**: `index.html`, `src/index.css`, `public/*`, `.env`
- **Rewritten**: `package.json`, `Dockerfile`, `.github/workflows/code-quality.yml`
- **13 dependencies removed**, 5 remain

## Status: COMPLETE
