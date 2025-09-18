export default function About() {
  return (
    <section className="max-w-6xl w-screen sm:mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        About Us
      </h2>

      <div className="grid gap-10 sm:gap-12 md:grid-cols-2 items-start">
        {/* Fayaz Profile */}
        <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl transition">
          <img
            src="https://i.postimg.cc/3xLT7vVm/Gemini-Generated-Image-t5ye0jt5ye0jt5ye.png"
            alt="Fayaz Ahamed"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover object-top rounded-full mb-6 shadow-lg transform hover:scale-105 transition"
          />
          <h3 className="text-xl md:text-2xl font-bold mb-2">Fayaz Ahamed</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 text-sm md:text-base">
            Backend-Focused MERN Developer
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Strong in backend development with Node.js, Express, and MongoDB, and skilled in relational
            databases like MySQL. Specialized in building robust APIs, database design, and scalable
            server-side solutions for modern applications.
          </p>
        </div>

        {/* Mohamed Profile */}
        <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl transition">
          <img
            src="https://i.postimg.cc/L8WbNBGC/Gemini-Generated-Image-jf7g4zjf7g4zjf7g.png"
            alt="Mohamed Sheik Parithu"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover object-top rounded-full mb-6 shadow-lg transform hover:scale-105 transition"
          />
          <h3 className="text-xl md:text-2xl font-bold mb-2">Mohamed Sheik Parithu</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 text-sm md:text-base">
            Frontend-Focused MERN Developer
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Specialized in crafting clean and user-friendly UIs with React and Next.js. Focused
            on building modern, responsive, and performance-optimized frontends that deliver seamless
            experiences across devices.
          </p>
        </div>
      </div>
    </section>
  );
}
