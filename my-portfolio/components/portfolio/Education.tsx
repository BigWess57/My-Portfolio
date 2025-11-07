"use client";

import { useEffect, useRef, useState } from "react";

import { Card } from "@/components/ui/card";
import Image from "next/image";

import AlyraLogo from "@/public/icons/alyra-logo.jpg";
import PolytechLogo from "@/public/icons/polytech-logo.png";
import { ArrowRight } from "lucide-react";

const education = [
  {
    title: "Blockchain Developer Program",
    company: "Alyra Blockchain School",
    period: "April 2025 - July 2025",
    logo: AlyraLogo,
    logoSize: "w-12 h-12",
    summary:
      "Intensive 120-hour remote program focused on developing decentralized applications on the Ethereum Virtual Machine (EVM) from scratch, building comprehensive Web3 development skills.",
    points: {
      "Smart Contract Development & Security": "Mastered Solidity programming, smart contract architecture, and security best practices using OpenZeppelin libraries and ERC standards.",
      "Full-Stack DApp Development": "Built complete decentralized applications with React, TypeScript, Next.js, and modern Web3 libraries including Viem/Wagmi and RainbowKit for seamless blockchain integration.",
      "Blockchain Infrastructure & Tools": "Gained expertise in development frameworks (Hardhat, Foundry), decentralized storage (IPFS), and advanced concepts like Merkle proofs for efficient verification systems.",
      "Production-Ready Deployment": "Learned comprehensive deployment workflows including DApp deployment on Vercel and Test-Driven Development (TDD) methodologies for robust smart contract development.",
    },
  },
  {
    title: "Electronics and Robotic Systems Engineering",
    company: "Polytech Paris-Saclay",
    period: "September 2017 - May 2022",
    logo: PolytechLogo,
    logoSize: "w-27 h-12",
    summary:
      "Five-year engineering program specializing in embedded systems, electronics, and robotics, building strong foundations in low-level programming and hardware-software integration.",
    points: {
      "Embedded Systems Programming": "Developed proficiency in Embedded C programming for microcontrollers and C++ for complex robotic systems and applications.",
      "Hardware Communication Protocols": "Mastered various communication buses including SPI, I2C, UART, and industrial protocols like Modbus for system integration.",
      "Processor Architecture & Digital Design": "Gained deep understanding of RISC processor architectures (Nios II) and digital circuit design using VHDL for FPGA implementation.",
      "Engineering Methodology & Collaboration": "Strengthened problem-solving abilities, technical documentation skills, and effective teamwork through numerous engineering projects and group assignments.",
    },
  },
];

const Education = () => {  
  
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
    <section id="education" className="section-to-left">
      <div
        ref={divRef} 
        className={`flex flex-col gap-5 container max-w-4xl transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 -translate-x-32"
          }`}
      >
        <h2 className="">
          Education & Specialized Training
        </h2>

        {education.map((edu, index) => (
          <Card key={index} className="p-8 card-hover">
            <div className="">
              <h3 className="text-3xl font-semibold mb-8">{edu.title}</h3>
              <div className="text-xl text-neutral-200 font-semibold flex items-center gap-2 text-muted-foreground">
                <Image
                  src={edu.logo}
                  alt={`${edu.company} logo`}
                  className={`${edu.logoSize} object-contain`}
                />
                <p>
                  <span className="text-primary-300">{edu.company}</span> | <span className="text-neutral-400">{edu.period}</span>
                </p>
              </div>
            </div>
            <p className="text-lg text-neutral-200 leading-relaxed">{edu.summary}</p>
            <ul className="text-lg text-neutral-200 leading-relaxed list-inside space-y-2 mt-2">
              {Object.entries(edu.points).map(([header, description], i) => (
                <li key={i} className="flex">
                  <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1 shrink-0" />
                  <div>
                    <strong className="text-secondary-400">{header}:</strong> {description}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;