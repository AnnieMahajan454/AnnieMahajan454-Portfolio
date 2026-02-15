import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030014]/80 backdrop-blur-md border-b border-neutral-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest">
          AM
        </div>

        {/* Center Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">

          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#experience" className="hover:text-purple-400">Experience</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <a href="https://www.linkedin.com/in/annie-mahajan-1v7i0v4u/" target="_blank">
            <FaLinkedin size={22}/>
          </a>

          <a href="https://github.com/AnnieMahajan454" target="_blank">
            <FaGithub size={22}/>
          </a>

          <a
  href="/AnnieMahajan_Resume.pdf"
  download
  className="border border-purple-400 px-4 py-2 rounded-xl text-purple-300 hover:bg-purple-500 hover:text-white transition"
>
  Resume
</a>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
