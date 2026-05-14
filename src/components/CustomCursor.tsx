import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Use MotionValues instead of React state for much better performance
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Add smooth spring physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Offset by half the width/height (8px) to center the dot
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '2px solid rgba(0, 0, 0, 0.8)',
    },
    hover: {
      scale: 3,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(0, 0, 0, 0.5)',
    }
  };

  return (
    <motion.div
      className="cursor-dot"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export default CustomCursor;
