---
title: Site vitrine GP Coaching
summary: "Site PHP sur-mesure pour un coach certifié : panel d'administration complet, séparation test/prod et déploiement automatisé via GitHub Actions."
category: dev
year: 2026
client: GP Coaching — Gilles Petitprez
role: Design et développement full-stack
cover: ./cover.png
coverAlt: Aperçu de la page d'accueil du site GP Coaching
featured: true
order: 1
---

Site vitrine complet pour **GP Coaching**, cabinet de coaching individuel et professionnel basé à Béthune (Hauts-de-France), tenu par Gilles Petitprez, coach certifié ICF.

## Le besoin

Gilles avait besoin d'exister en ligne : sans site, difficile de convaincre un prospect de lui faire confiance. Il fallait quelque chose de professionnel qui reflète ses trois univers d'accompagnement. J'ai proposé d'y intégrer un panel d'administration pour qu'il puisse faire vivre le site lui-même (changer un texte, mettre à jour une photo, modifier les liens extérieurs).

## Ce que j'ai fait

- Design sur-mesure aux couleurs de la charte (bleu marine, beige, or) avec les typographies Playfair Display et Jost
- Développement PHP sans framework : 5 pages publiques (Accueil, Approche, Accompagnement, Contact, RGPD) et un panel d'administration complet
- Panel admin : éditeur de contenu section par section, upload d'images, gestion des réseaux sociaux et du lien Calendly
- Séparation des environnements test et production dans la même base MySQL via préfixes de tables
- Intégration Calendly pour la prise de rendez-vous directement depuis le site
- Bannière de consentement cookies conforme RGPD avec chargement conditionnel de Google Analytics via GTM
- Déploiement automatisé via GitHub Actions : push sur `main` → test, déclenchement manuel → production
- Protection anti-bruteforce sur la page de connexion admin (délais progressifs, verrouillage de compte)

## Le résultat

Un site entièrement administrable, déployé en production sur `gpcoaching.fr` avec un environnement de test indépendant sur `test.gpcoaching.fr`. Gilles gère en autonomie ses contenus, ses photos et son lien de réservation depuis un panel simple — sans jamais toucher au code.
