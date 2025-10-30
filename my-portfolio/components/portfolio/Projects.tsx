'use client'

import Image from "next/image";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import DareWinThumbnail from "@/public/images/DareWin-thumbnail.png";
import DashboardThumbnail from "@/public/images/Dashboard.png";
import DogaThumbnail from "@/public/images/Projet Doga.png";
import SRPIThumbnail from "@/public/images/LPR.jpg";

import DareWinLogo from "@/public/icons/DareWin-Logo-bleu.png";
import { useState } from "react";

export const projects = [
  {
    title: "DareWin — Decentralized Challenge Platform",
    shortDescription: "this is my first project description",
    description: "A fully decentralized Web3 application that enables friends to create and join challenges on Base. Players bid DARE Tokens, and after time elapses, the community-voted winner receives the entire prize pool via smart contracts.",
    technologies: ["React", "Next.js", "Solidity", "Hardhat", "Wagmi", "RainbowKit", "GraphQL", "IPFS", "Merkle Proofs", "ERC Standards"],
    keyHighlights: {
      "End-to-End Web3 Architecture": "Develop cotntract very secure",
      "Utility Token": "Token ERC20 DARE, utility for dfees",
      "Secure Smart Contract Development": "Build secure and optimized smart contracts avoiding common security issues (reentrancy, DoS, Front running...)"
    },
    highlights: {
      "End-to-End Web3 Architecture": "Designed and implemented the complete dApp architecture from smart contracts to frontend, showcasing full-stack blockchain development capabilities.",
      "Utility Token": "Created the DARE ERC20 token, used for participating to challenges, and get discounts on usage fees",
      "Secure Smart Contract Development": "Built secure Solidity smart contracts that handle DARE deposits, voting mechanisms, and automated prize distribution with secure withdrawal patterns.",
      "Decentralized Access Control": "Implemented Merkle proof whitelisting with IPFS storage for player verification, demonstrating advanced Web3 identity and access management solutions.",
      "Optimized Frontend Integration": "Leveraged Wagmi and RainbowKit for seamless Ethereum wallet connectivity and interactions, creating smooth user experience for blockchain operations.",
      "Decentralized Event Indexing": "Utilized GraphQL for efficient blockchain event indexing and querying, ensuring fast and reliable data retrieval from Ethereum.",
      "Solo Full-Stack Delivery": "Successfully architected, developed, tested, and deployed the entire application independently, demonstrating strong project ownership and technical versatility.",
    },
    learned: "Building DareWin from scratch provided deep hands-on experience in the entire Web3 development stack. I mastered smart contract security patterns, decentralized frontend integration, and the importance of gas optimization and user experience in blockchain applications. This project solidified my passion for building decentralized solutions that combine technical innovation with practical user value.",
    image: DareWinThumbnail,
    logo: DareWinLogo,
    link: "https://github.com/BigWess57/Projet-DareWin",
    demoLink: "https://projet-dare-win.vercel.app/",
  },
  {
    title: "AD'DOC Dashboard - Production Monitoring System (IMDS Software)",
    description: "Dashboard designed to provide real-time monitoring and analytics for document production flows from the company's flagship product, AD'DOC Capture Pro",
    technologies: ["React", "Java", "Spring + Maven", "SQL Server" ],
    highlights: {
      "Full-Stack Development & Product Maturation": "Led the full-stack development of new features and significant improvements, taking the dashboard from a pre-production state to a viable tool ready for internal deployment.",
      "User-Centric Development & Communication": "Collaborated closely with future users to gather requirements, translating their specific needs into functional and intuitive software features.",
    },
    learned: "This project underscored a crucial lesson: great software isn't just about code, it's about solving the right problems. By actively listening to users, I ensured the features I built directly addressed their workflow challenges, highlighting the vital link between development and user-centric design.",
    image: DashboardThumbnail,
  },
  {
    title: "SRPI - License Plate Recognition System (IMDS Software)",
    description: "A critical license plate recognition system deployed and in active use by the Canadian government. I was responsible for maintaining and improving the system in a high-stakes production environment.",
    technologies: ["C#", ".NET Framework", "Windows Services & Automation", "SQL Server" ],
    highlights: {
      "Production System Stability & Reliability": "Addressed and resolved critical bugs in a live production system, contributing directly to its stability and reliability for a government client.",
      "Legacy Code Maintenance & Complex Problem-Solving": "Learned to navigate and improve a large, complex codebase under pressure.",
      "Structured Work Under Pressure": "Successfully managed tight deadlines and high-stress situations, developing a structured and methodical approach to problem-solving to prioritize and resolve issues effectively.",
    },
    learned: "This project was a masterclass in production-level software maintenance. It taught me the importance of writing clean, maintainable code and honed my ability to perform effectively under the pressure of a high-visibility, mission-critical application.",
    image: SRPIThumbnail,
  },
  {
    title: "3D Tool Positioning System (DOGA)",
    description: "A vision-based industrial system that estimates the 3D position and orientation of tools in real-time, providing visual guidance to technicians during assembly operations.",
    technologies: ["C++", "Embedded Linux", "Computer Vision", "Html/CSS", "Javascript", "Real-time Systems"],
    highlights: {
      "Embedded Computer Vision Solution": "Developed and deployed a vision-based system on embedded Linux that accurately estimates 3D position and orientation of industrial tools, advancing from prototype towards production-ready performance.",
      "Real-time Precision Algorithms": "Implemented detection algorithms that calculate tool angles and positions in real-time, providing immediate visual feedback to guide technicians during complex assembly tasks.",
      "Full-Stack System Integration": "Built a web interface with live video streaming to visualize tool positions, creating a complete hardware-software solution that bridges embedded systems with user-facing applications.",
    },
    learned: "This internship taught me how to bridge the gap between theoretical algorithms and practical industrial applications. I learned to develop complete systems that integrate embedded hardware, computer vision, and user interfaces to solve real-world manufacturing challenges.",
    image: DogaThumbnail,
  },
];

