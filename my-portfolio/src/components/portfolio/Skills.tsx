'use client'

import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { containerVariants, itemVariants } from "./Intro";
import { useTranslations } from "next-intl";


const itemVariantsLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0, // Animate to visible and original position
    transition: { type: 'spring', stiffness: 100 },
  },
};

const itemVariantsRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0, // Animate to visible and original position
    transition: { type: 'spring', stiffness: 100 },
  },
};


const Skills = () => {

  const t = useTranslations('skills');

  const skillCategories = [
  {
    title: t('frontend.title'),
    skills: [
      "React",
      "TypeScript", 
      "TailwindCSS",
      "Next.js",
      "Viem / Wagmi",
      "RainbowKit",
      t('frontend.deployment')
    ],
  },
  {
    title: t('backend.title'),
    skills: [
      "Java (Spring & Maven)",
      "C#",
      "SQL Server",
      "MySQL"
    ],
  },
  {
    title: t('web3.title'), 
    skills: [
      "Solidity",
      t('web3.contractsArchitecture'),
      t('web3.ERCstandards'),
      "OpenZeppelin",
      "Uniswap SDK", 
      "Hardhat",
      "Foundry",
      "GraphQL",
      "IPFS",
      t('web3.merkleProofs')
    ],
  },
  {
    title: t('additionnal.title'),
    skills: [
      "C",
      "C++",
      "Python",
      t('additionnal.embeddedLinux'),
      "GitHub Actions",
      "CI/CD & Version Control", 
      t('developmentPractices.tdd'),
      t('developmentPractices.uiux')
    ],
  },
  ];

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
    <section id="skills" className="flex justify-center"> 

      <motion.div
        ref={divRef}
        className="container max-w-8xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
        >
          {t('title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={(index%2) ? itemVariantsLeft : itemVariantsRight}
            >
              <Card className="p-8 card-hover">
                <h3 className="text-2xl font-semibold mb-4 text-left">{category.title}</h3>
                <div className="flex flex-wrap gap-2 min-w-0">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      title={skill} 
                      className="badge-skills"
                    >
                      <span className="block truncate whitespace-nowrap text-left text-sm">
                        {skill}
                      </span>
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
