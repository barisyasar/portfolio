import ScrollSpyWrapper from "@/components/ScrollSpyWrapper";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <ScrollSpyWrapper>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ScrollSpyWrapper>
  );
}
