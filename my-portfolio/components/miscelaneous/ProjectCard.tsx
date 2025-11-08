import React from 'react'
import Image from 'next/image';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from '../ui/badge';

import { ArrowRight, ExternalLink } from 'lucide-react';

import { ProjectType } from '../portfolio/Projects';
import ProjectDialogDetails from './ProjectDialogDetails';


export type ProjectCardProps = {
  project: ProjectType;
  index: number;
  openDialogId: number| null;
  setOpenDialogId: React.Dispatch<React.SetStateAction<number | null>>;
};

const ProjectCard = ({ project, index, openDialogId, setOpenDialogId }: ProjectCardProps) => {
  return (
    <Card className="card-hover max-w-xl mx-auto">
      <div className="px-5">
        {project.image && 
        <div>
          <Image src={project.image} alt={project.title + " screenshot"} className="w-full h-70 object-cover rounded-md mb-4"/>
        </div>}
        <h3 className="flex-center gap-2 mb-2">
          {project.logo && <Image src={project.logo} alt={project.title + " logo"} className="w-10 h-10"/>}
          <span className="text-accent-400">{project.title}</span>
        </h3>
        <div className="text-neutral-200">{project.shortDescription}</div>
      </div>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-7">
          {project.technologies?.slice(0, 4).map((tech, i) => ( // Show only first 4 technologies
            <Badge 
              key={i} 
              variant="secondary"
              title={tech} 
              className="badge-skills"
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
              className="badge-skills opacity-70"
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
              <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1 shrink-0" />
              <div className="text-neutral-200">
                <strong className="text-secondary-400">{header}:</strong> {description}
              </div>
            </li>
          ))}
        </ul>

        {/* Dialog for more details */}
        <ProjectDialogDetails project={project} index={index} openDialogId={openDialogId} setOpenDialogId={setOpenDialogId}/>


        <div className="flex-center gap-2">
          {project.demoLink && 
            <a 
              href={project.demoLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full"
            >
              <Button variant="outline" className="gap-2 w-full button-hover-accent">
                Live Demo
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
              <Button variant="outline" className="gap-2 w-full button-hover-accent">
                View Code
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>}
        </div>
        
      </CardContent>
    </Card>
  )
}

export default ProjectCard