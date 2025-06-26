import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaNode, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl" />, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl" />, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', icon: <FaJs className="text-4xl" />, color: 'from-yellow-400 to-yellow-500' },
    { name: 'React', icon: <FaReact className="text-4xl" />, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: <FaNode className="text-4xl" />, color: 'from-green-500 to-green-600' },
    { name: 'Express', icon: <SiExpress className="text-4xl" />, color: 'from-gray-300 to-gray-400' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl" />, color: 'from-green-400 to-green-600' },
    { name: 'Java', icon: <FaJava className="text-4xl" />, color: 'from-red-500 to-red-700' },
    { name: 'Git', icon: <FaGitAlt className="text-4xl" />, color: 'from-orange-600 to-red-600' },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-4xl" />, color: 'from-cyan-400 to-cyan-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">My Skills</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies I've been working with recently
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`group relative p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center`}
            >
              <div className={`mb-3 bg-gradient-to-r ${skill.color} text-white p-3 rounded-full`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{skill.name}</h3>
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${skill.color} -z-10 blur-lg group-hover:blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
