import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingDock from './components/Floatingdock';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-red-500/20 selection:text-red-500">
      <div className="relative overflow-hidden">
        {/* Ambient background glow effect */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 dark:bg-red-500/10 blur-[140px] rounded-full"></div>
        
        <main className="max-w-4xl mx-auto py-10 sm:py-20 px-4 sm:px-8 relative z-10 space-y-20 pb-32">
          <Intro />
          <About />
          <Certificates />
          <Projects />
          <Contact />
        </main>
      </div>
      <FloatingDock theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;