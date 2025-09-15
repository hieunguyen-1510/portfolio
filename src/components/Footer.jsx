import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 py-10 mt-20">
    <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4 text-sm text-slate-400">
      {/* Name */}
      <div className="font-bold text-slate-200/90 tracking-wide">
        © {new Date().getFullYear()} NGUYEN LE HOAI HIEU
      </div>

      {/* Social links */}
      <div className="flex gap-5 text-lg">
        <a
          href="https://github.com/hieunguyen-1510"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hoaihieu1510/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:nguyenlehoaihieu2003@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Tagline */}
      <div className="text-xs text-slate-500 animate-pulse">
        Made with 🚀 and 🌌 in the universe of code.
      </div>
    </div>
  </footer>
);

export default Footer;
