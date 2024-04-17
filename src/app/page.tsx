import ScrollSpyWrapper from "@/components/ScrollSpyWrapper";
import About from "@/sections/About";

import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <ScrollSpyWrapper>
      <About />
      <Projects />
    </ScrollSpyWrapper>
  );
}
