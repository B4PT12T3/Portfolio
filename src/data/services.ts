/**
 * Services and pricing — edit freely.
 * `price`: a number in euros shows "From X €" ; null shows "On quote".
 * TODO: set your own prices (or keep "On quote").
 */
import type { Category } from '../i18n/ui';

type Localized = { fr: string; en: string };

export interface Service {
  id: string;
  category: Category;
  name: Localized;
  description: Localized;
  includes: { fr: string[]; en: string[] };
  price: number | null;
}

export const services: Service[] = [
  {
    id: 'website',
    category: 'dev',
    name: { fr: 'Site vitrine', en: 'Showcase website' },
    description: {
      fr: 'Un site rapide et clair pour présenter votre activité et être trouvé sur Google.',
      en: 'A fast, clear website to present your business and be found on Google.',
    },
    includes: {
      fr: ['Design sur mesure, adapté au mobile', 'Référencement de base (SEO)', 'Mise en ligne et nom de domaine', 'Formulaire de contact'],
      en: ['Custom design that works on mobile', 'Basic search optimisation (SEO)', 'Hosting setup and domain name', 'Contact form'],
    },
    price: null,
  },
  {
    id: 'app',
    category: 'dev',
    name: { fr: 'Application web ou mobile', en: 'Web or mobile app' },
    description: {
      fr: 'Un outil sur mesure : espace client, réservation, tableau de bord, application interne…',
      en: 'A custom tool: client portal, booking, dashboard, internal app…',
    },
    includes: {
      fr: ['Cadrage du besoin et maquettes', 'Développement et tests', 'Mise en production', 'Maintenance possible'],
      en: ['Scoping and mockups', 'Development and testing', 'Deployment', 'Optional maintenance'],
    },
    price: null,
  },
  {
    id: 'logo',
    category: 'design',
    name: { fr: 'Logo et identité visuelle', en: 'Logo and visual identity' },
    description: {
      fr: 'Un logo et des règles simples (couleurs, typographies) pour une image cohérente partout.',
      en: 'A logo and simple rules (colours, typefaces) for a consistent image everywhere.',
    },
    includes: {
      fr: ['Plusieurs pistes créatives', 'Allers-retours de modifications', 'Fichiers pour le web et l’impression', 'Mini charte graphique'],
      en: ['Several creative directions', 'Rounds of revisions', 'Files for web and print', 'Short brand guide'],
    },
    price: null,
  },
  {
    id: 'print',
    category: 'design',
    name: { fr: 'Affiches et supports imprimés', en: 'Posters and print' },
    description: {
      fr: 'Affiches, flyers, cartes de visite ou visuels pour les réseaux sociaux.',
      en: 'Posters, flyers, business cards or social media visuals.',
    },
    includes: {
      fr: ['Création sur mesure', 'Fichiers prêts pour l’imprimeur', 'Déclinaisons pour les réseaux sociaux'],
      en: ['Custom design', 'Print-ready files', 'Social media versions'],
    },
    price: null,
  },
  {
    id: 'photo',
    category: 'photo',
    name: { fr: 'Séance photo', en: 'Photo shoot' },
    description: {
      fr: 'Portraits, produits, événements ou lieux : des images pour votre site et vos réseaux.',
      en: 'Portraits, products, events or places: images for your website and social media.',
    },
    includes: {
      fr: ['Préparation de la séance', 'Retouche des photos sélectionnées', 'Livraison en ligne en haute définition', 'Droits d’utilisation définis au devis'],
      en: ['Shoot preparation', 'Editing of selected photos', 'High-resolution online delivery', 'Usage rights set out in the quote'],
    },
    price: null,
  },
];

/** The steps of working together — a real sequence, shown in order. */
export const process: { title: Localized; text: Localized }[] = [
  {
    title: { fr: 'Premier échange', en: 'First conversation' },
    text: {
      fr: 'Vous me présentez votre projet par message ou en appel. On définit l’objectif, le délai et le budget.',
      en: 'You tell me about your project by message or call. We agree on the goal, timeline and budget.',
    },
  },
  {
    title: { fr: 'Devis', en: 'Quote' },
    text: {
      fr: 'Je vous envoie un devis détaillé et gratuit. Un acompte lance le projet.',
      en: 'I send you a detailed, free quote. A deposit starts the project.',
    },
  },
  {
    title: { fr: 'Création', en: 'Creation' },
    text: {
      fr: 'Je vous montre l’avancement régulièrement et on ajuste ensemble.',
      en: 'I show you progress regularly and we adjust together.',
    },
  },
  {
    title: { fr: 'Livraison', en: 'Delivery' },
    text: {
      fr: 'Mise en ligne ou remise des fichiers, avec les explications pour être autonome.',
      en: 'Launch or file handover, with what you need to be independent.',
    },
  },
];
