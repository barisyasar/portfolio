import ScrollSpyWrapper from "@/components/ScrollSpyWrapper";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <ScrollSpyWrapper>
      <About />
      <Projects />
      <Contact />
    </ScrollSpyWrapper>
  );
}
