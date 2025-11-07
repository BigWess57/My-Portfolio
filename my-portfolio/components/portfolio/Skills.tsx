'use client'

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Web3 development",
    skills: ["Solidity", "Smart Contract Architecture", "ERC Standards", "OpenZeppelin", "Uniswap SDK", "Hardhat", "Foundry", "GraphQL", "IPFS", "Merkle Proofs"],
  },
  {
    title: "Front-End & Integration",
    skills: ["React", "TypeScript", "TailwindCSS", "Next.js", "Viem / Wagmi", "RainbowKit", "DApp deployment (Vercel)"],
  },
  {
    title: "Development practices",
    skills: ["GitHub Actions", "CI/CD & Version Control", "Test-Driven Development (TDD)", "UI/UX for DApps"],
  },
  {
    title: "Additionnal skills",
    skills: ["C", "C++", "C#", "Embedded Linux", "Problem Solving", "Documentation", "Teamwork"],
  },
];

const Skills = () => {

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
      <div className="container max-w-8xl ">
        <h2
          ref={divRef}
          className={`transition-all duration-600 ease-out ${
            isVisible 
              ? "opacity-100" 
              : "opacity-0"
          }`}
        >My Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              ref={divRef} 
              className={`transition-all duration-600 ease-out ${
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  
                  : (index%2) ? "opacity-0 translate-x-32"
                    : "opacity-0 -translate-x-32"
                }`}
            >
              <Card className="p-8 card-hover">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 min-w-0">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
