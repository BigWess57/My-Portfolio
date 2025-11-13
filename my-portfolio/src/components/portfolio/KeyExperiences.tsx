"use client";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/src/components/ui/card";

import Image, { StaticImageData } from "next/image";

import IMDSLogo from "@/public/icons/IMDS-6-300x163.jpg";
import DOGALogo from "@/public/icons/doga.jpg";
import BabylissLogo from "@/public/icons/babyliss-logo.png";
import { ArrowRight } from "lucide-react";
import SnapScrollCarousel from "../miscelaneous/SnapScrollCarousel";
import { useTranslations } from "next-intl";



export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  points: Record<string, string>;
  logo: StaticImageData; // or the actual type of your image imports
  logoSize: string;
}


const renderNavigationButton = (exp: Experience, index: number, isCurrent: boolean) => (
  <div className={`px-4 py-3 rounded-lg transition-all duration-300 ${
    isCurrent 
      ? 'bg-primary-400 text-white shadow-lg scale-[1.04]' 
      : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
  }`}>
    <div className="font-medium text-sm">{exp.company}</div>
    <div className="text-xs opacity-80 mt-1">{exp.period}</div>
  </div>
);

const renderExperience = (exp: Experience, index: number) => (
  <Card key={index} className="p-8 card-carousel gap-0 ">
    <div className="">
      <h3 className="text-3xl font-semibold mb-8">{exp.title}</h3>
      <div className="flex text-xl text-neutral-200 font-semibold items-center gap-2 text-muted-foreground mb-3">
        <Image
          src={exp.logo}
          alt={`${exp.company} logo`}
          className={`${exp.logoSize} object-contain`}
        />
        <p>
          <span className="text-primary-300 font-serif">{exp.company}</span> | <span className="text-neutral-400">{exp.period}</span>
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-6">
      <p className="text-lg text-neutral-200 leading-relaxed">{exp.summary}</p>
      <ul className="text-lg text-neutral-200 leading-relaxed list-inside space-y-2">
        {Object.entries(exp.points).map(([header, description], i) => (
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


const KeyExperiences = () => {
  
  const t = useTranslations('keyExperiences');
  
  const divRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up Intersection Observer to manage entry on view range
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


  const experiencesData = t.raw('list') as Array<{
    id: string;
    title: string;
    company: string;
    period: string;
    summary: string;
    points: Record<string, string>;
  }>;

  // Helper function to get logo details
  const getLogoDetails = (id: string) => {
    const logos = {
      imds: { logo: IMDSLogo, logoSize: "w-15 h-10" },
      doga: { logo: DOGALogo, logoSize: "w-8 h-8" },
      babyliss: { logo: BabylissLogo, logoSize: "w-25 h-10" },
    };
    return logos[id as keyof typeof logos];
  };

  const experiences: Experience[] = experiencesData.map(exp => ({
    ...exp,
    ...getLogoDetails(exp.id)
  }));

  return (
    <section id="key-experiences" className="section-to-right">
      <div 
        ref={divRef} 
        className={`flex flex-col gap-5 container max-w-6xl transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-32"
          }`}
      >
        <h2 className="mb-0">
          {t('title')}
        </h2>

        <SnapScrollCarousel
          items={experiences}
          renderItem={renderExperience}
          renderNavigationButton={renderNavigationButton}
          scaleFactor={1.1} // 8% bigger for current item
          // scrollDuration={3000}
          menuLeft={true}
        />

      </div>
    </section>
  );
};

export default KeyExperiences;


