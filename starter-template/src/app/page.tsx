import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { SkillsSection } from "@/sections/Skills";
import { BlogSection } from "@/sections/Blog";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection />
      <AboutSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
