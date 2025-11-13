"use client";

// import { Card } from "@/src/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";


const WorkExperience = () => {

  const t = useTranslations('workExperience');
  
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
        <h2 className="">{t('title')}</h2>
        <div>
          <Card className="p-8 card-hover">
            {/* Introductory Sentence */}
            <p className="text-xl leading-relaxed mb-4">
              {t.rich('intro', {
                embedded: (chunks) => <strong className="text-primary-300">{chunks}</strong>,
                web: (chunks) => <strong className="text-primary-300">{chunks}</strong>
              })}
            </p>
            
            {/* Scannable List */}
            <ul className="text-lg text-neutral-300 leading-relaxed list-inside space-y-3">
              <li className="flex">
                <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1.5 shrink-0" />
                <div>
                  {t.rich('imds', {
                    projects: (chunks) => <strong className="text-secondary-300">{chunks}</strong>
                  })}
                </div>
              </li>
              <li className="flex">
                <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1.5 shrink-0" />
                <div>
                  {t.rich('doga', {
                    positioning: (chunks) => <strong className="text-secondary-300">{chunks}</strong>
                  })}
                </div>
              </li>
              <li className="flex">
                <ArrowRight className="text-secondary-400 w-4 h-4 mr-2 mt-1.5 shrink-0" />
                <div>
                  {t.rich('web3Now', {
                    web3Dev: (chunks) => <strong className="text-secondary-300">{chunks}</strong>,
                    innovative: (chunks) => <strong className="text-secondary-300">{chunks}</strong>
                  })}
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
