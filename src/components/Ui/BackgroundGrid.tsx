import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const BackgroundGrid: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 60, stiffness: 80 };
  const blobX = useSpring(mouseX, springConfig);
  const blobY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the width of the blob (250px) to center it under mouse
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#030712] overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg-overlay opacity-35" />

      {/* Vignette effect (radial darkening towards edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030712_95%)]" />

      {/* Floating Animated Background Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-blue-600/8 blur-[100px] animate-float" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-purple-600/8 blur-[120px] animate-float-delayed" />
      <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px] animate-float-slow" />

      {/* Mouse Follow Blob (Desktop Only) */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/4 to-cyan-500/4 blur-[100px] hidden md:block"
        style={{
          x: blobX,
          y: blobY,
        }}
      />
    </div>
  );
};
export default BackgroundGrid;
