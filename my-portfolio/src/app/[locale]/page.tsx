import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";

import Intro from "@/src/components/portfolio/Intro";
import AnimatedBackground from "@/src/components/portfolio/AnimatedBackground";
import KeyExperiences from "@/src/components/portfolio/KeyExperiences";
import Skills from "@/src/components/portfolio/Skills";
import Projects from "@/src/components/portfolio/Projects";
import Vision from "@/src/components/portfolio/Vision";
import DarkModeToggle from "@/src/components/miscelaneous/DarkModeToggle";
import Education from "@/src/components/portfolio/Education";
import LanguageSwitcher from "../../components/miscelaneous/LanguageSwitcher";



  
export default function Home({params}: PageProps<'/[locale]'>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <div className="min-h-screen">
      <div className="fixed right-4 top-4 z-50 flex-center gap-5">
        <LanguageSwitcher/>
        <DarkModeToggle />
      </div>
      <Intro />
      <AnimatedBackground />
      <Projects />
      <Skills />
      <KeyExperiences />
      <Education />
      <Vision />
    </div>
  );
}
