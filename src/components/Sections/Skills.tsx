import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import { TechIcon, UIVal } from '../Ui/Icons';
import GlassCard from '../Ui/GlassCard';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: UIVal.Code },
    { id: 'frontend', name: 'Frontend', icon: UIVal.Laptop },
    { id: 'backend', name: 'Backend', icon: UIVal.Server },
    { id: 'database', name: 'Database', icon: UIVal.Database },
    { id: 'tools', name: 'Tools & Dev', icon: UIVal.Settings },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-10">
      
      {/* Section Header */}
      <div className="text-center mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
        >
          Skills & Stack
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display"
        >
          My Technical Expertise
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 border transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-left"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative"
            >
              <GlassCard 
                className="h-full flex flex-col justify-between p-5 space-y-4 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                hoverEffect={false}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center p-2">
                    <TechIcon name={skill.name} className="w-6 h-6" />
                  </div>
                  {skill.level && (
                    <span className="text-xs text-gray-500 font-mono font-bold">
                      {skill.level}%
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-sm md:text-base font-bold text-white tracking-tight truncate">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">
                    {skill.category}
                  </span>
                </div>

                {skill.level && (
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};
export default Skills;
