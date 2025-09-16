import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 hover:scale-105 transition">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{project.desc}</p>
            <div className="mt-4 flex gap-4">
              <a href={project.github} target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
              <a href={project.live} target="_blank" className="text-green-600 hover:underline">Live</a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
