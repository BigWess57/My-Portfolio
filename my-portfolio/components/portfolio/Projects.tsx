import Image from "next/image";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import DareWinThumbnail from "@/public/images/DareWin-thumbnail.png";
import DashboardThumbnail from "@/public/images/Dashboard.png";
import DogaThumbnail from "@/public/images/Projet Doga.png";

const projects = [
  {
    title: "DareWin — Decentralized Challenge Platform",
    description: "A Web3 application that lets friends create and join challenges on Ethereum, with smart-contract–secured rewards.",
    details: "Built with Solidity, React, Next.js, Wagmi, and Hardhat, it connects seamlessly to wallets via RainbowKit. Designed and developed from scratch — from contract architecture to frontend integration and deployment.",
    highlights: [
      "Designed and deployed Solidity contracts securing challenge rewards.",
      "Integrated seamless wallet onboarding and UX with RainbowKit and Wagmi.",
      "End-to-end delivery: contract tests, frontend, and deployment."
    ],
    image: DareWinThumbnail,
    link: true,
  },
  {
    title: "Production Monitoring System (IMDS Software)",
    description: "Data analytics dashboard with advanced visualization",
    details: "Designed and maintained a full-stack monitoring tool using ReactJS, C#, and Java",
    highlights: [
      "Led development of key visualizations and alerting hooks for production anomalies.",
      "Improved tooling stability and prepared the app for internal deployment."
    ],
    image: DashboardThumbnail,
    link: false,
  },
  {
    title: "3D Tool Positioning System (DOGA)",
    description: "Vision-based solution for estimating tool positions in 3D",
    details: "Built using C++, OpenGL, and embedded Linux. Focused on real-time processing, hardware integration, and precision estimation.",
    highlights: [
      "Implemented robust detection and angle estimation for 3D positioning on embedded hardware.",
      "Built a lightweight web interface to display positions and guide technicians during assembly.",
      "Moved prototype towards production-ready system within 6 months."
    ],
    image: DogaThumbnail,
    link: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-background-2">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-text-2">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="text-text-1 border-(--color-border-3) card-hover">
              <CardHeader>
                {project.image && 
                <div>
                  <Image src={project.image} alt={project.title + " screenshot"} className="w-full h-48 object-cover rounded-md mb-4"/>
                </div>}
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <p className="text-muted-foreground mb-4">{project.details}</p> */}
                <ul className="space-y-1 mb-4">
                  {project.highlights && project.highlights.map((h, i) => <li key={i}>• {h}</li>)}
                </ul>
                {project.link && 
                  <a 
                    href="https://github.com/BigWess57/Projet-DareWin" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full"
                  >
                    <Button variant="outline" className="gap-2 w-full bg-solid-1 hover:bg-solid-2 border-(--color-border-3) text-text-2">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
