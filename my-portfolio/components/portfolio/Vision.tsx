import { Card } from "@/components/ui/card";

const Vision = () => {
  return (
    <section id="vision" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">My Vision</h2>
        <Card className="p-8 shadow-card animate-scale-in">
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            I imagine a future where blockchain helps people interact and build together without barriers — where trust, ownership, and creativity are embedded in the technology itself. As a developer, I want to contribute to that change by creating decentralized applications that are reliable, transparent, and genuinely useful to everyday users..
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Vision;
