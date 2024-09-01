import Intro from "@/components/Intro";
import ProjectsGrid from "@/components/ProjectsGrid";

function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center">
      <Intro title="Highlighted Projects">
        <p className="text-center">
          As a full-stack developer, I&apos;ve successfully{" "}
          <strong>developed over 10 projects</strong>, showcasing my expertise
          across the entire stack. Here are three standout projects:
        </p>
      </Intro>
      <ProjectsGrid />
    </section>
  );
}

export default Projects;
