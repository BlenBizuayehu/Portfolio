import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="block md:inline-block mt-4 md:mt-0 text-text-primary hover:text-primary mr-4 transition-colors duration-300">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-30 top-0 transition-all duration-300 ${isScrolled ? 'bg-background-secondary/80 backdrop-blur-sm shadow-lg shadow-black/25' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-primary">
            {'<DevPortfolio />'}
          </a>
        </div>
        <nav className="hidden md:flex">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#achievements">Achievements</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background-secondary/90 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <nav className="px-8 pt-2 pb-4 space-y-2 text-center">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;