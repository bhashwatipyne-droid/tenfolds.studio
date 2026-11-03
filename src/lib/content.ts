export const INK = "rgb(14,14,12)";
export const PAPER = "rgb(243,240,233)";
export const LIME = "rgb(205,242,90)";
export const SAND = "rgb(233,229,218)";

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Demo", href: "#calculator" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export type WorkItem = {
  name: string; desc: string; url: string; tag: string; head: string; cta: string;
  k1: string; v1: string; k2: string; v2: string;
  bg: string; sub: string; card: string; ink: string; accent: string; onAccent: string; line: string; sub2: string;
};

export const work: WorkItem[] = [
  { name: "Mehta Wealth", desc: "Practice site · 14-year distributor", url: "mehtawealth.in", tag: "Concept 01", head: "Disciplined investing, explained simply.", cta: "Book a review", k1: "Families served", v1: "420+", k2: "Experience", v2: "14 yrs", bg: "rgb(18,52,40)", sub: "rgb(184,204,192)", card: PAPER, ink: INK, accent: "rgb(18,52,40)", onAccent: PAPER, line: "rgba(14,14,12,0.15)", sub2: "rgb(92,90,84)" },
  { name: "Iyer Financial", desc: "Family-office style · Chennai", url: "iyerfinancial.in", tag: "Concept 02", head: "Three generations of patient money.", cta: "Start a SIP", k1: "Since", v1: "2009", k2: "Cities", v2: "3", bg: LIME, sub: "rgb(60,70,30)", card: INK, ink: PAPER, accent: LIME, onAccent: INK, line: "rgba(243,240,233,0.18)", sub2: "rgb(160,156,146)" },
  { name: "Kapoor Advisory", desc: "Young professionals · Pune", url: "kapooradvisory.in", tag: "Concept 03", head: "Your first ₹1 Cr starts with a plan.", cta: "Talk to us", k1: "Avg. client age", v1: "31", k2: "Reply time", v2: "< 2 hrs", bg: SAND, sub: "rgb(92,90,84)", card: "rgb(255,255,255)", ink: INK, accent: "rgb(214,84,44)", onAccent: "rgb(255,255,255)", line: "rgba(14,14,12,0.12)", sub2: "rgb(92,90,84)" },
];

export const problems = [
  "A template site that looks like every other distributor’s",
  "Disclosures missing, or in the wrong place",
  "A contact form that goes nowhere",
  "Nothing that says “this person manages serious money”",
];

export const steps = [
  { d: "Day 1", t: "Discovery", p: "We learn your practice, clients and brand." },
  { d: "Days 2–3", t: "Design", p: "You see your site before anything is built." },
  { d: "Days 4–6", t: "Build", p: "Calculators, lead forms and compliance checks." },
  { d: "Day 7", t: "Launch", p: "Audit report delivered, site live." },
];

export const quality = [
  { k: "Design", a: "Templates, WordPress", b: "Custom, app-grade" },
  { k: "MFD compliance", a: "Rarely understood", b: "Built in" },
  { k: "SEBI-ready audit", a: "Not offered", b: "Included" },
];

export const services = [
  { t: "Custom design", d: "Not a template. Designed around your practice and built on a modern stack that is fast on mobile.", tags: ["Brand-led", "Mobile-first", "Fast loading"] },
  { t: "Calculators", d: "SIP and lumpsum calculators in your branding, so prospects spend time on your site, not a competitor’s.", tags: ["SIP", "Lumpsum", "Goal planning"] },
  { t: "Lead capture", d: "Every enquiry lands on your WhatsApp or email the moment it is submitted.", tags: ["WhatsApp", "Email", "Call booking"] },
  { t: "Basic SEO", d: "So clients searching your name, or “mutual fund distributor near me”, actually find you.", tags: ["Google profile", "Local search", "Meta tags"] },
  { t: "Compliance pack", d: "Disclosures placed correctly, plus an audit report you can keep on file.", tags: ["ARN", "AMFI", "Risk warnings"] },
  { t: "Handover and training", d: "You own everything and know how to update it. You’re never dependent on us.", tags: ["Walkthrough", "Docs", "Support options"] },
];

export const checks = [
  "ARN and AMFI registration shown correctly",
  "Mutual fund risk warnings in place",
  "Every claim checked, no guaranteed returns",
  "Audit report ready for SEBI and AMFI",
];

export const faqs = [
  { q: "Will my website be compliant?", a: "We design to current SEBI and AMFI guidelines and give you an audit report documenting it." },
  { q: "Can you really deliver in 7 days?", a: "Yes. Our process is built for speed, and we don’t compromise on quality." },
  { q: "Is this a template?", a: "No. Every site is custom-designed for your practice." },
  { q: "Do I need to give you content?", a: "Share what you have. We handle the rest and shape it to compliance norms." },
  { q: "What happens after launch?", a: "You get a handover and training, plus support options if you want them." },
];

export function inr(v: number) {
  if (v >= 1e7) return "₹" + (v / 1e7).toFixed(2) + " Cr";
  if (v >= 1e5) return "₹" + (v / 1e5).toFixed(1) + " L";
  return "₹" + Math.round(v).toLocaleString("en-IN");
}

export const pad = (i: number) => "0" + (i + 1);
