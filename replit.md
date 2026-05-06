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
- **Colors**: Dark industrial (#1C1C1E background, #FFB800 amber accent, #3A3A3C secondary)
- **Design**: Premium upgrade applied — gold gradients, subtle noise textures, layered shadows, refined typography hierarchy, gradient accent lines, premium card components with inset glow borders
- **CSS utilities**: `.gold-gradient`, `.gold-text`, `.premium-card`, `.premium-card-light`, `.section-divider`, `.hero-overlay`, `.subtle-noise`, `.btn-premium`, `.btn-outline-premium`
- **OG/Meta**: Full Open Graph + Twitter card tags in index.html, og-image.jpg in public
- **Contact info (canonical)**: Phone (267) 221-6226 · Email Info@mkcontractorspa.com · Address 1043 Koffel Rd, Hatfield, PA 19440 — keep these consistent across Header, Footer, contact page, and Schema.tsx
- **Header**: White background (changed from dark) so the dark M&K logo with "Hatfield, PA" text is fully readable. Top utility bar shows phone/email/hours/address; main row has nav + Call Us block + Request a Quote CTA
- **Routing**: `ScrollToTop` component (in `src/components/ScrollToTop.tsx`, mounted in App.tsx) resets scroll on every wouter location change — required because wouter does not auto-scroll on navigation
- **Service area map**: `ServiceAreaMap` component (in `src/components/ServiceAreaMap.tsx`) — uses real US Census county geometry from `us-atlas/counties-10m.json`, rendered with `d3-geo` (geoMercator + fitExtent) and `topojson-client`. Highlights the 8 served counties (Bucks, Montgomery, Chester, Delaware, Lehigh, Northampton, Berks, Philadelphia) in the M&K amber gradient with a HATFIELD HQ badge over the Hatfield pin (40.2807°N, 75.2974°W). All other PA counties shown in dark gray with amber outlines. Fully vector — no raster image asset.
- **No backend required** — static frontend only, contact form uses client-side success state

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/mk-contractors run dev` — run M&K Contractors site locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
