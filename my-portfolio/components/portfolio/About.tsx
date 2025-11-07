"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


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
      className=""
    >
      <div
        ref={divRef} 
        className={`transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-100"
          }`}
      >
        {/* New 2-Column Grid Layout, items-center vertically aligns them */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-end">
          
          {/* --- COLUMN 1: YOUR IMAGE --- */}
          <div className="w-full flex justify-end">
            {/* ** Add your Image component here **
              - 'aspect-square' or 'aspect-[3/4]' are recommended.
              - 'rounded-lg' and 'shadow-lg' add a professional touch.
            
              <Image 
                src={ProfileImage}
                alt="Igor Babic, Fullstack Web3 Developer"
                className="rounded-lg shadow-lg object-cover aspect-square w-full"
                priority
              />
            */}
            
            {/* Placeholder until you add your image: */}
            <div className="grow max-w-[500px] right-0 aspect-square bg-neutral-800 rounded-lg border-2 border-secondary-800/50 shadow-lg flex-center text-muted-foreground ">
              Your Photo Here
            </div>
          </div>

          {/* --- COLUMN 2: YOUR STORY (Title + Card) --- */}
          {/* This div groups the title and card so they align as one block */}
          <div>
            <h2 className="text-4xl font-bold text-left ml-20">About Me</h2>
            
            <Card className="p-8 card-hover border-accent-800/50">
              <div className="space-y-4 text-xl leading-relaxed">
                <p>
                  Hi, I’m a full-stack Web3 developer. My background isn't just in web; it's forged in <strong className="text-secondary-300">embedded systems and software engineering</strong>. This taught me to value precision, reliability, and robust, systems-level thinking.
                </p>
                <p>
                  I'm passionate about applying that engineering discipline to the blockchain. I see Web3 as a new frontier for building systems based on transparency and user ownership. My goal is to create decentralized applications that are not just innovative, but <strong className="text-secondary-300">precise, purposeful, and impactful</strong>.
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