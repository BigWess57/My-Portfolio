import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DareWin — Decentralized Challenge Platform",
    description: "A Web3 application that lets friends create and join challenges on Ethereum, with smart-contract–secured rewards.",
    details: "Built with Solidity, React, Next.js, Wagmi, and Hardhat, it connects seamlessly to wallets via RainbowKit. Designed and developed from scratch — from contract architecture to frontend integration and deployment.",
    link: true,
  },
  {
    title: "Production Monitoring System (IMDS Software)",
    description: "Data analytics dashboard with advanced visualization",
    details: "Designed and maintained a full-stack monitoring tool using ReactJS, C#, and Java",
    link: false,
  },
  {
    title: "3D Tool Positioning System (DOGA)",
    description: "Vision-based solution for estimating tool positions in 3D",
    details: "Built using C++, OpenGL, and embedded Linux. Focused on real-time processing, hardware integration, and precision estimation.",
    link: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card animate-scale-in hover:shadow-lg transition-smooth">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.details}</p>
                {project.link && 
                    <Button variant="outline" className="gap-2 w-full">
                    View Project
                        <ExternalLink className="w-4 h-4" />
                    </Button>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
