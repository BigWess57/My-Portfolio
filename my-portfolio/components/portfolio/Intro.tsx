"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from 'framer-motion';

import Image from 'next/image';

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import GithubLogoWhite from "@/public/icons/github-white.svg";
import GithubLogoDark from "@/public/icons/github.svg";

import LinkedInLogoWhite from "@/public/icons/linkedin-white.svg";
import LinkedInLogoDark from "@/public/icons/linkedin.svg";

// Define your animation "variants"
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This is the magic!
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and 20px down
  visible: {
    opacity: 1,
    y: 0, // Animate to visible and original position
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Intro = () => {

  const divRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="hero" className="pt-30 md:pt-60 min-h-screen flex items-center justify-center px-4">
      <motion.div
        ref={divRef}
        className="container max-w-6xl mx-auto text-center"
        // {`container max-w-5xl mx-auto text-center transition-all duration-1000 ease-out ${
        //   isVisible 
        //     ? "opacity-100 scale-100" 
        //     : "opacity-0 scale-70"
        // }`}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h1
          className="py-3 text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r/oklch from-primary-400 from-20% to-secondary-600 to-100% text-transparent bg-clip-text"
          variants={itemVariants} // Apply the child variant
        >
          Igor Babic
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8"
          variants={itemVariants} // Apply the child variant
        >
          Fullstack Web3 Developer
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          variants={itemVariants} // Apply the child variant
        >
          <Button asChild variant="outline" size="lg" className="button-hover">
            <a href="mailto:igor@danet.one" className="inline-flex items-center">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="button-hover">
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

          <Button asChild variant="outline" size="lg" className="button-hover">
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
