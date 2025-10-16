import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const experiences = [
  "Led a team of 10+ professionals in delivering a critical enterprise solution",
  "Architected and implemented scalable systems serving millions of users",
  "Reduced operational costs by 35% through strategic optimization",
  "Mentored junior team members, contributing to their professional growth",
  "Received multiple awards for outstanding performance and innovation",
  "Successfully managed projects with budgets exceeding $1M",
];

const KeyExperiences = () => {
  return (
    <section id="key-experiences" className="py-20 px-4 bg-background">
      <div className="flex flex-col gap-5 container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">My Key Experiences</h2>
        {/* <Card className="p-8 shadow-card animate-scale-in">
          <ul className="space-y-4">
            {experiences.map((experience, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">{experience}</span>
              </li>
            ))}
          </ul>
        </Card> */}
        <Card className="p-8 shadow-card animate-fade-in-up">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Programmer Analyst</h3>
              <p className="text-muted-foreground">IMDS Software | feb 2023 - june 2024</p>
            </div>
            <p className="text-lg leading-relaxed">
              Full-stack and software development for license plate recognition, production monitoring, and document management systems. (WRITE ACHIEVEMENTS HERE)
            </p>
        </Card>
        <Card className="p-8 shadow-card animate-fade-in-up">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">C++ Developper</h3>
              <p className="text-muted-foreground">DOGA | april 2022 - sept 2022</p>
            </div>
            <p className="text-lg leading-relaxed">
              Development of a solution for estimating the 3D positioning of tools using vision on embedded Linux OS. (WRITE ACHIEVEMENTS HERE)
            </p>
        </Card>
        <Card className="p-8 shadow-card animate-fade-in-up">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Test Engineer</h3>
              <p className="text-muted-foreground">Babyliss | may 2021 - aug 2021</p>
            </div>
            <p className="text-lg leading-relaxed">
              Development of an image processing interface for experimental resources. (WRITE ACHIEVEMENTS HERE, 3 different testing tools by image processing)
            </p>
        </Card>
      </div>
    </section>
  );
};

export default KeyExperiences;
