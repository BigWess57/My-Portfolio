import Intro from "@/components/portfolio/Intro";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import KeyExperiences from "@/components/portfolio/KeyExperiences";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Vision from "@/components/portfolio/Vision";
import DarkModeToggle from "@/components/miscelaneous/DarkModeToggle";
import Education from "@/components/portfolio/Education";

  
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="fixed right-4 top-4 z-50">
        <DarkModeToggle />
      </div>
      <Intro />
      <AnimatedBackground/>
      <Projects />
      <Skills />
      <KeyExperiences />
      <Education/>
      <Vision />
    </div>
  );
}
