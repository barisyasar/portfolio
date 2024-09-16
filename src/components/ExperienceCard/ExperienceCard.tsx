import Iconify from "../Iconify";
import { Experience } from "@/types/experience.type";

type ExperienceCardProps = {
  experience: Experience;
};

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="card--glass experience">
      <Iconify icon={experience.icon} width={48} opacity={0.9} fill="white" />
      <div className="experience__title">{experience.title}</div>
    </div>
  );
}

export default ExperienceCard;
