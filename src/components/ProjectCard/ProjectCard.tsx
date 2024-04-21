import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import StackedList from "../StackedList";
import { Experience } from "@/types/experience.type";
import Transition from "../Transition";

type ProjectCardProps = {
  title?: string;
  techs?: Experience[];
};

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

function ProjectCard({ title, techs }: ProjectCardProps) {
  return (
    <Transition
      initial="initial"
      animate="animate"
      className="card--glass p-2 md:p-4 h-full relative overflow-hidden"
      transition={{
        delayChildren: 0.5,
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Transition
        className="absolute top-2 left-2 md:top-4 md:left-4"
        variants={fadeInLeft}
        transition={{ bounce: 0 }}
      >
        <h2>{title}</h2>
      </Transition>
      <Transition
        className="absolute top-2 right-2 md:top-4 md:right-4 size-7 rounded-full flex items-center justify-center bg-[rgb(255,255,255,.5)] shadow-sm"
        variants={fadeInRight}
        transition={{ bounce: 0 }}
      >
        <Link href="/projects">
          <ChevronRightIcon className="size-5 ms-0.5 md:ms:1 stroke-1.5" />
        </Link>
      </Transition>
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
        <StackedList list={techs} />
      </div>
    </Transition>
  );
}

export default ProjectCard;
