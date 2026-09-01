import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { TechIcon, UIVal } from '../Ui/Icons';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Frontend Developer',
    'MERN Stack Developer',
    'React.js Specialist',
    'UI / UX Enthusiast'
  ];

  useEffect(() => {
    let timer: any;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
        
        {/* Left text column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Available For Internships / Full-time Roles
          </div>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl text-gray-400 font-medium">Hello, I'm</h3>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-display text-white">
              {personalInfo.name}
            </h1>
            <div className="h-8 md:h-12 flex items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gradient-cyan-blue font-display">
                <span className="typing-cursor">{displayText}</span>
              </h2>
            </div>
          </div>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            {personalInfo.shortIntro}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
            >
              <UIVal.FolderGit2 className="w-5 h-5" />
              View Projects
            </button>
            <a 
              href="/resume.pdf"
              download="Pratik_Choure_Resume.pdf"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
            >
              <UIVal.Download className="w-5 h-5" />
              Download Resume
            </a>
            <button 
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 rounded-xl border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
            >
              <UIVal.Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-6 pt-6 text-gray-400">
            <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">Connect:</span>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <UIVal.Github className="w-6 h-6" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <UIVal.Linkedin className="w-6 h-6" />
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-sm flex items-center gap-1.5">
              <UIVal.MapPin className="w-4 h-4 text-blue-400" />
              {personalInfo.location}
            </span>
          </div>
        </motion.div>

        {/* Right side: Mock terminal with visual effects */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[480px] glassmorphism rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-slate-900/80 px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-gray-500 font-mono">pratik_choure_portfolio.json</span>
              <UIVal.Settings className="w-4 h-4 text-gray-500 animate-spin-slow" />
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm text-left space-y-4 text-gray-300">
              <div>
                <span className="text-blue-400">const</span> developer = &#123;
              </div>
              <div className="pl-4">
                name: <span className="text-amber-300">"{personalInfo.name}"</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-amber-300">"Full Stack / Frontend Intern"</span>,
              </div>
              <div className="pl-4">
                skills: [
                <div className="pl-4 text-emerald-400">
                  'React', 'JavaScript', 'TailwindCSS',
                </div>
                <div className="pl-4 text-emerald-400">
                  'NodeJS', 'Express', 'MongoDB'
                </div>
                <span className="text-gray-300">],</span>
              </div>
              <div className="pl-4">
                location: <span className="text-amber-300">"{personalInfo.location}"</span>,
              </div>
              <div className="pl-4">
                education: <span className="text-purple-400">"MCA"</span>,
              </div>
              <div className="pl-4">
                currentInternship: <span className="text-amber-300">"Mitroz Technologies"</span>
              </div>
              <div>&#125;;</div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-gray-400">
                <span className="text-xs">Experience: MERN Stack</span>
                <div className="flex gap-1.5 text-blue-400">
                  <TechIcon name="react" className="w-4 h-4" />
                  <TechIcon name="javascript" className="w-4 h-4" />
                  <TechIcon name="node" className="w-4 h-4" />
                  <TechIcon name="mongodb" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Hero;
