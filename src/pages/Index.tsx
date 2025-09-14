import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Menu, X, Sun, Moon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { isDarkMode, toggleTheme, themeClasses } = useTheme();

  const copyEmail = () => {
    navigator.clipboard.writeText('kuntong.p@gmail.com');
  };

  return (
    <div className={`min-h-screen flex flex-col ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Mobile Header */}
      {isMobile && (
        <header className={`sticky top-0 z-50 ${themeClasses.bg} ${themeClasses.border} border-b px-4 py-3`}>
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
            <div className={`absolute top-full left-0 right-0 ${themeClasses.bg} ${themeClasses.border} border-b px-4 py-3`}>
              <nav className="flex flex-col space-y-3">
                {/* <Link to="/blog" className="py-3 text-left font-medium touch-manipulation" onClick={() => setMobileMenuOpen(false)}>blog</Link> */}
              </nav>
            </div>
          )}
        </header>
      )}

      {/* Social Media Icons - Top */}
      <div className={`w-full ${themeClasses.bg} ${themeClasses.border} border-b py-4`}>
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className={`flex items-center ${isMobile ? 'space-x-4' : 'space-x-6'}`}>
            <a 
              href="https://x.com/gnotnuk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-colors p-2 touch-manipulation`}
              aria-label="Twitter"
            >
              <Twitter className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </a>
            <a 
              href="https://www.linkedin.com/in/paukuntong/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-colors p-2 touch-manipulation`}
              aria-label="LinkedIn"
            >
              <Linkedin className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </a>
            <a 
              href="https://github.com/pkuntong" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-colors p-2 touch-manipulation`}
              aria-label="GitHub"
            >
              <Github className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </a>
            <button 
              onClick={copyEmail} 
              className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-colors p-2 touch-manipulation`}
              aria-label="Copy email"
            >
              <Mail className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </button>
          </div>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-colors p-2 touch-manipulation`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} /> : <Moon className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />}
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center w-full px-4">
        <div className={`flex max-w-4xl w-full shadow-md rounded-lg overflow-hidden ${isMobile ? 'flex-col' : ''}`}>
          {/* Desktop Sidebar */}
          {!isMobile && (
            <div className={`w-48 ${themeClasses.bg} p-6 flex flex-col items-start border-r ${themeClasses.border}`}>
              {/* <Link to="/blog" className="block w-full text-left mb-4 font-medium">blog</Link> */}
            </div>
          )}
          
          <div className={`flex-1 flex flex-col justify-center items-center ${isMobile ? 'p-4' : 'p-8'}`}>
            {/* About Section */}
            <section id="about" className="w-full">
              <div className="mx-auto">
                <div className="grid md:grid-cols-1 gap-8 items-center">
                  <div className="text-left max-w-3xl">
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                      <img 
                        src="/profile.jpeg" 
                        alt="Pau Kuntong" 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <p className={`${themeClasses.textSecondary} leading-relaxed mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
                          Hey, I'm Pau Kuntong — a Full-Stack Software Engineer based in the Washington, DC area.
                        </p>
                        <p className={`${themeClasses.textSecondary} leading-relaxed ${isMobile ? 'text-sm' : 'text-base'}`}>
                          Mobile web expert who creates native-like experiences. Makes your web app feel native on phones. Adds offline support, PWA features, touch gestures.
                        </p>
                      </div>
                    </div>
                    <p className={`${themeClasses.textSecondary} leading-relaxed mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
                      I've spent the last few years diving deep into coding, picking up skills in JavaScript, React, and backend development along the way. These days, I'm building websites, experimenting with new ideas, and always finding something new to learn.
                    </p>
                    <p className={`${themeClasses.textSecondary} leading-relaxed mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
                      Right now, I'm really enjoying the creative side of coding — making projects that are fun, practical, and sometimes just for the vibes.
                    </p>
                    <p className={`${themeClasses.textSecondary} leading-relaxed mb-6 ${isMobile ? 'text-sm' : 'text-base'}`}>
                      When I'm not glued to my screen, I'm usually exploring, tinkering, or chasing whatever sparks my curiosity next.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Footer with centered copyright */}
      <footer className={`w-full mt-auto ${themeClasses.bg} border-t ${themeClasses.border} ${isMobile ? 'py-4 px-4' : 'py-6 px-8'}`}>
        <div className="max-w-4xl mx-auto flex justify-center">
          <span className={`${themeClasses.textMuted} ${isMobile ? 'text-base' : 'text-lg'}`}>Pau Kuntong © 2025</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
