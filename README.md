# RoyalT Enterprise IT Group Website

Production-ready Vite + React website package.

## Before deployment
1. Put the approved RoyalT logo at `public/royalt-logo.png`.
2. Put the professional headshot at `public/royal-headshot.jpg`.
3. Open `src/main.jsx` and replace the `BOOKINGS_URL` placeholder with the published Microsoft Bookings URL.
4. Connect the consultation form to an approved secure form processor or Power Automate endpoint before collecting real submissions.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Vite creates the deployable `dist` directory.

## Deploy to Vercel
Import this repository in Vercel. Framework: Vite. Build command: `npm run build`. Output directory: `dist`. `vercel.json` supports client-side routing.

## GitHub upload
Upload the contents of this folder to the repository root, not the ZIP file itself.
