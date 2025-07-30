import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
       <Intro />
       <SectionDivider />
       <About />
       <Projects />
       <Skills />
       <Experience />
       <Certificates />
       <Contact />
    </main>
  );
}
