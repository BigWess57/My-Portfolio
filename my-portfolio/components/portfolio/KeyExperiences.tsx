"use client";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

import Image, { StaticImageData } from "next/image";

import IMDSLogo from "@/public/icons/IMDS-6-300x163.jpg";
import DOGALogo from "@/public/icons/doga.jpg";
import BabylissLogo from "@/public/icons/babyliss-logo.png";
import { ArrowRight } from "lucide-react";
import SnapScrollCarousel from "../miscelaneous/SnapScrollCarousel";


export interface Experience {
  title: string;
  company: string;
  period: string;
  logo: StaticImageData;
  logoSize: string;
  summary: string;
  points: Record<string, string>; // or use a more specific type
}


const experiences: Experience[] = [
  {
    title: "Programmer Analyst",
    company: "IMDS Software",
    period: "Feb 2023 - June 2024",
    logo: IMDSLogo,
    logoSize: "w-15 h-10",
    summary:
      "My time at IMDS Software was a period of intense professional growth. I worked on high-impact projects that strengthened my technical foundation and taught me how to balance precision with practicality.",
    points: {
      "Full-Stack Proficiency & Adaptability": "I successfully worked across the entire technology stack, from back-end bug fixing and logic on the SRPI project to front-end feature development and user interface design on the Ad'doc Dashboard. This has made me a versatile and adaptable developer.",
      "Thriving Under Pressure in Production Environments": "Maintaining the government-used SRPI system taught me to stay calm under pressure and solve problems quickly in live environments.",
      "From Code to Customer: The Importance of Communication": "Working directly with end-users on Ad'doc showed me that great code isn't enough — clear communication and understanding real needs are what make a product truly valuable",
      "End-to-End Product Understanding": "I have experience across the entire software lifecycle—from maintaining and improving a mature product (SRPI) to developing and launching a new tool for internal use (Ad'doc Dashboard). This gives me a practical understanding of what it takes for a product to succeed.",
    },
  },
  {
    title: "C++ Developer",
    company: "DOGA",
    period: "April 2022 - Sept 2022",
    logo: DOGALogo,
    logoSize: "w-8 h-8",
    summary:
      "Completed a 6-month internship developing an industrial tool positioning system, growing my expertise in embedded systems, computer vision, and full-stack integration:",
    points: {
      "Computer Vision & Embedded Systems Development": "Developed a vision-based solution on embedded Linux to estimate the 3D position and orientation of industrial tools, improving precision from prototype to production-ready performance.",
      "Real-time Algorithm Implementation": "Implemented algorithms to detect tools accurately and calculate angles, enabling real-time guidance for technicians during assembly tasks.",
      "Full-Stack Integration & User Interface": "Built a simple web interface to visualize tool positions (with video streaming) and guide operations, enhancing usability and bridging the gap between hardware, software, and end-users.",
      "End-to-End Project Leadership": "Strengthened my skills in C++, embedded Linux development, computer vision, and full-stack integration while leading the project from prototype to practical deployment.",
    },
  },
  {
    title: "Test Engineer",
    company: "Babyliss",
    period: "May 2021 - Aug 2021",
    logo: BabylissLogo,
    logoSize: "w-25 h-10",
    summary:
      "Developed image-processing tools — still in use by engineers — to automate product testing, enhancing efficiency and precision in the test lab:",
    points: {
      "Automated Electric Clipper Quality Assessment": "Created a system to evaluate electric clipper cutting quality",
      "Hair Curler Performance Analysis System": "Developed a tool to assess hair curler performance using image processing.",
      "Infrared Thermal Distribution Evaluation": "Built a solution to evaluate hair straightener temperature distribution from infrared images.",
      "End-to-End Tool Packaging & Deployment": "Packaged each tool as a MATLAB interface (EXE), strengthening skills in automation and experimental design.",
    },
  },
];


// Render function for navigation buttons
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
        <h2 className="">
          My Key Experiences
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


