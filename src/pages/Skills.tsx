import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  // Split skills into two halves for two rows
  const half = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, half);
  const secondRow = skills.slice(half);

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-6">Our Skills</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        We specialize in building full-stack applications with modern tools and frameworks.
      </p>

      <div className="space-y-6">
        {/* First Row */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...firstRow, ...firstRow].map((skill, index) => (
              <span
                key={`row1-${index}`}
                className="px-4 py-1.5 bg-indigo-100 text-indigo-700 
                           dark:bg-indigo-900 dark:text-indigo-200 
                           rounded-lg font-medium shadow 
                           cursor-default whitespace-nowrap
                           transition transform hover:scale-105 hover:shadow-md"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Second Row (reverse scroll for effect) */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 22, // slightly different speed
              ease: "linear",
            }}
          >
            {[...secondRow, ...secondRow].map((skill, index) => (
              <span
                key={`row2-${index}`}
                className="px-4 py-1.5 bg-indigo-100 text-indigo-700 
                           dark:bg-indigo-900 dark:text-indigo-200 
                           rounded-lg font-medium shadow 
                           cursor-default whitespace-nowrap
                           transition transform hover:scale-105 hover:shadow-md"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
