interface SkillCardProps {
  skill: string;
  level: string;
  description: string;
}

export default function SkillCard({ skill, level, description }: SkillCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-white-800 rounded">
      <h3 className="text-xl font-bold mb-2 text-white">{skill}</h3>
      <p className="text-sm font-semibold text-blue-300 mb-2">{level}</p>
      <p className="text-gray-300">{description}</p>
    </article>
  );
}