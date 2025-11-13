"use client";

import { useEffect, useRef, useState } from "react";

import { Card } from "@/src/components/ui/card";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./Intro";
import { useTranslations } from "next-intl";


const GridPattern = () => {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 h-full w-full text-neutral-500 opacity-50 dark:opacity-50 mask-[radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          x="50%"
          y="50%"
        >
          {/* This is the dot in the grid */}
          <circle cx="10" cy="10" r="1" fill="currentColor" />
        </pattern>
      </defs>
      {/* The rectangle that tiles the pattern */}
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      
      {/* This SVG animation slowly scrolls the grid for a subtle, "live" effect */}
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0 0"
        to="20 0"
        dur="10s"
        repeatCount="indefinite"
      />
    </svg>
  );
};


const Vision = () => {

  const t = useTranslations('vision');

  const divRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <section id="vision" className="relative overflow-hidden flex justify-center">
      {/* Add the animated background */}
      <GridPattern />

      <motion.div 
        ref={divRef} 
        // We removed the Card, so we center the text container
        className={`container max-w-4xl text-center`}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="mb-10">
          {t('title')}
        </motion.h2>
        
        {/* We've removed the card and restyled the text for more impact */}
        <motion.p 
          variants={itemVariants}
          // This is the "hero" part of your vision
          className="text-3xl font-medium text-neutral-100"
        >
          {t('p1')}
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          // This is the "mission" part, styled as supporting text
          className="mt-6 text-xl text-neutral-400"
        >
          {t('p2')}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Vision;
