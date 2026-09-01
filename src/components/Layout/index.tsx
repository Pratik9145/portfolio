import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { UIVal } from '../Ui/Icons';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 origin-left z-[999]"
        style={{ scaleX }}
      />

      {/* Header Sticky Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/80 border-b border-white/5 backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold font-display text-white tracking-tight hover:opacity-85 transition-opacity flex items-center gap-2 cursor-pointer border-none bg-transparent"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-extrabold text-sm text-white">
              PC
            </span>
            <span>{personalInfo.name}</span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wide transition-all cursor-pointer hover:text-white border-none bg-transparent ${
                  activeSection === item.id 
                    ? 'text-blue-400 border-b border-blue-400 pb-1' 
                    : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu trigger button */}
          <button 
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/10 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <UIVal.X className="w-6 h-6" /> : <UIVal.Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-lg flex flex-col justify-center items-center lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white cursor-pointer"
          >
            <UIVal.X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xl font-bold tracking-wide transition-colors border-none bg-transparent cursor-pointer ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow pt-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950/30 py-12 px-4 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-bold text-white tracking-wide">
              {personalInfo.name} &copy; {new Date().getFullYear()}
            </p>
            <p className="text-xs text-gray-500">
              Designed & developed with passion in Pune.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <UIVal.Github className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <UIVal.Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-gray-500 font-mono">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
