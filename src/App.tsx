import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import { CustomCursor } from './components/Ui/CustomCursor';
import { BackgroundGrid } from './components/Ui/BackgroundGrid';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Skills } from './components/Sections/Skills';
import { Experience } from './components/Sections/Experience';
import { Projects } from './components/Sections/Projects';
import { Certifications } from './components/Sections/Certifications';
import { Education } from './components/Sections/Education';
import { Contact } from './components/Sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small pause at 100%
          return 100;
        }
        // Increment by random steps
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Custom Global Cursor */}
      <CustomCursor />

      {/* Global Interactive Animated Background Grid */}
      <BackgroundGrid />

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Loading Screen */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] select-none"
          >
            <div className="space-y-6 text-center">
              {/* Brand Logo Animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-extrabold text-2xl text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] mx-auto"
              >
                PC
              </motion.div>

              <div className="space-y-2">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-semibold tracking-wider text-gray-400 uppercase font-mono"
                >
                  Initializing Portfolio
                </motion.h3>
                <div className="text-xs text-gray-500 font-mono">
                  Pratik Choure &bull; MERN Developer
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="w-[180px] h-[3px] bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>

              <div className="text-xs text-blue-400/80 font-mono">
                {loadingProgress}%
              </div>
            </div>
          </motion.div>
        ) : (
          /* Main Portfolio Website */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Layout>
              {/* Individual Scroll Sections */}
              <Hero />
              
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Horizontal divider lines with floating accent tags */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent relative my-10">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Profile
                  </div>
                </div>
                <About />

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent relative my-10">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Skills
                  </div>
                </div>
                <Skills />

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent relative my-10">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Experience
                  </div>
                </div>
                <Experience />

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent relative my-10">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Projects
                  </div>
                </div>
                <Projects />

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent relative my-10">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Learning
                  </div>
                </div>
                <Certifications />

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent relative my-10">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Education
                  </div>
                </div>
                <Education />

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent relative my-10">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Contact
                  </div>
                </div>
                <Contact />
              </div>
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
