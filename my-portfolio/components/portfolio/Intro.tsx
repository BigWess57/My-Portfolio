import Image from 'next/image';

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import GithubLogo from "@/public/icons/github.svg";
import LinkedInLogo from "@/public/icons/linkedin.svg";


const Intro = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-hero px-4">
      <div className="container max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text gradient-primary">
          Igor Babic
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Fullstack Web3 Developer
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="default" size="lg" className="gap-2">
            <a href="mailto:igor@danet.one">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="https://www.linkedin.com/in/igorbabic-99" target="_blank" rel="noopener noreferrer">
              <Image
                priority
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                className="w-5 h-5"
              />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="https://github.com/BigWess57" target="_blank" rel="noopener noreferrer">
              <Image
                priority
                src={GithubLogo}
                alt="Github Logo"
                className="w-5 h-5"
              />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
