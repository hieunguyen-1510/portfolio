import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = encodeURIComponent(data.get("name") || "");
    const email = encodeURIComponent(data.get("email") || "");
    const message = encodeURIComponent(data.get("message") || "");
    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = `mailto:nguyenlehoaihieu2003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
        Contact
      </h2>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left: Contact info */}
          <div className="space-y-5">
            <p className="text-slate-200/90">
              I'd love to hear from you. Feel free to reach out!
            </p>

            <div className="space-y-3">
              <a
                href="mailto:nguyenlehoaihieu2003@gmail.com"
                className="flex items-center gap-3 group"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/30 group-hover:bg-cyan-500/30">
                  {/* mail icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8.236l8 5.714 8-5.714V18H4Z" />
                  </svg>
                </span>
                <span className="text-slate-300">
                  nguyenlehoaihieu2003@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                  {/* phone icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
                  </svg>
                </span>
                <span className="text-slate-300">(+84) 348-134-940</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20 text-purple-300 ring-1 ring-purple-400/30">
                  {/* location icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </span>
                <span className="text-slate-300">Ho Chi Minh, Vietnam</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 p-2 text-slate-200 hover:bg-white/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM6.814 20.452H3.861V9h2.953v11.452zM5.337 7.433c-1.144 0-2.068-.927-2.068-2.069 0-1.142.924-2.069 2.068-2.069 1.143 0 2.068.927 2.068 2.069 0 1.142-.925 2.069-2.068 2.069zM20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.602 0 4.268 2.37 4.268 5.455v6.285z" />
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 p-2 text-slate-200 hover:bg-white/10"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm text-slate-300">Your Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:outline-none px-3 py-2 text-slate-100 placeholder:text-slate-400"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm text-slate-300">Your Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:outline-none px-3 py-2 text-slate-100 placeholder:text-slate-400"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-slate-300">Message</span>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project..."
                className="rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/50 focus:outline-none px-3 py-2 text-slate-100 placeholder:text-slate-400"
              />
            </label>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white border border-white/20 hover:brightness-110 transition overflow-hidden"
              >
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                Send Message
              </button>
              <button
                type="reset"
                className="rounded-full border border-white/20 px-4 py-2 text-slate-200 hover:bg-white/10"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
