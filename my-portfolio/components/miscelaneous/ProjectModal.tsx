import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { projects } from "../portfolio/Projects";

// Add this modal component (you can place it above your grid)
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <Button variant="ghost" onClick={onClose} className="h-8 w-8 p-0">
              ×
            </Button>
          </div>
          
          {project.image && (
            <Image 
              src={project.image} 
              alt={project.title + " screenshot"} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}
          
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.Technologies?.map((tech, i) => (
                <span key={i} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Highlights:</h4>
            <ul className="space-y-2 list-disc list-inside">
              {project.highlights && Object.entries(project.highlights).map(([header, description], i) => (
                <li key={i}>
                  <strong>{header}:</strong> {description}
                </li>
              ))}
            </ul>
          </div>
          
          {project.learned && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">What I Learned:</h4>
              <p className="text-muted-foreground italic">{project.learned}</p>
            </div>
          )}
          
          <div className="flex gap-2 mt-6">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 button-hover">
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 button-hover">
                  View Code
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};