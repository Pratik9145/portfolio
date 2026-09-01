import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import GlassCard from '../Ui/GlassCard';
import { TechIcon, UIVal } from '../Ui/Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'fullstack'>('all');

  const filterOptions = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-10">
      
      {/* Section Header */}
      <div className="text-center mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
        >
          My Portfolio
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display"
        >
          Recent Projects & Creations
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 mb-12">
        <div className="flex bg-slate-900/60 p-1.5 rounded-xl border border-white/5 backdrop-blur-md">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id as any)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === opt.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex"
            >
              <GlassCard 
                className="w-full flex flex-col justify-between border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                hoverEffect={true}
              >
                {/* Card Top */}
                <div className="space-y-4">
                  {/* Category & Icons */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                      {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                    </span>
                    <div className="flex gap-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="View Source Code"
                      >
                        <UIVal.Github className="w-5 h-5" />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                          title="View Live Demo"
                        >
                          <UIVal.ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom / Tech badges */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};
export default Projects;
