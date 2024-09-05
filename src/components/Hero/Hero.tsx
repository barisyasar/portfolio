import { GITHUB, LINKEDIN_ICON } from "@/data/icons";
import Icon from "../Iconify";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center items-center text-center md:text-start">
      <article className="flex items-center gap-5 flex-col md:flex-row">
        <div className="card--glass rounded-full p-2.5">
          <Image
            src="/images/profile.jpg"
            className="rounded-full"
            alt="Description of image"
            width={220}
            height={220}
          />
        </div>
        <div className="flex flex-col">
          <h1>Barış Yaşar</h1>
          <p className="text-gray-400">Mid Level Full-Stack Developer</p>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <a
              className="link"
              href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-ya%C5%9Far-06711a201/"
              target="_blank"
            >
              <Icon icon={LINKEDIN_ICON} />
            </a>
            <a
              href="https://github.com/barisyasar"
              target="_blank"
              className="link"
            >
              <Icon icon={GITHUB} />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
