function Projects() {
  const projects = [
    {
      title: "Exchango - The Currency Converter",
      description:
        "Exchango is a simple and interactive currency converter that lets you quickly convert amounts between different currencies with instant, accurate results in a clean, user-friendly interface.",
      tech: "React, CSS, Exchange Rate API,",
      github: "https://github.com/palak-singh01/exchango--The-Currency-Converter",
      live: "",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React to showcase projects and skills.",
      tech: "React, CSS",
      github: "https://github.com/palak-singh01/portfolio",
      live: "",
    },
    {
      title: "Storynest - Blogging Platform",
      description:
        "A blogging platform where users can create, share, and read articles on various topics.",
      tech: "React, Vite, CSS, Node.js, Express, MongoDB",
      github: "https://github.com/palak-singh01/Storynestt-Frontend",
      live: "",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">{project.tech}</p>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
