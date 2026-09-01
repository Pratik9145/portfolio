import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/portfolioData';
import GlassCard from '../Ui/GlassCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
        >
          My Education
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display"
        >
          Education Background
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </div>

      {/* Education Timeline */}
      <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 space-y-8">
        {education.map((edu, index) => (
          <div key={edu.degree} className="relative">
            {/* Dot Indicator */}
            <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-cyan-500">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
            </span>

            {/* Glass Card */}
            <GlassCard 
              delay={index * 0.08}
              className="text-left border border-white/5 hover:border-cyan-500/20"
              hoverEffect={true}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full font-bold">
                    {edu.performance}
                  </span>
                  <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full font-medium">
                    {edu.duration}
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

    </section>
  );
};
export default Education;
