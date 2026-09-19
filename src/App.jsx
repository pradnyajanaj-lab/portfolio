function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h2 className="text-2xl font-bold">Pradnya Janaj</h2>

        <div className="flex gap-6">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      <section className="px-8 py-24 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Pradnya 👋</h1>

        <h2 className="mt-4 text-2xl text-cyan-400">
          CSE Student & Aspiring Software Engineer
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-300">
          I am a Computer Science Engineering student passionate about
          programming, problem solving and building useful projects.
        </p>
      </section>

      <section id="about" className="px-8 py-16">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          I am currently pursuing Computer Science Engineering at REVA
          University. I am learning C, Python, Java, React and web development.
        </p>
      </section>

      <section id="skills" className="px-8 py-16">
        <h2 className="text-3xl font-bold">Skills</h2>

        <p className="mt-4 text-slate-300">
          C • Python • Java • React • Git • GitHub • PostgreSQL
        </p>
      </section>

      <section id="projects" className="px-8 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-6 rounded-xl border border-slate-800 p-6">
          <h3 className="text-xl font-semibold">
            Smart Logistics & Accessibility Platform
          </h3>

          <p className="mt-3 text-slate-300">
            A Smart India Hackathon project focused on logistics and
            accessibility challenges in the North Eastern Region of India.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-slate-800 p-6">
          <h3 className="text-xl font-semibold">2D Editor</h3>

          <p className="mt-3 text-slate-300">
            A C-based graphics project developed as part of my programming
            coursework.
          </p>
        </div>
      </section>

      <section id="contact" className="px-8 py-16">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-slate-300">
          GitHub: pradnyajanaj-lab
        </p>
      </section>

    </div>
  )
}

export default App