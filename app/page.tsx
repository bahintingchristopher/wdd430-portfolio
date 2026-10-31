import ProjectList from './components/ProjectList';
const projects = [
  {
    title: 'Bahins Auto Sales (WDD 330 Final Project)',
    description: 'A responsive web application featuring vehicle listings, dynamic search filters, and shopping cart management.',
    technologies: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'REST API'],
    link: 'https://github.com/bahintingchristopher/WDD330-Final-Project-Bahins-Auto-Sales'
  },
  {
    title: 'Kizuna Rail Booking System',
    description: 'A full-stack brownfield train trip reservation web application featuring schedule searches, user authentication, and booking management.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS'],
    link: 'https://github.com/jdethington/cse341-team-project'
  },
  {
    title: 'Books & Inventory API',
    description: 'A full-stack backend REST API service featuring complete CRUD operations, database persistence, and automated Swagger documentation.',
    technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Swagger UI'],
    link: 'https://github.com/bahintingchristopher/cse341_books'
  },
  {
    title: 'GEC Cebu Reward App',
    description: 'A fully offline, local-network student reward system featuring QR-code attendance logging, automated point awards, and a Flutter student PWA.',
    technologies: ['Node.js', 'Express.js', 'SQLite', 'Flutter', 'Dart', 'PWA'],
    link: 'https://github.com/bahintingchristopher/GEC-Cebu-Reward-App'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-white-700">
          I am a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}