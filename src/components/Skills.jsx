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
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <SiJavascript className="text-yellow-400" />,
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-green-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> }, // 👈 dùng FaJava
    ],
  },
  {
    title: "Frontend",
    icon: <SiReact className="text-cyan-400" />,
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "HTML/CSS", icon: <SiHtml5 className="text-orange-500" /> },
    ],
  },
  {
    title: "Backend",
    icon: <SiNodedotjs className="text-green-500" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      { name: "REST API", icon: <FaDatabase className="text-purple-400" /> },
    ],
  },
  {
    title: "Database & Tools",
    icon: <SiMongodb className="text-green-400" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
      { name: "Git", icon: <SiGit className="text-orange-400" /> },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="scroll-mt-24 py-20 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
      Technical Skills
    </h2>
    <div className="mx-auto h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 mb-8" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {skillCategories.map((category, categoryIdx) => (
        <div
          key={category.title}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition transform hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_6px_30px_-8px_rgba(56,189,248,0.35)] animate-fade-in-up"
          style={{ animationDelay: `${100 + categoryIdx * 150}ms` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl drop-shadow-[0_2px_6px_rgba(56,189,248,0.25)]">
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold text-cyan-300">
              {category.title}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-400/30 transition"
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="text-sm font-medium text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-600/0" />
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
