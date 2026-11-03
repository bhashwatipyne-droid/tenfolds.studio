"use client";

import { useEffect, useState } from "react";
import { nav, pad } from "@/lib/content";

export function LogoMark() {
  return (
    <span className="mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Header({ base = "" }: { base?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 980 && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href={base ? "/" : "#top"} className="logo" onClick={() => setOpen(false)}>
          <LogoMark />
          <span>tenfolds</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={base + n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a href={base + "#contact"} className="btn btn-dark cta-sm" onClick={() => setOpen(false)}>
            Start a project<span className="btn-dot">→</span>
          </a>
          <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="drawer" aria-label="Mobile">
          {nav.map((n, i) => (
            <a key={n.href} href={base + n.href} onClick={() => setOpen(false)}>
              <span>{n.label}</span>
              <span>{pad(i)}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
