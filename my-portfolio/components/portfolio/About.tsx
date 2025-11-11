"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import ProfileImage from "@/public/images/ib9.jpg"

const About = () => {

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
    <section 
      id="about" 
      className="relative"
    >

      <div
        ref={divRef} 
        className={`relative z-10 transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-100"
          }`}
      >
        
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center justify-end">
          
          <div className="w-full flex lg:justify-end">
            {/* ** Add your Image component here **
              - 'aspect-square' or 'aspect-[3/4]' are recommended.
              - 'rounded-lg' and 'shadow-lg' add a professional touch.
            */}
            
            <div className="grow max-w-[400px] lg:min-w-[300px] lg:max-w-[500px] right-0 aspect-square bg-neutral-800 rounded-lg border-2 border-secondary-800/50 shadow-lg flex-center text-muted-foreground">
              <Image 
                src={ProfileImage}
                alt="Igor Babic, Fullstack Web3 Developer"
                className="rounded-lg shadow-lg object-cover aspect-square w-full"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-left ml-20">About Me</h2>
            
            <Card className="p-8 card-hover border-accent-800/50">
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  Hi I&apos;m <strong className="text-primary-300">Igor</strong> — a Full-stack Web3 developer with roots in <strong className="text-secondary-300">embedded systems and software engineering</strong>. Working close to the hardware taught me to care about every detail and build things that are reliable from the inside out.
                </p>
                <p>
                  I&apos;m passionate about bringing that same rigor into blockchain development. I see Web3 as a space where transparency and true digital ownership can reshape how we build online — and I want to be part of that change by creating applications that are <strong className="text-secondary-300">precise, purposeful, and built to last</strong>.
                </p>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;