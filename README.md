# montanaflynn.com

Personal website. Pushes to `main` auto-deploy to the VPS via GitHub Actions.

## Development

```
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions scps `index.html` and `favicon.svg` to the VPS.

Requires repo secrets: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`.
