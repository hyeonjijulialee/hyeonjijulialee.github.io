# hyeonjijulialee.github.io

Deploy a Vite + React site to GitHub Pages.

## Deployment (required setup)

This repo is set up to build `dist` with GitHub Actions and deploy to Pages.

1. Go to the repo on GitHub
2. **Settings → Pages**
3. Set **Build and deployment → Source** to **GitHub Actions**
4. Pushing to the `main` branch triggers automatic deployment.

## Run locally

```bash
npm ci
npm run dev
```

## Verify local build

```bash
npm run build
npm run preview
```
