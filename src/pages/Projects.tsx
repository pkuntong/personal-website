import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="flex-1 flex justify-center items-center w-full px-4">
        <div className="flex max-w-4xl w-full shadow-md rounded-lg overflow-hidden">
          <div className="w-48 bg-black p-6 flex flex-col items-start border-r border-gray-800">
            <a href="/#about" className="block w-full text-left mb-4 font-medium">about</a>
            <Link to="/blog" className="block w-full text-left mb-4 font-medium">blog</Link>
            <Link to="/projects" className="block w-full text-left mb-4 font-medium">projects</Link>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8">
            <div className="max-w-2xl w-full text-center">
              <h1 className="text-3xl font-bold mb-6">Projects</h1>
              <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                <p className="mb-6">
                  A simple, effective affiliate marketing website focused on coffee equipment. Built with pure HTML/CSS/JS - no frameworks, no hosting costs, no upfront investment.
                </p>
                <a
                  href="https://bestlistbay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  View Coffee Equipment Site &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 