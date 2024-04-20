import Iconify from "../Iconify";
import { Experience } from "@/types/experience.type";

type ExperienceCardProps = {
  experience: Experience;
};

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="card--glass card--experience">
      <Iconify icon={experience.icon} />
    </div>
  );
}

export default ExperienceCard;
