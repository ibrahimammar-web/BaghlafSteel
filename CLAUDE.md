## Project Overview
Production-grade Next.js App Router project with RTL and Arabic language support.

## Tech Stack
- **Next.js 14** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS** — utility-first styling
- **Cairo** — Arabic Google Font via next/font

## Folder Structure
```
src/
├── app/                  # App Router pages & layouts
├── components/
│   ├── ui/               # Base UI primitives (Button, Input, Modal...)
│   └── layout/           # Layout components (Navbar, Sidebar, Footer...)
├── features/             # Feature-based modules
│   └── [feature-name]/
│       ├── components/
│       ├── hooks/
│       ├── types/
│       ├── utils/
│       └── services/
├── hooks/                # Global custom hooks
├── lib/                  # Third-party lib configs
├── services/             # Global API/service layer
├── store/                # Global state (Zustand / Redux)
├── types/                # Global TypeScript types
└── utils/                # Global utility functions
```

## Coding Standards
- Functional components only — no class components
- TypeScript strict mode — no `any`
- Tailwind CSS only — no inline styles
- Small, focused components — single responsibility
- Meaningful naming — files, variables, and functions

## RTL & Arabic
- `dir="rtl"` and `lang="ar"` are set on `<html>` in root layout
- Cairo font loaded via `next/font/google` with Arabic subset
- Font exposed as CSS variable `--font-cairo`
- `font-cairo` Tailwind utility class is available globally
- Do NOT add `direction: rtl` in CSS — handled by HTML attribute

## Tailwind Tokens
Custom tokens wired via CSS variables in `:root`:
- `bg-background` → `var(--background)` → `#ffffff`
- `text-foreground` → `var(--foreground)` → `#0a0a0a`

## Architecture Rules
- Feature logic stays inside `features/[feature-name]/`
- Shared/reusable UI goes into `components/ui/`
- Layout-level components go into `components/layout/`
- API calls go into `services/` (global) or `features/[name]/services/` (scoped)
- No business logic in layout files
- No direct API calls inside components — use hooks or services

## Key Files
| File | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout — font, RTL, metadata |
| `src/app/globals.css` | Tailwind directives + CSS variables |
| `tailwind.config.ts` | Token wiring + font family + content paths |
| `tsconfig.json` | Path alias `@/*` → `src/*` |

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint check
```