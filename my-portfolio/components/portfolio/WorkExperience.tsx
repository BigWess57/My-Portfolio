import { Card } from "@/components/ui/card";

const WorkExperience = () => {
  return (
    <section id="experience" className="bg-background-1">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-text-2">Work Experience</h2>
        <div>
          <Card className="p-8 card-hover">
            <p className="text-lg leading-relaxed">
              I’ve worked on a wide range of projects, from embedded systems and computer vision to full-stack web development. At IMDS Software in Montreal, I developed software for license plate recognition, production monitoring, and document management. Before that, I built a 3D positioning solution on embedded Linux during my engineering internship. Today, I’m applying that experience to Web3 development — creating decentralized applications that combine solid engineering with innovative blockchain technologies.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
