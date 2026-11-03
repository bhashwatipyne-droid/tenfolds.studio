"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { INK, PAPER, LIME, SAND, faqs, inr, pad, services, steps } from "@/lib/content";

/* ---------- Scroll reveal ---------- */
export function Reveal({ children, className = "", delay = 0, style, id }: {
  children: React.ReactNode; className?: string; delay?: number; id?: string; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} id={id} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ---------- SIP calculator ---------- */
export function Calculator() {
  const [sip, setSip] = useState(10000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(12);

  const { fv, inv } = useMemo(() => {
    const r = rate / 1200, n = years * 12;
    return { fv: sip * ((Math.pow(1 + r, n) - 1) / r) * (1 + r), inv: sip * n };
  }, [sip, years, rate]);

  const rows = [
    { label: "Monthly SIP", value: "₹" + sip.toLocaleString("en-IN"), min: 1000, max: 100000, step: 1000, v: sip, set: setSip },
    { label: "Duration", value: years + (years === 1 ? " year" : " years"), min: 1, max: 30, step: 1, v: years, set: setYears },
    { label: "Assumed return", value: rate + "% p.a.", min: 6, max: 15, step: 0.5, v: rate, set: setRate },
  ];

  return (
    <div className="calc-panel">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="calc-row-label"><span>{r.label}</span><span>{r.value}</span></div>
          <input type="range" min={r.min} max={r.max} step={r.step} value={r.v} aria-label={r.label}
            onChange={(e) => r.set(+e.target.value)} />
        </div>
      ))}
      <div className="calc-result" aria-live="polite">
        <div style={{ fontSize: 13, color: "var(--muted)" }}>Estimated value</div>
        <div className="calc-fv">{inr(fv)}</div>
        <div className="calc-bar"><div style={{ width: Math.round((inv / fv) * 100) + "%" }} /></div>
        <div className="calc-legend">
          <span><i style={{ background: "rgb(18,52,40)" }} />Invested {inr(inv)}</span>
          <span><i style={{ background: "rgb(150,190,40)" }} />Gains {inr(fv - inv)}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Process steps ---------- */
export function Process() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div className="progress"><div style={{ width: ((step + 1) / steps.length) * 100 + "%" }} /></div>
      <div className="steps">
        {steps.map((s, i) => {
          const active = i === step;
          return (
            <button key={s.t} className="step" onClick={() => setStep(i)} onMouseEnter={() => setStep(i)} aria-pressed={active}
              style={{ background: active ? LIME : i < step ? "rgb(48,48,44)" : "rgb(28,28,25)", color: active ? INK : PAPER }}>
              <span className="step-top"><span style={{ whiteSpace: "nowrap" }}>{s.d}</span><span>{pad(i)}</span></span>
              <span><span className="step-t">{s.t}</span><span className="step-p">{s.p}</span></span>
            </button>
          );
        })}
      </div>
    </>
  );
}

/* ---------- Animated comparison bars ---------- */
export function CostBar({ width, color }: { width: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="bar" style={{ background: color, width: on ? width : "0%" }} />;
}

/* ---------- Services explorer ---------- */
export function Services() {
  const [svc, setSvc] = useState(0);
  const pv = (i: number) => `pv ${svc === i ? "on" : "off"}`;
  return (
    <div className="services-grid">
      <div className="svc-list">
        {services.map((s, i) => {
          const open = svc === i;
          return (
            <button key={s.t} className="svc" aria-expanded={open}
              onClick={() => setSvc(i)} onMouseEnter={() => setSvc(i)} onFocus={() => setSvc(i)}
              style={{ background: open ? INK : "transparent", color: open ? PAPER : INK }}>
              <span className="mono">{pad(i)}</span>
              <span className="svc-t">{s.t}</span>
              {open && (
                <>
                  <span className="svc-d">{s.d}</span>
                  <span className="svc-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</span>
                </>
              )}
            </button>
          );
        })}
      </div>
      <div className="svc-preview" aria-hidden="true">
        <div className={pv(3)}>
          <div className="pv-search">
            <div className="pv-search-q">mutual fund distributor andheri</div>
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 6 }}>mehtawealth.in</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "rgb(26,60,160)" }}>Mehta Wealth · Mutual fund distributor in Andheri</div>
          </div>
        </div>
        <div className="pv-site">
          <div className={pv(5)} style={{ borderRadius: 0 }}>
            <div className="pv-owner"><span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>Owner view · Edit page</span><b>Publish</b></div>
          </div>
          <div className="pv-body">
            <div className={pv(0)}>
              <div className="b-hero" style={{ padding: 16 }}>
                <small><b>Mehta Wealth</b><span>About · Funds · Contact</span></small>
                <div>Disciplined investing, explained simply.</div>
              </div>
            </div>
            <div className="pv-grid">
              <div className={pv(1)}>
                <div className="pv-box">
                  <span>SIP calculator</span>
                  <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.04em", color: INK }}>₹50.4 L</span>
                  <div className="b-bar" style={{ marginTop: 4 }}><i /></div>
                </div>
              </div>
              <div className={pv(2)}>
                <div className="pv-box">
                  <span>Book a review</span>
                  <div className="pv-input">Mobile number</div>
                  <div className="b-wa" style={{ marginTop: 0, height: 28 }}>Send on WhatsApp</div>
                </div>
              </div>
            </div>
            <div className={pv(4)}>
              <div className="pv-disc">ARN-000000 · AMFI registered mutual fund distributor. Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.</div>
            </div>
          </div>
        </div>
        <div className="pv-hint">Hover or tap a feature to see where it lives</div>
      </div>
    </div>
  );
}

/* ---------- FAQ accordion ---------- */
export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={f.q}>
            <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
              <span>{f.q}</span>
              <span className="faq-sign" style={{ background: isOpen ? LIME : SAND }}>{isOpen ? "−" : "+"}</span>
            </button>
            <div id={`faq-${i}`} className={`faq-a ${isOpen ? "open" : ""}`} role="region">
              <div><p>{f.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Audit form ---------- */
export function AuditForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [url, setUrl] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return <div className="audit-done">✓ Received. We’ll send your audit within 24 hours.</div>;
  }
  return (
    <form className="audit-form" onSubmit={submit}>
      <input type="url" required placeholder="Your website or ARN profile link" aria-label="Your website link"
        value={url} onChange={(e) => setUrl(e.target.value)} />
      <button type="submit" className="btn btn-lime" disabled={state === "sending"} style={{ justifyContent: "center" }}>
        {state === "sending" ? "Sending…" : "Get my free audit →"}
      </button>
      {state === "error" && <div className="audit-err">Something went wrong. Please try again in a moment.</div>}
    </form>
  );
}
