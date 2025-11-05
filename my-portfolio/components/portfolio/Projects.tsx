'use client'

import Image from "next/image";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import * as ScrollAreaRadix from '@radix-ui/react-scroll-area';

import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import DareWinThumbnail from "@/public/images/DareWin-thumbnail.png";
import DashboardThumbnail from "@/public/images/Dashboard.png";
import DogaThumbnail from "@/public/images/Projet Doga.png";
import SRPIThumbnail from "@/public/images/LPR.jpg";

import DareWinLogo from "@/public/icons/DareWin-Logo-bleu.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export const projects = [
  {
    title: "DareWin — Decentralized Challenge Platform",
    shortDescription: "Decentralized challenge platform on Base where friends create challenges, bid DARE tokens, and vote to determine winners who receive the full prize pool.",
    description: "A fully decentralized Web3 application that enables friends to create and join challenges on Base. Players bid DARE Tokens, and after time elapses, the community-voted winner receives the entire prize pool via smart contracts.",
    technologies: ["React", "Next.js", "Solidity", "Hardhat", "Wagmi", "RainbowKit", "GraphQL", "IPFS", "Merkle Proofs", "ERC Standards"],
    keyHighlights: {
      "Full-Stack dApp": "Solidity smart contracts with custom ERC20 token + React frontend",
      "Secure Blockchain System": "Merkle proof whitelisting, voting mechanism & automated prize distribution",
      "Optimized Web3 UX": "Wallet integration & GraphQL event indexing",
      "End-to-end delivery": "Development, testing & deployment",
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
    shortDescription: "Dashboard designed to provide real-time monitoring and analytics for document production flows from the company's flagship product, AD'DOC Capture Pro",
    description: "Dashboard designed to provide real-time monitoring and analytics for document production flows from the company's flagship product, AD'DOC Capture Pro",
    technologies: ["React", "Java", "Spring + Maven", "SQL Server" ],
    keyHighlights: {
      "Full-Stack Development": "Led dashboard from pre-production towards internal deployment with new features and improvements",
      "User-Centric Approach": "Collaborated with users to translate needs into functional, intuitive features",
    },
    highlights: {
      "Full-Stack Development & Product Maturation": "Led the full-stack development of new features and significant improvements, taking the dashboard from a pre-production state to a viable tool ready for internal deployment.",
      "User-Centric Development & Communication": "Collaborated closely with future users to gather requirements, translating their specific needs into functional and intuitive software features.",
    },
    learned: "This project underscored a crucial lesson: great software isn't just about code, it's about solving the right problems. By actively listening to users, I ensured the features I built directly addressed their workflow challenges, highlighting the vital link between development and user-centric design.",
    image: DashboardThumbnail,
  },
  {
    title: "SRPI - License Plate Recognition System (IMDS Software)",
    shortDescription: "A critical license plate recognition system deployed and in active use by the Canadian government. I was responsible for maintaining and improving the system in a high-stakes production environment.",
    description: "A critical license plate recognition system deployed and in active use by the Canadian government. I was responsible for maintaining and improving the system in a high-stakes production environment.",
    technologies: ["C#", ".NET Framework", "Windows Services & Automation", "SQL Server" ],
    keyHighlights: {
      "Production System Stability": "Resolved critical bugs in live government system, ensuring reliability",
      "Legacy Code Expertise": "Navigated and improved complex codebase under pressure",
      "Structured Problem-Solving": "Managed tight deadlines with methodical issue resolution",
    },
    highlights: {
      "Production System Stability & Reliability": "Addressed and resolved critical bugs in a live production system, contributing directly to its stability and reliability for a government client.",
      "Legacy Code Maintenance & Complex Problem-Solving": "Learned to navigate and improve a large, complex codebase under pressure.",
      "Structured Work Under Pressure": "Successfully managed tight deadlines and high-stress situations, developing a structured and methodical approach to problem-solving to prioritize and resolve issues effectively.",
    },
    learned: "This project was a masterclass in production software maintenance. I learned the critical importance of clean, maintainable code, comprehensive logging for traceability, and performing effectively under pressure in mission-critical environments.",
    image: SRPIThumbnail,
  },
  {
    title: "3D Tool Positioning System (DOGA)",
    shortDescription: "A vision-based industrial system that estimates the 3D position and orientation of tools in real-time, providing visual guidance to technicians during assembly operations.",
    description: "A vision-based industrial system that estimates the 3D position and orientation of tools in real-time, providing visual guidance to technicians during assembly operations.",
    technologies: ["C++", "Embedded Linux", "Computer Vision", "Html/CSS", "Javascript", "Real-time Systems"],
    keyHighlights: {
      "Embedded Vision System": "Developed Linux-based 3D positioning system from prototype to production",
      "Real-time Algorithms": "Implemented detection for real-time tool tracking and technician guidance",
      "Full-Stack Integration": "Built web interface with live streaming to bridge hardware and software",
    },
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
  
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const accumulatedDeltaRef = useRef(0);
  const currentScrollRef = useRef(0);

  const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    // Check if any modal is open and prevent horizontal scroll if true
    if (openDialogId !== null) {
      return;
    }

    if (
      !viewportRef.current ||
      e.deltaY === 0 ||
      e.deltaX !== 0 
    ) {
      return;
    }

    const container = viewportRef.current;

    const isAtLeft = container.scrollLeft <= 0;
    const isAtRight = container.scrollLeft >= container.scrollWidth - container.clientWidth;
    
    const shouldScrollHorizontally = 
      (e.deltaY > 0 && !isAtRight) || 
      (e.deltaY < 0 && !isAtLeft);

    if(!shouldScrollHorizontally){
      return
    }

    e.preventDefault();
    e.stopPropagation();
    

    // Accumulate the delta for smooth continuous motion
    accumulatedDeltaRef.current += e.deltaY * 2;
  
    if (!scrollAnimationRef.current) {
      const container = viewportRef.current;
      currentScrollRef.current = container.scrollLeft;
      
      const animate = () => {
        if (Math.abs(accumulatedDeltaRef.current) > 0.1) {
          // Apply easing to the accumulated delta
          const deltaToApply = accumulatedDeltaRef.current * 0.2;
          accumulatedDeltaRef.current -= deltaToApply;
          
          currentScrollRef.current += deltaToApply;
          container.scrollLeft = currentScrollRef.current;
          
          scrollAnimationRef.current = requestAnimationFrame(animate);
        } else {
          accumulatedDeltaRef.current = 0;
          scrollAnimationRef.current = null;
        }
      };
      scrollAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [openDialogId]);

  //For appearing
  const divRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

/*********** Use Effects  **************/
  //For horizontal scrolling
  useEffect(() => {
    viewportRef.current?.addEventListener('wheel', (e: WheelEvent) => {
      onWheel(e as unknown as React.WheelEvent<HTMLDivElement>);
    });
  }, [onWheel]);

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
    <section id="projects" className="px-0 overflow-x-hidden">
      <div 
        ref={divRef}
        className={`w-full transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-80"
        }`}
      >
        <h2 className="mb-12">My Projects</h2>
          <ScrollAreaRadix.Root onWheel={onWheel} className="overflow-x-hidden">
            <ScrollAreaRadix.Viewport ref={viewportRef} className="overflow-x-hidden">
            <div 
              className="flex w-max space-x-16 ml-20 p-8"
            >
              {projects.map((project, index) => (
              <Card key={index} className="card-hover max-w-xl mx-auto">
                <div className="px-5">
                  {project.image && 
                  <div>
                    <Image src={project.image} alt={project.title + " screenshot"} className="w-full h-70 object-cover rounded-md mb-4"/>
                  </div>}
                  <div className="text-xl font-bold flex-center gap-2 mb-2">
                    {project.logo && <Image src={project.logo} alt={project.title + " logo"} className="w-10 h-10"/>}
                    {project.title}
                  </div>
                  <div>{project.shortDescription}</div>
                </div>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.technologies?.slice(0, 4).map((tech, i) => ( // Show only first 4 technologies
                      <Badge 
                        key={i} 
                        variant="secondary"
                        title={tech} 
                        className="max-w-56 overflow-hidden bg-secondary-500 text-text-2"
                      >
                        <span className="block truncate whitespace-nowrap text-left text-sm">
                          {tech}
                        </span>
                      </Badge>
                    ))}
                    {project.technologies?.length > 4 && (
                      <Badge 
                        variant="secondary"
                        title="more" 
                        className="max-w-56 overflow-hidden bg-secondary-500/60 text-text-2"
                      >
                        <span className="block truncate whitespace-nowrap text-left text-sm">
                          +{project.technologies.length - 4} more...
                        </span>
                      </Badge>
                    )}
                  </div>
                  {/* <p className="text-muted-foreground mb-4">{project.details}</p> */}
                  <ul className="space-y-2 mb-5 list-inside mt-2">
                    {project.keyHighlights && Object.entries(project.keyHighlights).map(([header, description], i) => (
                      <li key={i} className="flex">
                        <ArrowRight className="w-4 h-4 mr-2 mt-1 shrink-0" />
                        <div>
                          <strong>{header}:</strong> {description}
                        </div>
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
                    <DialogContent 
                      className="max-w-[calc(100%-16px)] sm:max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] lg:max-w-[976px] mx-auto h-[90vh] bg-primary-900/90 text-text-2 border-0 rounded-2xl flex flex-col"
                    >
                      
                      <DialogHeader className="flex-center shrink-0">
                        <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      
                      <Separator className="bg-background-500 shrink-0"/>
                      
                      <div className="flex-1 min-h-0">
                        <ScrollArea className="h-full w-full pr-8">
                          <div className="space-y-4 p-1">
                            {project.image && (
                              <Image
                                src={project.image}
                                alt={project.title + " screenshot"}
                                className="flex-center w-full h-70 object-contain rounded-md"
                              />
                            )}

                            <div>
                              <h4 className="font-semibold mb-2">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, i) => (
                                  <Badge 
                                    key={i} 
                                    variant="secondary"
                                    title={tech} 
                                    className="max-w-56 overflow-hidden bg-accent-800 text-text-2"
                                  >
                                    <span className="block truncate whitespace-nowrap text-left text-sm">
                                      {tech}
                                    </span>
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Key Achievements:</h4>
                              <ul className="space-y-3 list-inside">
                                {Object.entries(project.highlights).map(([header, description], i) => (
                                  <li key={i} className="flex">
                                    <ArrowRight className="w-4 h-4 mr-2 mt-1 shrink-0" />
                                    <div>
                                      <strong>{header}:</strong> {description}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {project.learned && (
                              <div>
                                <h4 className="font-semibold mb-2">What I Learned:</h4>
                                <p className="italic">{project.learned}</p>
                              </div>
                            )}
                          </div>

                        </ScrollArea>
                      </div>

                      <Separator className="bg-background-500 shrink-0"/>

                      <DialogFooter>
                        {/* Project links in dialog */}
                        {(project.link || project.demoLink) &&
                          <div className="w-full flex gap-4 shrink-0">
                            {project.demoLink && (
                              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="outline" className="button-hover w-full">
                                  Live Demo
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </a>
                            )}
                            {project.link && (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="outline" className="button-hover w-full">
                                  View Code
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </a>
                            )}
                          </div>}
                      </DialogFooter>                    
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
            </ScrollAreaRadix.Viewport>
            <ScrollAreaRadix.Scrollbar orientation="horizontal">
              <ScrollAreaRadix.Thumb />
            </ScrollAreaRadix.Scrollbar>
          </ScrollAreaRadix.Root>
        </div>
    </section>
  );
};

export default Projects;
