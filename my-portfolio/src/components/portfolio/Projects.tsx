"use client";

import { StaticImageData } from "next/image";

import * as ScrollAreaRadix from '@radix-ui/react-scroll-area';

import DareWinThumbnail from "@/public/images/DareWin-thumbnail.png";
import DashboardThumbnail from "@/public/images/Dashboard.png";
import DogaThumbnail from "@/public/images/Projet Doga.png";
import SRPIThumbnail from "@/public/images/LPR.jpg";

import DareWinLogo from "@/public/icons/DareWin-Logo-bleu.png";
import { useCallback, useEffect, useRef, useState } from "react";

import ProjectCard from "../miscelaneous/ProjectCard";

import { useTranslations } from "next-intl";

export type Project = {
  id: ProjectId;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  keyHighlights: object;
  highlights: object;
  learned: string;
  image: StaticImageData;
  logo?: StaticImageData;
  link?: string;
  demoLink?: string;
}
type ProjectId = 'darewin' | 'addoc' | 'srpi' | 'doga';
type ProjectImages = Record<ProjectId, StaticImageData>;


const Projects = () => {

  const t = useTranslations('projects');

  // Get all project IDs
  const projectIds: ProjectId[] = ['darewin', 'addoc', 'srpi', 'doga'];

  const images: ProjectImages = {
    darewin: DareWinThumbnail,
    addoc: DashboardThumbnail,
    srpi: SRPIThumbnail,
    doga: DogaThumbnail,
  };

  ////Main projects content object
  const projects: Project[] = projectIds.map(id => {
    const project: Project = {
      id,
      title: t(`${id}.title`),
      shortDescription: t(`${id}.shortDescription`),
      description: t(`${id}.description`),
      technologies: t.raw(`${id}.technologies`) as string[],
      keyHighlights: t.raw(`${id}.keyHighlights`) as Record<string, string>,
      highlights: t.raw(`${id}.highlights`) as Record<string, string>,
      learned: t(`${id}.learned`),
      image: images[id],
    };

    // Add DareWin-specific fields
    if (id === 'darewin') {
      project.logo = DareWinLogo;
      project.link = t('darewin.link');
      project.demoLink = t('darewin.demoLink');
    }

    return project;
  })



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
        <h2 className="mb-12">{t('title')}</h2>
          <ScrollAreaRadix.Root onWheel={onWheel} className="overflow-x-hidden">
            <ScrollAreaRadix.Viewport ref={viewportRef} className="overflow-x-hidden">
            <div 
              className="flex w-max gap-16 ml-20 p-15"
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} openDialogId={openDialogId} setOpenDialogId={setOpenDialogId}/>
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
