import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [showContent, setShowContent] = useState(false);
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
            <div className="max-w-2xl w-full" style={{ fontFamily: "'Indie Flower', cursive" }}>
              <h1
                className="text-3xl font-bold mb-6 text-center cursor-pointer hover:underline"
                onClick={() => setShowContent((v) => !v)}
              >
                The Endless Loop of Building in the Age of AI
              </h1>
              {showContent && (
                <div className="text-gray-300 leading-relaxed space-y-4 text-base">
                  <p>So, I thought about building something—and yes, I actually started building it. But before I could even finish, I stumbled upon a new AI tool. Naturally, I tried it. Then, the next day, another one appeared. And then another. It's endless.</p>
                  <p>I started with a clear idea of what I wanted to create. But with new technologies popping up every single day, it feels like I'm waking up in a different world each morning. Every tool promises to change the game, every update feels like a detour. And suddenly, I'm questioning everything:<br />
                  Is this even worth building?<br />
                  Is my idea still relevant?<br />
                  Should I pivot?</p>
                  <p>It's overwhelming. Everyone seems to be a "CEO" now, launching something, posting wins, raising funds. It should be inspiring—but honestly, sometimes it just feels like pressure. Instead of motivating me, it pulls me away from what I started.</p>
                  <p>Still, here I am. Figuring it out. One day at a time.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 