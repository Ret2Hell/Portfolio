# Taieb Mohamed Yassine — Portfolio

A responsive developer portfolio built with React, TypeScript, Vite, Tailwind CSS, React Three Fiber, and Motion.

## Tooling

This repository uses [mise](https://mise.jdx.dev/) to pin the project tools:

- Bun
- hk
- Oxfmt
- Oxlint

All project commands (dev server, build, preview, typecheck) run on the **Bun runtime** through `bunx`. `package.json` keeps the standard `dev`, `build`, and `preview` scripts; linting, formatting, and type checking live in mise. Type checking uses **TypeScript 7** (`typescript@^7`), whose `tsc` binary is the native Go compiler.

Trust the project configuration and install the tools:

```bash
mise trust
mise install
```

Install dependencies and start the Vite development server:

```bash
mise run install
mise run dev
```

## Commands

| Command              | Alias       | Description                             |
| -------------------- | ----------- | --------------------------------------- |
| `mise run install`   | `mise i`    | Install dependencies with Bun           |
| `mise run hooks`     | `mise hook` | Install hk Git hooks                    |
| `mise run dev`       | `mise d`    | Start the Vite dev server (Bun runtime) |
| `mise run build`     | `mise b`    | Build the production application (Bun)  |
| `mise run start`     | `mise s`    | Preview the production build (Bun)      |
| `mise run lint`      | `mise l`    | Lint with Oxlint                        |
| `mise run format`    | `mise f`    | Format with Oxfmt                       |
| `mise run typecheck` | `mise t`    | Type check with TypeScript 7 (`tsc`)    |
| `mise run check`     | `mise c`    | Run lint, typecheck, and build          |

hk runs Oxlint and an Oxfmt check against staged files before each commit.

## Project structure

```text
public/
├── assets/
│   ├── certificates/
│   ├── logos/
│   └── projects/
└── models/
src/
├── components/
├── constants/
├── sections/
├── App.tsx
├── index.css
└── main.tsx
```

Project images are organized under `public/assets/projects/<project-name>/`. See `public/assets/projects/README.md` for instructions on replacing covers and adding gallery images.
