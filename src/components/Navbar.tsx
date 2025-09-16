export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md z-50">
      <div className="w-full flex justify-between items-center px-6 py-3">
        <a href="#home" className="font-bold text-xl text-indigo-600">M&F Devs</a>
        <div className="flex gap-6">
          <a href="#about" className="cursor-pointer hover:text-indigo-600">About</a>
          <a href="#skills" className="cursor-pointer hover:text-indigo-600">Skills</a>
          <a href="#projects" className="cursor-pointer hover:text-indigo-600">Projects</a>
          <a href="#contact" className="cursor-pointer hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
