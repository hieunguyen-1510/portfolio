import React from "react";

const Footer = () => (
  <footer className="border-t border-white/10 py-10 mt-16">
    <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-3 text-sm text-slate-400">
      <div className="font-bold text-slate-300/90">
        © {new Date().getFullYear()} NGUYEN LE HOAI HIEU
      </div>
      {/* <div className="flex items-center gap-3">
        <a
          href="#intro"
          className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10"
        >
          Top
        </a>
        <a
          href="#projects"
          className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10"
        >
          Contact
        </a>
      </div> */}
      <div className="text-xs text-slate-500">
        Made with 🚀 and 🌌 in the universe of code.
      </div>
    </div>
  </footer>
);

export default Footer;
