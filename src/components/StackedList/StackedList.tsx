import ExperienceCard from "../ExperienceCard";

type StackedListProps = {
  list?: string[];
};

function StackedList({ list }: StackedListProps) {
  return (
    <div className="stacked-list">
      {list?.map((item) => (
        <div className="stacked-list__item" key={item}>
          <ExperienceCard icon={item} />
        </div>
      ))}
    </div>
  );
}

export default StackedList;
