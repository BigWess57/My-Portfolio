import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">About Me</h2>
        <Card className="p-8 shadow-card animate-scale-in">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hi, I’m Igor — a full-stack Web3 developer with a background in embedded systems and software engineering. I’m passionate about blockchain’s potential to transform the way we build digital systems, and I love creating decentralized applications that are precise, purposeful, and impactful.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;