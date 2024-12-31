import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Page1Bottom from "../components/Page1Bottom"; // Adjust the import path if needed

const Pages1 = () => {
  const textRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    const rect = textRef.current.getBoundingClientRect();
    setXVal((e.clientX - rect.x - rect.width / 2) / 70);
    setYVal((e.clientY - rect.y - rect.height / 2) / 15);
  };

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        rotationX: yVal,
        rotationY: xVal,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [xVal, yVal]);

  return (
    <div
      id="page1"
      onMouseMove={mouseMoving}
      className="h-screen p-7 relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Logo Section */}
      <div className="absolute top-12 left-20 z-30">
        <img
          src="\public\static\images\logo.png" // Replace with your logo path
          alt="Logo"
          className="w-19 h-16 object-contain"
        />
      </div>

      <div
        id="page1-in"
        className="relative z-10 shadow-2xl p-20 shadow-gray-700 h-full w-full rounded-[50px] overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover z-0 rounded-[50px] opacity-40"
          src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/1080p/mp4/file.mp4"
        ></video>

        {/* Text Section */}
        <div
          ref={textRef}
          className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white z-20"
        >
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            SIDHARTH  MEHTA
          </h1>
          <h2 className="text-3xl mt-4 text-gray-200 font-bold">
            FULL STACK DEVELOPER
          </h2>
          <p className="mt-6 text-lg font-light text-gray-300 max-w-lg">
          I am Sidharth Mehta, a passionate developer and designer. Explore my portfolio showcasing innovative projects, creative designs, and technical expertise in web development, UI/UX, and problem-solving.
          </p>
          <div className="mt-8 flex gap-6">
            <a
              href="https://drive.google.com/file/d/13IV6XDbo7FM2Zj2HsTTlDzDIguoKgdu_/view?usp=sharing"
              className="px-6 py-3 text-lg font-medium bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            {/* <a
              href="#portfolio"
              className="px-6 py-3 text-lg font-medium bg-gray-800 text-gray-300 rounded-lg shadow hover:bg-gray-700 transition-all duration-300"
            >
              View Portfolio
            </a> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute top-1/2 right-12 transform -translate-y-2/4">
          <img
            src="\public\static\images\Sidharth Mehta Photo.png" // Replace with your image path
            alt="Sidharth Mehta"
            className="w-80 h-80 rounded-full shadow-xl object-cover border-4 border-blue-500 transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Optional Bottom Section */}
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Pages1;
