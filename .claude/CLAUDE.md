# Giacomo Rebonato - Personal Website

## Project Overview

Personal website for Giacomo Rebonato (www.giacomorebonato.com). Monorepo with Fastify backend serving a static Vite frontend. Deployed on Fly.io (Amsterdam region).

## Architecture

- **Monorepo**: pnpm workspaces (`frontend/`, `backend/`, `shared/`)
- **Backend**: Fastify 5 + Node.js (uses `--experimental-strip-types` for native TS)
- **Frontend**: Vite 6 + Tailwind CSS 4 + DaisyUI 5 (static HTML, no framework)
- **Shared**: Common types between frontend and backend
- **Deploy**: Docker on Fly.io, frontend builds into `backend/dist/`

## Commands

```bash
# Development
pnpm dev              # Run all workspaces in dev mode (frontend :3000, backend :3001)
pnpm build            # Build all (cleans backend/dist first)
pnpm start            # Start production server (backend)
pnpm test             # Run all tests
pnpm format           # Biome check + autofix

# Individual workspaces
pnpm -F backend dev   # Backend only
pnpm -F frontend dev  # Frontend only
```

## Code Style

- **Formatter/Linter**: Biome (tabs, no semicolons, single quotes)
- **Pre-commit hook**: Lefthook runs Biome on staged files
- **Language**: TypeScript throughout
- No React/Vue/Angular - the frontend is plain HTML + Tailwind + DaisyUI

## Key Files

- `frontend/index.html` - The main (and only) page
- `backend/src/create-server.ts` - Fastify server setup + routes
- `backend/src/env-plugin.ts` - Environment config
- `backend/src/vite-plugin.ts` - Static file serving
- `fly.toml` - Fly.io deployment config
- `Dockerfile` - Production build

## Deployment

Deployed to Fly.io. The frontend is built by Vite, copied into `backend/dist/`, and served as static files by Fastify.

```bash
fly deploy            # Deploy to Fly.io
```
