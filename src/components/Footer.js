import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kartik Chaudhary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
