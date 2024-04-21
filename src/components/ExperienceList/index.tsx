import { EXPERIENCE_LIST } from "@/data/experiences";
import ExperienceCard from "../ExperienceCard";
import Transition from "../Transition";

const variants = {
  hidden: { opacity: 0, x: -64 },
  visible: { opacity: 1, x: 0 },
};

function ExperienceList() {
  return (
    <div className="container">
      <Transition
        initial="hidden"
        whileInView="visible"
        className="flex gap-3 sm:gap-4 flex-wrap justify-center"
        transition={{
          staggerChildren: 0.15,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {EXPERIENCE_LIST.map((experience) => (
          <Transition
            key={experience.title}
            variants={variants}
            transition={{
              duration: 0.1,
            }}
          >
            <ExperienceCard experience={experience} />
          </Transition>
        ))}
      </Transition>
    </div>
  );
}

export default ExperienceList;
