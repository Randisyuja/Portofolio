import React from 'react';
import { Briefcase, GraduationCap, Code2, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import unkrisLogo from "../assets/unkris.png";
import earth from "../assets/earth.png";
import kkp from "../assets/kkp.png";
import softuni from "../assets/softuni.png";
import sgsLogo from "../assets/sgs.png";

export default function About() {
  const workExperience = [
    {
      company: "PT Setia Guna Selaras",
      logo: sgsLogo,
      position: "Full-Stack Engineer",
      period: "July 2026 – Present",
      type: "Full-time",
      highlights: [
        "Architecting and optimizing enterprise backend services using Python and Django to automate core operational workflows.",
        "Designing relational database schemas in PostgreSQL, improving data normalization and query performance for mission-critical modules.",
        "Collaborating on RESTful API design and third-party software integrations to ensure high system uptime and data security."
      ]
    },
    {
      company: "PT Nuindo Duta Khatulistiwa",
      position: "Web Developer",
      period: "Nov 2025 – July 2026",
      type: "Contract",
      badgeText: "NDK",
      badgeColor: "from-blue-600 to-indigo-600",
      highlights: [
        "Engineered full-stack web applications, implementing responsive user interfaces and backend business logic.",
        "Developed secure authentication mechanisms and role-based access control (RBAC) across modular service endpoints.",
        "Refactored legacy codebases to improve maintainability, unit test coverage, and API response times."
      ]
    },
    {
      company: "Software University (SoftUni) Indonesia",
      logo: softuni,
      logoScale: "scale-[1.28]",
      position: "Software Developer (Certified Independent Study - MSIB)",
      period: "Sep 2024 – Jan 2025",
      type: "Apprenticeship",
      highlights: [
        "Completed rigorous software engineering training focused on Python, Django, database modeling, and scalable architecture.",
        "Led team capstone project development, enforcing Git best practices, modular code structure, and test-driven development.",
        "Designed and presented full-stack solutions evaluated by senior industry mentors."
      ]
    },
    {
      company: "Kementerian Kelautan dan Perikanan (KKP)",
      logo: kkp,
      logoScale: "scale-[1.28]",
      position: "Web Developer Intern",
      period: "Aug 2024 – Oct 2024",
      type: "Internship",
      highlights: [
        "Developed and deployed the Pelikan e-Monev (Electronic Monitoring & Evaluation) platform used across work units nationwide.",
        "Implemented robust CRUD modules and reporting dashboards using PHP, Laravel, Bootstrap, and MySQL.",
        "Streamlined public information disclosure reporting, reducing manual review latency and centralizing data aggregation."
      ]
    },
  ];

  const skillCategories = [
    {
      category: "Backend & Systems",
      skills: ["Python", "Django 5.x", "Celery & Redis", "Flask", "PHP / Laravel", "RESTful APIs", "System Architecture"]
    },
    {
      category: "Frontend & Data Visualization",
      skills: ["JavaScript", "React.js", "Tailwind CSS", "Chart.js", "Bootstrap", "HTML5 / CSS3"]
    },
    {
      category: "Databases, DevOps & Virtualization",
      skills: ["PostgreSQL", "PgBouncer", "Proxmox VE", "Docker", "Nginx", "MySQL", "AWS / Huawei Cloud", "Git / GitHub"]
    }
  ];

  const educationList = [
    {
      institution: "Universitas Krisnadwipayana",
      degree: "Bachelor of Computer Science (Informatics Engineering)",
      period: "2021 – 2025",
      logo: unkrisLogo,
      logoScale: "scale-[1.25]",
      description: "Specialized in Software Engineering, Relational Database Systems, Cryptography, and Web Architectures. Built solid foundation in computer science theory and practical software development."
    },
    {
      institution: "Continuous Learning & Self-Directed Growth",
      degree: "Cloud Architecture, Distributed Systems & Security",
      period: "2024 – Present",
      logo: earth,
      logoScale: "scale-[1.32]",
      description: "Actively expanding expertise in containerization (Docker), cloud-native patterns, automated CI/CD pipelines, and high-performance system optimization."
    }
  ];

  return (
    <>
      {/* About Summary */}
      <section id="about" className="space-y-4">
        <div className="flex items-center gap-2 text-red-500 font-semibold text-xs tracking-wider uppercase">
          <span>01</span>
          <span className="w-8 h-px bg-red-500/40"></span>
          <span>Background</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Me</h2>

        <div className="text-slate-600 dark:text-slate-400 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            I am a Software Engineer with a strong focus on Backend and Full-Stack development. My background revolves around engineering secure, data-intensive systems—from encrypted desktop security utilities to national-scale web platforms managing multi-department governance workflows.
          </p>
          <p>
            I take pride in translating complex business requirements into maintainable, well-structured software architectures. Whether crafting robust RESTful APIs in Django, modeling normalized PostgreSQL schemas, or composing reactive user interfaces with React, I prioritize code clarity, security, and long-term scalability.
          </p>
        </div>
      </section>

      {/* Professional Journey (Work Experience) */}
      <section id="work" className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-red-500 font-semibold text-xs tracking-wider uppercase mb-1">
              <span>02</span>
              <span className="w-8 h-px bg-red-500/40"></span>
              <span>Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Professional Journey</h2>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800">
            <Briefcase className="w-3.5 h-3.5 text-red-500" />
            4 Positions
          </span>
        </div>

        <div className="space-y-4">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3.5">
                  {/* Distinct company avatar / logo */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-200/80 dark:border-slate-700/60 shadow-sm ${job.logo ? 'bg-white p-2' : ''}`}>
                    {job.logo ? (
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className={`w-full h-full object-contain ${job.logoScale || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${job.badgeColor} flex items-center justify-center text-white font-bold text-xs tracking-wider`}>
                        {job.badgeText}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-rose-400 transition-colors">
                      {job.company}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                      {job.position}
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs text-slate-500 dark:text-slate-400 sm:pt-0.5">
                  <span className="font-medium">{job.period}</span>
                  <span className="inline-block px-2 py-0.5 mt-1 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Bullet Points with High Impact */}
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-1">
                {job.highlights.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs tracking-wider uppercase mb-1">
            <span>03</span>
            <span className="w-8 h-px bg-red-500/40"></span>
            <span>Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-5 shadow-sm"
            >
              <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:border-red-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs tracking-wider uppercase mb-1">
            <span>04</span>
            <span className="w-8 h-px bg-red-500/40"></span>
            <span>Academics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Education & Lifelong Learning</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className={`w-full h-full object-contain ${edu.logoScale || ''}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                      {edu.institution}
                    </h3>
                    <div className="text-xs text-red-500 font-medium">
                      {edu.period}
                    </div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {edu.degree}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}