# Portfolio website

A bilingual (French + English) portfolio site: work by category, services & pricing, about, contact form and legal notice.
Built with [Astro](https://astro.build) (static site) and deployed to any FTP web host by GitHub Actions.

| Branch | URL | Indexed by Google |
|---|---|---|
| `main` | `https://example.com` | yes |
| `dev` | `https://test.example.com` | no (noindex + "Test version" badge) |

> Throughout this guide, replace `example.com` with your domain, and `<you>/<repo>` with your GitHub
> username and repository name. Don't type the `<` `>` characters.

---

## 1. Run it on your computer

Requires **Node.js 22.12 or newer** (`node -v`).

```bash
npm install
npm run dev          # http://localhost:4321 — live reload
npm run build        # builds to dist/ (test mode by default)
npm run build:prod   # builds exactly like the production deploy
npm run preview      # serves dist/ locally
npm run check        # type-checks the project
```

## 2. Make it yours

### Set your domain (4 places)

| File | What to change |
|---|---|
| `astro.config.mjs` | the default `SITE_URL` |
| `package.json` | the URLs in `build:prod` and `build:test` |
| `.github/workflows/deploy.yml` | the two URLs on the `SITE_URL` line |
| `src/views/ContactView.astro` | the domain in the email subject |

Then search the whole project for the old domain and the old name (in VS Code: Ctrl+Shift+F) to catch the
remaining mentions in texts and comments (`src/i18n/ui.ts`, `src/views/LegalView.astro`, `public/.htaccess`).

### Edit the content

| What | File |
|---|---|
| Name, email, Formspree ID, social links, legal info | `src/config/site.ts` ← **start here** |
| Services and prices | `src/data/services.ts` (`price: 500` shows "From 500 €", `null` shows "On quote") |
| About page text, skills, tools | `src/data/about.ts` |
| Your portrait | replace `src/assets/portrait.jpg` (portrait format, ~1000×1250) |
| All interface text (FR + EN) | `src/i18n/ui.ts` |
| Colours, fonts, spacing | tokens at the top of `src/styles/global.css` |
| Social sharing image | `public/og-image.jpg` (1200×630) |
| Favicon (initials) | `public/favicon.svg` |
| Hosting company in the legal notice | `src/views/LegalView.astro` |
| Page layouts | `src/views/*.astro` (each view is shared by the FR and EN page) |

### Add a project

Each project is one folder in `src/content/projects/`. The folder name becomes the URL
(`/realisations/<folder>/` and `/en/work/<folder>/`).

```
src/content/projects/my-project/
  fr.md        ← French text
  en.md        ← English text
  cover.jpg    ← thumbnail, ideally 4:3 (e.g. 1600×1200)
  photo-1.jpg  ← optional gallery images
```

Copy an existing example and edit the header:

```yaml
---
title: Project title
summary: One or two sentences (max 200 characters).
category: dev        # dev | design | photo
year: 2026
client: Client name  # optional
role: What you did   # optional
url: https://...     # optional, link to the live project
cover: ./cover.jpg
coverAlt: Short description of the image
gallery:             # optional; photos open in a lightbox
  - image: ./photo-1.jpg
    alt: Description
featured: true       # shown on the home page
order: 0             # higher = first, among projects of the same year
draft: false         # true = hidden
---

Text of the project page (Markdown).
```

Images are resized and converted to WebP automatically at build time, so you can drop in full-size exports
(keep them under ~5 MB each). **The projects included are examples** — delete their folders once you've
added your own.

## 3. Deployment setup (one time)

### a. On your web host

1. **Create a subdomain** named `test` in your hosting panel. Most hosts create a folder for it on your FTP space.
2. **Enable the SSL certificate** (HTTPS) for both `example.com` and `test.example.com`.
3. **Find the two folders.** Connect with an FTP client such as FileZilla and note:
   - the folder the main site is served from (often `/`, `/htdocs/`, `/www/` or `/public_html/`),
   - the folder of the `test` subdomain.

   To be sure, upload a file named `hello.txt` to a folder and open `https://example.com/hello.txt`
   (or `https://test.example.com/hello.txt`). If it displays, that's the right folder. Delete the file afterwards.

### b. On GitHub

1. Create a **new, empty repository** at [github.com/new](https://github.com/new): leave "Add a README",
   ".gitignore" and "license" unchecked.
2. In the repository, open **Settings → Secrets and variables → Actions** and add:

| Type | Name | Value |
|---|---|---|
| Secret | `FTP_SERVER` | your FTP host, e.g. `ftp.example.com` |
| Secret | `FTP_USERNAME` | your FTP login |
| Secret | `FTP_PASSWORD` | your FTP password |
| Variable | `FTP_PROD_DIR` | main site folder, e.g. `/htdocs/` |
| Variable | `FTP_TEST_DIR` | test subdomain folder, e.g. `/test.example.com/` |

> **The two folders are FTP paths, not web addresses.** They start and end with `/` and never contain
> `https://`. Writing a web address here creates a stray folder named `https:` on your server.

The workflow stops with a clear message if any of these is missing.

The upload uses encrypted FTP (FTPS, port 21). If your host only supports plain FTP, change
`protocol: ftps` to `protocol: ftp` in `.github/workflows/deploy.yml`.

### c. Push both branches

In a terminal opened in the project folder:

```bash
git init -b main                 # only if the folder is not a git repository yet
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main          # → deploys example.com
git switch -c dev
git push -u origin dev           # → deploys test.example.com
```

Follow each run in the repository's **Actions** tab: a green tick means it's live (about a minute), a red
cross shows the reason when you click it. The first deploy uploads everything; later ones only send changed
files (the tool keeps a small `.ftp-deploy-sync-state.json` file on the server — don't delete it).

### d. Once HTTPS works

Open `public/.htaccess`, remove the `#` in front of the two "Force HTTPS" lines, then commit and push.
(`.htaccess` applies to Apache servers, which most shared hosts use.)

## 4. Day-to-day workflow

1. Work on `dev`, then publish to the test site:

   ```bash
   git add .
   git commit -m "Describe your change"
   git push
   ```

2. Check `https://test.example.com`. When happy, publish to the real site:

   ```bash
   git switch main
   git merge dev
   git push
   git switch dev
   ```

## 5. Troubleshooting

| Message | Fix |
|---|---|
| `error: remote origin already exists` | The address is already saved. Change it with `git remote set-url origin https://github.com/<you>/<repo>.git`, check with `git remote -v`. |
| `unable to access 'https://github.com/<you>/<repo>.git/'` | The placeholder was typed literally. Same fix as above, with your real username and repository. |
| `The current branch … has no upstream branch` | First push of that branch: `git push --set-upstream origin <branch>`. |
| `fatal: not a git repository` | You're not in the project folder, or run `git init -b main`. |
| Deploy fails with "Secret/Variable … is not set" | Add it (step 3b), then **Re-run all jobs** in the Actions tab. |
| Deploy is green but the site doesn't change | `FTP_PROD_DIR` / `FTP_TEST_DIR` point to the wrong folder. Redo the `hello.txt` test (step 3a). |
| A folder named `https:` appeared on the server | A folder variable contained a web address. Fix the variable, delete that folder, re-run the deploy. |
| `LF will be replaced by CRLF` (Windows) | Harmless, ignore it. |

## 6. Before going live — checklist

- [ ] Domain replaced in the 4 files (section 2)
- [ ] `src/config/site.ts`: name, email, socials, Formspree ID
- [ ] Contact form: create a free form on [formspree.io](https://formspree.io), paste its ID, send yourself a test message (the first submission asks you to confirm your email)
- [ ] Legal notice: your business details, and your hosting company's name and address
- [ ] Example projects, portrait and bio replaced
- [ ] Prices set in `src/data/services.ts` (or kept as "On quote")
- [ ] HTTPS enabled and forced (step 3d)
