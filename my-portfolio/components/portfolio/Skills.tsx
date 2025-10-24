import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Web3 development",
    skills: ["Solidity", "Smart Contract Architecture", "ERC Standards", "OpenZeppelin", "Uniswap SDK", "Hardhat", "Foundry", "GraphQL"],
  },
  {
    title: "Front-End & Integration",
    skills: ["React", "TypeScript", "TailwindCSS", "Next.js", "Viem / Wagmi", "RainbowKit", "DApp deployment (Vercel)"],
  },
  {
    title: "Development practices",
    skills: ["GitHub Actions", "CI/CD & Version Control", "Test-Driven Development (TDD)", "UI/UX for DApps"],
  },
  {
    title: "Additionnal skills",
    skills: ["C", "C++", "C#", "Embedded Linux", "Problem Solving", "Documentation", "Teamwork"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-background-1">
      <div className="container max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-text-2">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 text-text-1 border-(--color-border-3) card-hover">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 min-w-0">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    title={skill} 
                    className="max-w-56 overflow-hidden bg-solid-2 text-text-2"
                  >
                    <span className="block truncate whitespace-nowrap text-left text-sm">
                      {skill}
                    </span>
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
