import React, { useState, useCallback, useEffect, useRef } from "react";

const links = [
  { href: "#intro", label: "Introduction" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#intro");
  const linkRefs = useRef({});
  const indicatorRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
      setOpen(false);
      window.history.pushState(null, "", href);
    }
  }, []);

  // Auto update active khi scroll
  useEffect(() => {
    const elements = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let topEntry = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (
            !topEntry ||
            entry.intersectionRatio > topEntry.intersectionRatio
          ) {
            topEntry = entry;
          }
        }
        if (topEntry?.target?.id) {
          setActive(`#${topEntry.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.2, 0.4, 0.6, 0.8, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sync active khi đổi hash
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash || "#intro";
      setActive(hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll tới section ban đầu
  useEffect(() => {
    const initialHash = window.location.hash || "#intro";
    const el = document.querySelector(initialHash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(initialHash);
    }
  }, []);

  // Animate indicator
  useEffect(() => {
    const el = linkRefs.current[active];
    const container = el?.offsetParent;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();
    setIndicator({
      left: elRect.left - parentRect.left,
      width: elRect.width,
    });
  }, [active]);

  // Update indicator khi resize
  useEffect(() => {
    const onResize = () => {
      const el = linkRefs.current[active];
      const container = el?.offsetParent;
      if (!el || !container) return;
      const elRect = el.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      setIndicator({
        left: elRect.left - parentRect.left,
        width: elRect.width,
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <a
          href="#intro"
          onClick={(e) => handleNavClick(e, "#intro")}
          className="font-extrabold text-lg bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-1 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
        >
          🚀 PORTFOLIO
        </a>

        {/* Links */}
        <nav className="relative hidden md:flex items-center gap-1 text-sm">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              ref={(node) => {
                if (node) linkRefs.current[href] = node;
              }}
              onClick={(e) => handleNavClick(e, href)}
              className={`font-bold relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                active === href
                  ? "bg-white/10 text-cyan-300 shadow-lg shadow-cyan-500/20"
                  : "text-gray-300 hover:text-cyan-300 hover:bg-white/5"
              }`}
            >
              {label}
            </a>
          ))}
          {/* Gradient underline indicator */}
          <span
            ref={indicatorRef}
            className="pointer-events-none absolute bottom-0 h-[3px] rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 shadow-lg shadow-cyan-400/50 blur-sm transition-all duration-500"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="rounded md:hidden border border-white/20 px-3 py-1 text-lg hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-md">
          <ul className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`block rounded px-3 py-2 transition-all duration-300 hover:scale-105 ${
                    active === href
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                      : "text-gray-300 hover:text-cyan-300 hover:bg-white/10"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
