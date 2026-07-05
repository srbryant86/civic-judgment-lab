# Deploying Civic Judgment Lab

This is a standard Next.js (App Router) app with **no database, no auth, no environment variables**, so deployment is essentially copy-and-go.

## Prerequisites
- The build passes locally: `npm run build` (already verified green).
- A free [Vercel](https://vercel.com) account (sign in with GitHub is easiest).

## Option A — GitHub + Vercel dashboard (recommended)
1. Create an empty repository on GitHub (e.g. `civic-judgment-lab`), **without** a README/.gitignore (this repo already has them).
2. From this project folder:
   ```bash
   git remote add origin https://github.com/<you>/civic-judgment-lab.git
   git branch -M main
   git push -u origin main
   ```
   *(A first commit already exists — see below.)*
3. Go to **vercel.com → Add New → Project → Import** your repo.
4. Framework preset auto-detects **Next.js**. Leave everything default. No env vars.
5. Click **Deploy**. In ~1–2 minutes you get a live URL like `https://civic-judgment-lab.vercel.app`.
6. Every future `git push` to `main` auto-deploys; pull requests get preview URLs.

## Option B — Vercel CLI (no GitHub needed)
Run from this folder, in your own terminal:
```bash
npm i -g vercel
vercel            # first run links/creates the project; answer the prompts
vercel --prod     # promote to production
```

## Custom domain (optional)
In the Vercel project → **Settings → Domains**, add a domain you own (or buy one through Vercel). Point DNS as instructed. For a portfolio, a short custom domain (e.g. `historyjudgmentlab.com`) reads more professionally than the `.vercel.app` default.

## Notes
- **Static output.** Every page is prerendered; there's nothing to keep warm and no server cost concern.
- **Favicon** ships via `app/icon.svg`.
- **Optional polish later:** a social-share (OpenGraph) preview image via `app/opengraph-image.tsx` (Next's `next/og`), so the link shows a rich card when shared. Not required to deploy.
- **Local dev servers get reaped inside some managed terminals** — run `npm run dev` in a normal external terminal window if it keeps dying.
