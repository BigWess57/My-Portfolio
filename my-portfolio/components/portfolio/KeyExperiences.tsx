import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

import IMDSLogo from "@/public/icons/IMDS-6-300x163.jpg";
import DOGALogo from "@/public/icons/doga.jpg";
import BabylissLogo from "@/public/icons/babyliss-logo.png";


const KeyExperiences = () => {
  return (
    <section id="key-experiences" className="py-20 px-4 bg-background">
      <div className="flex flex-col gap-5 container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">My Key Experiences</h2>
        <Card className="p-8 shadow-card animate-fade-in-up">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Programmer Analyst</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Image 
                src={IMDSLogo}   // path to your logo file
                alt="IMDS Software logo"
                className="w-10 h-10 object-contain"
              />
              <p>IMDS Software | Feb 2023 - June 2024</p>
            </div>
          </div>
          {/* <p className="text-lg leading-relaxed">
            Contributed to the maintenance and improvement of a government-used license plate recognition system, and developed a full-stack production monitoring dashboard for internal use. Learned to manage complex projects, communicate effectively, and deliver structured, user-focused solutions.

            License Plate Recognition System: contributed to the maintenance and improvement of a production-level application used nationwide. Handled bug fixes and feature updates in a high-pressure environment, which strengthened my problem-solving, communication, and structured development skills.

            Production Monitoring Dashboard: led full-stack development of a document-production monitoring tool for Ad’doc, improving its functionality and preparing it for internal deployment. This project deepened my understanding of user-focused design and the importance of clear communication between technical teams and end-users.
          </p> */}
          <p className="text-lg leading-relaxed">
            Worked on complex, high-impact software projects, growing my technical competence, problem-solving abilities, and user-focused approach:
          </p>
          <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 mt-2">
            <li>
              <strong>License Plate Recognition System:</strong> Maintained and enhanced a nationwide government application, implementing bug fixes and feature updates under tight deadlines. This experience strengthened my structured development, problem-solving, and communication skills in high-pressure environments.
            </li>
            <li>
              <strong>Production Monitoring Dashboard:</strong> Worked on full-stack development of an internal monitoring tool, improving functionality and preparing it for deployment. The project deepened my understanding of user-focused design and reinforced the importance of clear communication between technical teams and end-users.
            </li>
          </ul>
        </Card>
        <Card className="p-8 shadow-card animate-fade-in-up">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">C++ Developer</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Image 
                src={DOGALogo}   // path to your logo file
                alt="DOGA logo"
                className="w-8 h-8 object-contain"
              />
              <p>DOGA | April 2022 - Sept 2022</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Completed a 6-month internship developing an industrial tool positioning system, growing my expertise in embedded systems, computer vision, and full-stack integration:
          </p>
          <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 mt-2">
            <li>
              Developed a vision-based solution on embedded Linux to estimate the 3D position and orientation of industrial tools, improving precision from prototype to production-ready performance.
            </li>
            <li>
              Implemented algorithms to detect tools accurately and calculate angles, enabling real-time guidance for technicians during assembly tasks.
            </li>
            <li>
              Built a simple web interface to visualize tool positions and guide operations, enhancing usability and bridging the gap between hardware, software, and end-users.
            </li>
            <li>
              Strengthened my skills in C++, embedded Linux development, computer vision, and full-stack integration while leading the project from prototype to practical deployment.
            </li>
          </ul>
        </Card>
        <Card className="p-8 shadow-card animate-fade-in-up">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Test Engineer</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Image 
                src={BabylissLogo}   // path to your logo file
                alt="Babyliss Logo"
                className="w-25 h-10 object-contain"
              />
              <p>Babyliss | May 2021 - Aug 2021</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Developed image-processing tools to automate product testing, enhancing efficiency and precision in the test lab:
          </p>
          <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 mt-2">
            <li>
              Created a system to evaluate electric clipper cutting quality, including a physical support, 3D-printed jig, and MATLAB script analyzing cuts via pixel counting—still in use by engineers.
            </li>
            <li>
              Developed a tool to assess hair curler performance by analyzing strand length-to-width ratios using image processing.
            </li>
            <li>
              Built a solution to evaluate hair straightener temperature distribution from infrared images, outputting the percentage of surface exceeding chosen thresholds.
            </li>
            <li>
              Packaged each tool as a MATLAB interface (EXE), making them easily accessible for ongoing lab use, while strengthening skills in automation, image processing, and experimental design.
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default KeyExperiences;
