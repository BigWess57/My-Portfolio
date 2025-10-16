import Hero from "@/components/portfolio/Intro";
import About from "@/components/portfolio/About";
import WorkExperience from "@/components/portfolio/WorkExperience";
import KeyExperiences from "@/components/portfolio/KeyExperiences";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Vision from "@/components/portfolio/Vision";


  
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WorkExperience />
      <KeyExperiences />
      <Skills />
      <Projects />
      <Vision />
    </div>
  );
}
