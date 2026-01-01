import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Intro() {
  return (
    <section id="hero" className="py-12 mb-10">
      <div className="relative">
        {/* Decorative blurs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-r from-blue-300/20 to-teal-300/20 blur-3xl"></div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="md:col-span-8 space-y-6 order-2 md:order-1">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm text-sm w-fit">
                <Sparkles className="h-4 w-4" />
                <span>Software Engineer</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-400 bg-clip-text text-transparent">
                  Hey, I'm Randi Syuja
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-[600px]">
              Welcome to my corner on the internet. I build amazing digital experiences.
            </p>
          </div>
          
          {/* Profile Image */}
          <div className="md:col-span-4 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-800 via-red-600 to-rose-600 opacity-75 blur animate-spin-slow"></div>
              <div className="absolute inset-0 rounded-full bg-gray-900/80 backdrop-blur-sm"></div>
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}