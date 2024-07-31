import React from 'react';
import { FaMapPin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center gap-4">
          <div className="text-3xl transition-transform transform hover:scale-110 hover:text-teal-500">
            <FaMapPin />
          </div>
          <h1 className="text-4xl font-bold tracking-tight transition-transform transform hover:scale-110">
            <span className="text-teal-500 ">Find</span>
            <span className="text-white hover:text-teal-500">Me</span>
          </h1>
        </div>
        <nav>
          <ul className="flex gap-8">
            {['Home', 'About', 'Contact'].map((item) => (
              <li
                key={item}
                className="text-lg font-medium cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-teal-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
