// Images are served from the original Wix case study and optimised by next/image.
const W = "https://static.wixstatic.com/media/cee7be_";

export type Img = { src: string; w: number; h: number; alt: string };

export const aa = {
  desktop: { src: `${W}a8d3232987354867bba40479e5fc5bf7~mv2.jpeg`, w: 1960, h: 1470, alt: "Advisor Alpha website on a desktop display" },
  ipad: { src: `${W}99907f48ff554cf7a4d38f92c258b7cf~mv2.jpeg`, w: 1960, h: 1470, alt: "Advisor Alpha website on an iPad" },
  iphoneDesk: { src: `${W}75646d15728f4c79aa2ad34cf891ab55~mv2.jpeg`, w: 1960, h: 1470, alt: "Advisor Alpha mobile site on an iPhone on a desk" },
  mobile: [
    { src: `${W}36694290937f40b1823573ed62662fcd~mv2.png`, w: 428, h: 809, alt: "Advisor Alpha mobile screen" },
    { src: `${W}141cbb257a344baa9bdd943998b273d4~mv2.png`, w: 431, h: 809, alt: "Advisor Alpha mobile screen" },
    { src: `${W}9329e46cf32a444e8f22633efa32bea6~mv2.png`, w: 433, h: 809, alt: "Advisor Alpha mobile screen" },
    { src: `${W}5023b51617de412980f15378f1295e98~mv2.png`, w: 433, h: 809, alt: "Advisor Alpha mobile screen" },
    { src: `${W}d9b7b812c2524ae68ed3906171c9c6e9~mv2.png`, w: 433, h: 809, alt: "Advisor Alpha mobile screen" },
  ],
} satisfies Record<string, Img | Img[]>;

export const aaProblems = [
  { t: "Engagement gap", d: "Deep-dive reports run past 20 pages and were hard to navigate on a phone." },
  { t: "Trust deficit", d: "The look felt old-school rather than timeless, which made it harder to win younger, high-net-worth investors." },
  { t: "Discovery issue", d: "Years of valuable research sat buried in a cluttered archive." },
];

export const aaPillars = [
  { t: "Research discovery & navigation", d: "A structure that surfaces the right report, new or old, in a few taps." },
  { t: "Research reading experience", d: "Long reports broken into a clean, scannable read that holds up on mobile." },
  { t: "Investor decision support", d: "Information laid out to help investors act with conviction, not impulse." },
  { t: "Trust & credibility", d: "A premium, timeless identity that matches the depth of the research." },
];

export const aaBuild = [
  "Website designed in Figma and built on WordPress",
  "Brand kit refined and extended into a UI kit",
  "Content and blog CMS set up, so the team publishes on its own",
  "Plugins for emailers, messages and enquiry forms",
];

export const aaTools = [
  { t: "Midjourney", d: "Visual ideation" },
  { t: "Google Gemini", d: "Content drafting" },
  { t: "Maze", d: "UX research" },
  { t: "Elementor AI", d: "On-page design and copy" },
];
