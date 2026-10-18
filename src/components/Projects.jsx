import React from 'react';
import { ExternalLink, Github, Sparkles, Shield, Monitor, Globe } from 'lucide-react';
import siap from "../assets/porto.mp4";
import pelikan from "../assets/Pelikan.jpg";
import car from "../assets/cardealerr.png";
import pwmanager from "../assets/pwmanager.png";

export default function Projects() {
  const projects = [
    {
      title: "BRIDGE (Enterprise Industrial ERP Platform)",
      badge: "Enterprise Industrial ERP",
      type: "image", // Bisa diganti "video" jika menggunakan file video .mp4/.webm
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", // DUMMY MEDIA: Ganti dengan path screenshot/gif Anda (misal: "/bridge.gif" atau import dari assets)
      period: "2026 – Present",
      description: "Architected a full-scale industrial ERP system with modular clean architecture in Django 5.x. Orchestrated on-premise high-availability deployment using Proxmox VE, Docker Compose, and Nginx. Engineered modules for Purchasing, Quality Inspection (SPC), Celery/Redis async task queues, PgBouncer connection pooling, automated WhatsApp approvals, and an integrated Text-to-SQL AI analyst.",
      tags: ["Python", "Django 5.x", "PostgreSQL", "Proxmox VE", "Docker", "Celery & Redis", "PgBouncer", "Nginx", "Tailwind CSS", "AI Text-to-SQL"],
      githubUrl: null, // Ganti dengan URL GitHub jika ada
      liveUrl: null,
      note: "Internal Production System"
    },
    {
      title: "SIAP (Community Fund & Payment System)",
      badge: "Web Platform",
      type: "video",
      image: siap,
      period: "2025",
      description: "Engineered a web-based payment and installment management system for local community residents. Designed structured PostgreSQL databases to automate fee tracking, ensuring real-time financial transparency and accountability.",
      tags: ["Python", "Django", "Bootstrap", "PostgreSQL"],
      githubUrl: "https://github.com/Randisyuja",
      liveUrl: null,
    },
    {
      title: "Secure Password Vault",
      badge: "Desktop Security",
      type: "image",
      image: pwmanager,
      period: "2025",
      description: "Developed a secure offline desktop password manager using Python and Tkinter. Integrated PBKDF2 for cryptographic key derivation and Fernet (AES-128) encryption to ensure zero-knowledge local credential storage.",
      tags: ["Python", "Cryptography (AES-128)", "Tkinter", "JSON"],
      githubUrl: "https://github.com/Randisyuja",
      liveUrl: null,
    },
    {
      title: "Pelikan (National e-Monev Platform)",
      badge: "Government Enterprise",
      type: "image",
      image: pelikan,
      period: "2024",
      description: "Built an e-Monev platform for the Ministry of Marine Affairs and Fisheries (KKP) during an internship. Collaborated to deliver real-time monitoring and scoring of public information compliance across work units nationwide.",
      tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
      githubUrl: null,
      liveUrl: null,
      note: "Internal Ministry Network"
    },
    {
      title: "Car Dealership & Inventory Management",
      badge: "Full-Stack Capstone",
      type: "image",
      image: car,
      period: "2024",
      description: "Architected a full-stack dealership management platform for the MSIB certified capstone. Engineered vehicle inventory systems, customer lead tracking, and automated test-drive booking pipelines.",
      tags: ["Django", "Python", "Bootstrap", "PostgreSQL"],
      githubUrl: "https://github.com/Randisyuja",
      liveUrl: null,
    }
  ];

  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs tracking-wider uppercase mb-1">
            <span>06</span>
            <span className="w-8 h-px bg-red-500/40"></span>
            <span>Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
          A selection of enterprise platforms, desktop utilities, and full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Media Preview Container */}
              <div className="h-48 sm:h-52 bg-slate-100 dark:bg-slate-800/60 relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
                {project.type === "video" ? (
                  <video
                    src={project.image}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
                    {project.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-black/60 text-slate-200 backdrop-blur-md">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-5">
                <h3 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-rose-400 transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Action Bar */}
            <div className="px-5 pb-5 pt-0 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2 pt-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-rose-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </a>
                )}

                {project.note && (
                  <span className="text-[11px] text-slate-400 italic">
                    {project.note}
                  </span>
                )}
              </div>

              <div className="pt-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-rose-400 hover:underline"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    {project.type === "video" ? "Demo Video Attached" : "Documented Case"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}