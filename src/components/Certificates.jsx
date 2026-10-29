import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import softuniLogo from "../assets/softuni.png";
import huaweiLogo from "../assets/huawei.png";
import bnspLogo from "../assets/bnsp.png";
import etsLogo from "../assets/ETS.png";

export default function Certificates() {
  const certificates = [
    {
      title: "Software Engineer with Python",
      issuer: "SoftUni Indonesia",
      logo: softuniLogo,
      logoScale: "scale-[1.28]",
      date: "Mar 2025",
      credentialId: "589/567d0391",
      credentialUrl: "/certificates/Software Engineer with Python - Diploma.pdf",
      verifyUrl: "https://softuni.id/Certificates/Details/589/567d0391",
      skills: ["Python", "Django", "PostgreSQL", "Python OOP", "RESTful APIs", "JS Front-End"],
      highlight: "Professional Qualification Diploma"
    },
    {
      title: "HCIA-Cloud Service V3.5 Course",
      issuer: "Huawei ICT Academy",
      logo: huaweiLogo,
      date: "Dec 2025",
      credentialId: "20251208000343",
      credentialUrl: "/certificates/Sertifikat HCIA Cloud Service - Huawei ICT Academy.pdf",
      skills: ["Cloud Computing", "Huawei Cloud", "Storage & Compute", "Virtualization", "Cloud Security"],
      highlight: "Huawei ICT Academy Certified"
    },
    {
      title: "Junior Web Developer (Pengembang Web Pratama)",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      logo: bnspLogo,
      date: "Oct 2022",
      credentialId: "Reg. TIK.317.04612 2022",
      credentialUrl: "/certificates/Sertifikat BNSP Junior Web Developer - Randi Syuja.pdf",
      skills: ["Web Development", "PHP / JavaScript", "Database Design", "Software Quality"],
      highlight: "National Competency Certificate (BNSP)"
    },
    {
      title: "TOEIC® Listening & Reading Official Certificate",
      issuer: "ETS / PT International Test Center (ITC)",
      logo: etsLogo,
      date: "Jun 2026",
      credentialId: "Result No. 2075010",
      credentialUrl: "/certificates/Sertifikat TOEIC.pdf",
      skills: ["Professional English", "Listening Comprehension", "Business Reading", "Technical Communication"],
      highlight: "Score: 735 (Listening: 410, Reading: 325)"
    }
  ];

  return (
    <section id="certifications" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs tracking-wider uppercase mb-1">
            <span>05</span>
            <span className="w-8 h-px bg-red-500/40"></span>
            <span>Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Licenses & Certifications</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
          Verified technical competencies, specialized industry training, and engineering certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  {/* Certificate Logo Image or Fallback Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        className={`w-full h-full object-contain ${cert.logoScale || ''}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-red-500/10 text-red-600 rounded-xl">
                        <Award className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 flex-shrink-0">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Highlight badge if available */}
              {cert.highlight && (
                <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{cert.highlight}</span>
                </div>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Credential ID and Links */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs mt-2">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                ID: {cert.credentialId}
              </span>

              <div className="flex items-center gap-3">
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[11px] text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                    title="Verify certificate online"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-red-600 dark:text-rose-400 hover:underline"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
