import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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
          <Button variant="default" size="lg" className="gap-2">
            <Mail className="w-5 h-5" />
            Email Me
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-5 h-5" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
