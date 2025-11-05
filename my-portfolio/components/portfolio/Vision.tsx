"use client";

import { useEffect, useRef, useState } from "react";

import { Card } from "@/components/ui/card";


const Vision = () => {

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
    <section id="vision" className="">
      <div 
        ref={divRef} 
        className={`container max-w-4xl transition-all duration-600 ease-out ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-32"
          }`}
      >
        <h2 className="">My Vision</h2>
        <Card className="p-8 card-hover">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I imagine a future where blockchain helps people interact and build together without barriers — where trust, ownership, and creativity are embedded in the technology itself. As a developer, I want to contribute to that change by creating decentralized applications that are reliable, transparent, and genuinely useful to everyday users.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Vision;
