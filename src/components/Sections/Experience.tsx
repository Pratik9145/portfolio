import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import GlassCard from '../Ui/GlassCard';
import { UIVal, TechIcon } from '../Ui/Icons';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
        >
          Work Experience
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display"
        >
          Where I've Worked
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 space-y-12">
        {experience.map((exp, index) => (
          <div key={exp.company} className="relative">
            {/* Timeline Dot Indicator */}
            <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-blue-500">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping absolute"></span>
              <span className="h-2 w-2 rounded-full bg-cyan-400 relative"></span>
            </span>

            {/* Content Card */}
            <GlassCard 
              className="text-left border border-white/5 hover:border-blue-500/20"
              hoverEffect={true}
              delay={index * 0.1}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-semibold text-blue-400">
                    <span>{exp.company}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">{exp.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 w-fit">
                  <UIVal.Briefcase className="w-3.5 h-3.5" />
                  {exp.duration}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3.5 mb-6">
                {exp.description.map((responsibility, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed"
                  >
                    <UIVal.CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tools/Skills Applied Showcase */}
              <div className="pt-4 border-t border-white/5">
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-3">Skills Utilized</span>
                <div className="flex flex-wrap gap-2.5">
                  {['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git', 'GitHub'].map((tech) => (
                    <div 
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors text-xs font-semibold text-gray-300"
                    >
                      <TechIcon name={tech} className="w-4 h-4" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

            </GlassCard>
          </div>
        ))}
      </div>

    </section>
  );
};
export default Experience;
