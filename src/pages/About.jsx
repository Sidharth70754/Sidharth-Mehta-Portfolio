import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-400 to-orange-600",
      delay: 0,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "from-blue-400 to-blue-600",
      delay: 0.2,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-yellow-600",
      delay: 0.4,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "from-blue-500 to-blue-700",
      delay: 0.6,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-400 to-cyan-600",
      delay: 0.8,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "from-purple-400 to-purple-600",
      delay: 1,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-400 to-green-600",
      delay: 1.4,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-green-500 to-green-700",
      delay: 1.6,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      color: "from-pink-400 to-pink-600",
      delay: 1.8,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-orange-500 to-orange-700",
      delay: 2,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-purple-500 to-purple-700",
      delay: 2.2,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-blue-400 to-green-500",
      delay: 2.4,
    },
  ];

  const SkillBall = ({ icon, color, delay }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      whileHover={{ scale: 1.1, rotate: 360 }}
      className="relative"
    >
      <div
        className={`w-24 h-24 rounded-full bg-gradient-to-br shadow-lg transform transition-transform duration-500 flex items-center justify-center ${color}`}
      >
        <img
          src={icon}
          alt="skill"
          className="w-14 h-14 object-contain"
        />
      </div>
    </motion.div>
  );

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-20 font-sans"
      style={{
        backgroundImage: `url('/src/assets/space.jpg')`,
      }}
    >
      <div className="bg-gradient-to-b from-black/70 to-black/90 w-full h-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold mb-4 text-blue-300 font-serif">About Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              I’m Sidharth Mehta, a passionate full-stack web developer and UI/UX designer with a knack for crafting engaging, scalable, and intuitive web applications.
              Beyond coding, I enjoy exploring emerging trends in tech and learning new tools to stay ahead in the ever-evolving web development landscape. Let’s create something amazing together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-4xl font-semibold text-center mb-12 text-blue-400">Technical Skills</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <SkillBall
                  key={index}
                  icon={skill.icon}
                  color={skill.color}
                  delay={skill.delay}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg">
              <h4 className="text-2xl font-semibold mb-2 text-blue-200">Experience</h4>
              <p className="text-gray-400">Experience in full-stack web development and UI/UX design, I’ve built innovative and scalable digital solutions for a variety of industries, honing my expertise in both frontend and backend technologies.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg">
              <h4 className="text-2xl font-semibold mb-2 text-blue-200">Projects</h4>
              <p className="text-gray-400">Successfully delivered 10+  projects, ranging from web applications to custom solutions, consistently exceeding client expectations through precision, creativity, and technical expertise.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg">
              <h4 className="text-2xl font-semibold mb-2 text-blue-200">Collaboration</h4>
              <p className="text-gray-400">Worked alongside diverse teams of designers, developers, and stakeholders to create seamless, user-centric applications, ensuring every project is delivered on time and to the highest standards.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
