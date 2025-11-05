"use client";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

import Image from "next/image";

import IMDSLogo from "@/public/icons/IMDS-6-300x163.jpg";
import DOGALogo from "@/public/icons/doga.jpg";
import BabylissLogo from "@/public/icons/babyliss-logo.png";
import { ArrowRight } from "lucide-react";


const experiences = [
  {
    title: "Programmer Analyst",
    company: "IMDS Software",
    period: "Feb 2023 - June 2024",
    logo: IMDSLogo,
    logoSize: "w-15 h-10",
    summary:
      "My time at IMDS Software was a period of intense professional growth, where I contributed to high-value software solutions and solidified my foundational skills as a developer. I thrived in both maintaining critical systems and building customer-oriented products",
    points: {
      "Full-Stack Proficiency & Adaptability": "I successfully worked across the entire technology stack, from back-end bug fixing and logic on the SRPI project to front-end feature development and user interface design on the Ad'doc Dashboard. This has made me a versatile and adaptable developer.",
      "Thriving Under Pressure in Production Environments": "Maintaining the government-used SRPI system taught me how to diagnose, prioritize, and resolve issues in a live environment where stability is paramount. I learned to remain structured and calm under tight deadlines.",
      "From Code to Customer: The Importance of Communication": "While developing the Ad'doc Dashboard, I learned that technical skill must be paired with clear communication. Direct interaction with end-users taught me to listen actively and translate business needs into technical specifications, ensuring the final product truly delivered value.",
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
      "Developed image-processing tools to automate product testing, enhancing efficiency and precision in the test lab:",
    points: {
      "Automated Electric Clipper Quality Assessment": "Created a system to evaluate electric clipper cutting quality — still in use by engineers.",
      "Hair Curler Performance Analysis System": "Developed a tool to assess hair curler performance using image processing.",
      "Infrared Thermal Distribution Evaluation": "Built a solution to evaluate hair straightener temperature distribution from infrared images.",
      "End-to-End Tool Packaging & Deployment": "Packaged each tool as a MATLAB interface (EXE), strengthening skills in automation and experimental design.",
    },
  },
];


const KeyExperiences = () => {

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

  return (
    <section id="key-experiences" className="">
      <div 
        ref={divRef} 
        className={`flex flex-col gap-5 container max-w-4xl transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-32"
          }`}
      >
        <h2 className="">
          My Key Experiences
        </h2>

        {experiences.map((exp, index) => (
          <Card key={index} className="p-8 card-hover">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className={`${exp.logoSize} object-contain`}
                />
                <p>
                  {exp.company} | {exp.period}
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">{exp.summary}</p>
            <ul className="text-lg leading-relaxed list-inside space-y-2 mt-2">
              {Object.entries(exp.points).map(([header, description], i) => (
                <li key={i} className="flex">
                  <ArrowRight className="w-4 h-4 mr-2 mt-1 shrink-0" />
                  <div>
                    <strong>{header}:</strong> {description}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyExperiences;
