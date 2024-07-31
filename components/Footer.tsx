import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FindMe | <a href="mailto:findme@Harshit.dev" className="text-teal-400 hover:underline">findme@Harshit.dev</a>
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/harshitkumar-42"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-teal-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-kumar-2b906922b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-teal-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
