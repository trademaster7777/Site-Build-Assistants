# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the M&K Contractors LLC marketing website.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### M&K Contractors LLC (`artifacts/mk-contractors`)
- **Type**: React + Vite (static, presentation-first)
- **Preview path**: `/`
- **Purpose**: Full marketing website for M&K Contractors LLC — specialty excavation and site contracting firm in Pennsylvania
- **Pages**: 9 pages — Home, About Us, 5 Service pages, Projects Gallery, Contact
- **Routing**: wouter
- **Fonts**: Montserrat (headings) + Inter (body) from Google Fonts
- **Colors**: Dark industrial (#1C1C1E background, #FFB800 amber accent)
- **No backend required** — static frontend only, contact form uses client-side success state

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/mk-contractors run dev` — run M&K Contractors site locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
