import SkillCard from "./SkillCard";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#08111f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build scalable, responsive and
            modern web applications.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
