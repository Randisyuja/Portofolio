import React from 'react';
import { Home, Briefcase, Award, FolderGit2, Mail, Github, Linkedin, Sun, Moon } from 'lucide-react';

export default function FloatingDock({ theme = 'dark', toggleTheme }) {
  const handleToggle = () => {
    if (toggleTheme) {
      toggleTheme();
    } else {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  };

  const navItems = [
    { href: "#hero", icon: Home, label: "Home" },
    { href: "#work", icon: Briefcase, label: "Experience" },
    { href: "#certifications", icon: Award, label: "Certifications" },
    { href: "#projects", icon: FolderGit2, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];

  const socialItems = [
    { href: "https://github.com/Randisyuja", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/randi-syuja/", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto flex justify-center px-4" aria-label="Floating navigation">
      {/* Subtle bottom fade to blend with scrolling content */}
      <div className="fixed bottom-0 inset-x-0 h-20 w-full pointer-events-none bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent dark:from-slate-950 dark:via-slate-950/70 dark:to-transparent"></div>

      {/* Floating dock pill */}
      <div className="relative z-50 flex items-center gap-1 sm:gap-1.5 px-3 py-2 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl shadow-lg shadow-slate-950/5 dark:shadow-black/50 transition-all">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="p-2 sm:p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105"
              aria-label={item.label}
              title={item.label}
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1"></div>

        {socialItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105"
              aria-label={item.label}
              title={item.label}
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1"></div>

        <button
          onClick={handleToggle}
          className="p-2 sm:p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105"
          aria-label="Toggle light and dark theme"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4 transition-transform rotate-0 hover:rotate-45" />
          ) : (
            <Moon className="h-4 w-4 transition-transform -rotate-12 hover:rotate-0" />
          )}
        </button>
      </div>
    </nav>
  );
}