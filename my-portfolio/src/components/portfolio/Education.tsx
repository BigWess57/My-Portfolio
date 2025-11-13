"use client";

import { useEffect, useRef, useState } from "react";

import { Card } from "@/src/components/ui/card";
import Image, { StaticImageData } from "next/image";

import AlyraLogo from "@/public/icons/alyra-logo.jpg";
import PolytechLogo from "@/public/icons/polytech-logo.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import SnapScrollCarousel from "../miscelaneous/SnapScrollCarousel";
import { useTranslations } from "next-intl";


export interface Education {
  title: string;
  school: string;
  period: string;
  logo: StaticImageData;
  logoSize: string;
  summary: string;
  points: Record<string, string>; // or use a more specific type
}


// Render function for navigation buttons
const renderNavigationButton = (edu: Education, index: number, isCurrent: boolean) => (
  <div className={`px-4 py-3 rounded-lg transition-all duration-300 ${
    isCurrent 
      ? 'bg-primary-400 text-white shadow-lg scale-[1.04]' 
      : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
  }`}>
    <div className="font-medium text-sm">{edu.school}</div>
    <div className="text-xs opacity-80 mt-1">{edu.period}</div>
  </div>
);

const renderExperience = (edu: Education, index: number) => (
  <Card key={index} className="p-8 card-carousel gap-0">
    <div className="">
      <h3 className="text-3xl font-semibold mb-8">{edu.title}</h3>
      <div className="text-xl text-neutral-200 font-semibold flex items-center gap-2 text-muted-foreground">
        <Image
          src={edu.logo}
          alt={`${edu.school} logo`}
          className={`${edu.logoSize} object-contain`}
        />
        <p>
          <span className="text-primary-300 font-serif">{edu.school}</span> | <span className="text-neutral-400">{edu.period}</span>
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      <p className="text-lg text-neutral-200 leading-relaxed">{edu.summary}</p>
      <ul className="text-lg text-neutral-200 leading-relaxed list-inside space-y-2">
        {Object.entries(edu.points).map(([header, description], i) => (
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

const Education = () => {  
  
  const t = useTranslations('education');
  
  const divRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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


  const educationData = t.raw('list') as Array<{
    id: string;
    title: string;
    school: string;
    period: string;
    summary: string;
    points: Record<string, string>;
  }>;

  // Helper function to get logo details
  const getLogoDetails = (id: string) => {
    const logos = {
      alyra: { logo: AlyraLogo, logoSize: "w-12 h-12" },
      polytech: { logo: PolytechLogo, logoSize: "w-27 h-12" },
    };
    return logos[id as keyof typeof logos];
  };

  const education: Education[] = educationData.map(edu => ({
    ...edu,
    ...getLogoDetails(edu.id)
  }));
  
  return (
    <section id="education" className="section-to-left">
      <div
        ref={divRef} 
        className={`flex flex-col gap-5 container max-w-6xl transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 -translate-x-32"
          }`}
      >
        <h2 className="mb-0">
          {t('title')}
        </h2>

        <SnapScrollCarousel
          items={education}
          renderItem={renderExperience}
          renderNavigationButton={renderNavigationButton}
          scaleFactor={1.1} // 8% bigger for current item
          // scrollDuration={3000}
          menuLeft={false}
        />

      </div>
    </section>
  );
};

export default Education;