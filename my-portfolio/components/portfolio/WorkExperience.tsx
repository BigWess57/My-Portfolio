"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
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
    <section id="experience" className="section-to-left">
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
            {/* Introductory Sentence */}
            <p className="text-xl leading-relaxed mb-4">
              I’ve worked on a wide range of projects, from <strong className="text-primary-300">embedded systems</strong> and computer vision to <strong className="text-primary-300">full-stack web development</strong>.
            </p>
            
            {/* Scannable List */}
            <ul className="text-lg text-neutral-200 leading-relaxed list-inside space-y-3">
              <li className="flex">
                <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1.5 shrink-0" />
                <div>
                  At <strong className="text-secondary-300">IMDS Software</strong> in Montreal, I developed software for license plate recognition, production monitoring, and document management.
                </div>
              </li>
              <li className="flex">
                <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1.5 shrink-0" />
                <div>
                  Before that, I built a <strong className="text-secondary-300">3D positioning solution</strong> on embedded Linux during my engineering internship.
                </div>
              </li>
              <li className="flex">
                <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1.5 shrink-0" />
                <div>
                  Today, I’m applying that experience to <strong className="text-secondary-300">Web3 development</strong> — creating decentralized applications that combine solid engineering with innovative blockchain technologies.
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
