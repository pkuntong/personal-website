import { useState, useEffect } from "react";
import { ArrowRight, Mail, Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('kuntong.p@gmail.com');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Mobile Header */}
      {isMobile && (
        <header className="sticky top-0 z-50 bg-black border-b border-gray-800 px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium">Pau Kuntong</h1>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 touch-manipulation"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <a href="#about" className="py-3 text-left font-medium touch-manipulation" onClick={() => setMobileMenuOpen(false)}>about</a>
                <Link to="/blog" className="py-3 text-left font-medium touch-manipulation" onClick={() => setMobileMenuOpen(false)}>blog</Link>
                <Link to="/projects" className="py-3 text-left font-medium touch-manipulation" onClick={() => setMobileMenuOpen(false)}>projects</Link>
              </nav>
            </div>
          )}
        </header>
      )}

      <div className="flex-1 flex justify-center items-center w-full px-4">
        <div className={`flex max-w-4xl w-full shadow-md rounded-lg overflow-hidden ${isMobile ? 'flex-col' : ''}`}>
          {/* Desktop Sidebar */}
          {!isMobile && (
            <div className="w-48 bg-black p-6 flex flex-col items-start border-r border-gray-800">
              <a href="#about" className="block w-full text-left mb-4 font-medium">about</a>
              <Link to="/blog" className="block w-full text-left mb-4 font-medium">blog</Link>
              <Link to="/projects" className="block w-full text-left mb-4 font-medium">projects</Link>
            </div>
          )}
          
          <div className={`flex-1 flex flex-col justify-center items-center ${isMobile ? 'p-4' : 'p-8'}`}>
            {/* About Section */}
            <section id="about" className="w-full">
              <div className="mx-auto">
                <div className="grid md:grid-cols-1 gap-8 items-center">
                  <div className="text-left max-w-3xl">
                    <p className={`text-gray-300 leading-relaxed mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
                      Hey, I'm Pau Kuntong — a Full-Stack Software Engineer based in the Washington, DC area.
                    </p>
                    <p className={`text-gray-300 leading-relaxed mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
                      I've spent the last few years diving deep into coding, picking up skills in JavaScript, React, and backend development along the way. These days, I'm building websites, experimenting with new ideas, and always finding something new to learn.
                    </p>
                    <p className={`text-gray-300 leading-relaxed mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
                      Right now, I'm really enjoying the creative side of coding — making projects that are fun, practical, and sometimes just for the vibes.
                    </p>
                    <p className={`text-gray-300 leading-relaxed mb-6 ${isMobile ? 'text-sm' : 'text-base'}`}>
                      When I'm not glued to my screen, I'm usually exploring, tinkering, or chasing whatever sparks my curiosity next.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Footer with social icons and copyright */}
      <footer className={`w-full mt-auto bg-black border-t border-gray-800 ${isMobile ? 'py-4 px-4' : 'py-6 px-8'}`}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <span className={`text-gray-400 mb-4 sm:mb-0 ${isMobile ? 'text-base' : 'text-lg'}`}>Pau Kuntong © 2025</span>
          <div className={`flex items-center ${isMobile ? 'space-x-4' : 'space-x-6'}`}>
            <a 
              href="https://x.com/gnotnuk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation"
              aria-label="Twitter"
            >
              <Twitter className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </a>
            <a 
              href="https://www.linkedin.com/in/paukuntong/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation"
              aria-label="LinkedIn"
            >
              <Linkedin className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </a>
            <a 
              href="https://github.com/pkuntong" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation"
              aria-label="GitHub"
            >
              <Github className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </a>
            <button 
              onClick={copyEmail} 
              className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation"
              aria-label="Copy email"
            >
              <Mail className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
