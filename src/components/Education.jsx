import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b] text-white relative overflow-hidden"
    >
      {/* Starfield background */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full p-5 mb-4 shadow-lg ring-2 ring-cyan-400/40">
            <FaGraduationCap className="text-4xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-slate-300 text-center max-w-2xl mt-3">
            Highlights of my academic and professional development in
            technology.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto border border-white/20 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-start mb-6">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-4 mr-5 shadow-md">
              <FaGraduationCap className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-1">
                Bachelor of Information Technology
              </h3>
              <a
                href="https://www.tlu.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                Thuy Loi University
              </a>
              <div className="flex items-center gap-6 mt-2 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> 2021 - 2026
                </span>
                <span className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> GPA: 2.42/4.0
                </span>
              </div>
            </div>
          </div>

          <ul className="list-disc list-inside space-y-3 text-slate-200">
            <li>
              <span className="font-semibold">Major:</span> Information
              Technology
            </li>
            <li>
              <span className="font-semibold">Coursework:</span> Data
              Structures, Algorithms, Databases, Web Development
            </li>
            <li>
              <span className="font-semibold">Skills:</span> JavaScript, React,
              Node.js, MongoDB, MySQL
            </li>
            <li>
              <span className="font-semibold">Projects:</span> E-commerce
              Website, Portfolio Website, Data Mining Project
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
