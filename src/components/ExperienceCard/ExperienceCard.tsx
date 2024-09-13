import Iconify from "../Iconify";
import { Experience } from "@/types/experience.type";
import { Card } from "../ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

type ExperienceCardProps = {
  experience: Experience;
  side?: "top" | "bottom";
};

function ExperienceCard({ experience, side }: ExperienceCardProps) {
  return (
    <HoverCard closeDelay={0} openDelay={0}>
      <HoverCardTrigger>
        <Card className="card--experience">
          <Iconify
            icon={experience.icon}
            width="100%"
            opacity={0.9}
            fill="white"
          />
        </Card>
      </HoverCardTrigger>
      <HoverCardContent
        className="text-center w-32 p-2"
        sideOffset={6}
        side={side}
      >
        {experience.title}
      </HoverCardContent>
    </HoverCard>
  );
}

export default ExperienceCard;
