import { EXPERIENCE_LIST } from "@/data/experiences";
import ExperienceCard from "../ExperienceCard";

function ExperienceList() {
  return (
    <div className="container">
      <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
        {EXPERIENCE_LIST.map((experience) => (
          <ExperienceCard experience={experience} key={experience.title} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
