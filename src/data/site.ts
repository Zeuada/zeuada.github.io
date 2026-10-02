// Everything you'll want to edit lives in this file.
// Replace every value in [BRACKETS] before going live.

import founderPortrait from '../assets/founder/portrait.png';
import founderDoodles from '../assets/founder/doodles.png';
import founderDoodlesAccent from '../assets/founder/doodles-accent.png';

export const site = {
  name: 'Zeuada',
  tagline: 'Power, engineered.',
  description:
    'Zeuada is an independent software studio. Powerful tools, carefully engineered and openly shared.',
  url: 'https://zeuada.com',

  founder: {
    name: 'Shubham Lad',
    role: 'Founder, Zeuada',
    // A cut-out with a real transparent background, cropped flat at the bottom edge; it stands on
    // the section's bottom line. Lives in src/assets so the build converts it to AVIF/WebP.
    // Set to null to show a dashed placeholder instead.
    photo: founderPortrait as ImageMetadata | null,
    // Hand-drawn notes around the photo: white-on-transparent masks on the same canvas as the
    // photo, tinted grey and blue by CSS. Set to null to show the photo on its own.
    doodles: { main: founderDoodles, accent: founderDoodlesAccent } as {
      main: ImageMetadata;
      accent: ImageMetadata;
    } | null,
  },

  // Shown in the founder section for partners and investors.
  contactEmail: 'founder@zeuada.com',

  // Full build log page, linked as "See every update". Leave empty ('') to hide the link.
  buildLogUrl: '',

  // Leave a link empty ('') to hide it from the footer.
  socials: {
    x: 'https://x.com/_shulapy',
    linkedin: 'https://www.linkedin.com/in/shubhamlad/',
    github: 'https://github.com/shulapy',
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
    lastUpdated: '[OCTOBER 2026]',
    items: [
      { value: '1', label: 'Product in testing' },
      { value: '5', label: 'People using Zeuada tools' },
      { value: '3', label: 'Updates shipped' },
      { value: '2026', label: 'Building since' },
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
