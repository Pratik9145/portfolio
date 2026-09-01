import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotXSpring = useSpring(cursorX, { damping: 40, stiffness: 400 });
  const dotYSpring = useSpring(cursorY, { damping: 40, stiffness: 400 });

  useEffect(() => {
    // Only apply custom cursor on desktop devices with fine pointers
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      setVisible(false);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      setVisible((prev) => (prev ? prev : true));
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Track clickable items for hover expansion
    const addHoverEvents = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], select, input, textarea');
      clickables.forEach((el) => {
        // Prevent duplicate bindings
        el.removeEventListener('mouseenter', handleLinkEnter);
        el.removeEventListener('mouseleave', handleLinkLeave);
        el.addEventListener('mouseenter', handleLinkEnter);
        el.addEventListener('mouseleave', handleLinkLeave);
      });
    };

    const handleLinkEnter = () => setLinkHovered(true);
    const handleLinkLeave = () => setLinkHovered(false);

    addHoverEvents();

    // Check again on DOM changes to bind new elements
    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/80 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: linkHovered ? 1.5 : clicked ? 0.8 : 1,
          backgroundColor: linkHovered ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0)',
          borderColor: linkHovered ? '#06b6d4' : '#3b82f6',
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          x: dotXSpring,
          y: dotYSpring,
          left: '12px',
          top: '12px',
          scale: linkHovered ? 0.4 : clicked ? 1.4 : 1,
        }}
      />
    </>
  );
};
