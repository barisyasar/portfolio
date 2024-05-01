import ContactForm from "@/components/ContactForm";
import Intro from "@/components/Intro";

function Contact() {
  return (
    <section id="contact">
      <Intro
        title="Get In Touch"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et
        sed minima nobis dolorem quae ad libero, magni vitae? Obcaecati ullam
        sequi, maiores officia repellendus rem hic? Ut, incidunt! Autem?"
      />
      <ContactForm />
    </section>
  );
}

export default Contact;
