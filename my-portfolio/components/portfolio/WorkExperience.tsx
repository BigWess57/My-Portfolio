"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";


const WorkExperience = () => {

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
    <section id="experience" className="">
      <div
        ref={divRef} 
        className={`container max-w-4xl transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 -translate-x-32"
          }`}
      >
        <h2 className="">Work Experience</h2>
        <div>
          <Card className="p-8 card-hover">
            <p className="text-xl leading-relaxed">
              I’ve worked on a wide range of projects, from embedded systems and computer vision to full-stack web development. At IMDS Software in Montreal, I developed software for license plate recognition, production monitoring, and document management. Before that, I built a 3D positioning solution on embedded Linux during my engineering internship. Today, I’m applying that experience to Web3 development — creating decentralized applications that combine solid engineering with innovative blockchain technologies.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
