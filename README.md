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

## Deploy on Heroku
1.  **Login to Heroku:**
    ```bash
    heroku login -i
    ```

2.  **Add Heroku remote:**
    ```bash
    git remote add heroku-dev https://git.heroku.com/dev-app-vastbase.git
    ```

3.  **Push to GitHub:**
    Ensure your latest code is on GitHub.
    ```bash
    git push origin feature/litprotocol
    ```

4.  **Deploy to Heroku:**
    To deploy `feature/litprotocol` branch to Heroku's `main` branch:
    ```bash
    git remove -v (double check)
    git push heroku-dev feature/litprotocol:main (Vastbase staging)
    git push heroku-production feature/litprotocol:main (Vastbase production)
    ```

The application will now build and deploy on Heroku. You can monitor the build progress in your terminal or on the Heroku Dashboard.
