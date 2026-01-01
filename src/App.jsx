import React from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingDock from './components/Floatingdock';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
      <FloatingDock />
    </div>
  );
}

export default App;