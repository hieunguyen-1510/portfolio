import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 scroll-mt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_right,_#9333ea_0%,_transparent_60%)] opacity-40" />
      <div className="absolute inset-0 -z-10 bg-[url('/images/noise.png')] opacity-10" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
      >
        Contact
      </motion.h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[inset_0_1px_6px_rgba(255,255,255,0.1)] max-w-5xl w-full mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Let’s build something awesome 🚀
            </h3>
            <p className="text-gray-300/90 leading-relaxed">
              Feel free to reach out if you want to collaborate, discuss an
              idea, or just say hi. I’m always open to new opportunities.
            </p>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0A66C2] transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:youremail@example.com"
                className="text-gray-300 hover:text-[#EA4335] transition transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:brightness-110 hover:shadow-cyan-400/30 transition overflow-hidden"
            >
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              Send Message ✉️
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
