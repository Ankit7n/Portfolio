const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div className="skill-chip rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-all duration-300">
      <Icon className={`text-5xl ${skill.color}`} />

      <h3 className="font-semibold text-center">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
