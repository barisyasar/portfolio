import ExperienceList from "@/components/ExperienceList";
import Intro from "@/components/Intro";

function About() {
  return (
    <section id="about-me" className="flex flex-col justify-center">
      <Intro title="A Quick Recap">
        <p className="text-center">
          With 4 years of software experience and over 2 years of professional
          work experience, I am a{" "}
          <strong>mid level full-stack developer</strong>. I have
          professional-level expertise in <strong>JavaScript</strong> and{" "}
          <strong>TypeScript</strong>. Currently, I am developing my projects
          using <strong>Next.js</strong> and <strong>Node.js</strong>.
        </p>
      </Intro>
      <ExperienceList />
    </section>
  );
}

export default About;
