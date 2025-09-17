import { motion } from "framer-motion";
import { ArrowDown, Code2, Monitor, Rocket, Users } from "lucide-react";

export default function Home() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center md:min-h-screen w-screen  bg-gradient-to-b from-white to-gray-100 dark:from-zinc-900 dark:to-zinc-950">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-indigo-50 via-transparent to-indigo-100 dark:from-indigo-900/20 dark:via-transparent dark:to-indigo-800/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ zIndex: -1 }}
      />

      {/* Headline */}
      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight max-w-3xl mt-15 md:mt-0 px-2"
      >
        Fayaz Ahamed & <br className="hidden md:block" /> Mohamed Sheik Parithu
      </motion.h4>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-4 text-lg md:text-2xl text-gray-700 dark:text-gray-200 font-medium max-w-2xl px-2"
      >
        Full-Stack MERN Developers · Building Scalable & Modern Web Apps
      </motion.p>

      {/* Features */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl"
      >
        {[
          { icon: <Code2 size={32} />, title: "Clean Code", desc: "High-quality, maintainable, and scalable solutions." },
          { icon: <Monitor size={32} />, title: "Responsive Design", desc: "Seamless experiences across devices." },
          { icon: <Rocket size={32} />, title: "Performance", desc: "Fast-loading apps optimized for growth." },
          { icon: <Users size={32} />, title: "Collaboration", desc: "Strong teamwork & client-focused delivery." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-white/70 dark:bg-zinc-800/50 shadow-md hover:shadow-lg transition"
          >
            <div className="text-indigo-600 dark:text-indigo-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-12 flex flex-col md:flex-row justify-center gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.a
          href="#contact"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="px-8 py-3 rounded-xl font-semibold shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Hire Us
        </motion.a>

        <motion.a
          href="#projects"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="px-8 py-3 rounded-xl font-semibold border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        >
          View Work
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center text-gray-500 dark:text-gray-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={22} />
        <span className="text-sm mt-1">Scroll</span>
      </motion.div>
    </section>
  );
}
