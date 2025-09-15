const Starfield = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Static stars */}
      {Array.from({ length: 140 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white/90 rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Moving stars (parallax drift) */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={`moving-star-${i}`}
          className="absolute w-0.5 h-0.5 bg-cyan-200/80 rounded-full animate-star-drift"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        />
      ))}

      {/* Shooting stars (rare) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
          style={{
            animationDelay: `${i * 3 + Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
