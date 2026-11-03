import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { Reveal } from "@/components/Interactive";
import { aa, aaBuild, aaPillars, aaProblems, aaTools, type Img } from "@/lib/advisoralpha";

export const metadata: Metadata = {
  title: "Advisor Alpha case study — tenfolds",
  description:
    "How tenfolds redesigned Advisor Alpha, an equity research and investment advisory platform: a premium, mobile-first research experience designed and built on WordPress in 15 days.",
  alternates: { canonical: "/work/advisor-alpha" },
  openGraph: {
    title: "Advisor Alpha: equity research made approachable, in 15 days",
    description: "Design system, UI and WordPress build for an equity research platform.",
    images: [{ url: aa.desktop.src }],
  },
};

function Shot({ img, sizes, priority = false, className = "" }: { img: Img; sizes: string; priority?: boolean; className?: string }) {
  return (
    <figure className={`aa-shot ${className}`}>
      <Image src={img.src} width={img.w} height={img.h} alt={img.alt} sizes={sizes} priority={priority} />
    </figure>
  );
}

export default function AdvisorAlphaCaseStudy() {
  return (
    <>
      <Header base="/" />
      <main id="top">
        {/* Hero */}
        <section className="wrap cs-hero">
          <div className="hero-meta eyebrow">
            <a href="/#work" className="cs-back">← All work</a>
            <span>Case study 02 · Equity research platform</span>
          </div>
          <h1 className="cs-title">
            Serious research, <span className="serif">without the intimidation.</span>
          </h1>
          <div className="cs-intro">
            <p className="hero-lead">
              Advisor Alpha gives individual investors fundamental equity research they can invest on with conviction.
              Their website was a dated, text-heavy portal that undersold the research. We redesigned and developed it in
              15 days.
            </p>
            <dl className="cs-meta">
              <div><dt>Client</dt><dd>Advisor Alpha</dd></div>
              <div><dt>Timeline</dt><dd>15 days</dd></div>
              <div><dt>Scope</dt><dd>Design system, UI, WordPress build</dd></div>
              <div><dt>Sector</dt><dd>B2C fintech · Equity research</dd></div>
            </dl>
          </div>
          <Reveal className="aa-hero-media">
            <Shot img={aa.desktop} priority sizes="(max-width: 1360px) 100vw, 1280px" />
          </Reveal>
          <div className="stats cs-stats">
            <div><div className="stat-v">15 days</div><div className="stat-k">Designed and developed</div></div>
            <div><div className="stat-v">20+ pg</div><div className="stat-k">Reports made readable on mobile</div></div>
            <div><div className="stat-v">30–70%</div><div className="stat-k">Faster with AI in the workflow</div></div>
            <div><div className="stat-v">CMS</div><div className="stat-k">Team publishes on its own</div></div>
          </div>
        </section>

        {/* Problem */}
        <section className="dark">
          <div className="wrap dark-inner">
            <div className="eyebrow lime center">(01) The problem</div>
            <h2 className="h-display center" style={{ marginTop: 24 }}>
              Timeless research. A website that <span className="serif lime-text">looked dated.</span>
            </h2>
            <div className="cs-problem">
              <p>
                Investing today is noisy: social media hype, volatile tickers, and apps designed to make people trade more.
                Advisor Alpha stands for the opposite, patient research grounded in a clear philosophy.
              </p>
              <p>
                Their platform didn’t show it. It was a dated, text-heavy portal, and the quality of the research was lost
                in how it was presented. Three problems stood out.
              </p>
            </div>
            <div className="problems">
              {aaProblems.map((p, i) => (
                <Reveal key={p.t} className="problem" delay={i * 80}>
                  <span className="mono">0{i + 1}</span>
                  <p><strong style={{ fontWeight: 600 }}>{p.t}.</strong> <span style={{ color: "rgb(170,166,156)" }}>{p.d}</span></p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="wrap split cs-section">
          <div style={{ flex: "1 1 360px" }}>
            <div className="eyebrow">(02) The approach</div>
            <h2 className="h-section" style={{ marginTop: 20 }}>
              Four experiences, <span className="serif">one calm system.</span>
            </h2>
            <p className="cs-lead" style={{ margin: "20px 0 0" }}>
              We designed around what an investor actually does on the site: find research, read it, decide, and trust the
              source. Then we built it so the Advisor Alpha team can run it themselves.
            </p>
          </div>
          <div style={{ flex: "1.3 1 420px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 12 }}>
            {aaPillars.map((p, i) => (
              <Reveal key={p.t} className="aa-pillar" delay={i * 70}>
                <span className="mono">0{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Designs */}
        <section className="wrap cs-section" style={{ paddingTop: 0 }}>
          <div className="eyebrow center">(03) The designs</div>
          <h2 className="h-section center" style={{ marginTop: 20 }}>
            A premium read, <span className="serif">on every screen.</span>
          </h2>
          <p className="cs-lead center">
            The brand’s identity, extended into a structured UI kit: a refined colour story and a strict type hierarchy that
            turn dense research into something investors want to read.
          </p>
          <div className="cs-gallery">
            <Reveal><Shot img={aa.ipad} sizes="(max-width: 760px) 100vw, 640px" /></Reveal>
            <Reveal delay={80}><Shot img={aa.iphoneDesk} sizes="(max-width: 760px) 100vw, 640px" /></Reveal>
          </div>
          <Reveal className="cs-phones aa-phones">
            <div className="cs-phones-copy">
              <div className="eyebrow">Mobile</div>
              <h3>Twenty-page reports, readable with a thumb.</h3>
              <p>Long-form research broken into sections that are easy to scan, navigate and come back to on a phone.</p>
            </div>
            <div className="aa-phones-row">
              {aa.mobile.map((m, i) => (
                <figure key={m.src} className="aa-phone" style={{ transform: i % 2 ? "translateY(clamp(12px,2.4vw,32px))" : undefined }}>
                  <Image src={m.src} width={m.w} height={m.h} alt={m.alt} sizes="(max-width: 700px) 30vw, 200px" />
                </figure>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Build + AI */}
        <section className="wrap cs-section" style={{ paddingTop: 0 }}>
          <div className="cs-perf">
            <div className="cs-perf-copy">
              <div className="eyebrow lime">(04) Build &amp; workflow</div>
              <h2 className="h-section" style={{ marginTop: 20 }}>
                Built to run itself. <span className="serif">Made faster with AI.</span>
              </h2>
              <ul className="cs-seo">
                {aaBuild.map((x) => <li key={x}><span className="check">✓</span>{x}</li>)}
              </ul>
            </div>
            <div className="cs-perf-scores">
              <div className="aa-ai">
                <div className="aa-ai-big">30–70%</div>
                <div className="aa-ai-k">less time across research and design, with AI tools built into the workflow</div>
                <div className="aa-tools">
                  {aaTools.map((t) => <div key={t.t}><b>{t.t}</b><span>{t.d}</span></div>)}
                </div>
              </div>
              <div className="mono cs-perf-note">Design in Figma &amp; FigJam · Illustrator · Build on WordPress + Elementor</div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="wrap split cs-section" style={{ paddingTop: 0 }}>
          <div style={{ flex: "1 1 360px" }}>
            <div className="eyebrow">(05) The takeaway</div>
            <h2 className="h-section" style={{ marginTop: 20 }}>
              Sophisticated research <span className="serif">doesn’t have to intimidate.</span>
            </h2>
          </div>
          <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ fontSize: "clamp(17px,1.6vw,20px)", lineHeight: 1.5, color: "var(--body)", textWrap: "pretty" }}>
              Dense information, paired with a clean and premium reading experience. Advisor Alpha now has a site that
              helps investors approach their portfolios with confidence rather than anxiety.
            </p>
            <div className="checks">
              {["Designed and developed in 15 days", "Mobile-first reading for long research reports", "Past research easy to find again", "WordPress CMS the team runs on its own"].map((c, i) => (
                <Reveal key={c} delay={i * 70}><span className="check">✓</span>{c}</Reveal>
              ))}
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
              <a href="/work/finace" className="cs-link" style={{ color: "rgb(190,186,176)" }}>Previous case study: Finace →</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
