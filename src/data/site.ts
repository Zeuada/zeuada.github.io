// Everything you'll want to edit lives in this file.
// Replace every value in [BRACKETS] before going live.

export const site = {
  name: 'Zeuada',
  tagline: 'Power, engineered.',
  description:
    'Zeuada is an independent software studio. Powerful tools, carefully engineered and openly shared.',
  url: 'https://zeuada.com',

  founder: {
    name: '[Your name]',
    role: 'Founder, Zeuada',
    // Put a square photo in /public (e.g. /public/founder.jpg) and set it to '/founder.jpg'.
    // While empty, the photo is simply left out.
    photo: '',
  },

  // Shown in the founder section for partners and investors.
  contactEmail: '[your-email]',

  // Leave a link empty ('') to hide it from the footer.
  socials: {
    x: '',
    linkedin: '',
    github: '',
  },

  // GitHub Pages is static, so forms need an outside service
  // (Buttondown, Formspree, ConvertKit, etc.). Paste its form POST URL here.
  // While empty, the forms render but don't submit anything.
  forms: {
    earlyAccessAction: '',
    newsletterAction: '',
  },

  products: [
    {
      id: 'unloop',
      name: 'Unloop',
      status: 'In testing',
      platform: 'Android',
      version: 'v0.1.0',
      headline: 'Break the reels loop. Get your time back.',
      description:
        "Unloop counts every reel as you scroll and shows you exactly what they're costing you, then gives you a moment to choose whether to keep going.",
      note: 'Under 5 MB, so it never slows your phone down.',
    },
  ],

  openNumbers: {
    lastUpdated: '[MONTH 2026]',
    items: [
      { value: '1', label: 'Product in testing' },
      { value: '[N]', label: 'People using Zeuada tools' },
      { value: '[N]', label: 'Updates shipped' },
      { value: '[YEAR]', label: 'Building since' },
    ],
  },

  // Newest first. Add an entry every time something ships.
  buildLog: [
    {
      date: '[DATE]',
      title: 'Unloop enters Google Play internal testing',
      body: "The first build, v0.1.0, is in testers' hands.",
    },
    {
      date: '[DATE]',
      title: 'Reels detection works on real devices',
      body: 'Unloop now recognizes Reels and counts each one as you scroll, with the edge cases tested.',
    },
    {
      date: '[DATE]',
      title: 'Unloop goes fully native',
      body: 'Built in Kotlin instead of a cross-platform framework, so it stays small and opens instantly.',
    },
  ],
};
