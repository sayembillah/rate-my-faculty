import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rate My Faculty. All rights
          reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/privacypolicy"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/tos"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <Link
            to="/about"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
