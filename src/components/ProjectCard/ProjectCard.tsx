import Link from "next/link";
// import { ChevronRightIcon } from "@heroicons/react/24/outline";
import StackedList from "../StackedList";
import Transition from "../Transition";
import { Project } from "@/types/project.type";
import Image from "next/image";
import Iconify from "../Iconify";
import { RIGHT_ARROW } from "@/data/icons";

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
      className="card--glass p-2 md:p-4 h-full relative overflow-hidden"
      transition={{
        delayChildren: 0.6,
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Transition
        className="absolute top-2 left-2 md:top-4 md:left-4 z-10"
        variants={fadeInLeft}
        transition={{ bounce: 0 }}
      >
        <h3>{project.title}</h3>
      </Transition>
      <Transition
        className="absolute top-2 right-2 md:top-4 md:right-4 size-7 rounded-full flex items-center justify-center bg-[rgb(255,255,255,.2)] shadow-sm z-10"
        variants={fadeInRight}
        transition={{ bounce: 0 }}
      >
        <Link href="/projects">
          <Iconify icon={RIGHT_ARROW} className="ms-0.5" />
        </Link>
      </Transition>
      {/* <Image src={project.img} alt={project.title} fill /> */}
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-10">
        <StackedList list={project.techs} />
      </div>
    </Transition>
  );
}

export default ProjectCard;
