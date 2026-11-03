const P = "/work/pmt";

export const pmtMedia = {
  film: `${P}/film.mp4`,
  poster: { src: `${P}/poster.webp`, w: 1200, h: 675, alt: "PMT Work Sheet: log work like a spreadsheet" },
  planning: { src: `${P}/planning.webp`, w: 1280, h: 720, alt: "PMT Planning: a WhatsApp tasklist matched to client, project and assignee" },
  projects: { src: `${P}/projects.webp`, w: 1280, h: 720, alt: "PMT Projects: every deliverable, every stage" },
  efficiency: { src: `${P}/efficiency.webp`, w: 1280, h: 720, alt: "PMT Efficiency: productivity measured against each person's real capacity" },
};

export const pmtQuotes = [
  { q: "If writing the actual minimalist took 15 minutes, updating PMT took another 20–25.", who: "Content lead" },
  { q: "I’m animating and focused. Then someone tells me to update PMT. That breaks the flow completely.", who: "Animator" },
  { q: "PMT is useful for visibility, but people don’t update things regularly.", who: "Art director, 12+ years" },
];

export const pmtPersonas = [
  { t: "The Workflow Orchestrator", role: "Art director · 12+ yrs", d: "Wants visibility across projects and makes sure no invoice is missed. Updates other people’s statuses herself.", need: "Escalation alerts, statuses that update on their own" },
  { t: "The Execution Specialist", role: "Content lead · 1.5 yrs", d: "Thinks in primary keys and inheritance. Built the team’s workaround spreadsheet.", need: "“One project number should give the entire workflow.”" },
  { t: "The Creative Flow Worker", role: "Animator · 4+ yrs", d: "Logs time at the end of the day as rough estimates. A one-minute video can take 7 hours or 10.", need: "Batch updates, no timers" },
];

export const pmtPrinciples = [
  { t: "Minimise repeated entry", d: "Every extra field lowers adoption, so data is inherited, reused and templated." },
  { t: "Protect flow", d: "Batch updates, editing in grid rows instead of forms, and no stopwatch timers." },
  { t: "Visibility without overhead", d: "Leadership sees more while the team updates less." },
  { t: "Parent → child", d: "Project → Deliverable → Subtask → Review → Feedback → Revision, with data inherited at every level." },
  { t: "Flexible time", d: "Rough estimates, end-of-day summaries and categorised effort (core vs non-core)." },
];

export const pmtModules = [
  { t: "Work Sheet", d: "A spreadsheet-like grid with searchable dropdowns and core/non-core activity types. Log once, and data flows up the hierarchy." },
  { t: "Projects & Deliverables", d: "A Kanban board for projects. Deliverables inherit client, AMC, dates and owners." },
  { t: "Planning", d: "Daily plans with rollover rules and insights, like flagging a deliverable that keeps repeating as possible rework." },
  { t: "WhatsApp ingestion", d: "Natural-language tasklists matched to client, project, deliverable and assignee, learning from every correction." },
  { t: "Efficiency & Capacity", d: "Productive hours (working hours minus non-core) compared with a standard time per deliverable type." },
  { t: "Approvals, Invoicing, Dashboard", d: "A review flow, invoice tracking so nothing is missed, and a 12-month view of portfolio health." },
];

// Weekly active users (PostHog). Last point is a week still in progress.
export const pmtWau = [
  { w: "Aug 30", v: 0 }, { w: "Sep 6", v: 1 }, { w: "Sep 13", v: 9 }, { w: "Sep 20", v: 20 }, { w: "Sep 27", v: 19 },
  { w: "Oct 4", v: 21 }, { w: "Oct 11", v: 18 }, { w: "Oct 18", v: 11 }, { w: "Oct 25", v: 19 },
];
