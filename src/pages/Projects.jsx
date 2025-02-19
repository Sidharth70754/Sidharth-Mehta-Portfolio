import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Palette, Code2, Cpu } from "lucide-react";

const projects = [
  {
    title: "Smart - Urban Transit",
    description:
      "Optimizing urban transport with technology for efficiency and reduced congestion",
    image: "/public/static/images/SUT.png",
    tech: ["Next.js", "Machine Learning", "MongoDB", "Metamask", "UI/UX","TailwindCSS"],
    category: "Web & Machine Learning",
    icon: Palette,
    links: {
      github: "https://github.com/Sidharth70754/DTC-Admin--Smart-Urban-Transit",
      live: "https://example.com",
    },
  },
  {
    title: "Movie - Seat Booking",
    description:
      "Seamless movie ticket booking for easy, quick, and convenient access.",
    image: "/public/static/images/MST.png",
    tech: ["HTML", "TailwindCSS", "JavaScript","React.js"],
    category: "Frontend",
    icon: Code2,
    links: {
      github: "https://github.com/Sidharth70754/Movie-Seat-Booking",
      live: "https://example.com",
    },
  },
  {
    title: "2048 - Game",
    description:
      "Classic sliding tile puzzle game combining numbers to reach 2048.",
    image: "/public/static/images/2048.png",
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    category: "Frontend",
    icon: Cpu,
    links: {
      github: "https://github.com/Sidharth70754/2048-GAME-",
      live: "https://example.com",
    },
  },
  {
    title: "Animate - Website",
    description:
      "Dynamic and interactive website showcasing captivating animations and designs.",
    image: "/public/static/images/AW.png",
    tech: ["React.js", "HTML", "javaScript", "TailwindCSS"],
    category: "website",
    icon: Code2,
    links: {
      github: "https://github.com/Sidharth70754/Animate-Website",
      live: "https://example.com",
    },
  },
  {
    title: "Smart - Calculator",
    description:
      "AI-powered calculator offering smart, fast, and accurate mathematical solutions.",
    image: "/public/static/images/Cacl.png",
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    category: "Web Development",
    icon: Palette,
    links: {
      github: "https://github.com/Sidharth70754/Smart-Calculator",
      live: "https://example.com",
    },
  },
  {
    title: "Netflix - Clone",
    description:
      "Streaming platform replica with seamless design and real-time functionality.",
    image: "/public/static/images/Netflix.png",
    tech: ["HTML", "TailwindCSS", "React.js"],
    category: "Web Development",
    icon: Cpu,
    links: {
      github: "https://github.com/Sidharth70754/Netflix_Clone",
      live: "https://example.com",
    },
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMouseX((e.clientX - rect.left) / rect.width - 0.5);
    setMouseY((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      className="h-auto relative overflow-hidden bg-black text-white"
      id="projects"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover opacity-30"
          src="/public/static/images/file.mp4"
        ></video>
      </div>

      {/* Project Content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-20 relative z-10"
        style={{
          transform: `translate(${mouseX * 10}px, ${mouseY * 10}px)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Showcasing a diverse range of innovative projects in UI/UX design, web development, and AI. Each project demonstrates my expertise in problem-solving, creativity, and technical proficiency. These projects highlight my ability to deliver impactful solutions that meet user needs.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden bg-white/5 rounded-xl shadow-lg"
              style={{
                transform: `rotateX(${mouseY * 5}deg) rotateY(${
                  mouseX * 5
                }deg)`,
              }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 p-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 bg-purple-800 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="text-purple-300 hover:text-purple-500"
                  >
                    <Github />
                  </a>
                  <a
                    href={project.links.live}
                    className="text-purple-300 hover:text-purple-500"
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
