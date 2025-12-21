import profile from "../assets/photo.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <img src={profile} alt="Palak Singh" className="hero-img" />

      <h1>
        Hi, I'm <span>Palak Singh</span>
      </h1>

      <p>Frontend Developer | React</p>

      <a href="#projects" className="hero-btn">
        View Projects
      </a>
    </section>
  );
}

export default Hero;
