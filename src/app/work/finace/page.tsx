import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { Reveal } from "@/components/Interactive";
import { Browser, JourneyExplorer, Phone } from "@/components/CaseStudy";
import { phases, scores, seo, shots } from "@/lib/finace";

export const metadata: Metadata = {
  title: "Finace case study — tenfolds",
  description:
    "How tenfolds rebuilt finace.co, a finance-first marketing agency’s website, in 10 days: user-journey research, a new design, and a 99 performance / 100 SEO score.",
  alternates: { canonical: "/work/finace" },
  openGraph: {
    title: "Finace: an agency website rebuilt in 10 days",
    description: "User-journey led redesign of finace.co. Live in 10 days, 99 performance, 100 SEO.",
    images: [{ url: shots.hero.src, width: shots.hero.w, height: shots.hero.h }],
  },
};

function Ring({ v, k }: { v: number; k: string }) {
  const r = 42, c = 2 * Math.PI * r;
  return (
    <div className="cs-ring">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r={r} className="cs-ring-track" />
        <circle cx="50" cy="50" r={r} className="cs-ring-val" strokeDasharray={c} strokeDashoffset={c * (1 - v / 100)} />
      </svg>
      <div className="cs-ring-v">{v}</div>
      <div className="cs-ring-k">{k}</div>
    </div>
  );
}

