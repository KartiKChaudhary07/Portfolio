import React from 'react';
import profilePic from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Hi, I'm Kartik Chaudhary
            </span>
          </h1>
          <h2 className="text-2xl text-blue-300 mb-6">Full-Stack Developer</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm a MERN stack developer driven by curiosity and creativity. I specialize in building scalable, 
            responsive, and user-focused web applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-400 mb-8 italic">
            "Code is poetry. I write both for users and machines."
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore My Projects
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1saHOc91t_sCPffWA4eRRHO4qAa7PC3ZB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaFileDownload className="inline-block mr-1" /> Download CV
            </a>
          </div>
          <div className="mt-8 flex space-x-6">
            <a href="https://github.com/KartiKChaudhary07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl transition-all duration-300 transform hover:scale-110" aria-label="GitHub Profile">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kartik-chaudhary07/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-3xl transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn Profile">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative group">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200 animate-tilt"></div>
            <img 
              src={profilePic} 
              alt="Kartik Chaudhary" 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 transform group-hover:scale-105 transition-transform duration-500 z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
