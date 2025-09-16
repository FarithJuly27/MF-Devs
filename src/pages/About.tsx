export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12">About Us</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Fayaz Profile */}
        <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition">
          <img
            src="https://i.postimg.cc/3xLT7vVm/Gemini-Generated-Image-t5ye0jt5ye0jt5ye.png"
            alt="Fayaz Ahamed"
            style={{ objectPosition: "center 0%" }}
            className="w-42 h-42 object-cover object-top rounded-full mb-6 shadow-lg transform hover:scale-105 transition"
          />
          <h3 className="text-2xl font-bold mb-2">Fayaz Ahamed</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
            Full-Stack MERN Developer
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Experienced in developing modern web solutions from e-commerce apps
            to dashboards. Focused on writing efficient code and delivering
            seamless user experiences.
          </p>
        </div>
        {/* Mohamed Profile */}
        <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition">
          <img
            src="https://i.postimg.cc/L8WbNBGC/Gemini-Generated-Image-jf7g4zjf7g4zjf7g.png"
            alt="Mohamed Sheik Parithu"
            style={{ objectPosition: "center 20%" }}
            className="w-42 h-42 object-cover object-top rounded-full mb-6 shadow-lg transform hover:scale-105 transition"
          />


          <h3 className="text-2xl font-bold mb-2">Mohamed Sheik Parithu</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
            Full-Stack MERN Developer
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Passionate about crafting clean, scalable applications with React,
            Node.js, Express, and MongoDB. Specialized in building user-friendly
            interfaces and robust backend systems.
          </p>
        </div>

      </div>
    </section>
  );
}
