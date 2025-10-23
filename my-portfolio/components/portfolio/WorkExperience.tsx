import { Card } from "@/components/ui/card";

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background-1">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-text-2">Work Experience</h2>
        <div className="space-y-6">
          <Card className="p-8 text-text-1 border-(--color-border-3)">
            {/* <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Previous Position Title</h3>
              <p className="text-muted-foreground">Another Company | 2017 - 2020</p>
            </div> */}
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
