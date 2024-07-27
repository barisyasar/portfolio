const Hero = () => {
  return (
    <div className="hero flex justify-center items-center border">
      <article className="flex items-center gap-5">
        <div className="card--glass h-64 w-64 rounded-full"></div>
        <div className="flex flex-col">
          <h1>Barış Yaşar</h1>
          <p>Full-Stack Web Developer</p>
        </div>
      </article>
    </div>
  );
};

export default Hero;
