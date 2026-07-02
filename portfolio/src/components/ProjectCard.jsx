import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-3 transition-all duration-300">
      {/* Image */}

      <div className="overflow-hidden h-56">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-6 flex flex-col h-100">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

        <p className="text-gray-400 leading-7 flex-1">{project.description}</p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-cyan-400 text-cyan-400 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-cyan-400 hover:text-black transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-cyan-400 text-black py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-cyan-300 transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
