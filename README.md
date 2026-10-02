# zeuada.com

The Zeuada studio website. Built with [Astro](https://astro.build), deployed to GitHub Pages.

**Power, engineered.**

## Run it locally

Requires Node 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serves the built site
```

## Edit content

Almost everything lives in **`src/data/site.ts`**: founder details, contact email, social links,
products, open numbers, build log entries and form endpoints. Replace every `[BRACKETED]` value.

- Build log: add new entries to the top of `buildLog`.
- Open numbers: update `items` and `lastUpdated` once a month.
- Socials: empty links are hidden automatically.
- Founder photo: drop a square image in `public/` and set `founder.photo` (for example `'/founder.jpg'`).

Section copy (hero, principles, name story) lives in the matching file in `src/components/`.

## Forms

GitHub Pages only serves static files, so the early-access and newsletter forms need an outside
service such as Buttondown, Formspree or ConvertKit. Create a form there, then paste its POST URL
into `forms.earlyAccessAction` and `forms.newsletterAction` in `src/data/site.ts`. Each form sends a
single field named `email`. Until a URL is set, the forms render but don't submit.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
   The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
3. Custom domain: `public/CNAME` already contains `zeuada.com`. In **Settings → Pages**, enter
   `zeuada.com` as the custom domain, then add these DNS records at your domain registrar:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - a `CNAME` record for `www` pointing to `<your-github-username>.github.io`

   Check GitHub's "Managing a custom domain for your GitHub Pages site" guide in case these change.
4. Once DNS resolves, tick **Enforce HTTPS**.
5. Add the site to Google Search Console and submit `https://zeuada.com/sitemap-index.xml`.

## Brand assets

- `public/brand/zeuada-mark.svg`: the mark for dark backgrounds
- `public/brand/zeuada-mark-on-light.svg`: the mark for light backgrounds
- `public/favicon.svg`, `public/apple-touch-icon.png`: browser and home-screen icons
- `public/og.png`: the preview image shown when the link is shared

The mark's geometry is fixed. Use these files rather than redrawing it.

Colors: Obsidian `#0B0D12`, Graphite `#10141C`, Line `#222937`, Signal white `#EEF1F6`,
Mist `#A3ACBD`, Volt blue `#3D7BFF`.
Type: Space Grotesk (headlines and body), JetBrains Mono (numbers, versions, dates).
Fonts are self-hosted through Fontsource, so the site makes no requests to Google.

## Before launch

- [ ] Replace every `[BRACKETED]` value in `src/data/site.ts`
- [ ] Connect both forms to an email service
- [ ] Write the real Privacy and Terms pages (`src/pages/privacy.astro`, `src/pages/terms.astro`),
      then remove `noindex` from each
- [ ] Add your founder photo (optional)
- [ ] Set up DNS and enforce HTTPS
- [ ] Submit the sitemap in Google Search Console
