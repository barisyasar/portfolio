import ContactForm from "@/components/ContactForm";
import Intro from "@/components/Intro";

function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center">
      <Intro title="Get In Touch">
        <p className="text-center">
          I&apos;m always excited to connect! Whether you have a project in
          mind, want to collaborate, or just want to chat about tech, feel free
          to reach out. Let&apos;s explore how we can create something amazing
          together.
        </p>
      </Intro>
      <ContactForm />
    </section>
  );
}

export default Contact;
