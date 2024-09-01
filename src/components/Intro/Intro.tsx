import { ReactNode } from "react";

type IntroProps = {
  title: string;
  children: ReactNode;
};

function Intro({ title, children }: IntroProps) {
  return (
    <article className="container">
      <h2>{title}</h2>
      {children}
    </article>
  );
}

export default Intro;
