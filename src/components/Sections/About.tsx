import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import GlassCard from '../Ui/GlassCard';
import { UIVal } from '../Ui/Icons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
        >
          About Me
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display"
        >
          My Journey & Passion
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Side: Text and Bio */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <GlassCard className="h-full flex flex-col justify-center space-y-6 text-left" hoverEffect={false}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <UIVal.User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Full Stack & Frontend Intern</h3>
                <p className="text-sm text-gray-400">Mitroz Technologies & ICEM Pune</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
              {personalInfo.aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Role</span>
                <span className="text-sm font-semibold text-white">Frontend Intern</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Education</span>
                <span className="text-sm font-semibold text-white">MCA Student</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Based In</span>
                <span className="text-sm font-semibold text-white">Pune, Maharashtra</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Side: Key Highlights Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between text-left">
          
          {/* Card 1: MCA Student */}
          <GlassCard delay={0.1} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <UIVal.GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-md font-bold text-white">MCA Postgraduate Studies</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Pursuing MCA at **Indira College of Engineering and Management (ICEM)**, Pune. Building strong foundations in data structures, API architecture, and database operations.
              </p>
            </div>
          </GlassCard>

          {/* Card 2: Mitroz Technologies Intern */}
          <GlassCard delay={0.2} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <UIVal.Briefcase className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-md font-bold text-white">Mitroz Technologies Intern</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Working full-time on React.js applications, building optimized responsive web components, and testing REST integrations with backend microservices.
              </p>
            </div>
          </GlassCard>

          {/* Card 3: Key Expertise Focus */}
          <GlassCard delay={0.3} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <UIVal.Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-md font-bold text-white">Modern Frontend Stack</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Expertise in React Hooks, REST API integrations, state management (Zustand), styling (Tailwind CSS), and collaborative version control workflows (Git/GitHub).
              </p>
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};
export default About;
