import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold">Kartik Chaudhary</a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
