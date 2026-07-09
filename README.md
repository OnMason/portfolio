# Pranav Rao — Portfolio

Personal portfolio site built with Next.js (App Router) and Tailwind CSS. Single page, dark theme, no server dependencies — deploys as-is to Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All copy lives in [`data/content.ts`](data/content.ts) — name, links, hero text, skills, experience, and project cards. Edit that file to change any text; the components in `components/` only handle layout.

## Images

| Image | Path | Notes |
| --- | --- | --- |
| About photo | `public/about.jpg` | Drop the file in and it appears automatically (a placeholder shows until then). |
| Project images | `public/projects/*.png` | Referenced from each project's `image` field in `data/content.ts`. |

- `rv32i.png`, `trashcan.png`, `weather.png` — pulled from the project GitHub repos.
- `climacorre.png` — illustrative stock photo ([Pexels](https://www.pexels.com/photo/close-up-of-an-electronics-breadboard-circuit-32894960/), free license), rendered with an "illustrative" caption.
- rPPG pipeline — no image yet; its `image` field is `null`, which renders a neutral placeholder box. To add one, save the file under `public/projects/` and set the `image` path in `data/content.ts`.

Any aspect ratio works — cards crop images to 16:9 (`object-cover`).

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Vercel auto-detects Next.js — accept the defaults and deploy.

Or from the CLI: `npx vercel` (then `npx vercel --prod`).
