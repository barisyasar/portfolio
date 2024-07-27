import ExperienceList from "@/components/ExperienceList";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

function About() {
  return (
    <section id="about-me">
      <Hero />

      <div className="my-8">
        <Intro
          title="Experiences"
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
