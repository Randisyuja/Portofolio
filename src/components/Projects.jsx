import React from 'react';
import { Globe } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Platform",
      image: "🤖",
      period: "2024 - Present",
      description: "Building an innovative AI platform that helps developers automate workflows and increase productivity.",
      tags: ["React", "Python", "TensorFlow", "AWS"],
      link: "#"
    },
    {
      title: "E-Commerce Solution",
      image: "🛒",
      period: "2023",
      description: "Developed a full-featured e-commerce platform with payment integration and inventory management.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      link: "#"
    },
    {
      title: "Social Media App",
      image: "📱",
      period: "2022",
      description: "Created a real-time social networking application with chat, posts, and user interactions.",
      tags: ["React Native", "Firebase", "Node.js"],
      link: "#"
    },
    {
      title: "Dashboard Analytics",
      image: "📊",
      period: "2021",
      description: "Built a comprehensive analytics dashboard with real-time data visualization and reporting features.",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
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
              {project.image}
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
              <a href={project.link} className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-semibold rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors">
                <Globe className="h-3 w-3" />
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}