import { NEW_TAB_ICON } from "@/data/icons";
import Icon from "../Iconify";
import StackedList from "../StackedList";
import Transition from "../Transition";
import { Project } from "@/types/project.type";
import Image from "next/image";

const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: { opacity: 1, x: 0 },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Transition
      initial="initial"
      animate="animate"
      className="card--glass p-4 relative overflow-hidden min-h-full flex flex-col"
      transition={{
        delayChildren: 0.6,
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex items-start justify-between mb-3">
        <Transition variants={fadeInLeft} transition={{ bounce: 0 }}>
          <h3>{project.title}</h3>
        </Transition>
        <Transition variants={fadeInRight} transition={{ bounce: 0 }}>
          {project?.link && (
            <a href={project.link} target="_blank">
              <Icon icon={NEW_TAB_ICON} className="size-6" />
            </a>
          )}
        </Transition>
      </div>
      {/* <Image src={project.img} alt={project.title} fill /> */}
      <p className="text-wrap flex-grow">{project.text}</p>
      <StackedList list={project.techs} />
    </Transition>
  );
}

export default ProjectCard;
