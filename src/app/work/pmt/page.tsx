import type { Metadata } from "next";
import Header from "@/components/Header";
import { Reveal } from "@/components/Interactive";
import { Browser } from "@/components/CaseStudy";
import { pmtMedia, pmtModules, pmtPersonas, pmtPrinciples, pmtQuotes, pmtWau } from "@/lib/pmt";

export const metadata: Metadata = {
  title: "PMT case study — tenfolds",
  description:
    "Interviews showed the team wasn’t against tracking. They were against entering the same data twice. That led to an ~80K-line work management platform used by ~20 people every week.",
  alternates: { canonical: "/work/pmt" },
  openGraph: {
    title: "PMT: people weren’t against tracking, they were against typing it twice",
    description: "Research-led work management platform: 0 to 20 weekly users in two weeks.",
    images: [{ url: pmtMedia.poster.src, width: pmtMedia.poster.w, height: pmtMedia.poster.h }],
  },
};

function WauChart() {
  const W = 640, H = 240, L = 40, R = 20, T = 24, B = 34;
  const max = 25;
  const x = (i: number) => L + (i * (W - L - R)) / (pmtWau.length - 1);
  const y = (v: number) => T + (1 - v / max) * (H - T - B);
  const pts = pmtWau.map((d, i) => [x(i), y(d.v)] as const);
  const done = pts.slice(0, -1);
  const line = done.map(([a, b], i) => `${i ? "L" : "M"}${a},${b}`).join(" ");
  const area = `${line} L${done[done.length - 1][0]},${y(0)} L${done[0][0]},${y(0)} Z`;
  const last = pts[pts.length - 1], prev = pts[pts.length - 2];
  return (
    <figure className="pmt-chart">
      <figcaption>
        <span>Weekly active users</span>
        <span className="mono">PostHog · Aug–Oct 2026</span>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Weekly active users: 0 before launch, 1 on Sep 6, 9 on Sep 13, 20 on Sep 20, 19 on Sep 27, a peak of 21 on Oct 4, 18 on Oct 11, 11 on Oct 18, and 19 so far in the week of Oct 25.">
        {[0, 5, 10, 15, 20, 25].map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} className={v === 0 ? "base" : "grid"} />
            <text x={L - 10} y={y(v) + 4} className="ytick">{v}</text>
          </g>
        ))}
        <path d={area} className="area" />
        <path d={line} className="ln" />
        <path d={`M${prev[0]},${prev[1]} L${last[0]},${last[1]}`} className="ln dash" />
        {pts.map(([a, b], i) => (
          <g key={pmtWau[i].w}>
            <circle cx={a} cy={b} r={i === 5 ? 6 : 4} className={i === pts.length - 1 ? "pt open" : i === 5 ? "pt peak" : "pt"} />
            <text x={a} y={H - 10} className="xtick">{pmtWau[i].w}</text>
          </g>
        ))}
        <text x={pts[5][0]} y={pts[5][1] - 14} className="peak">21 peak</text>
      </svg>
      <p className="pmt-chart-note">Dashed segment: a week still in progress when measured.</p>
    </figure>
  );
}

