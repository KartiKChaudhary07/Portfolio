import React, { useState } from 'react';
import { FaPaperPlane, FaDownload, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      // Clear status message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }
  };

  // TODO: Replace with your actual Google Drive CV link
  // 1. Upload your CV to Google Drive
  // 2. Right-click > Share > Change to 'Anyone with the link'
  // 3. Replace FILE_ID with your file ID from the shareable link
  const cvDownloadUrl = 'https://drive.google.com/file/d/1saHOc91t_sCPffWA4eRRHO4qAa7PC3ZB/view?usp=drive_link';

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {status && (
                <div className={`mt-4 p-3 rounded-lg text-center ${status.includes('successfully') ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Email</h4>
                  <a href="mailto:kartik9983chaudhary@gmail.com" className="text-gray-300 hover:text-white transition">
                    kartik9983chaudhary@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">GitHub</h4>
                  <a href="https://github.com/KartiKChaudhary07" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                    github.com/KartiKChaudhary07
                  </a>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/kartik-chaudhary07/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                    linkedin.com/in/kartik-chaudhary07
                  </a>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-blue-400 font-medium mb-3">Download My CV</h4>
                  <a 
                    href={cvDownloadUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition"
                    download
                  >
                    <FaDownload />
                    <span>Download CV</span>
                    <FaFilePdf className="ml-1 text-red-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
