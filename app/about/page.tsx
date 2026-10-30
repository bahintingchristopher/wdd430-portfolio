import SkillCard from '../components/SkillsCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-white-700 mb-8">
        This about page shares more information about my background and work.
      </p>
      <section className="grid gap-4 md:grid-cols-2 text-white-700">
        <SkillCard 
          skill="Junior Full-Stack Developer "
          level="Intermediate"
          description="I am a junior full-stack developer with experience in building web applications using React and Node.js."
        />
        <SkillCard
          skill="Tailwind CSS"
          level="Beginner"
          description="I am learning to use Tailwind CSS for styling my web applications and Tailwind is a new word to me. 
          But I am very good in ordinary css in which very semilar and identical to the tailwind css and so my learning is more faster."
        />
      </section>
    </main>
  );
}