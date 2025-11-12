"use client";

import { useEffect, useRef, useState } from "react";

import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

import AlyraLogo from "@/public/icons/alyra-logo.jpg";
import PolytechLogo from "@/public/icons/polytech-logo.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import SnapScrollCarousel from "../miscelaneous/SnapScrollCarousel";


export interface Education {
  title: string;
  school: string;
  period: string;
  logo: StaticImageData;
  logoSize: string;
  summary: string;
  points: Record<string, string>; // or use a more specific type
}


const education: Education[] = [
  {
    title: "Blockchain Developer Program",
    school: "Alyra Blockchain School",
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
    school: "Polytech Paris-Saclay",
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

// Render function for navigation buttons
const renderNavigationButton = (edu: Education, index: number, isCurrent: boolean) => (
  <div className={`px-4 py-3 rounded-lg transition-all duration-300 ${
    isCurrent 
      ? 'bg-primary-400 text-white shadow-lg scale-[1.04]' 
      : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
  }`}>
    <div className="font-medium text-sm">{edu.school}</div>
    <div className="text-xs opacity-80 mt-1">{edu.period}</div>
  </div>
);

const renderExperience = (edu: Education, index: number) => (
  <Card key={index} className="p-8 card-carousel gap-0">
    <div className="">
      <h3 className="text-3xl font-semibold mb-8">{edu.title}</h3>
      <div className="text-xl text-neutral-200 font-semibold flex items-center gap-2 text-muted-foreground">
        <Image
          src={edu.logo}
          alt={`${edu.school} logo`}
          className={`${edu.logoSize} object-contain`}
        />
        <p>
          <span className="text-primary-300 font-serif">{edu.school}</span> | <span className="text-neutral-400">{edu.period}</span>
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      <p className="text-lg text-neutral-200 leading-relaxed">{edu.summary}</p>
      <ul className="text-lg text-neutral-200 leading-relaxed list-inside space-y-2">
        {Object.entries(edu.points).map(([header, description], i) => (
          <li key={i} className="flex">
            <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1 shrink-0" />
            <div>
              <strong className="text-secondary-400">{header}:</strong> {description as string}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Card>
)

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
        className={`flex flex-col gap-5 container max-w-6xl transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 -translate-x-32"
          }`}
      >
        <h2 className="">
          Education & Specialized Training
        </h2>

        <SnapScrollCarousel
          items={education}
          renderItem={renderExperience}
          renderNavigationButton={renderNavigationButton}
          scaleFactor={1.1} // 8% bigger for current item
          // scrollDuration={3000}
          menuLeft={false}
        />

      </div>
    </section>
  );
};

export default Education;