export default function FinaceCaseStudy() {
  return (
    <>
      <Header base="/" />
      <main id="top">
        {/* Hero */}
        <section className="wrap cs-hero">
          <div className="hero-meta eyebrow">
            <a href="/#work" className="cs-back">← All work</a>
            <span>Case study 01 · BFSI marketing agency</span>
          </div>
          <h1 className="cs-title">
            A design agency can’t afford a <span className="serif">dated website.</span>
          </h1>
          <div className="cs-intro">
            <p className="hero-lead">
              Finace makes campaigns, explainers and digital journeys for 70+ financial brands. Their own website hadn’t
              changed in ten years, and prospects noticed. We rebuilt it from ideation to live in 10 days.
            </p>
            <dl className="cs-meta">
              <div><dt>Client</dt><dd>Finace</dd></div>
              <div><dt>Timeline</dt><dd>10 days</dd></div>
              <div><dt>Scope</dt><dd>Research, journey, design, build, SEO</dd></div>
              <div><dt>Live</dt><dd><a href="https://finace.co" target="_blank" rel="noopener noreferrer" className="cs-link">finace.co ↗</a></dd></div>
            </dl>
          </div>
          <Reveal className="cs-hero-media">
            <Browser shot={shots.hero} priority sizes="(max-width: 1360px) 100vw, 1280px" />
            <div className="cs-hero-phone"><Phone shot={shots.mHero} /></div>
          </Reveal>
          <div className="stats cs-stats">
            <div><div className="stat-v">10 days</div><div className="stat-k">Ideation to live</div></div>
            <div><div className="stat-v">99</div><div className="stat-k">Desktop performance</div></div>
            <div><div className="stat-v">100</div><div className="stat-k">SEO score</div></div>
            <div><div className="stat-v">10 yrs</div><div className="stat-k">Since the last redesign</div></div>
          </div>
        </section>

        {/* Problem */}
        <section className="dark">
          <div className="wrap dark-inner">
            <div className="eyebrow lime center">(01) The problem</div>
            <h2 className="h-display center" style={{ marginTop: 24 }}>
              Great work. A website that <span className="serif lime-text">said otherwise.</span>
            </h2>
            <div className="cs-problem">
              <p>
                Finace’s portfolio was current: NFO launches, investor explainers, distributor kits for India’s biggest
                AMCs. Their website was not. It hadn’t been updated in ten years.
              </p>
              <p>
                For a design agency, the website <em>is</em> the first piece of work a client sees. A dated one makes
                prospects doubt everything else before a deck is ever opened. Clients weren’t trusting the work, because
                an agency can’t have a badly designed website.
              </p>
            </div>
            <div className="problems">
              {[
                ["Earn trust in the first scroll", "Look like the work Finace actually ships today."],
                ["Explain the difference", "Finance-first communication, not a generic marketing agency."],
                ["Prove it", "Services, process, 70+ brands and real client voices."],
                ["Make starting easy", "A brief that takes taps, not a blank contact form."],
              ].map(([t, d], i) => (
                <Reveal key={t} className="problem" delay={i * 80}>
                  <span className="mono">Goal {String(i + 1).padStart(2, "0")}</span>
                  <p><strong style={{ fontWeight: 600 }}>{t}.</strong> <span style={{ color: "rgb(170,166,156)" }}>{d}</span></p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="wrap cs-section">
          <div className="eyebrow center">(02) Research &amp; user journey</div>
          <h2 className="h-section center" style={{ marginTop: 20 }}>
            Designed around <span className="serif">what the visitor is thinking.</span>
          </h2>
          <p className="cs-lead center">
            We started with basic research, then mapped the six stages a marketing head at an AMC goes through before
            briefing an agency. Every section of the new site exists to answer one of them.
          </p>
          <JourneyExplorer />
          <details className="cs-map">
            <summary>See the original journey map</summary>
            <Image src={shots.journeyMap.src} width={shots.journeyMap.w} height={shots.journeyMap.h} alt={shots.journeyMap.alt} sizes="(max-width: 900px) 100vw, 700px" />
          </details>
        </section>

        {/* Process */}
        <section className="dark">
          <div className="wrap dark-inner">
            <h2 className="h-section">Ideation to live in <span className="serif lime-text">10 days.</span></h2>
            <div className="progress"><div style={{ width: "100%" }} /></div>
            <div className="steps">
              {phases.map((p, i) => (
                <Reveal key={p.t} delay={i * 80}>
                  <div className="step cs-phase" style={{ background: i === phases.length - 1 ? "var(--lime)" : "var(--ink-2)", color: i === phases.length - 1 ? "var(--ink)" : "var(--paper)" }}>
                    <span className="step-top"><span>Phase</span><span>0{i + 1}</span></span>
                    <span><span className="step-t">{p.t}</span><span className="step-p">{p.p}</span></span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Design gallery */}
        <section className="wrap cs-section">
          <div className="eyebrow center">(03) The new finace.co</div>
          <h2 className="h-section center" style={{ marginTop: 20 }}>
            Built to look like <span className="serif">the work they ship.</span>
          </h2>
          <div className="cs-gallery">
            <Reveal className="cs-g-wide">
              <Browser shot={shots.clients} />
              <figcaption><b>The client wall.</b> 70+ BFSI brands, sorted by sector, so trust is visible before anyone reads a word.</figcaption>
            </Reveal>
            <Reveal>
              <Browser shot={shots.process} />
              <figcaption><b>How we work.</b> An animated roadmap from idea to review, with an auto walkthrough.</figcaption>
            </Reveal>
            <Reveal delay={80}>
              <Browser shot={shots.about} url="finace.co/about" />
              <figcaption><b>About.</b> “We make boring finance interesting,” with Finace’s reach across five countries.</figcaption>
            </Reveal>
          </div>
          <Reveal className="cs-phones">
            <div className="cs-phones-copy">
              <div className="eyebrow">Mobile</div>
              <h3>Every section rebuilt for the phone, not shrunk onto it.</h3>
              <p>Plenty of prospects first open the link on a phone. The conveyor, service deck and brief builder all work with a thumb.</p>
            </div>
            <div className="cs-phones-row">
              <Phone shot={shots.mHero} />
              <Phone shot={shots.mServices} />
              <Phone shot={shots.mBrief} />
            </div>
          </Reveal>
        </section>

        {/* Performance & SEO */}
        <section className="wrap cs-section" style={{ paddingTop: 0 }}>
          <div className="cs-perf">
            <div className="cs-perf-copy">
              <div className="eyebrow lime">(04) Performance &amp; SEO</div>
              <h2 className="h-section" style={{ marginTop: 20 }}>
                Fast enough to feel instant. <span className="serif">Built to be found.</span>
              </h2>
              <p>
                Rich motion and a dark, animated hero, still scoring 99 for performance on Google PageSpeed Insights.
                Then the groundwork that gets an agency found when a prospect searches for it.
              </p>
              <ul className="cs-seo">
                {seo.map((x) => <li key={x}><span className="check">✓</span>{x}</li>)}
              </ul>
            </div>
            <div className="cs-perf-scores">
              <div className="cs-rings">{scores.map((s) => <Ring key={s.k} {...s} />)}</div>
              <div className="mono cs-perf-note">Google PageSpeed Insights · finace.co · Desktop</div>
              <Image className="cs-proof" src={shots.pagespeed.src} width={shots.pagespeed.w} height={shots.pagespeed.h} alt={shots.pagespeed.alt} sizes="(max-width: 900px) 100vw, 640px" />
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="wrap split cs-section" style={{ paddingTop: 0 }}>
          <div style={{ flex: "1 1 360px" }}>
            <div className="eyebrow">(05) The outcome</div>
            <h2 className="h-section" style={{ marginTop: 20 }}>
              The website finally <span className="serif">matches the work.</span>
            </h2>
          </div>
          <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ fontSize: "clamp(17px,1.6vw,20px)", lineHeight: 1.5, color: "var(--body)", textWrap: "pretty" }}>
              Ten years of drift, closed in ten days. Finace now sends prospects to a site that explains why finance needs
              a specialist, shows the brands that already trust them, and turns interest into a brief in a few taps.
            </p>
            <div className="checks">
              {["Redesigned around a six-stage user journey", "Live 10 days after the first idea", "99 performance and 100 SEO on desktop", "Verified on Google Search Console, ready to rank"].map((c, i) => (
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
            <span>Screenshots from finace.co. Scores from Google PageSpeed Insights, which vary slightly between runs.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
