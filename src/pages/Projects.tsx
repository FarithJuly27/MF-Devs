import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {/* Badge for New Project */}
            {project.title === "Expense Tracker App" && (
              <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                New
              </span>
            )}

            {/* Optional Screenshot */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}

            {/* Project Info */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {project.desc}
            </p>

            {/* Tech Stack */}
            {project.tech && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="mt-4 flex flex-wrap gap-4">
              {/* <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 underline text-sm md:text-base"
              >
                GitHub
              </a> */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-500 underline text-sm md:text-base"
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
