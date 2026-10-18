import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import softuniLogo from "../assets/softuni.png";

export default function Certificates() {
  // DUMMY DATA SERTIFIKAT:
  // Anda bisa memasukkan gambar logo dengan 2 cara:
  // 1. Import file dari folder assets (seperti softuniLogo di atas), lalu pasang di properti 'logo'.
  // 2. Taruh file gambar di folder public/ (misal: public/badges/aws.png), lalu tulis logo: "/badges/aws.png"
  // 3. Masukkan link URL langsung (https://...).
  // Jika 'logo' bernilai null atau belum diisi, otomatis akan menampilkan ikon Award.
  const certificates = [
    {
      title: "Certified Software Engineering (MSIB Full-Stack Track)",
      issuer: "Software University (SoftUni) Indonesia",
      logo: softuniLogo, // Menggunakan gambar logo lokal
      date: "Jan 2025",
      credentialId: "SOFTUNI-MSIB-2025-8912",
      credentialUrl: "https://example.com/verify-certificate",
      skills: ["Python", "Django", "PostgreSQL", "Software Architecture"],
      highlight: "Graduated with Distinction"
    },
    {
      title: "Backend Web Development & RESTful API Specialization",
      issuer: "Dicoding Indonesia",
      logo: null, // Contoh jika tidak ada logo (akan memakai ikon fallback Award)
      date: "Nov 2024",
      credentialId: "DCD-BE-2024-7741",
      credentialUrl: "https://example.com/verify-certificate",
      skills: ["RESTful APIs", "Database Optimization", "Security Best Practices"],
      highlight: null
    },
    {
      title: "Cloud Computing & AWS Architecture Essentials",
      issuer: "Amazon Web Services (AWS)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", // Contoh URL online logo AWS
      date: "Aug 2024",
      credentialId: "AWS-CLOUD-2024-3401",
      credentialUrl: "https://example.com/verify-certificate",
      skills: ["Cloud Architecture", "EC2 & S3", "VPC & Security"],
      highlight: "AWS Certified Badge"
    },
    {
      title: "Relational Database Design & SQL Optimization",
      issuer: "Oracle Academy / HackerRank",
      logo: null, // Fallback icon
      date: "June 2024",
      credentialId: "SQL-OPT-2024-1190",
      credentialUrl: "https://example.com/verify-certificate",
      skills: ["PostgreSQL", "MySQL", "Indexing", "Query Profiling"],
      highlight: "Top 5% Assessment Score"
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
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5 shadow-sm">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-red-500/10 dark:bg-rose-500/10 text-red-600 dark:text-rose-400 rounded-lg">
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

            {/* Credential ID and Verification Link */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs mt-2">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                ID: {cert.credentialId}
              </span>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-red-600 dark:text-rose-400 hover:underline"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
