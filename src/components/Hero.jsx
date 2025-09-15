import { useEffect, useRef, useState } from "react";

const Hero = () => {
  // Typing effect
  const titles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex % titles.length];
    const speed = deleting ? 45 : 85;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, typed.length + 1);
        setTyped(next);
        if (next === current) setTimeout(() => setDeleting(true), 900);
      } else {
        const next = current.slice(0, typed.length - 1);
        setTyped(next);
        if (next.length === 0) {
          setDeleting(false);
          setTitleIndex((i) => (i + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typed, deleting, titleIndex]);

  // Section ref (reserved for future parallax/light effects)
  const sectionRef = useRef(null);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden"
    >
      {/* Subtle vignette to frame the hero */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {/* Avatar */}
      <div className="rounded-full ring-2 ring-cyan-400/30 p-1 mb-6 animate-float shadow-[0_0_0_2px_rgba(34,211,238,0.15),0_0_24px_rgba(34,211,238,0.25)]">
        <img
          src="/profile.jpg"
          alt="Avatar"
          className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover"
        />
      </div>

      {/* Name & Title */}
      <div className="text-center animate-fade-in-up [animation-delay:120ms]">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-3 drop-shadow-[0_2px_8px_rgba(56,189,248,0.15)]">
          NGUYEN LE HOAI HIEU
        </h1>
        <div className="mx-auto h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 mb-3" />
        <div className="text-base md:text-lg text-gray-300 animate-fade-in-up [animation-delay:240ms]">
          <span className="inline-flex items-center gap-2">
            🚀
            <span className="font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {typed}
            </span>
            <span className="inline-block w-1 h-4 bg-cyan-400 animate-[fade-in_0.9s_ease-in-out_infinite]" />
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="max-w-2xl mt-4 text-sm md:text-base text-gray-300/90 leading-relaxed px-4 animate-fade-in-up [animation-delay:360ms]">
        🌟 Hello there! I'm a passionate developer with over 1 year of
        experience in modern web application development. To me, programming is
        more than just a job — it's a journey of exploration where every line of
        code is a step forward in the vast universe of technology.
      </p>

      {/* Buttons */}
      <div className="mt-7 flex space-x-4 animate-fade-in-up [animation-delay:480ms]">
        <a
          href="#projects"
          className="relative px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:brightness-110 hover:shadow-cyan-400/30 transition overflow-hidden"
        >
          <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          🌌 View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition"
        >
          📩 Contact
        </a>
      </div>
    </section>
  );
};

export default Hero;
