import React, { useState } from "react";
import projects from "../data/projects";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  return (
    <section id="projects" className="scroll-mt-24 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_6px_30px_-8px_rgba(56,189,248,0.35)] will-change-transform [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-4deg)]"
          >
            {p.image && (
              <div className="mb-4 overflow-hidden rounded-lg border border-white/10 bg-black/20">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition"
                />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
            </div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg md:text-xl font-semibold group-hover:text-cyan-300">
                {p.name}
              </h3>
              <div className="flex gap-2">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      setPreview(p);
                    }}
                    className="text-xs rounded-full border border-white/20 px-3 py-1 hover:bg-white/10"
                  >
                    Demo
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs rounded-full border border-white/20 px-3 py-1 hover:bg-white/10"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-200/90">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300/90">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
            <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-r from-cyan-500/0 via-cyan-500/15 to-purple-600/0" />
          </div>
        ))}
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 px-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute right-3 top-3 rounded border border-white/20 px-2 py-1 text-sm hover:bg-white/10"
              onClick={() => setPreview(null)}
            >
              Close
            </button>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
              {preview.image ? (
                <img
                  src={preview.image}
                  alt={preview.name}
                  className="w-full max-h-[70vh] object-contain"
                />
              ) : (
                <div className="p-8 text-slate-300">No preview available</div>
              )}
            </div>
            <div className="mt-4 text-left">
              <h3 className="text-lg font-semibold">{preview.name}</h3>
              <p className="text-sm text-slate-300 mt-1">
                {preview.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
