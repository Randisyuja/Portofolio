import React from 'react';
import { Home, Book, Github, Linkedin, Youtube, Sun, Moon } from 'lucide-react';

export default function FloatingDock() {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-gray-900');
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex justify-center">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-gradient-to-t from-gray-900 to-transparent backdrop-blur-lg"></div>
      <div className="relative z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/90 backdrop-blur-lg">
        <a href="#hero" className="p-3 rounded-full hover:bg-gray-700 transition-colors">
          <Home className="h-4 w-4" />
        </a>
        <a href="#projects" className="p-3 rounded-full hover:bg-gray-700 transition-colors">
          <Book className="h-4 w-4" />
        </a>
        <div className="w-px h-8 bg-gray-700"></div>
        <a href="https://github.com/Randisyuja" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-700 transition-colors">
          <Github className="h-4 w-4" />
        </a>
        <a href="https://www.linkedin.com/in/randi-syuja/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-700 transition-colors">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-700 transition-colors">
          <Youtube className="h-4 w-4" />
        </a>
        <div className="w-px h-8 bg-gray-700"></div>
        <button onClick={toggleTheme} className="p-3 rounded-full hover:bg-gray-700 transition-colors">
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}