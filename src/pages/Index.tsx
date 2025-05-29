import { useState, useEffect } from "react";
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <div className="flex-1 flex justify-center items-center w-full px-4">
        <div className="flex max-w-4xl w-full shadow-md rounded-lg overflow-hidden">
          <div className="w-48 bg-white p-6 flex flex-col items-start border-r border-gray-200">
            <a href="#about" className="block w-full text-left mb-4 font-medium">about</a>
            <Link to="/blog" className="block w-full text-left mb-4 font-medium">blog</Link>
            <a href="https://github.com/pkuntong?tab=repositories" target="_blank" rel="noopener noreferrer" className="block w-full text-left mb-4 font-medium">projects</a>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-8">
            {/* About Section */}
            <section id="about" className="w-full">
              <div className="mx-auto">
                <div className="grid md:grid-cols-1 gap-8 items-center">
                  <div className="text-center">
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      Hi! My name is Pau Kuntong and I am a Full-Stack Software Engineer based in Washington DC area. 
                      When I'm not coding, you can find me playing PS5, with my Kids or Playing Soccer with them.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Footer with social icons and copyright */}
      <footer className="w-full mt-auto py-6 px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <span className="text-gray-400 text-lg mb-4 sm:mb-0">Pau Kuntong © 2025</span>
          <div className="flex items-center space-x-6">
            <a href="https://x.com/gnotnuk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/paukuntong/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/pkuntong" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
