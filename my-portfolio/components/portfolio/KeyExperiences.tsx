import { Card } from "@/components/ui/card";
import Image from "next/image";

import IMDSLogo from "@/public/icons/IMDS-6-300x163.jpg";
import DOGALogo from "@/public/icons/doga.jpg";
import BabylissLogo from "@/public/icons/babyliss-logo.png";


const experiences = [
  {
    title: "Programmer Analyst",
    company: "IMDS Software",
    period: "Feb 2023 - June 2024",
    logo: IMDSLogo,
    logoSize: "w-10 h-10",
    summary:
      "Worked on complex, high-impact software projects, growing my technical competence, problem-solving abilities, and user-focused approach:",
    points: [
      "Maintained and enhanced a nationwide government application (License Plate Recognition System), implementing bug fixes and feature updates under tight deadlines.",
      "Worked on full-stack development of an internal monitoring tool (Production Monitoring Dashboard), improving functionality and preparing it for deployment.",
    ],
  },
  {
    title: "C++ Developer",
    company: "DOGA",
    period: "April 2022 - Sept 2022",
    logo: DOGALogo,
    logoSize: "w-8 h-8",
    summary:
      "Completed a 6-month internship developing an industrial tool positioning system, growing my expertise in embedded systems, computer vision, and full-stack integration:",
    points: [
      "Developed a vision-based solution on embedded Linux to estimate the 3D position and orientation of industrial tools, improving precision from prototype to production-ready performance.",
      "Implemented algorithms to detect tools accurately and calculate angles, enabling real-time guidance for technicians during assembly tasks.",
      "Built a simple web interface to visualize tool positions and guide operations, enhancing usability and bridging the gap between hardware, software, and end-users.",
      "Strengthened my skills in C++, embedded Linux development, computer vision, and full-stack integration while leading the project from prototype to practical deployment.",
    ],
  },
  {
    title: "Test Engineer",
    company: "Babyliss",
    period: "May 2021 - Aug 2021",
    logo: BabylissLogo,
    logoSize: "w-25 h-10",
    summary:
      "Developed image-processing tools to automate product testing, enhancing efficiency and precision in the test lab:",
    points: [
      "Created a system to evaluate electric clipper cutting quality — still in use by engineers.",
      "Developed a tool to assess hair curler performance using image processing.",
      "Built a solution to evaluate hair straightener temperature distribution from infrared images.",
      "Packaged each tool as a MATLAB interface (EXE), strengthening skills in automation and experimental design.",
    ],
  },
];


const KeyExperiences = () => {
  return (
    <section id="key-experiences" className="py-20 px-4 bg-background-2">
      <div className="flex flex-col gap-5 container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-text-2">
          My Key Experiences
        </h2>

        {experiences.map((exp, index) => (
          <Card key={index} className="p-8 text-text-1 border-(--color-border-3)">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className={`${exp.logoSize} object-contain`}
                />
                <p>
                  {exp.company} | {exp.period}
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">{exp.summary}</p>
            <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 mt-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyExperiences;
