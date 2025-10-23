import Intro from "@/components/portfolio/Intro";
import About from "@/components/portfolio/About";
import WorkExperience from "@/components/portfolio/WorkExperience";
import KeyExperiences from "@/components/portfolio/KeyExperiences";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Vision from "@/components/portfolio/Vision";
import DarkModeToggle from "@/components/miscelaneous/DarkModeToggle";


  
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* fixed top-right toggle (z-50 so it's above content) */}
      {/* <div className="fixed right-4 top-4 z-50">
        <DarkModeToggle />
      </div> */}
      <Intro />
      <About />
      <WorkExperience />
      <KeyExperiences />
      <Skills />
      <Projects />
      <Vision />
    </div>
  );
}
