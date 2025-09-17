import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 hover:scale-105 transition"
          >
            <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {project.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-indigo-600 hover:underline text-sm md:text-base"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                className="text-green-600 hover:underline text-sm md:text-base"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
