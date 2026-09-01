import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  delay = 0,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.215, 0.61, 0.355, 1] }}
      onClick={onClick}
      className={`glassmorphism rounded-2xl p-6 relative overflow-hidden group ${
        hoverEffect ? 'glassmorphism-hover cursor-pointer' : ''
      } ${className}`}
    >
      {/* Highlight glow at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-blue-400/30 transition-all duration-500" />
      
      {/* Inner hover reflection grid */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(59,130,246,0.05),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {children}
    </motion.div>
  );
};
export default GlassCard;
