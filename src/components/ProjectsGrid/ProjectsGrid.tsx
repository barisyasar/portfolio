import ProjectCard from "../ProjectCard";
import Transition from "../Transition";

function ProjectsGrid() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-3 md:gap-4 auto-rows-[220px]">
        <Transition
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="md:row-span-2"
        >
          <ProjectCard title="Tripy" />
        </Transition>
        <Transition
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ProjectCard title="Enerjey" />
        </Transition>
        <Transition
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="col-span-2 md:col-span-1 md:col-end-3"
        >
          <ProjectCard title="AND" />
        </Transition>
      </div>
    </div>
  );
}

export default ProjectsGrid;
