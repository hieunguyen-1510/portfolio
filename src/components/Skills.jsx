import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiSocketdotio,
  SiMariadbfoundation,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-green-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
    ],
  },
  {
    title: "Backend Frameworks",
    skills: [
      { name: "Spring Boot", icon: <FaJava className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "Flask", icon: <SiPython className="text-gray-400" /> },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "SASS", icon: <SiCss3 className="text-pink-400" /> },
      { name: "Bootstrap", icon: <SiCss3 className="text-violet-400" /> },
      { name: "Figma", icon: <SiCss3 className="text-pink-500" /> },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "MySQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      {
        name: "MariaDB",
        icon: <SiMariadbfoundation className="text-indigo-400" />,
      },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-gray-300" /> },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="scroll-mt-24 py-20 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
      Technical Skills
    </h2>
    <p className="text-slate-400 mb-10">
      Technologies and tools I use to build creative and impactful products
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {skillCategories.map((category, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-cyan-400/40 hover:bg-white/10 transition group"
        >
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-400/30 transition"
              >
                <span className="text-2xl mb-1">{skill.icon}</span>
                <span className="text-xs text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 mx-auto max-w-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 p-6">
      <h4 className="font-semibold text-slate-200 flex items-center justify-center gap-2 mb-3">
        🚀 Tech Stack Overview
      </h4>
      <p className="text-sm text-slate-400">
        Specialized in{" "}
        <span className="text-cyan-400">Full-stack Development</span>
        with hands-on experience in building{" "}
        <span className="text-purple-400">RESTful APIs</span> and{" "}
        <span className="text-pink-400">Modern UI/UX</span>.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <span className="px-3 py-1 text-xs rounded-full border border-cyan-400/40 text-cyan-300">
          Full-stack Developer
        </span>
        <span className="px-3 py-1 text-xs rounded-full border border-purple-400/40 text-purple-300">
          UI/UX Designer
        </span>
      </div>
    </div>
  </section>
);

export default Skills;
