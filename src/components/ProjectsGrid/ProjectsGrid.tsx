import { EXPERIENCE_LIST } from "@/data/experiences";
import ProjectCard from "../ProjectCard";
import Transition from "../Transition";

function ProjectsGrid() {
  return (
    <div className="container">
      <Transition
        viewport={{ once: true, amount: 0.1 }}
        initial="initial"
        whileInView="animate"
        className="grid grid-cols-2 gap-3 md:gap-4 auto-rows-[220px]"
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
          <ProjectCard
            title="Tripy"
            techs={[
              EXPERIENCE_LIST[1],
              EXPERIENCE_LIST[15],
              EXPERIENCE_LIST[19],
            ]}
          />
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
          <ProjectCard
            title="Enerjey"
            techs={[
              EXPERIENCE_LIST[1],
              EXPERIENCE_LIST[2],
              EXPERIENCE_LIST[12],
            ]}
          />
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
          <ProjectCard
            title="AND"
            techs={[EXPERIENCE_LIST[9], EXPERIENCE_LIST[6], EXPERIENCE_LIST[7]]}
          />
        </Transition>
      </Transition>
    </div>
  );
}

export default ProjectsGrid;
