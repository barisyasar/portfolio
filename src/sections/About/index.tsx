import ExperienceList from "@/components/ExperienceList";
import Intro from "@/components/Intro";

function About() {
  return (
    <section id="about-me">
      <div className="hero text-center"></div>

      <div>
        <Intro
          title="Experience"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et
        sed minima nobis dolorem quae ad libero, magni vitae? Obcaecati ullam
        sequi, maiores officia repellendus rem hic? Ut, incidunt! Autem?"
        />
        <ExperienceList />
      </div>
    </section>
  );
}

export default About;
