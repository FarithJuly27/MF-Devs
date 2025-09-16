import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Interested in working together? We'd love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-white dark:bg-zinc-900 shadow rounded-2xl hover:shadow-lg transition">
            <Mail className="mx-auto text-indigo-600 mb-3" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <a href="mailto:sheikparithu.rahumathulla@gmail.com" className="hover:underline">sheikparithu.rahumathulla@gmail.com</a><br />
              <a href="mailto:fayazahmd111@gmail.com" className="hover:underline">fayazahmd111@gmail.com</a>
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 shadow rounded-2xl hover:shadow-lg transition">
            <Linkedin className="mx-auto text-indigo-600 mb-3" size={32} />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <a
                href="https://www.linkedin.com/in/mohamed-sheik-parithu-856051225"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Parithu
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/bayas-ahamed-a-a-a0057720a"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Fayaz
              </a>
            </p>
          </div>


          <div className="p-6 bg-white dark:bg-zinc-900 shadow rounded-2xl hover:shadow-lg transition">
            <Github className="mx-auto text-indigo-600 mb-3" size={32} />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/FarithJuly27" target="_blank" rel="noreferrer" className="hover:underline">github.com/FarithJuly27</a><br />
              <a href="https://github.com/fayaz" target="_blank" rel="noreferrer" className="hover:underline">github.com/fayaz</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
