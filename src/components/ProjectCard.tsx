type ProjectProps = {
  title: string;
  desc: string;
  github: string;
  live: string;
};

export default function ProjectCard({ title, desc, github, live }: ProjectProps) {
  return (
    <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-zinc-900">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
      <div className="flex gap-4 mt-4">
        <a href={github} target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
        <a href={live} target="_blank" className="text-green-600 hover:underline">Live</a>
      </div>
    </div>
  );
}

