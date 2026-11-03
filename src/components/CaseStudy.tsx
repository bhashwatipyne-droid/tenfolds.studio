"use client";

import Image from "next/image";
import { useState } from "react";
import { stages, type Shot } from "@/lib/finace";

export function Browser({ shot, url = "finace.co", priority = false, sizes = "(max-width: 900px) 100vw, 1280px" }: {
  shot: Shot; url?: string; priority?: boolean; sizes?: string;
}) {
  return (
    <figure className="cs-browser">
      <div className="cs-browser-bar" aria-hidden="true"><i /><i /><i /><span>{url}</span></div>
      <Image src={shot.src} width={shot.w} height={shot.h} alt={shot.alt} sizes={sizes} priority={priority} />
    </figure>
  );
}

export function Phone({ shot }: { shot: Shot }) {
  return (
    <figure className="cs-phone">
      <Image src={shot.src} width={shot.w} height={shot.h} alt={shot.alt} sizes="(max-width: 700px) 45vw, 300px" />
    </figure>
  );
}

export function JourneyExplorer() {
  const [i, setI] = useState(0);
  const s = stages[i];
  return (
    <div className="cs-journey">
      <div className="cs-stages" role="tablist" aria-label="User journey stages">
        {stages.map((st, idx) => {
          const on = idx === i;
          return (
            <button key={st.name} role="tab" aria-selected={on} aria-controls="cs-stage-panel" className={`cs-stage ${on ? "on" : ""}`}
              onClick={() => setI(idx)} onMouseEnter={() => setI(idx)}
              style={on ? { background: st.tint, color: "var(--paper)" } : undefined}>
              <span className="cs-stage-dot" style={{ background: st.color }} />
              <span className="cs-stage-name">{st.name}</span>
              <span className="cs-stage-goal" style={on ? { color: st.color } : undefined}>{st.goal}</span>
              <span className="mono cs-stage-n">{st.n}</span>
            </button>
          );
        })}
      </div>
      <div id="cs-stage-panel" role="tabpanel" className="cs-stage-panel" key={s.name}>
        <blockquote className="cs-quote" style={{ borderColor: s.color }}>
          “{s.quote}”
          <span>What the visitor should be thinking at this stage</span>
        </blockquote>
        <div className="cs-stage-sections">
          <div className="eyebrow">Sections that answer it</div>
          <ul>{s.sections.map((x) => <li key={x}><span style={{ background: s.color }} />{x}</li>)}</ul>
        </div>
        <div className="cs-stage-shot">
          <Browser shot={s.shot} sizes="(max-width: 900px) 100vw, 760px" />
          <p>{s.caption}</p>
        </div>
      </div>
    </div>
  );
}
