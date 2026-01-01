import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  const workExperience = [
    {
      company: "Tech Startup",
      logo: "🚀",
      position: "Senior Software Engineer",
      period: "Jan 2023 - Present",
      description: "Leading development of cutting-edge web applications using React, Node.js, and cloud technologies."
    },
    {
      company: "Digital Agency",
      logo: "💼",
      position: "Full Stack Developer",
      period: "Jun 2020 - Dec 2022",
      description: "Built scalable web solutions for enterprise clients using modern JavaScript frameworks."
    },
    {
      company: "Startup Inc",
      logo: "⚡",
      position: "Frontend Developer",
      period: "Jan 2018 - May 2020",
      description: "Developed responsive user interfaces and implemented design systems for multiple product lines."
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "Huawei Cloud", "Docker", 
    "Kubernetes", "Git", "REST APIs", "GraphQL", "Tailwind CSS"
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="mb-10">
        <h2 className="text-xl font-bold mb-4">A little about myself...</h2>
        <div className="prose max-w-full text-sm text-gray-400 space-y-4">
          <p>
            I'm passionate about creating innovative solutions and building things that make a difference. 
            Technology is my canvas, and code is my art.
          </p>
          <p>
            I love thinking critically and asking questions—it's the best way to truly learn and understand the world. 
            <span className="bg-yellow-900/30 px-1 py-0.5 rounded font-medium italic"> "The more I learn, the less I realize I know"</span>
          </p>
          <p>
            Currently focused on building scalable web applications and exploring the latest in AI and machine learning.
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
                    {job.logo}
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
                  <p className="text-xs text-gray-500">{job.description}</p>
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
                  🎓
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
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-10">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 text-xs font-semibold rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}