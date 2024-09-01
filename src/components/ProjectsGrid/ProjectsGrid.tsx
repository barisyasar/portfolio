import PROJECTS from "@/data/projects";
import ProjectCard from "../ProjectCard";
import Transition from "../Transition";

function ProjectsGrid() {
  return (
    <div className="container">
      <Transition
        viewport={{ once: true, amount: 0.4 }}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <Transition
          variants={{
            initial: { y: -50, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
            },
            exit: { y: -50, opacity: 0 },
          }}
          transition={{
            bounce: 0,
            ease: "linear",
          }}
        >
          <ProjectCard project={PROJECTS[0]} />
        </Transition>
        <Transition
          variants={{
            initial: { y: 50, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            delay: 0.3,
            bounce: 0,
            ease: "linear",
          }}
        >
          <ProjectCard project={PROJECTS[1]} />
        </Transition>
        <Transition
          variants={{
            initial: { y: 100, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            delay: 0.15,
            bounce: 0,
            ease: "linear",
          }}
          className="md:col-span-2"
        >
          <ProjectCard project={PROJECTS[2]} />
        </Transition>
      </Transition>
    </div>
  );
}

export default ProjectsGrid;
