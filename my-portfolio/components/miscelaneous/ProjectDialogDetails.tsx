import React from 'react'
import Image from 'next/image';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ProjectCardProps } from './ProjectCard';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';
import { Badge } from '../ui/badge';

const ProjectDialogDetails = ({ project, index, openDialogId, setOpenDialogId }: ProjectCardProps) => {
  return (
    <Dialog open={openDialogId === index} onOpenChange={(isOpen) => setOpenDialogId(isOpen ? index : null)}>
      <DialogTrigger asChild>
        {
          <div className="flex-center">
            <Button 
              variant="ghost" 
              className="text-secondary-300 border border-secondary-500 hover:bg-secondary-800 hover:text-secondary-100 mb-2"
            >
              <ChevronRight className="w-4 h-4" />
                More Details
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
        }
      </DialogTrigger>
      <DialogContent 
        className="max-w-[calc(100%-16px)] sm:max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] lg:max-w-[976px] mx-auto h-[90vh] bg-neutral-800/90 border-0 rounded-2xl flex flex-col"
      >
        
        <DialogHeader className="flex-center shrink-0">
          <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        
        <Separator className="bg-neutral-500 shrink-0"/>
        
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
                      className="badge-skills"
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

        <Separator className="bg-neutral-500 shrink-0"/>

        <DialogFooter>
          {/* Project links in dialog */}
          {(project.link || project.demoLink) &&
            <div className="w-full flex gap-4 shrink-0">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="button-hover-accent w-full">
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="button-hover-accent w-full">
                    View Code
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>}
        </DialogFooter>                    
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDialogDetails