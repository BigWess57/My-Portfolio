import { Card } from "@/components/ui/card";
import Image from "next/image";

import AlyraLogo from "@/public/icons/alyra-logo.jpg";
import PolytechLogo from "@/public/icons/polytech-logo.png";

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
  return (
    <section id="education" className="bg-background-1">
      <div className="flex flex-col gap-5 container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-text-1">
          Education & Specialized Training
        </h2>

        {education.map((edu, index) => (
          <Card key={index} className="p-8 card-hover">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">{edu.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Image
                  src={edu.logo}
                  alt={`${edu.company} logo`}
                  className={`${edu.logoSize} object-contain`}
                />
                <p>
                  {edu.company} | {edu.period}
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">{edu.summary}</p>
            <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 mt-2">
              {Object.entries(edu.points).map(([header, description], i) => (
                <li key={i}>
                  <strong>{header}:</strong> {description}
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