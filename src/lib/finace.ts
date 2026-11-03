export const IMG = "/work/finace";

export type Shot = { src: string; w: number; h: number; alt: string };

export const shots = {
  hero: { src: `${IMG}/hero.webp`, w: 1600, h: 1000, alt: "Finace homepage hero: “Marketing finance isn’t like marketing anything else.” with a conveyor of finance deliverables" },
  expert: { src: `${IMG}/expert.webp`, w: 1600, h: 614, alt: "Finace value propositions: feels simple and creative, stays compliant, connects with every audience" },
  process: { src: `${IMG}/process.webp`, w: 1600, h: 992, alt: "Finace ‘How we work’ roadmap from Idea to Review & Beyond" },
  clients: { src: `${IMG}/clients.webp`, w: 1600, h: 541, alt: "Finace client wall: trusted by 70+ brands across the financial ecosystem" },
  services: { src: `${IMG}/services.webp`, w: 1600, h: 1214, alt: "Finace stacked service cards: Content & Research, Creative Design, Video & Animation" },
  testimonials: { src: `${IMG}/testimonials.webp`, w: 1600, h: 911, alt: "Finace testimonials from marketing leaders at AMCs and insurers" },
  brief: { src: `${IMG}/brief.webp`, w: 1600, h: 1131, alt: "Finace one-line brief builder with tap-to-select requirement, audience and timing" },
  about: { src: `${IMG}/about.webp`, w: 1600, h: 1000, alt: "Finace About page: “We make boring finance interesting.” with a world reach map" },
  mHero: { src: `${IMG}/mobile-hero.webp`, w: 600, h: 1298, alt: "Finace homepage on a phone" },
  mServices: { src: `${IMG}/mobile-services.webp`, w: 600, h: 1298, alt: "Finace services on a phone" },
  mBrief: { src: `${IMG}/mobile-brief.webp`, w: 600, h: 1298, alt: "Finace brief builder on a phone" },
  pagespeed: { src: `${IMG}/pagespeed.webp`, w: 1440, h: 624, alt: "Google PageSpeed Insights for finace.co on desktop: Performance 99, Accessibility 96, Best Practices 96, SEO 100" },
  journeyMap: { src: `${IMG}/journey-map.webp`, w: 883, h: 1132, alt: "The original six-stage user journey map for the Finace website" },
} satisfies Record<string, Shot>;

export type Stage = {
  n: string; name: string; goal: string; color: string; tint: string;
  sections: string[]; quote: string; shot: Shot; caption: string;
};

export const stages: Stage[] = [
  {
    n: "01", name: "Awareness", goal: "Recognise the problem", color: "rgb(214,108,72)", tint: "rgb(92,36,22)",
    sections: ["Hero", "Why communication matters", "The complexity of finance"],
    quote: "Our finance story is complicated. Maybe our communication is the problem.",
    shot: shots.hero, caption: "The hero names the problem in one line, while a live conveyor of factsheets, NFO kits and explainers turns into campaigns.",
  },
  {
    n: "02", name: "Education", goal: "Understand the difference", color: "rgb(226,160,60)", tint: "rgb(84,56,14)",
    sections: ["Clients & partners", "We’re not a marketing agency", "What makes the approach different"],
    quote: "Okay, they actually understand finance. They don’t just make things look good.",
    shot: shots.expert, caption: "Finance-first, not design-first: simple and creative, compliant from day one, and fluent with every audience.",
  },
  {
    n: "03", name: "Evaluation", goal: "See how they work", color: "rgb(70,190,150)", tint: "rgb(12,64,52)",
    sections: ["Our work", "Services / process", "Understanding business → experiences investors remember"],
    quote: "Can they understand our business and turn it into something people actually remember?",
    shot: shots.services, caption: "Five service lines stack like a deck you can flip through, each opening with the problem it solves.",
  },
  {
    n: "04", name: "Trust building", goal: "Validate the choice", color: "rgb(150,140,240)", tint: "rgb(44,38,104)",
    sections: ["Client voices", "70+ brands", "Years in the business", "Case studies / work"],
    quote: "Other serious financial brands trust them. They seem to know what they’re doing.",
    shot: shots.testimonials, caption: "Named marketing heads from AMCs and insurers speak for the work, next to a wall of 70+ BFSI brands.",
  },
  {
    n: "05", name: "Conversion", goal: "Start the conversation", color: "rgb(90,160,240)", tint: "rgb(14,52,96)",
    sections: ["Tell us about your brief", "3-tap brief questionnaire", "CTA / send the brief"],
    quote: "I don’t need the whole brief figured out. I can just tell them what I need.",
    shot: shots.brief, caption: "Three taps (what, who, when) and a name. A brief that takes under a minute instead of a blank contact form.",
  },
  {
    n: "06", name: "Retention", goal: "Become a communication partner", color: "rgb(160,210,80)", tint: "rgb(36,64,18)",
    sections: ["Ongoing work", "Learnings from the brief", "Long-term relationship"],
    quote: "They understand our business now. We can keep building with them.",
    shot: shots.process, caption: "The roadmap ends at ‘Review & Beyond’, framing Finace as a long-term partner rather than a one-off vendor.",
  },
];

export const scores = [
  { k: "Performance", v: 99 },
  { k: "Accessibility", v: 96 },
  { k: "Best practices", v: 96 },
  { k: "SEO", v: 100 },
];

export const seo = [
  "Registered and verified on Google Search Console",
  "Unique title and description for every page",
  "Open Graph tags, so links share cleanly",
  "Pages prerendered as static HTML for fast crawling",
  "Self-hosted fonts, with no render-blocking calls",
  "Motion that switches off for “reduce motion” users",
];

export const phases = [
  { t: "Research", p: "Basic research into the audience, and what an AMC marketing head needs to see before briefing an agency." },
  { t: "User journey", p: "Six stages from awareness to retention, each mapped to the section that answers it." },
  { t: "Design", p: "A dark, confident system in Finace green, with motion that explains rather than decorates." },
  { t: "Build & SEO", p: "Next.js build, brief form wired to a secure database, Search Console set up, then launch." },
];
