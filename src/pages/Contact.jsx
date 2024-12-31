import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('/src/assets/footer.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6 py-12">
        {/* Left Side: Profile and Contact Information */}
        <div className="space-y-8 text-center md:text-left">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="\src\assets\Sidharth Mehta Photo.png"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg"
            />
          </div>
          {/* Contact Information */}
          <div className="text-white space-y-6">
            <div className="flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-300 transition-all duration-300">
              <Phone className="w-6 h-6 text-blue-400 mr-4" />
              <span>+91 7876677486</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-300 transition-all duration-300">
              <Mail className="w-6 h-6 text-blue-400 mr-4" />
              <span>sidharthmeht2004@gamil.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-300 transition-all duration-300">
              <MapPin className="w-6 h-6 text-blue-400 mr-4" />
              <span>Chandigarh, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div>
          <form className="p-8 bg-gradient-to-r from-indigo-900 via-purple-500 to-blue-500 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Get In Touch</h2>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white text-black focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white text-black focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black  focus:ring-2 focus:ring-white focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
