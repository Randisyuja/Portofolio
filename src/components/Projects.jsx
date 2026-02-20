import React from 'react';
import { Globe } from 'lucide-react';
import siap from "../assets/porto.mp4";
import pelikan from "../assets/Pelikan.jpg";
import car from "../assets/cardealerr.png";
import pwmanager from "../assets/pwmanager.png"

export default function Projects() {
  const projects = [
    {
      title: "SIAP",
      type: "video",
      image: siap,
      period: "2025",
      description: "Developed a web-based payment and installment management system for local community residents. Designed to streamline financial tracking, the platform provides a structured database to manage citizen contributions, ensuring transparency and accountability in community fund management.",
      tags: ["Python", "Django", "Bootstrap", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Pelikan",
      type: "image",
      image: pelikan,
      period: "2024",
      description: "Developed a comprehensive e-Monev platform for the Ministry of Marine Affairs and Fisheries during an internship program. Collaborated within a development team to build a system that monitors and evaluates public information disclosure performance across all work units nationwide in real-time.",
      tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
      link: "#"
    },
    {
      title: "Car Dealer",
      type: "image",
      image: car,
      period: "2022",
      description: "Developed a comprehensive car dealership platform as a Capstone Project for the MSIB (Certified Independent Study) program. Engineered a full-stack solution featuring vehicle inventory management, an automated test drive booking system, and an administrative dashboard to streamline sales operations and lead management.",
      tags: ["Django", "Python", "Bootstrap", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Secure Password Vault",
      type: "image",
      image: pwmanager,
      period: "2024",
      description: "Developed a secure desktop application for password management using Python and Tkinter. Integrated advanced security measures using the Cryptography library, implementing PBKDF2 for key derivation and Fernet (AES-128) encryption to ensure user data is stored securely and is inaccessible without a master password.",
      tags: ["Python", "Tkinter", "Cryptography", "JSON"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="mb-10">
      <div className="text-center mb-8">
        <div className="inline-block rounded-lg bg-white text-gray-900 px-3 py-1 text-sm mb-4">
          My Projects
        </div>
        <h2 className="text-3xl font-bold mb-4">What I've been up to</h2>
        <p className="text-gray-400">
          Over the years, I've worked on a variety of projects. Here are a few of them.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg bg-gray-800/50 overflow-hidden border border-gray-700 hover:shadow-lg hover:border-gray-600 transition-all">
            <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl">
              {project.type === "video" && (
                <video
                  src={project.image}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  className="w-full h-full object-cover"
                />
              )}

              {project.type !== "video" && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-base mb-1">{project.title}</h3>
              <time className="text-xs text-gray-400 block mb-2">{project.period}</time>
              <p className="text-xs text-gray-500 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-gray-700 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}