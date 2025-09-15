import React, { useEffect, useState, useCallback } from "react";
import { FaRocket } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }
      `}
    >
      <span
        className="group relative flex h-14 w-14 items-center justify-center rounded-full 
        bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 
        text-white shadow-lg shadow-indigo-500/40 overflow-hidden 
        transition-transform duration-300 hover:scale-110 hover:shadow-xl"
      >
        {/* Hiệu ứng ripple */}
        <span className="absolute inset-0 rounded-full ring-2 ring-cyan-400/20 animate-ping" />
        <span className="absolute inset-0 rounded-full ring-2 ring-purple-400/20 animate-ping [animation-delay:400ms]" />

        {/* Glow khi hover */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

        {/* Rocket Icon (đứng thẳng) */}
        <FaRocket
          className="text-2xl relative z-10 transition-transform duration-500
          -rotate-90 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-[-80deg] active:-rotate-45"
        />
      </span>
    </button>
  );
};

export default BackToTop;
