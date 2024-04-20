import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import StackedList from "../StackedList";

type ProjectCardProps = {
  title?: string;
  techs?: string[];
};

function ProjectCard({ title }: ProjectCardProps) {
  return (
    <div className="card--glass p-2 md:p-4 h-full relative">
      <Link
        href="/projects"
        className="absolute top-2 right-2 md:top-4 md:right-4 size-7 rounded-full flex items-center justify-center bg-[rgb(255,255,255,.5)] shadow-sm"
      >
        <ChevronRightIcon className="size-5 ms-0.5 md:ms:1 stroke-1.5" />
      </Link>
      <h2 className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
        {title}
      </h2>
      <StackedList />
    </div>
  );
}

export default ProjectCard;
