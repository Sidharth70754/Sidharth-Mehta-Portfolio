// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const Pages2 = () => {
//   useEffect(() => {
//     // Register the ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger);

//     // Animate text when scrolled into view
//     gsap.from(".rotateText", {
//       opacity: 0,
//       y: 100, // Start 100px lower
//       duration: 1, // Duration of the animation
//       stagger: 0.2, // Stagger the text animation
//       ease: "power2.out", // Smooth easing
//       scrollTrigger: {
//         trigger: ".rotateText", // Trigger each element individually
//         start: "top 80%", // Animation starts when the element is 80% from the top
//         end: "top 20%", // Ends when the element reaches 20% from the top
//         scrub: true, // Synchronize animation with the scroll
//         markers: false, // Disable markers for debugging
//         toggleActions: "play none none none", // Play animation once
//       }
//     });

//     // Cleanup to kill any active ScrollTrigger instances when the component unmounts
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div id="section2" className="bg-white text-center p-4 text-black">
//       <h2 className="text-gray-500 text-1xl font-[anzo2]">Sidharth Mehta 2024 | Designed and Developed</h2>

//       <div className="rotateText mt-30">
//         <h1 className="text-[30vw] text-black font-[anzo4] uppercase leading-[25vw]">CREATIVE</h1>
//       </div>
//       <div className="rotateText">
//         <h1 className="text-[30vw] text-black font-[anzo4] uppercase leading-[25vw]">DESIGNER</h1>
//       </div>
//       <div className="rotateText">
//         <h1 className="text-[30vw] text-black font-[anzo4] uppercase leading-[25vw]">DEVELOPER</h1>
//       </div>
//     </div>
//   );
// };

// export default Pages2;
