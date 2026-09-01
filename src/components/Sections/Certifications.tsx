import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../data/portfolioData';
import GlassCard from '../Ui/GlassCard';
import { UIVal } from '../Ui/Icons';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
        >
          Credentials & Growth
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display"
        >
          Certifications & Learning
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {certifications.map((cert, index) => (
          <GlassCard 
            key={cert.name}
            delay={index * 0.1}
            className="flex flex-col justify-between border border-white/5 hover:border-blue-500/20"
          >
            <div className="space-y-4">
              {/* Award Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <UIVal.Award className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white leading-tight">
                  {cert.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Issuer: {cert.issuer}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-400">Verified Credential</span>
              <a 
                href={cert.link} 
                className="text-xs font-bold text-blue-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                View Certificate
                <UIVal.ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </GlassCard>
        ))}
      </div>

    </section>
  );
};
export default Certifications;
