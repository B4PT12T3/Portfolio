---
title: GP Coaching — Business Website
summary: "Custom PHP website for a certified coach: full admin panel, test/prod environment separation, and automated deployment via GitHub Actions."
category: dev
year: 2026
client: GP Coaching — Gilles Petitprez
role: Design and full-stack development
cover: ./cover.png
coverAlt: Homepage preview of the GP Coaching website
featured: true
order: 1
---

Full business website for **GP Coaching**, an individual and professional coaching practice based in Béthune, northern France, run by ICF-certified coach Gilles Petitprez.

## The brief

Gilles needed an online presence: without a website, it's hard to earn a prospect's trust. He needed something professional that reflected his three coaching focuses. I suggested adding an administration panel so he could keep the site alive himself (updating a text, swapping a photo, changing external links).

## What I built

- Custom design matching the brand identity (navy, beige, gold) using Playfair Display and Jost typefaces
- PHP development without a framework: 5 public pages (Home, Approach, Coaching, Contact, Privacy Policy) and a full administration panel
- Admin panel: section-by-section content editor, image upload, social media and Calendly link management
- Test and production environment separation within the same MySQL database using table prefixes
- Calendly integration for direct appointment booking from the site
- GDPR-compliant cookie consent banner with conditional Google Analytics loading via GTM
- Automated deployment via GitHub Actions: push to `main` → test environment, manual trigger → production
- Brute-force protection on the admin login page (progressive delays and account lockout)

## The result

A fully self-managed website, live at `gpcoaching.fr` with an independent test environment at `test.gpcoaching.fr`. Gilles updates his content, photos, and booking link on his own — without ever touching the code.
