# MOOZE official website (Next.js 15, App Router, TypeScript)

## Run in VS Code
1. Open this folder in VS Code, open the terminal.
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill the keys (optional, see below).
4. `npm run dev` then open http://localhost:3000

## Edit content
- `lib/data.ts`: artist info, social links, shows, tour dates, booking types.
- `public/mooze.jpg`: hero photo (replace to change).

## Most viewed songs
Add `YOUTUBE_API_KEY` (Google Cloud Console, enable YouTube Data API v3, create an API key).
The site then lists the channel's most viewed videos, top one first, refreshed hourly.
Without a key it embeds the channel's uploads playlist instead.

## Booking emails
Add `RESEND_API_KEY`, `BOOKING_TO_EMAIL`, `BOOKING_FROM_EMAIL` (resend.com).
Without them requests are only printed in the server log.

## Deploy to Vercel
Push to GitHub, import the repo in Vercel, add the same env vars in Project Settings, Deploy.
