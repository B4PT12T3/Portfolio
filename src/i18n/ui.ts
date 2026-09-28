/**
 * Translations and routes.
 * Every page exists in French (default, at /) and English (under /en/).
 */
export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

/** Localized URL of each page. Add a page here and in both src/pages trees. */
export const routes = {
  home: { fr: '/', en: '/en/' },
  work: { fr: '/realisations/', en: '/en/work/' },
  services: { fr: '/services/', en: '/en/services/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
} as const;
export type RouteKey = keyof typeof routes;

export function path(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** URL of a project page. Projects share the same slug in both languages. */
export function projectPath(slug: string, lang: Lang): string {
  return `${routes.work[lang]}${slug}/`;
}

/** Project categories — the keys are used in project files (category: dev | design | photo). */
export const categories = ['dev', 'design', 'photo'] as const;
export type Category = (typeof categories)[number];

export const ui = {
  fr: {
    'meta.locale': 'fr_FR',
    'skip': 'Aller au contenu',
    'nav.label': 'Navigation principale',
    'nav.home': 'Accueil',
    'nav.work': 'Réalisations',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer',
    'lang.switch': 'Read in English',
    'lang.short': 'EN',

    'cat.all': 'Tout',
    'cat.dev': 'Sites & applications',
    'cat.design': 'Graphisme',
    'cat.photo': 'Photographie',

    'home.title': 'Développeur, graphiste et photographe freelance',
    'home.description':
      'Baptiste Morville, freelance : création de sites web et d’applications, logos et affiches, photographie.',
    'home.lead.1': 'Je crée des',
    'home.lead.dev': 'sites et des applications',
    'home.lead.2': ', je dessine des',
    'home.lead.design': 'logos et des affiches',
    'home.lead.3': ', et je fais de la',
    'home.lead.photo': 'photographie',
    'home.lead.4': '.',
    'home.intro':
      'Freelance en parallèle de mon poste de développeur, je prends un nombre limité de projets pour m’y consacrer vraiment.',
    'home.cta.contact': 'Parler de votre projet',
    'home.cta.work': 'Voir les réalisations',
    'home.selected': 'Projets récents',
    'home.allWork': 'Toutes les réalisations',
    'home.services': 'Ce que je peux faire pour vous',
    'home.servicesLink': 'Services et tarifs',

    'work.title': 'Réalisations',
    'work.description': 'Sites, applications, identités visuelles, affiches et photographies réalisés par Baptiste Morville.',
    'work.filter': 'Filtrer par catégorie',
    'work.empty': 'Aucun projet dans cette catégorie pour le moment.',
    'work.count.one': 'projet',
    'work.count.many': 'projets',

    'project.back': 'Toutes les réalisations',
    'project.year': 'Année',
    'project.client': 'Client',
    'project.category': 'Catégorie',
    'project.role': 'Rôle',
    'project.visit': 'Voir le projet en ligne',
    'project.gallery': 'Galerie',
    'project.next': 'Projet suivant',
    'project.openImage': 'Agrandir l’image',
    'project.closeImage': 'Fermer',
    'project.prevImage': 'Image précédente',
    'project.nextImage': 'Image suivante',
    'project.cta': 'Un projet similaire en tête ?',
    'project.ctaLink': 'Me contacter',

    'services.title': 'Services et tarifs',
    'services.description': 'Création de sites web, applications, logos, affiches et photographie : services et tarifs indicatifs.',
    'services.intro':
      'Chaque projet est différent : les tarifs ci-dessous sont indicatifs et un devis détaillé et gratuit vous est envoyé après un premier échange.',
    'services.includes': 'Inclus',
    'services.from': 'À partir de',
    'services.onQuote': 'Sur devis',
    'services.process': 'Comment on travaille ensemble',
    'services.cta': 'Demander un devis',

    'about.title': 'À propos',
    'about.description': 'Baptiste Morville, développeur, graphiste et photographe freelance.',
    'about.skills': 'Compétences',
    'about.tools': 'Outils',
    'about.cta': 'Travaillons ensemble',
    'about.portraitAlt': 'Portrait de Baptiste Morville',

    'contact.title': 'Contact',
    'contact.description': 'Contactez Baptiste Morville pour un site, une application, un logo, une affiche ou une séance photo.',
    'contact.intro':
      'Décrivez votre projet en quelques lignes : je vous réponds sous 48 h ouvrées avec des questions ou une première estimation.',
    'contact.direct': 'Ou écrivez-moi directement',
    'contact.name': 'Nom',
    'contact.email': 'E-mail',
    'contact.type': 'Type de projet',
    'contact.type.placeholder': 'Choisir…',
    'contact.type.other': 'Autre',
    'contact.budget': 'Budget estimé (facultatif)',
    'contact.message': 'Votre projet',
    'contact.message.hint': 'Objectif, délais, exemples qui vous plaisent…',
    'contact.required': 'obligatoire',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi…',
    'contact.success': 'Message envoyé. Je vous réponds sous 48 h ouvrées.',
    'contact.error': 'Le message n’a pas pu être envoyé. Vérifiez les champs ou écrivez-moi directement à',
    'contact.privacy':
      'Vos informations servent uniquement à répondre à votre demande. Détails dans les',
    'contact.privacyLink': 'mentions légales',
    'contact.notConfigured': 'Le formulaire n’est pas encore activé. Écrivez-moi directement à',

    'legal.title': 'Mentions légales',
    'legal.description': 'Mentions légales et politique de confidentialité du site morvillebaptiste.fr.',

    'footer.rights': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.available': 'Disponible pour de nouveaux projets',

    'notFound.title': 'Page introuvable',
    'notFound.text': 'Cette page n’existe pas ou a été déplacée.',
    'notFound.home': 'Retour à l’accueil',

    'env.test': 'Version de test',
  },
  en: {
    'meta.locale': 'en_US',
    'skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'lang.switch': 'Lire en français',
    'lang.short': 'FR',

    'cat.all': 'All',
    'cat.dev': 'Websites & apps',
    'cat.design': 'Graphic design',
    'cat.photo': 'Photography',

    'home.title': 'Freelance developer, graphic designer and photographer',
    'home.description':
      'Baptiste Morville, freelancer: websites and apps, logos and posters, photography.',
    'home.lead.1': 'I build',
    'home.lead.dev': 'websites and apps',
    'home.lead.2': ', design',
    'home.lead.design': 'logos and posters',
    'home.lead.3': ', and take',
    'home.lead.photo': 'photographs',
    'home.lead.4': '.',
    'home.intro':
      'I freelance alongside my job as a developer, and take on a limited number of projects so each one gets real attention.',
    'home.cta.contact': 'Talk about your project',
    'home.cta.work': 'See my work',
    'home.selected': 'Recent projects',
    'home.allWork': 'All work',
    'home.services': 'What I can do for you',
    'home.servicesLink': 'Services and pricing',

    'work.title': 'Work',
    'work.description': 'Websites, apps, visual identities, posters and photography by Baptiste Morville.',
    'work.filter': 'Filter by category',
    'work.empty': 'No projects in this category yet.',
    'work.count.one': 'project',
    'work.count.many': 'projects',

    'project.back': 'All work',
    'project.year': 'Year',
    'project.client': 'Client',
    'project.category': 'Category',
    'project.role': 'Role',
    'project.visit': 'View the live project',
    'project.gallery': 'Gallery',
    'project.next': 'Next project',
    'project.openImage': 'Enlarge image',
    'project.closeImage': 'Close',
    'project.prevImage': 'Previous image',
    'project.nextImage': 'Next image',
    'project.cta': 'Have a similar project in mind?',
    'project.ctaLink': 'Get in touch',

    'services.title': 'Services and pricing',
    'services.description': 'Websites, apps, logos, posters and photography: services and indicative pricing.',
    'services.intro':
      'Every project is different: prices below are indicative, and you get a detailed, free quote after a first conversation.',
    'services.includes': 'Includes',
    'services.from': 'From',
    'services.onQuote': 'On quote',
    'services.process': 'How we work together',
    'services.cta': 'Request a quote',

    'about.title': 'About',
    'about.description': 'Baptiste Morville, freelance developer, graphic designer and photographer.',
    'about.skills': 'Skills',
    'about.tools': 'Tools',
    'about.cta': 'Let’s work together',
    'about.portraitAlt': 'Portrait of Baptiste Morville',

    'contact.title': 'Contact',
    'contact.description': 'Contact Baptiste Morville about a website, an app, a logo, a poster or a photo shoot.',
    'contact.intro':
      'Describe your project in a few lines: I reply within two working days with questions or a first estimate.',
    'contact.direct': 'Or email me directly',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.type': 'Project type',
    'contact.type.placeholder': 'Choose…',
    'contact.type.other': 'Other',
    'contact.budget': 'Estimated budget (optional)',
    'contact.message': 'Your project',
    'contact.message.hint': 'Goal, timeline, examples you like…',
    'contact.required': 'required',
    'contact.send': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': 'Message sent. I’ll reply within two working days.',
    'contact.error': 'The message could not be sent. Check the fields or email me directly at',
    'contact.privacy': 'Your details are only used to reply to your request. See the',
    'contact.privacyLink': 'legal notice',
    'contact.notConfigured': 'The form isn’t active yet. Email me directly at',

    'legal.title': 'Legal notice',
    'legal.description': 'Legal notice and privacy policy for morvillebaptiste.fr.',

    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.available': 'Available for new projects',

    'notFound.title': 'Page not found',
    'notFound.text': 'This page doesn’t exist or has moved.',
    'notFound.home': 'Back to home',

    'env.test': 'Test version',
  },
} as const;

export type UiKey = keyof (typeof ui)['fr'];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
