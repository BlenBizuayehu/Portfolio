import React, { useState, useEffect } from 'react';
import TechParticles from './TechParticles';

const Hero: React.FC = () => {
  const [typedName, setTypedName] = useState('');
  const fullName = "Blen Bizuayehu";

  useEffect(() => {
    if (typedName.length < fullName.length) {
      const timeoutId = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [typedName]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <TechParticles />
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 h-20 md:h-24 lg:h-28">
          Hi, I'm{' '}
          <span className="text-primary">{typedName}</span>
          {typedName.length === fullName.length && (
            <span className="animate-blink text-primary">|</span>
          )}
        </h1>
        <p className="text-lg md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto">
          A 5th-year Software Engineering student specializing in creating modern, responsive web applications with the MERN stack.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.23)] hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-background-secondary text-text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-black/20 hover:bg-gray-700 hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;