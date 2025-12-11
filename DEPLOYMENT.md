# Deployment Guide — Vercel + Supabase (Free path)

This guide shows a simple, free-friendly path to deploy the Next.js app in this repo using **Vercel** (for Next.js) and **Supabase** (Postgres). It includes local commands (PowerShell) that you can copy-paste.

## Overview
- App: Next.js 16 (app router) + TypeScript + Prisma (Postgres).
- DB: PostgreSQL (Supabase or Neon recommended for serverless).
- Auth: `next-auth` (Google + Resend configured). You will need provider credentials.

## Prerequisites
- Node.js (recommended >= 18)
- npm or pnpm
- Git repository connected to GitHub/GitLab/Bitbucket (for Vercel import)
- Supabase account (https://supabase.com) or Neon (https://neon.tech)

## 1) Create a Postgres database (Supabase example)
1. Sign up / log in to Supabase and create a new project.
2. In the project dashboard, go to Settings → Database → Connection string and copy the `postgresql://...` URL.

## 2) Local `.env` setup
- Create `.env` in the repo root (don't commit it). Use `.env.example` as a template.

PowerShell example (replace placeholders):
```powershell
cp .env.example .env
# Edit .env and replace placeholder values with your DB connection and secrets.
```

Generate a `NEXTAUTH_SECRET`:
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Add that hex string into `.env` as `NEXTAUTH_SECRET`.

Set local `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` (create credentials in Google Cloud Console). For local dev, keep `NEXTAUTH_URL` as `http://localhost:3000`.

## 3) Install dependencies & push Prisma schema
```powershell
npm install
npx prisma generate
npx prisma db push
# if you have a seed script
npm run db:seed
```

Notes:
- `prisma db push` applies the schema to the DB without generating a migration history. If you prefer migrations, use `prisma migrate` flows instead.

## 4) Prepare for Vercel
1. Push your repo to GitHub (or connect your Git provider to Vercel).  
2. Create a Vercel account and import the repo.

Environment variables to add in Vercel (Project Settings → Environment Variables):
- `DATABASE_URL` → your Supabase connection string
- `NEXTAUTH_URL` → `https://<your-vercel-app>.vercel.app`
- `NEXTAUTH_SECRET` → generated secret
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `RESEND_API_KEY` (if used)

Vercel build settings: default is fine (Vercel runs `npm run build`).

## 5) OAuth redirect URIs (Google)
- Local: `http://localhost:3000/api/auth/callback/google`
- Production: `https://<your-vercel-app>.vercel.app/api/auth/callback/google`
Add both in Google Cloud Console for your OAuth client.

## 6) Run migrations / DB push for production
You can run `prisma db push` (or `prisma migrate deploy`) from your machine pointed to your production `DATABASE_URL` to apply the schema.

PowerShell example:
```powershell
# Set the DATABASE_URL environment variable in your shell, then run below:
# $env:DATABASE_URL = "postgresql://<prod-connection>"
npx prisma generate
npx prisma db push
```

Alternatively, run these commands in CI (GitHub Actions) or as a one-off job in your hosting provider.

## 7) Verify & Troubleshoot
- Visit `https://<your-vercel-app>.vercel.app` and test auth flows and API endpoints.  
- If Prisma complaining about too many DB connections on serverless, consider:
  - Using Neon serverless Postgres (connections handled better), or
  - Use Prisma Data Proxy (paid) or a connection pooler.

## Optional: GitHub Action to run Prisma migrations on deploy (example)
You can add a GitHub Action to run `npx prisma db push` on main branch after deploy. If you want this, tell me and I can scaffold it.

## Final notes
- Keep `.env` out of source control. Commit `.env.example` only.
- Monitor DB connection usage in Supabase dashboard. For hobby projects, Supabase free tier is usually sufficient.

If you want, I can:
- Add a GitHub Action to run Prisma deploys, or
- Help create the Vercel project and set env vars (requires you to authorize or provide the secrets).
