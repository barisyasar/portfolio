import Intro from "@/components/Intro";
import ProjectsGrid from "@/components/ProjectsGrid";

function Projects() {
  return (
    <section id="projects">
      <Intro
        title="Highlighted Projects"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et
        sed minima nobis dolorem quae ad libero, magni vitae? Obcaecati ullam
        sequi, maiores officia repellendus rem hic? Ut, incidunt! Autem?"
      />
      <ProjectsGrid />
    </section>
  );
}

export default Projects;
