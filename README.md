# Auth with SvelteKit & Supabase

This project was forked from a tutorial which can be found on Hunterbyte's [YouTube channel](https://youtube.com/@huntabyte).

## Quick Start

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Create .env and load in Supabase creds

```bash
PUBLIC_SUPABASE_URL=<your url>
PUBLIC_SUPABASE_ANON_KEY=<your key>
```

## Steps to reproduce issue

1. Create an API route, in this example, I created `/routes/api/products/+server.ts`
2. Fetch from this new API route from a page (Doesn't matter if it's client side OR server side, I've tested and issue exists for both), in this example I did server side fetch from `/routes/products/+page.server.ts`
3. Load the `/products` page and check logs in server console, you will see this error from Supabase auth helpers: `Error: The "host" request header is not available at isSecureEnvironment`
