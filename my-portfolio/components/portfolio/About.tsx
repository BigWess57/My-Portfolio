"use client";

import { Card } from "@/components/ui/card";
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
        className={`container max-w-4xl transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-32"
          }`}
      >
        <h2 className="">About Me</h2>
        <Card className="p-8 card-hover">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Hi, I’m a full-stack Web3 developer with a background in embedded systems and software engineering. I’m passionate about blockchain’s potential to transform the way we build digital systems, and I love creating decentralized applications that are precise, purposeful, and impactful.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;