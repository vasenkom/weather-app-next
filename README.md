# Weather Dashboard

A small weather app built to compare **SSR** and **CSR** approaches in Next.js.

The project includes two dashboards:

- **SSR Weather Dashboard** – fully server-rendered using `searchParams`.
- **CSR Weather Dashboard** – form handled on the client, but weather data fetched safely through a **server API route**.

Weather data is fetched from **WeatherAPI**.


## 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **WeatherAPI** for weather data


## ✨ Features

- Search weather by city
- Displays:
  - Current temperature & feels-like
  - Condition with icon
  - Wind speed & direction
  - Precipitation
  - Two-day forecast
- **SSR dashboard**
  - Rendered fully on the server
  - No client-side fetching
- **CSR dashboard**
  - Client search + loading states
  - Fetches via **Next.js API route** (protects API key)
- Error + loading handling
- Simple UI with shadcn components

---

## 🔐 Environment Variables

Create a `.env.local` file:

```bash
# server
WEATHER_API_KEY=""

# public
NEXT_PUBLIC_API_BASE=http://localhost:3000
```


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
