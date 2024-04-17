import Iconify from "../Iconify";

function ExperienceCard({ icon }: { icon: string }) {
  return (
    <div className="card--glass card--experience">
      <Iconify icon={icon} />
    </div>
  );
}

export default ExperienceCard;
