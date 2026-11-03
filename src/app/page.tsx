import Header from "@/components/Header";
import { AuditForm, Calculator, CostBar, Faq, Process, Reveal, Services } from "@/components/Interactive";
import { INK, checks, pad, problems, quality } from "@/lib/content";
import Image from "next/image";
import { shots } from "@/lib/finace";
import { live } from "@/lib/advisoralpha";
import { pmtMedia } from "@/lib/pmt";

const heroVideo = process.env.NEXT_PUBLIC_HERO_VIDEO;
const heroImage = process.env.NEXT_PUBLIC_HERO_IMAGE;

function HeroMedia() {
  if (heroVideo) return <video src={heroVideo} autoPlay muted loop playsInline />;
  // eslint-disable-next-line @next/next/no-img-element
  if (heroImage) return <img src={heroImage} alt="" />;
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-grid" />
      <div className="browser">
        <div className="browser-bar"><i /><i /><i /><span>mehtawealth.in</span></div>
        <div className="browser-body">
          <div className="b-hero">
            <small><b>Mehta Wealth</b><span>About · Funds · Contact</span></small>
            <div>Disciplined investing, explained simply.</div>
          </div>
          <div className="b-row">
            <div className="b-card">SIP calculator<strong>₹50.4 L</strong><div className="b-bar"><i /></div></div>
            <div className="b-card">Book a review<div className="b-wa">Send on WhatsApp</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero */}
        <section className="wrap hero">
          <div className="hero-meta eyebrow">
            <span><span className="live-dot" />Taking new projects</span>
            <span>MFD website studio · India</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Your business deserves a website <span className="serif">as good as</span> the work you do.</h1>
              <div>
                <p className="hero-lead">Your customers check you online first. We design compliant, custom websites for distributors, live in 7 days.</p>
                <div className="hero-ctas">
                  <a href="#contact" className="btn btn-lime cta-lg">Get a free website audit<span className="btn-dot">→</span></a>
                  <a href="#work" className="btn btn-ghost cta-ghost">See our work</a>
                </div>
                <div className="stats">
                  <div><div className="stat-v">7 days</div><div className="stat-k">Brief to live site</div></div>
                  <div><div className="stat-v">₹35k</div><div className="stat-k">Fixed, all-in</div></div>
                  <div><div className="stat-v">SEBI</div><div className="stat-k">Ready audit report</div></div>
                </div>
              </div>
            </div>
            <div className="hero-media">
              <HeroMedia />
              <div className="hero-badges">
                <div className="badge-card">
                  <span className="badge-check">✓</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Audit passed</div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>ARN, AMFI and risk disclosures</div>
                  </div>
                </div>
                <span className="badge-pill">Live in 7 days</span>
              </div>
            </div>
          </div>
        </section>

        {/* Work + calculator */}
        <section id="work" className="wrap work">
          <div className="section-head">
            <h2>Selected work</h2>
            <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>(03)</span>
          </div>
          <div className="work-grid">
            <Reveal className="is-case">
              <a href="/work/finace" className="work-item">
                <div className="work-tile" style={{ background: "rgb(14,14,12)" }}>
                  <div className="work-top" style={{ color: "rgb(160,156,146)" }}>
                    <span>finace.co</span><span style={{ whiteSpace: "nowrap", flex: "none", color: "var(--lime)" }}>Case study</span>
                  </div>
                  <div className="work-case-shot">
                    <Image src={shots.hero.src} width={shots.hero.w} height={shots.hero.h} alt={shots.hero.alt} sizes="(max-width: 1100px) 100vw, 640px" />
                  </div>
                  <div className="work-pills work-case-pills">
                    <span style={{ background: "var(--lime)", color: "var(--ink)", fontWeight: 600 }}>Live in 10 days</span>
                    <span style={{ boxShadow: "inset 0 0 0 1px rgba(243,240,233,0.18)", color: "var(--paper)" }}>99 performance · 100 SEO</span>
                  </div>
                </div>
                <div className="work-meta">
                  <div><div className="work-meta-name">Finace</div><div className="work-meta-desc">Agency site rebuild · BFSI marketing</div></div>
                  <span className="arrow-circle">↗</span>
                </div>
              </a>
            </Reveal>
            <Reveal className="is-case" delay={90}>
              <a href="/work/advisor-alpha" className="work-item">
                <div className="work-tile" style={{ background: "rgb(33,52,150)" }}>
                  <div className="work-top" style={{ color: "rgb(190,200,240)" }}>
                    <span>myadvisoralpha.com</span><span style={{ whiteSpace: "nowrap", flex: "none", color: "var(--lime)" }}>Case study</span>
                  </div>
                  <div className="work-case-shot">
                    <Image src={live.heroFold.src} width={live.heroFold.w} height={live.heroFold.h} alt={live.heroFold.alt} sizes="(max-width: 1100px) 100vw, 640px" />
                  </div>
                  <div className="work-pills work-case-pills">
                    <span style={{ background: "var(--lime)", color: "var(--ink)", fontWeight: 600 }}>Built in 15 days</span>
                    <span style={{ boxShadow: "inset 0 0 0 1px rgba(243,240,233,0.3)", color: "var(--paper)" }}>Design system · WordPress</span>
                  </div>
                </div>
                <div className="work-meta">
                  <div><div className="work-meta-name">Advisor Alpha</div><div className="work-meta-desc">Equity research platform · B2C fintech</div></div>
                  <span className="arrow-circle">↗</span>
                </div>
              </a>
            </Reveal>
            <Reveal className="is-case" delay={180}>
              <a href="/work/pmt" className="work-item">
                <div className="work-tile" style={{ background: "var(--lime)" }}>
                  <div className="work-top" style={{ color: "rgb(60,70,30)" }}>
                    <span>pmt · work management</span><span style={{ whiteSpace: "nowrap", flex: "none", color: "var(--ink)" }}>Case study</span>
                  </div>
                  <div className="work-case-shot">
                    <Image src={pmtMedia.poster.src} width={pmtMedia.poster.w} height={pmtMedia.poster.h} alt={pmtMedia.poster.alt} sizes="(max-width: 1100px) 100vw, 820px" />
                  </div>
                  <div className="work-pills work-case-pills">
                    <span style={{ background: "var(--ink)", color: "var(--lime)", fontWeight: 600 }}>0 → 20 weekly users</span>
                    <span style={{ boxShadow: "inset 0 0 0 1px rgba(14,14,12,0.25)", color: "var(--ink)" }}>▶ 76s product film</span>
                  </div>
                </div>
                <div className="work-meta">
                  <div><div className="work-meta-name">PMT</div><div className="work-meta-desc">Work management platform · Agency ops</div></div>
                  <span className="arrow-circle">↗</span>
                </div>
              </a>
            </Reveal>
          </div>

          <Reveal className="calc" id="calculator">
            <div className="calc-copy">
              <div>
                <div className="eyebrow lime">Live demo · Included in every site</div>
                <h2 className="h-section" style={{ fontSize: "clamp(32px,4.4vw,60px)" }}>
                  The calculator your clients <span className="serif">will actually use.</span>
                </h2>
                <p>Every site ships with branded SIP and lumpsum calculators. Drag the sliders.</p>
              </div>
              <p className="disclaimer">Illustration only. Assumed returns are not guaranteed. Mutual fund investments are subject to market risks.</p>
            </div>
            <Calculator />
          </Reveal>
        </section>

        {/* Problem + process */}
        <section className="dark">
          <div className="wrap dark-inner">
            <div className="eyebrow lime center">(01) The gap</div>
            <h2 className="h-display center" style={{ marginTop: 24 }}>
              Your AUM has grown. Your website <span className="serif lime-text">hasn’t.</span>
            </h2>
            <div className="problems">
              {problems.map((t, i) => (
                <Reveal key={t} className="problem" delay={i * 80}>
                  <span className="mono">{pad(i)}</span>
                  <p>{t}</p>
                </Reveal>
              ))}
            </div>
            <div id="process" className="process">
              <h2 className="h-section">Idea to live site in <span className="serif lime-text">7 days.</span></h2>
              <Process />
            </div>
          </div>
        </section>

        {/* Compare */}
        <section className="wrap compare">
          <div className="eyebrow center">(02) The difference</div>
          <h2 className="h-section center">Same quality. A fraction of the <span className="serif">time and cost.</span></h2>
          <div className="compare-grid">
            <Reveal className="compare-card dark">
              <div className="compare-card-head">
                <span className="eyebrow" style={{ color: "rgb(160,156,146)" }}>Cost</span>
                <span className="compare-big lime-text">72% <span className="serif">less</span></span>
              </div>
              <div className="bars">
                <div>
                  <div className="bar-label"><span style={{ color: "rgb(190,186,176)" }}>Traditional agency</span><span>₹1,25,000+</span></div>
                  <CostBar width="100%" color="rgb(48,48,44)" />
                </div>
                <div>
                  <div className="bar-label"><span style={{ color: "rgb(190,186,176)" }}>tenfolds</span><span className="lime-text" style={{ fontWeight: 600 }}>₹35,000</span></div>
                  <CostBar width="28%" color="rgb(205,242,90)" />
                </div>
              </div>
            </Reveal>
            <Reveal className="compare-card" delay={100} style={{ background: "var(--sand)" }}>
              <div className="compare-card-head">
                <span className="eyebrow">Timeline</span>
                <span className="compare-big">3× <span className="serif">faster</span></span>
              </div>
              <div className="bars">
                <div>
                  <div className="bar-label"><span style={{ color: "var(--muted)" }}>Traditional agency</span><span>21 days</span></div>
                  <div className="days">{Array.from({ length: 21 }, (_, i) => <span key={i} style={{ background: "rgb(190,185,172)" }} />)}</div>
                </div>
                <div>
                  <div className="bar-label"><span style={{ color: "var(--muted)" }}>tenfolds</span><span style={{ fontWeight: 600 }}>7 days</span></div>
                  <div className="days">{Array.from({ length: 21 }, (_, i) => <span key={i} style={{ background: i < 7 ? INK : "rgba(14,14,12,0.06)" }} />)}</div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="qtable">
            <div className="qrow head"><span /><span>Agency</span><span>tenfolds</span></div>
            {quality.map((r) => (
              <div className="qrow" key={r.k}>
                <span>{r.k}</span>
                <span style={{ color: "var(--muted)" }}><span className="qx">✕</span>{r.a}</span>
                <span style={{ fontWeight: 500 }}><span className="qv">✓</span>{r.b}</span>
              </div>
            ))}
          </Reveal>
        </section>

        {/* Services */}
        <section id="services" className="wrap services">
          <div className="eyebrow center">(03) What’s included</div>
          <h2 className="h-section center">Everything you need. <span className="serif">Nothing you don’t.</span></h2>
          <Services />
        </section>

        {/* Compliance */}
        <section id="compliance" className="wrap split compliance">
          <div style={{ flex: "1 1 360px" }}>
            <div className="eyebrow">(04) Compliance</div>
            <h2 className="h-section" style={{ marginTop: 20 }}>
              Other agencies build websites. We build websites that <span className="serif">survive scrutiny.</span>
            </h2>
          </div>
          <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ fontSize: "clamp(17px,1.6vw,20px)", lineHeight: 1.5, color: "var(--body)", textWrap: "pretty" }}>
              Most developers don’t know what an ARN disclosure is, what AMFI expects from your advertising, or why
              “guaranteed returns” on a landing page is a problem. We do.
            </p>
            <div className="checks">
              {checks.map((c, i) => (
                <Reveal key={c} delay={i * 70}><span className="check">✓</span>{c}</Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="wrap split pricing">
          <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
            <div>
              <div className="eyebrow">(05) Pricing</div>
              <h2 className="h-section" style={{ marginTop: 20 }}>
                Every business in India deserves a <span className="serif">digital presence.</span>
              </h2>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--body)", maxWidth: "50ch", textWrap: "pretty" }}>
              Great design and technology have been priced for enterprises. We’re changing that, starting with the people
              who manage India’s savings: distributors with ₹40–65 Cr AUM and a brand that deserves to be taken seriously.
            </p>
          </div>
          <Reveal className="price-card">
            <div className="price-top"><span>One price. No surprises.</span><span>FIXED</span></div>
            <div className="price">₹35,000</div>
            <div className="price-list">
              <div><span>Custom website</span><span>✓</span></div>
              <div><span>Compliance audit report</span><span>✓</span></div>
              <div><span>7-day delivery</span><span>✓</span></div>
            </div>
            <a href="#contact" className="btn btn-dark cta-xl">Book a free consultation<span className="btn-dot">→</span></a>
            <p style={{ fontSize: 13, color: "rgb(60,70,30)" }}>Hosting, domain and maintenance: [state what’s extra here].</p>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="wrap split faq">
          <div style={{ flex: "1 1 300px" }}>
            <div className="eyebrow">(06) FAQ</div>
            <h2 className="h-section" style={{ marginTop: 20, maxWidth: "10ch" }}>
              Questions distributors <span className="serif">ask.</span>
            </h2>
          </div>
          <Faq />
        </section>
      </main>

      <footer id="contact" className="dark footer">
        <div className="wrap footer-inner">
          <div className="eyebrow lime">Free website audit</div>
          <h2>Your clients are already <span className="serif lime-text">searching for you.</span></h2>
          <div className="footer-row">
            <p>Give them something worth finding. Send your current site and we’ll audit it, free.</p>
            <AuditForm />
          </div>
          <div className="wordmark" aria-hidden="true">
            <span className="wordmark-mark"><span /><span /><span /></span>
            <span className="wordmark-text">tenfolds</span>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} tenfolds</span>
            <span>
              tenfolds is a web design agency and is not affiliated with SEBI or AMFI. Mutual fund investments are subject
              to market risks. Read all scheme-related documents carefully.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
