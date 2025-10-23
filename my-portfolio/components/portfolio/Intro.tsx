import Image from 'next/image';

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import GithubLogo from "@/public/icons/github.svg";
import LinkedInLogo from "@/public/icons/linkedin.svg";


const Intro = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-background-1">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-2">
          Igor Babic
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-text-muted text-text-1">
          Fullstack Web3 Developer
        </p>

        <div className="flex gap-4 justify-center text-text-2">
          <Button asChild variant="outline" size="lg" className="bg-solid-1 hover:bg-solid-2 border-(--color-border-1)">
            <a href="mailto:igor@danet.one" className="inline-flex items-center">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="bg-solid-1 hover:bg-solid-2 border-(--color-border-1)">
            <a
              href="https://www.linkedin.com/in/igorbabic-99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Image priority src={LinkedInLogo} alt="LinkedIn Logo" className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="bg-solid-1 hover:bg-solid-2 border-(--color-border-1)">
            <a
              href="https://github.com/BigWess57"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Image priority src={GithubLogo} alt="Github Logo" className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
