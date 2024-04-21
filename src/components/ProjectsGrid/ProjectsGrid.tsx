import PROJECTS from "@/data/projects";
import ProjectCard from "../ProjectCard";
import Transition from "../Transition";

function ProjectsGrid() {
  return (
    <div className="container p-3 overflow-hidden">
      <Transition
        viewport={{ once: true, amount: 0.3 }}
        initial="initial"
        whileInView="animate"
        className="grid grid-cols-2 gap-3 md:gap-4  auto-rows-[225px] md:auto-rows-[250px]"
      >
        <Transition
          variants={{
            initial: { x: -50, opacity: 0 },
            animate: {
              x: 0,
              opacity: 1,
            },
          }}
          className="md:row-span-2"
        >
          <ProjectCard project={PROJECTS[0]} />
        </Transition>
        <Transition
          variants={{
            initial: { x: 50, opacity: 0 },
            animate: {
              x: 0,
              opacity: 1,
            },
          }}
          transition={{
            delay: 0.3,
          }}
        >
          <ProjectCard project={PROJECTS[1]} />
        </Transition>
        <Transition
          variants={{
            initial: { y: 25, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            delay: 0.15,
          }}
          className="col-span-2 md:col-span-1 md:col-end-3"
        >
          <ProjectCard project={PROJECTS[2]} />
        </Transition>
      </Transition>
    </div>
  );
}

export default ProjectsGrid;