const Projects = () => {
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);
  
  return (
    <section id="projects" className="bg-background-2">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-text-2">My Projects</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                {project.image && 
                <div>
                  <Image src={project.image} alt={project.title + " screenshot"} className="w-full h-70 object-cover rounded-md mb-4"/>
                </div>}
                <CardTitle className="text-xl flex-center gap-2">
                  {project.logo && <Image src={project.logo} alt={project.title + " logo"} className="w-10 h-10"/>}
                  {project.title}
                </CardTitle>
                <CardDescription>{project.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.technologies?.slice(0, 4).map((tech, i) => ( // Show only first 4 technologies
                    <span key={i} className="bg-solid-2/70 text-text-2 text-sm px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies?.length > 4 && (
                    <span className="bg-muted text-muted-text-1 text-sm px-2 py-1 rounded">
                      +{project.technologies.length - 4} more...
                    </span>
                  )}
                </div>
                {/* <p className="text-muted-foreground mb-4">{project.details}</p> */}
                <ul className="space-y-2 mb-5 list-disc list-inside mt-2">
                  {project.keyHighlights && Object.entries(project.keyHighlights).map(([header, description], i) => (
                    <li key={i}>
                      <strong>{header}:</strong> {description}
                    </li>
                  ))}
                </ul>


                {/* Dialog for more details */}
                <Dialog open={openDialogId === index} onOpenChange={(isOpen) => setOpenDialogId(isOpen ? index : null)}>
                  <DialogTrigger asChild>
                    {
                      <Button 
                        variant="ghost" 
                        className="w-full gap-2 text-muted-text-1 hover:text-text-2 mb-2"
                      >
                        <ChevronRight className="w-4 h-4" />
                        More Details
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                    }
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-interactive-2 text-text-2 border-border-1 rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    
                    <ScrollArea className="grow pr-4">
                      <div className="space-y-4">
                        {/* Full project image */}
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title + " screenshot"}
                            className="w-full h-48 object-cover rounded-md"
                          />
                        )}

                        {/* All technologies */}
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech, i) => (
                              <span key={i} className="bg-solid-2/70 text-text-2 text-sm px-3 py-1 rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* All highlights */}
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="space-y-3 list-disc list-inside">
                            {Object.entries(project.highlights).map(([header, description], i) => (
                              <li key={i}>
                                <strong>{header}:</strong> {description}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Lessons learned */}
                        {project.learned && (
                          <div>
                            <h4 className="font-semibold mb-2">What I Learned:</h4>
                            <p className="italic">{project.learned}</p>
                          </div>
                        )}
                      </div>

                      <ScrollBar className="bg-background-2"/>

                    </ScrollArea>

                    {/* Project links in dialog */} ,
                    <div className="flex gap-2 mt-6">
                      {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" className="button-hover gap-2 w-full">
                            Live Demo
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" className="button-hover gap-2 w-full">
                            View Code
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>



                <div className="flex-center gap-2">
                  {project.demoLink && 
                    <a 
                      href={project.demoLink}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full"
                    >
                      <Button variant="outline" className="gap-2 w-full button-hover">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>}
                  {project.link && 
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full"
                    >
                      <Button variant="outline" className="gap-2 w-full button-hover">
                        View Code
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>}
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
