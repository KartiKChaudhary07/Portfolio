import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import project images (you'll need to add these images to your project)
import atsImage from '../assets/ats-project.jpg';
import bookcraftImage from '../assets/bookcraft-project.jpg';
import calculatorImage from '../assets/calculator-project.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Application Tracking System (ATS)',
      description: 'An ATS to streamline the recruitment process by managing job applications efficiently. Built using the MERN stack with features like resume parsing, candidate tracking, and interview scheduling.',
      link: 'https://github.com/KartiKChaudhary07/ATS-PROJECT',
      image: atsImage,
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      name: 'Book Craft',
      description: 'A dynamic platform for readers and writers to create, share, and explore literature. Features include user authentication, rich text editing, and social interactions.',
      link: 'https://github.com/KartiKChaudhary07/BookCrafters-Hub-Project',
      image: bookcraftImage,
      tags: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      name: 'Calculator',
      description: 'A responsive calculator application with a modern UI, supporting basic arithmetic operations and a history feature. Built with clean, maintainable JavaScript.',
      link: 'https://github.com/KartiKChaudhary07/Calculator_Project',
      image: calculatorImage,
      tags: ['HTML', 'CSS', 'JavaScript']
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">My Projects</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Some of my recent work. Each project is built with attention to detail and best practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    <span>View on GitHub</span>
                    <FaExternalLinkAlt className="ml-1 text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
