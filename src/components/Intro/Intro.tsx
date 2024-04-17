type IntroProps = {
  title: string;
  text: string;
};

function Intro({ title, text }: IntroProps) {
  return (
    <article className="container">
      <h1>{title}</h1>
      <p className="text-center">{text}</p>
    </article>
  );
}

export default Intro;