export default function PmtCaseStudy() {
  return (
    <>
      <Header base="/" />
      <main id="top">
        {/* Hero */}
        <section className="wrap cs-hero">
          <div className="hero-meta eyebrow">
            <a href="/#work" className="cs-back">← All work</a>
            <span>Case study 03 · Internal platform</span>
          </div>
          <h1 className="cs-title" style={{ maxWidth: "17ch" }}>
            People weren’t against tracking. They were against <span className="serif">typing it twice.</span>
          </h1>
          <div className="cs-intro">
            <p className="hero-lead">
              A content and creative agency had a project management tool nobody updated, so every team kept its own Excel
              sheet. We interviewed the people involved, found the real problem, and built the replacement: an ~80,000-line
              full-stack platform.
            </p>
            <dl className="cs-meta">
              <div><dt>Client</dt><dd>Content &amp; creative agency</dd></div>
              <div><dt>Stack</dt><dd>React · FastAPI · MongoDB</dd></div>
              <div><dt>Scope</dt><dd>Research, product, design, full-stack build</dd></div>
              <div><dt>Live</dt><dd><a href="https://pmt-work-management.vercel.app/demo" target="_blank" rel="noopener noreferrer" className="cs-link">Try the demo ↗</a></dd></div>
            </dl>
          </div>
          <Reveal className="pmt-film">
            <video controls preload="none" playsInline poster={pmtMedia.poster.src}>
              <source src={pmtMedia.film} type="video/mp4" />
            </video>
            <div className="pmt-film-cap"><b>PMT product film</b><span className="mono">76 seconds · with soundtrack</span></div>
          </Reveal>
          <div className="stats cs-stats">
            <div><div className="stat-v">0 → 20</div><div className="stat-k">Weekly users in two weeks</div></div>
            <div><div className="stat-v">1×</div><div className="stat-k">Data entry per task, down from 3×</div></div>
            <div><div className="stat-v">~80K</div><div className="stat-k">Lines of code, React + FastAPI</div></div>
            <div><div className="stat-v">600+</div><div className="stat-k">Commits shaped by user feedback</div></div>
          </div>
        </section>

        {/* Problem */}
        <section className="dark">
          <div className="wrap dark-inner">
            <div className="eyebrow lime center">(01) The problem</div>
            <h2 className="h-display center" style={{ marginTop: 24 }}>
              Leadership could see projects. <span className="serif lime-text">The data was wrong.</span>
            </h2>
            <div className="cs-problem">
              <p>
                Leadership brought in a project management tool to see who was working on what, where time went and where
                delays came from. A year later it held projects, and very little else.
              </p>
              <p>
                Every team ran its own Excel sheet alongside it, and the efficiency numbers in those sheets sometimes came
                out at <em>200–300%</em>. The aim: find out why people weren’t updating the tool, then give leadership
                visibility without making the team do more admin.
              </p>
            </div>
            <div className="problems">
              {[
                ["No data", "Nobody updated the tool, so leadership was flying blind."],
                ["Shadow sheets", "Each team kept its own Excel file next to the official tool."],
                ["20–25 minutes", "to log 15 minutes of work in the old tool."],
                ["Entered 3×", "Client, project, format, date and SPOC typed again at every level."],
              ].map(([t, d], i) => (
                <Reveal key={t} className="problem" delay={i * 80}>
                  <span className="mono">0{i + 1}</span>
                  <p><strong style={{ fontWeight: 600 }}>{t}.</strong> <span style={{ color: "rgb(170,166,156)" }}>{d}</span></p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="wrap cs-section">
          <div className="eyebrow center">(02) User research</div>
          <h2 className="h-section center" style={{ marginTop: 20 }}>
            One interview <span className="serif">per role.</span>
          </h2>
          <p className="cs-lead center">
            The art director who creates projects, the content lead who starts every deliverable, and an animator who works in
            long creative sessions. We asked to see their Excel sheets, not just hear about them.
          </p>
          <div className="pmt-quotes">
            {pmtQuotes.map((q, i) => (
              <Reveal key={q.who} className="pmt-quote" delay={i * 80}>
                <p>“{q.q}”</p>
                <span className="mono">{q.who}</span>
              </Reveal>
            ))}
          </div>
          <div className="pmt-personas">
            {pmtPersonas.map((p, i) => (
              <Reveal key={p.t} className="pmt-persona" delay={i * 80}>
                <span className="mono">Persona 0{i + 1}</span>
                <h3>{p.t}</h3>
                <small>{p.role}</small>
                <p>{p.d}</p>
                <div className="pmt-need"><span className="mono">Needs</span>{p.need}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Insight + decision */}
        <section className="wrap cs-section" style={{ paddingTop: 0 }}>
          <div className="pmt-insight">
            <div className="eyebrow lime">(03) Core insight</div>
            <h2 className="h-section" style={{ marginTop: 20 }}>
              The tool was built for managers. <span className="serif lime-text">The team needed speed.</span>
            </h2>
            <p>
              The team wasn’t resisting tracking. They were resisting cognitive overload, repeated entry, interruptions and
              duplicate admin. The target: <b>as light as Excel, as structured as a PM tool, and as automatic as a workflow
              engine.</b>
            </p>
          </div>
          <div style={{ marginTop: "clamp(48px,6vw,88px)" }}>
            <div className="eyebrow center">(04) The key decision</div>
            <h2 className="h-section center" style={{ marginTop: 20 }}>
              Don’t change the behaviour. <span className="serif">Move it to a new surface.</span>
            </h2>
            <p className="cs-lead center">
              The goal was 100% adoption from day one. Every team already did two things daily: managers assigned tasks on
              WhatsApp, and members logged work in a spreadsheet. PMT keeps both habits and changes where the data ends up.
            </p>
            <div className="pmt-decision">
              <Reveal className="pmt-surface">
                <span className="mono">Members already used</span>
                <h3>A <span className="serif">spreadsheet</span></h3>
                <p>So the Work Sheet <b>is</b> a sheet: compact rows, editing in place, dropdowns instead of forms, no modals. Each row fills in the project → deliverable hierarchy behind the scenes.</p>
              </Reveal>
              <Reveal className="pmt-surface" delay={80}>
                <span className="mono">Managers already used</span>
                <h3><span className="serif">WhatsApp</span></h3>
                <p>Managers keep sending tasklists on WhatsApp. An NLP matcher turns each line into a structured task with the right client, project, deliverable and assignee. Nobody assigns tasks inside PMT.</p>
              </Reveal>
            </div>
            <div className="pmt-flow">
              {["Manager sends WhatsApp tasklist", "NLP matches client · project · assignee", "Task appears on the member’s sheet", "Member logs work in the sheet", "Leadership sees the dashboard"].map((s, i) => (
                <span key={s}><b className="mono">0{i + 1}</b>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="dark">
          <div className="wrap dark-inner">
            <h2 className="h-section">Five rules <span className="serif lime-text">from the interviews.</span></h2>
            <div className="pmt-principles">
              {pmtPrinciples.map((p, i) => (
                <Reveal key={p.t} className="step pmt-principle" delay={i * 60}>
                  <span className="step-top"><span>Rule</span><span>0{i + 1}</span></span>
                  <span><span className="step-t">{p.t}</span><span className="step-p">{p.d}</span></span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Build */}
        <section className="wrap cs-section">
          <div className="eyebrow center">(05) What we built</div>
          <h2 className="h-section center" style={{ marginTop: 20 }}>
            Every module, <span className="serif">one source of truth.</span>
          </h2>
          <div className="cs-gallery">
            <Reveal className="cs-g-wide">
              <Browser shot={pmtMedia.planning} url="pmt-work-management.vercel.app" />
              <figcaption><b>Planning.</b> The week’s schedule, one row per person, with each bar coloured by what changed and load shown against capacity. Tasklists from WhatsApp land here for review.</figcaption>
            </Reveal>
            <Reveal>
              <Browser shot={pmtMedia.projects} url="pmt-work-management.vercel.app" sizes="(max-width: 760px) 100vw, 640px" />
              <figcaption><b>Projects.</b> Every project on a board by stage, with Content, Design and Animate work counted on each card.</figcaption>
            </Reveal>
            <Reveal delay={80}>
              <Browser shot={pmtMedia.efficiency} url="pmt-work-management.vercel.app" sizes="(max-width: 760px) 100vw, 640px" />
              <figcaption><b>Efficiency.</b> Productivity measured against each person’s real capacity, not a guess.</figcaption>
            </Reveal>
          </div>
          <div className="pmt-modules">
            {pmtModules.map((m, i) => (
              <Reveal key={m.t} className="pmt-module" delay={(i % 3) * 60}>
                <span className="mono">0{i + 1}</span>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </Reveal>
            ))}
          </div>
          <p className="cs-lead center" style={{ marginTop: 32 }}>
            Architecture end to end: a React SPA, a FastAPI service, MongoDB, and integrations for analytics, push
            notifications and email, plus a public demo mode that runs on sample data in the browser.
          </p>
        </section>

        {/* Results */}
        <section className="wrap cs-section" style={{ paddingTop: 0 }}>
          <div className="cs-perf">
            <div className="cs-perf-copy">
              <div className="eyebrow lime">(06) Results</div>
              <h2 className="h-section" style={{ marginTop: 20 }}>
                Shipped, used, <span className="serif">still improving.</span>
              </h2>
              <p>
                Adoption was almost immediate: weekly active users went from 1 to 20 in two weeks after launch. The team still
                assigns tasks on WhatsApp and still works in a sheet. Now it all reaches leadership as data.
              </p>
              <p>
                Every change since has followed the same loop: someone reports friction, we look at the data, we ship a fix.
              </p>
              <ul className="cs-seo">
                {["21 peak weekly active users within a month", "Each task entered once instead of three times", "600+ commits shaped by user feedback", "Public demo mode on sample data"].map((x) => <li key={x}><span className="check">✓</span>{x}</li>)}
              </ul>
            </div>
            <div className="cs-perf-scores">
              <WauChart />
            </div>
          </div>
        </section>
      </main>

      <footer className="dark footer">
        <div className="wrap footer-inner">
          <div className="eyebrow lime">Your turn</div>
          <h2>Your website should be <span className="serif lime-text">as good as your work.</span></h2>
          <div className="footer-row">
            <p>Send us your current site. We’ll audit it for free and tell you what’s holding it back.</p>
            <a href="/#contact" className="btn btn-lime cta-lg">Get a free website audit<span className="btn-dot">→</span></a>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} tenfolds</span>
            <span>
              <a href="/work/advisor-alpha" className="cs-link" style={{ color: "rgb(190,186,176)" }}>← Previous case study: Advisor Alpha</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
