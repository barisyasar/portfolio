import { Experience } from "@/types/experience.type";
import ExperienceCard from "../ExperienceCard";
import Transition from "../Transition";

type StackedListProps = {
  list?: Experience[];
};

const staggeredAnimation = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: { opacity: 1, x: 0 },
};

function StackedList({ list }: StackedListProps) {
  return (
    <Transition
      initial="initial"
      whileInView="animate"
      className="stacked-list flex gap-3"
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.6,
      }}
    >
      {list?.map((item) => (
        <Transition
          variants={staggeredAnimation}
          className="stacked-list__item"
          key={item.title}
          transition={{ bounce: 0 }}
        >
          <ExperienceCard experience={item} />
        </Transition>
      ))}
    </Transition>
  );
}

export default StackedList;
