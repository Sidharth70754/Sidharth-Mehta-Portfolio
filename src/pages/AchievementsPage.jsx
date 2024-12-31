import React from "react";
import { motion } from "framer-motion";

const AchievementCard = ({ title, description, image, count, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-gradient-to-tl from-gray-900/60 to-transparent backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
    >
      {/* Background Glow */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 rounded-full ${color} opacity-30 blur-xl group-hover:opacity-50 transition-opacity`}
      />
      <div className="p-8 relative z-10 flex flex-col items-center text-center">
        {/* Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 rounded-xl mb-6 shadow-md object-cover border-4 border-gray-700"
          />
        )}

        {/* Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span
            className={`text-5xl font-extrabold ${color.replace("bg-", "text-")} tracking-tight`}
          >
            {count}
          </span>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Bottom Accent Bar */}
      <div
        className={`h-2 ${color} w-0 group-hover:w-full transition-all duration-300`}
      />
    </motion.div>
  );
};

const AchievementsPage = () => {
  const achievements = [
    {
      title: "Code For Earth",
      description: "Code For Earth is a sustainability-focused platform leveraging technology to address environmental challenges, promote green solutions, and inspire global collaboration for a more sustainable future.",
      image: "/src/assets/codeforearth.jpg", // Replace with actual image URL
      count: "2nd",
      color: "bg-blue-500",
    },
    {
      title: "SIH ",
      description: "Smart India Hackathon (SIH) is a nationwide innovation challenge empowering students to solve real-world problems with cutting-edge technology, fostering creativity, and impactful solutions.",
      image: "/src/assets/sih.jpg", // Replace with actual image URL
      count: "TOP 27",
      color: "bg-green-500",
    },
    {
      title: "Zinnovation ",
      description: "Zinnovation Hackathon is a platform for innovators and developers to collaborate, create groundbreaking solutions, and showcase their skills in solving real-world challenges with cutting-edge technology.",
      image: "/src/assets/madel.png", // Replace with actual image URL
      count: "Finalist",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay to Darken the Background */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-1" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-12">
          Project Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              description={achievement.description}
              image={achievement.image}
              count={achievement.count}
              color={achievement.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
