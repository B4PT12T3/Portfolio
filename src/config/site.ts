/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR DETAILS — edit this file first.
 *  Everything marked TODO must be filled in before going live.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: 'Baptiste Morville',
  // Short name shown in the header
  shortName: 'Baptiste Morville',

  // Public contact email shown on the site (can differ from your personal one)
  email: 'morvillebaptistepro@gmail.com',

  // City / area you work from (shown in the footer and about page)
  location: 'Hauts-de-France',

  // Formspree form ID: create a form at https://formspree.io, copy the ID
  // from its endpoint (https://formspree.io/f/XXXXXXXX → "XXXXXXXX").
  // While empty, the contact page shows your email instead of the form.
  formspreeId: 'maeqnlak', 

  // Social links — leave a value empty ('') to hide it.
  socials: {
    github: '', // TODO e.g. 'https://github.com/yourname'
    linkedin: '', // TODO
    instagram: '', // TODO (useful for photography)
    behance: '', // TODO (useful for graphic design)
  },

  /**
   * Legal notice (mentions légales) — required in France for a professional site.
   * Fill in once your freelance status (e.g. micro-entreprise) is registered.
   */
  legal: {
    status: "Un gars qui s'amuse", // TODO check
    siret: '', // TODO your SIRET number
    address: '', // TODO your professional address
    vatNote: 'TVA non applicable, art. 293 B du CGI', // standard mention for micro-entrepreneurs under the VAT threshold
  },
} as const;

export type Site = typeof site;
