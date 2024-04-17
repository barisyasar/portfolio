import ExperienceCard from "../ExperienceCard";

function ExperienceList() {
  return (
    <div className="container">
      <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
        <ExperienceCard icon="teenyicons:nextjs-solid" />
        <ExperienceCard icon="teenyicons:react-solid" />
        <ExperienceCard icon="simple-icons:redux" />
        <ExperienceCard icon="bxl:typescript" />
        <ExperienceCard icon="simple-icons:express" />
        <ExperienceCard icon="simple-icons:apollographql" />
        <ExperienceCard icon="mdi:aws" />
        <ExperienceCard icon="teenyicons:mongodb-solid" />
        <ExperienceCard icon="bxl:postgresql" />
        <ExperienceCard icon="teenyicons:nodejs-solid" />
        <ExperienceCard icon="simple-icons:swr" />
        <ExperienceCard icon="teenyicons:graphql-solid" />
        <ExperienceCard icon="mdi:api" />
        <ExperienceCard icon="teenyicons:git-solid" />
        <ExperienceCard icon="teenyicons:github-solid" />
        <ExperienceCard icon="devicon:framermotion" />
        <ExperienceCard icon="teenyicons:tailwind-solid" />
        <ExperienceCard icon="mdi:sass" />
        <ExperienceCard icon="mdi:material-ui" />
        <ExperienceCard icon="mdi:bootstrap" />
        <ExperienceCard icon="mdi:jira" />
        <ExperienceCard icon="mdi:slack" />
      </div>
    </div>
  );
}

export default ExperienceList;
