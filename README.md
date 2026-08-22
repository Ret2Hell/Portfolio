# Taieb Mohamed Yassine — Portfolio

A responsive developer portfolio built with React, TypeScript, Vite, Tailwind CSS, React Three Fiber, and Motion.

## Tooling

This repository uses [mise](https://mise.jdx.dev/) to pin the project tools:

- Bun
- Lefthook
- Oxfmt
- Oxlint

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

| Command              | Alias    | Description                       |
| -------------------- | -------- | --------------------------------- |
| `mise run install`   | `mise i` | Install dependencies with Bun     |
| `mise run dev`       | `mise d` | Start the Vite development server |
| `mise run build`     | `mise b` | Build the production application  |
| `mise run start`     | `mise s` | Preview the production build      |
| `mise run lint`      | `mise l` | Lint with Oxlint                  |
| `mise run format`    | `mise f` | Format with Oxfmt                 |
| `mise run typecheck` | `mise t` | Run TypeScript checks             |
| `mise run check`     | `mise c` | Run lint, typecheck, and build    |

Lefthook runs Oxlint and an Oxfmt check against staged files before each commit.

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
