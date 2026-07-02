import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full my-5"></div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent MERN Stack projects that showcase my
            skills in frontend, backend, APIs, authentication, and deployment.
          </p>
        </div>

        {/* Cards */}

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-[48%] lg:w-[31%] xl:w-[30%]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
