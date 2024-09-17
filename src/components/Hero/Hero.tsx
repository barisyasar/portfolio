import {
  CV_ICON,
  DOUBLE_ARROW_DOWN_ICON,
  GITHUB,
  LINKEDIN_ICON,
} from "@/data/icons";
import Icon from "../Iconify";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between gap-10 items-center text-center md:text-start mt-5 md:mt-0">
      <div></div>
      <article className="flex items-center gap-5 flex-col md:flex-row">
        <div className="card--glass rounded-full p-2.5">
          <Image
            src="/images/profile.jpg"
            className="rounded-full"
            alt="Description of image"
            layout="responsive"
            width={220}
            height={220}
            sizes="(max-width: 1024px) 220px, (min-width: 1025px) 300px"
          />
        </div>
        <div className="flex flex-col">
          <h1>Barış Yaşar</h1>
          <p className="text-gray-400">Full-Stack Developer</p>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <a
              className="link"
              href="https://www.linkedin.com/in/barisyasar5/"
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
            <a
              href="/files/baris_yasar_cv_en.pdf"
              target="_blank"
              className="link"
              download
            >
              <Icon icon={CV_ICON} />
            </a>
          </div>
        </div>
      </article>
      <Link href="#about-me" className="link animate-bounce text-gray-400">
        <Icon icon={DOUBLE_ARROW_DOWN_ICON} />
      </Link>
    </section>
  );
};

export default Hero;
