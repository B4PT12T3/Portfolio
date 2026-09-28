# morvillebaptiste.fr — portfolio

Freelance portfolio of Baptiste Morville: websites & apps, graphic design, photography.
Built with [Astro](https://astro.build) (static site, French + English), deployed to LWS by GitHub Actions.

| Branch | URL | Indexed by Google |
|---|---|---|
| `main` | https://morvillebaptiste.fr | yes |
| `dev` | https://test.morvillebaptiste.fr | no (noindex + "Test version" badge) |

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

## 2. Where to edit things

| What | File |
|---|---|
| Name, email, Formspree ID, social links, legal info | `src/config/site.ts` ← **start here** |
| Services and prices | `src/data/services.ts` (`price: 500` shows "From 500 €", `null` shows "On quote") |
| About page text, skills, tools | `src/data/about.ts` |
| Your portrait | replace `src/assets/portrait.jpg` (portrait format, ~1000×1250) |
| All interface text (FR + EN) | `src/i18n/ui.ts` |
| Colours, fonts, spacing | tokens at the top of `src/styles/global.css` |
| Social sharing image | `public/og-image.jpg` (1200×630) |
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
(keep them under ~5 MB each). **The six current projects are examples** — delete their folders once you've
added your own.

## 3. Deployment setup (one time)

### a. On LWS

1. **Create the subdomain** `test` (LWS panel → your domain → *Sous-domaines*). LWS creates a folder with the
   subdomain's name on your FTP space.
2. **Enable the free SSL certificate** for `morvillebaptiste.fr` **and** `test.morvillebaptiste.fr`.
3. **Find the two folders**: connect with FileZilla (host `ftp.morvillebaptiste.fr`, your FTP login,
   encryption "explicit FTP over TLS") and note:
   - the folder where the main site lives (often `/htdocs/` or `/www/`),
   - the folder created for the subdomain.

   If unsure, upload a file named `hello.txt` to a folder and open `https://morvillebaptiste.fr/hello.txt`
   (or `https://test.morvillebaptiste.fr/hello.txt`) to confirm, then delete it.

### b. On GitHub

Create the repository, then in **Settings → Secrets and variables → Actions**:

| Type | Name | Value |
|---|---|---|
| Secret | `FTP_SERVER` | `ftp.morvillebaptiste.fr` |
| Secret | `FTP_USERNAME` | your LWS FTP login |
| Secret | `FTP_PASSWORD` | your LWS FTP password |
| Variable | `FTP_PROD_DIR` | main site folder, **ending with `/`** (e.g. `/htdocs/`) |
| Variable | `FTP_TEST_DIR` | subdomain folder, **ending with `/`** |

The workflow stops with a clear message if any of these is missing.

### c. Push both branches

```bash
git add .
git commit -m "Initial portfolio"
git remote add origin git@github.com:<you>/<repo>.git
git push -u origin main          # → deploys morvillebaptiste.fr
git switch -c dev
git push -u origin dev           # → deploys test.morvillebaptiste.fr
```

Follow the run in the repository's **Actions** tab. First deploy uploads everything; later deploys only send
changed files (the tool keeps a small `.ftp-deploy-sync-state.json` file on the server — don't delete it).

### d. Once HTTPS works

Open `public/.htaccess` and uncomment the two "Force HTTPS" lines, then deploy.

## 4. Day-to-day workflow

1. Work on `dev`, push → check https://test.morvillebaptiste.fr
2. When happy: merge `dev` into `main` (pull request or `git switch main && git merge dev && git push`)
   → the real site updates in about a minute.

## 5. Before going live — checklist

- [ ] `src/config/site.ts`: email, socials, Formspree ID
- [ ] Contact form: create a free form on [formspree.io](https://formspree.io), paste its ID, send yourself a test message (the first submission asks you to confirm your email)
- [ ] Legal notice: SIRET and address in `site.legal` (required once your freelance activity is registered)
- [ ] Replace the example projects, portrait and bio
- [ ] Set prices in `src/data/services.ts` (or keep "On quote")
- [ ] HTTPS enabled and forced (step 3d)

> Freelancing alongside a job: check your employment contract for exclusivity or non-compete clauses, and
> register your activity (e.g. micro-entreprise on formalites.entreprises.gouv.fr) before invoicing.
