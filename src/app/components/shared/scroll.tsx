'use client';
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollComponent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        height: '4px',
        background: '#3B81F6',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
    />
  );
};

export default ScrollComponent;
