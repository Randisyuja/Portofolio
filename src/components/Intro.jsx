import React from 'react';
import { Sparkles, FileText, Download, Mail, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import profile from "../assets/profile.jpeg";

export default function Intro() {
  return (
    <section id="hero" className="pt-6 sm:pt-10">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-8 space-y-6 order-2 md:order-1">
            <div className="flex flex-col gap-3">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Full-time & Remote Roles</span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Hey, I'm{" "}
                <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-400 bg-clip-text text-transparent">
                  Randi Syuja
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300">
                Software Engineer &bull; Backend & Full-Stack Developer
              </p>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Specializing in architecting secure, scalable backend services and responsive full-stack applications. Experienced in designing resilient APIs, database optimization, and high-impact digital platforms.
            </p>

            {/* CTAs: Resume & Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Place your resume.pdf into the public/ folder as 'resume.pdf' */}
              <a
                href="/resume.pdf"
                download="Randi_Syuja_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 transition-all group"
                title="Download Resume PDF (place resume.pdf in public folder)"
              >
                <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Download Resume</span>
                <Download className="w-3.5 h-3.5 opacity-70 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 text-red-500" />
                <span>Get in Touch</span>
              </a>

              {/* Social shortcuts */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/Randisyuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/randi-syuja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image with polished glowing frame */}
          <div className="md:col-span-4 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 opacity-60 blur-md animate-spin-slow"></div>
              <div className="absolute inset-0 rounded-full bg-white dark:bg-slate-950"></div>
              <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-red-500/80 shadow-2xl">
                <img
                  src={profile}
                  alt="Randi Syuja"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}