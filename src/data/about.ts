/**
 * About page content — TODO: rewrite the bio in your own words
 * and replace src/assets/portrait.jpg with a photo of you.
 */
export const about = {
  bio: {
    fr: [
      'Je suis Baptiste, développeur de métier. En parallèle de mon poste, je travaille en freelance pour des indépendants, des associations et des petites entreprises.',
      'Je conçois des sites mais aussi ce qui les entoure : un logo, une affiche, des photos. Avoir un seul interlocuteur pour tout cela vous fait gagner du temps et garde votre image cohérente.',
      'Comme je prends peu de projets à la fois, chacun reçoit toute mon attention, du premier échange à la livraison.',
    ],
    en: [
      'I’m Baptiste, a developer by trade. Alongside my job, I freelance for independents, non-profits and small businesses.',
      'I build websites and also what surrounds them: a logo, a poster, photographs. One person for all of it saves you time and keeps your image consistent.',
      'Because I take on few projects at a time, each one gets my full attention, from the first conversation to delivery.',
    ],
  },
  skills: [
    {
      title: { fr: 'Sites web', en: 'Websites' },
      items: {
        fr: ['Sites vitrines', 'Intégration responsive', 'Référencement de base', 'Mise en ligne et hébergement'],
        en: ['Showcase websites', 'Responsive front-end', 'Basic SEO', 'Deployment and hosting'],
      },
    },
    {
      title: { fr: 'Graphisme', en: 'Graphic design' },
      items: {
        fr: ['Logos', 'Identités visuelles', 'Affiches', 'Supports imprimés', 'Visuels pour les réseaux'],
        en: ['Logos', 'Visual identities', 'Posters', 'Print', 'Social media visuals'],
      },
    },
    {
      title: { fr: 'Photographie', en: 'Photography' },
      items: {
        fr: ['Portrait', 'Produit', 'Événement', 'Retouche'],
        en: ['Portrait', 'Product', 'Event', 'Editing'],
      },
    },
  ],
  // TODO: adjust to the tools you actually use
  tools: ['HTML / CSS / JavaScript', 'Next.js', 'Vue', 'Astro', 'PHP', 'Figma', 'Lightroom', 'Photoshop', 'Illustrator'],
};
