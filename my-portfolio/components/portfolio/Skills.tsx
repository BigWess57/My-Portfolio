import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Web3 development",
    skills: ["Solidity", "Smart Contract Architecture", "Ethereum Standards (ERC-20, ERC-721, ERC-1155, ERC-2981)", "OpenZeppelin", "Uniswap SDK", "Hardhat", "Foundry"],
  },
  {
    title: "Front-End & Integration",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Blockchain connection frameworks (Viem, Wagmi, RainbowKit)", "Wallet integration", "DApp deployment (Vercel)"],
  },
  {
    title: "Development practices",
    skills: ["GitHub Actions", "Continuous Integration & Version Control (Git, GitHub, TFS)", "Test-Driven Development (TDD)", "TUI/UX awareness for decentralized apps"],
  },
  {
    title: "Additionnal skills",
    skills: ["C", "C++", "C#", "Embedded Linux", "Problem-solving", "OpenZeppelin", "Documentation", "Teamwork"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-card animate-scale-in">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
