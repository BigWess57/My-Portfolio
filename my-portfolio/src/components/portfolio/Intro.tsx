"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, Variants } from 'framer-motion';

import Image from 'next/image';

import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/src/components/ui/button";


//Images
import GithubLogoWhite from "@/public/icons/github-white.svg";
import GithubLogoDark from "@/public/icons/github.svg";

import LinkedInLogoWhite from "@/public/icons/linkedin-white.svg";
import LinkedInLogoDark from "@/public/icons/linkedin.svg";

import backgroundImg from "@/public/images/blockchain-background.jpg";
import { useTranslations } from "next-intl";



// Define your animation "variants"
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This is the magic!
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Start hidden and 20px down
  visible: {
    opacity: 1,
    y: 0, // Animate to visible and original position
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Intro = () => {

  const t = useTranslations('intro');
  
  const divRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  //scroll down handler
  const handleScrollDown = () => {
    // Find the 'about' section by its ID
    const aboutSection = document.getElementById('about');

    if (aboutSection) {
      // Get the top position of the 'about' section relative to the viewport
      // Get the 'about' section's position relative to the viewport
      const targetRect = aboutSection.getBoundingClientRect();

      // Calculate its absolute position from the top of the document
      const targetScrollY = targetRect.top + window.scrollY;

      // Use Framer Motion's 'animate' to smoothly scroll
      animate(window.scrollY, targetScrollY, {
        // --- To make it "slide slowly" ---
        // type: 'tween', // Use tween for duration-based animation
        // duration: 0.8, // Set duration to 0.8 seconds (adjust as you like)
        ease: 'easeInOut', // Use a smooth easing function

        // --- Alternative: Spring physics (feels more natural) ---
        type: "spring",
        damping: 20,
        stiffness: 100,

        // This function runs on every "frame" of the animation
        onUpdate: (latestValue) => {
          window.scrollTo(0, latestValue);
        },
      });
    }
  };

  //For appearing
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
    <section 
      id="hero" 
      className={`relative pt-25 md:pt-40 lg:pt-60 min-h-screen px-4 dark`} 
      style={{ 
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundSize: 'cover',   // Equivalent to bg-cover
        backgroundPosition: 'center', // Equivalent to bg-center
        backgroundRepeat: 'no-repeat' // Equivalent to bg-no-repeat
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <motion.div
        ref={divRef}
        className="container max-w-6xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        
        <motion.h1
          className="py-5 text-7xl md:text-9xl font-bold mb-6 bg-linear-120/oklch from-primary-500 from-30% to-secondary-600 to-70% text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Igor Babic
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl mb-8"
          variants={itemVariants}
        >
          {t('title')}
        </motion.h2>

        <motion.div
          variants={itemVariants}
        >
          <div className="flex gap-4 items-center justify-center pt-20">
            <h3 className="font-sans">{t('contactMe')}</h3>
            <Button asChild size="lg" className="button-hover">
              <a href="mailto:igor@danet.one" className="inline-flex items-center">
                <Mail className="w-5 h-5" />
                {t('email')}
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="button-hover-secondary">
              <a
                href="https://www.linkedin.com/in/igorbabic-99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Image 
                  priority 
                  src={LinkedInLogoDark} 
                  alt="LinkedIn Logo" 
                  className="w-5 h-5 dark:hidden"  // Show black in light mode
                />
                <Image 
                  priority 
                  src={LinkedInLogoWhite} 
                  alt="LinkedIn Logo" 
                  className="w-5 h-5 hidden dark:block"  // Show white in dark mode
                />
                LinkedIn
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="button-hover-secondary">
              <a
                href="https://github.com/BigWess57"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Image 
                  priority 
                  src={GithubLogoDark} 
                  alt="Github Logo" 
                  className="w-5 h-5 dark:hidden" 
                />
                <Image 
                  priority 
                  src={GithubLogoWhite} 
                  alt="Github Logo" 
                  className="w-5 h-5 hidden dark:block" 
                />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>

        
      </motion.div>
      {/* scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center group"
        variants={itemVariants} 
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        onClick={handleScrollDown}
      >
        <div className="text-sm tracking-widest text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-8">
          EXPLORE
        </div>

        <ArrowDown className="p-1 w-12 h-12 text-primary-400 animate-bounce rounded-full hover:bg-neutral-700"/>
      </motion.div>
    </section>
  );
};

export default Intro;
