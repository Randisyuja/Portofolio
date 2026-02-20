import React from 'react';
import { ChevronRight } from 'lucide-react';
import unkrisLogo from "../assets/unkris.png";
import earth from "../assets/earth.png";
import kkp from "../assets/kkp.png";
import softuni from "../assets/softuni.png"


export default function About() {
  const workExperience = [
    {
      company: "Kementerian Kelautan dan Perikanan",
      logo: kkp,
      position: "Intern Web Developer",
      period: "Aug 2024 - Okt 2024"
    },
    {
      company: "Software University (SoftUni) Indonesia",
      logo: softuni,
      position: "Software Developer (Independent Study)",
      period: "Sep 2024 - Jan 2025",
    },
  ];

  const skills = [
    "Python", "Javascript", "PHP", 
    "Django", "Flask", "React.js", "Laravel", "Bootstrap", 
    "Tailwind CSS", "PostgreSQL", "MySQL", "MongoDB", "REST APIs",
    "Docker", "Huawei Cloud", "🧠Whatever I need to learn to get the job done"
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="mb-10">
        <h2 className="text-xl font-bold mb-4">A little about myself...</h2>
        <div className="prose max-w-full text-sm text-gray-400 space-y-4">
          <p>
            I am a Software Engineering graduate with a specialized focus on Backend and Fullstack Development. My expertise lies in architecting secure, data-driven applications—ranging from encrypted desktop security tools to comprehensive web-based monitoring and evaluation platforms used at a national scale.
          </p>
          <p>
            I am passionate about building clean, efficient, and scalable systems. Whether I’m designing RESTful APIs with Django or crafting interactive user interfaces with React, I strive to create seamless digital experiences that solve real-world problems. I thrive on the challenge of turning complex requirements into robust software solutions.
            <span className="bg-yellow-900/30 px-1 py-0.5 rounded font-medium italic"> "The more I learn, the less I realize I know"</span>
          </p>
          <p>
            Currently focused on: Building scalable SaaS solutions, optimizing database performance, and exploring Cloud-native architectures to enhance application reliability.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="mb-10">
        <h2 className="text-xl font-bold mb-4">Professional Journey</h2>
        <div className="space-y-3">
          {workExperience.map((job, index) => (
            <div key={index} className="rounded-lg bg-gray-800/50 p-4 hover:bg-gray-800/70 transition-all cursor-pointer group">
              <div className="flex gap-4">
                <div className="flex-none">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                    <img src={job.logo} alt="Logo" className="w-full h-full object-cover rounded-full"/>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm">{job.company}</h3>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <span className="text-xs text-gray-400">{job.period}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{job.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-10">
        <h2 className="text-xl font-bold mb-4">Points of Learning</h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-gray-800/50 p-4">
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                  <img src={unkrisLogo} alt="Logo Universitas Krisnadwipayana" className="w-full h-full object-cover rounded-full"/>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm">Universitas Krisnadwipayana</h3>
                  <span className="text-xs text-gray-400">2021 - 2025</span>
                </div>
                <div className="text-xs text-gray-400">Bachelor's Degree in Computer Science</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800/50 p-4">
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl">
                  <img src={earth} alt="Logo Universitas Krisnadwipayana" className="w-full h-full object-cover rounded-full"/>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm">Life</h3>
                  <span className="text-xs text-gray-400">2002 - Present</span>
                </div>
                <div className="text-xs text-gray-400">Continuing Education</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-10">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 text-xs font-semibold rounded-md bg-white text-black hover:bg-gray-400 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}