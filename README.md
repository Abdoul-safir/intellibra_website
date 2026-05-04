# IntelliBra Website

This is the standalone IntelliBra website project, extracted from the monorepo.

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build the shared packages:
   ```bash
   cd packages/intellibra-ui
   pnpm install
   pnpm run build:styles
   pnpm run build:components
   cd ../..
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

## Project Structure

- `app/` - Next.js app directory
- `components/` - Reusable components
- `lib/` - Utility libraries
- `packages/` - Shared packages (UI components, configs)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
