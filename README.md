# Kind Developer Personal Website

A personal site built with Nuxt 4, using Bun as the runtime/build tool. Content is authored with `@nuxt/content` (
Markdown + MDC), styled with Tailwind CSS (via Vite plugin), and enhanced with Nuxt modules for images, fonts, and a
lightbox gallery.

This README documents the stack, requirements, how to run locally and in production (including Docker), scripts,
environment variables, project structure, tests status, CI/CD, and licensing.

## Overview

- Framework: Nuxt 4 (Vue 3)
- Runtime/build tool: Bun 1.x (nitro preset `bun`)
- Language: TypeScript enabled (tsconfig present)
- Styling: Tailwind CSS v4 (via `@tailwindcss/vite`) + `@tailwindcss/typography`
- Content: `@nuxt/content` + `@nuxtjs/mdc` (Markdown/MDC, code highlighting)
- Images & Fonts: `@nuxt/image` and `@nuxt/fonts`
- Gallery/Lightbox: `nuxt-easy-lightbox`
- Linting/Formatting: ESLint + Prettier
- Containerization: Docker (Bun base image)
- CI: GitHub Actions workflow to build and publish an image to GHCR on pushes to `main`

## Requirements

- Bun 1.0+ (project is Bun-first; uses Nitro preset `bun`)
- Optional: Docker 24+ to build/run a container image
- Optional: GitHub Container Registry access if you plan to pull/push images

## Setup

Install dependencies with Bun:

```bash
bun install
```

Nuxt will run `nuxt prepare` on postinstall to generate types and prepare the project.

## Running locally

Development server (hot reload) at http://localhost:3000

Using Bun:

```bash
bun run dev
```

## Production

Build the application:

```bash
# Bun
bun run build

```

Preview the production build locally:

```bash
# Bun
bun run preview

```

The Nitro server is emitted to `.output`. In the Docker image we run `/app/server/index.mjs` and expose port `3000`.

## Docker

A multi-stage Dockerfile is provided and uses the official Bun image.

Build and run locally:

```bash
# Build the image (adjust tag as desired)
docker build -t ghcr.io/<owner>/<repo>:local .

# Run the container binding port 3000
docker run --rm -p 3000:3000 ghcr.io/<owner>/<repo>:local
```

Notes:

- The first stage installs dependencies with `bun install --frozen-lockfile --ignore-scripts` to avoid building native
  modules during install.
- The second stage copies only the `.output` folder and runs `bun --bun run /app/server/index.mjs`.

## Scripts

Defined in `package.json`:

- `dev`: Start Nuxt dev server
- `build`: Build for production (Nitro output in `.output`)
- `preview`: Preview the production build locally
- `generate`: Generate a static site (if applicable for your routes)
- `lint`: Run ESLint
- `lint:fix`: Run ESLint with `--fix`
- `postinstall`: `nuxt prepare`

Run with Bun:

```bash
bun run <script>
# e.g.
bun run lint
```

## Environment variables

Nuxt 4 uses runtime config and supports `.env` files. Common patterns:

- `NUXT_PUBLIC_*`: Exposed to client and server
- `NUXT_*`: Server-only by default

Current project does not define explicit runtime config in `nuxt.config.ts`. Add your variables in an `.env` file at the
project root.

TODO:

- Document any required secrets or keys here (e.g., analytics keys, API URLs)
- Example:
    - `NUXT_PUBLIC_SITE_URL=https://example.com`
    - `NUXT_PUBLIC_ANALYTICS_ID=...`

## Content authoring (`@nuxt/content` + MDC)

- Put Markdown/MDC files under the `content/` directory
- Code highlighting themes are set to GitHub light/dark in `nuxt.config.ts`
- MDC components with `prose` styling are enabled

Useful links:

- Nuxt Content docs: https://content.nuxt.com/
- MDC docs: https://content.nuxt.com/guide/writing/mdc

## Project structure

Key paths and files:

```
.
├─ app/                    # Nuxt application (pages, components, assets)
│  ├─ pages/               # Vue pages (e.g., index.vue, about-me.vue, galleries/...)
│  └─ assets/css/main.css  # Tailwind entry (referenced in nuxt.config.ts)
├─ content/                # Markdown/MDC content
├─ public/                 # Static assets served at root
├─ nuxt.config.ts          # Nuxt configuration (nitro preset bun, modules, content)
├─ typography.ts           # Tailwind typography configuration helper
├─ eslint.config.mjs       # ESLint configuration
├─ tsconfig.json           # TypeScript configuration
├─ package.json            # Scripts and dependencies
├─ bun.lock                # Bun lockfile
├─ Dockerfile              # Multi-stage Bun-based Dockerfile
└─ .github/workflows/build-image.yml  # CI to build/push image to GHCR
```

## Tailwind CSS

- Uses `@tailwindcss/vite` plugin in Vite
- Typography plugin `@tailwindcss/typography` is included
- Global CSS entry: `./app/assets/css/main.css`

## Tests

No test framework or test files are present in the repository at this time.

TODO:

- Add a testing setup (e.g., Vitest + Vue Test Utils) and include commands like `test` and `test:watch` in
  `package.json`.

## CI/CD

GitHub Actions workflow `.github/workflows/build-image.yml`:

- Triggers on push to `main`
- Logs in to GHCR
- Builds and pushes the Docker image
- Tags include branch refs and optional semver tags (`v{major}.{minor}.{patch}`)

To pull the image once published to GHCR:

```bash
docker pull ghcr.io/<owner>/<repo>:<tag>
```

## Deployment

General options:

- Docker container on your server or platform of choice
- Nuxt `preview` for quick local checks

If deploying the container:

- Expose/bind port `3000`
- Provide any required environment variables (see the Environment variables section)

Refer to the official Nuxt deployment docs for more targets:
https://nuxt.com/docs/getting-started/deployment

## License

This project is licensed under the MIT License.

See the `LICENSE` file at the repository root for full text and terms.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release notes.

Latest release: [1.0.0](https://github.com/dyachoksa/personal-site/releases/tag/v1.0.0) — 2025-11-12.
