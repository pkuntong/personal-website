import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/contexts/ThemeContext";

const Blog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { themeClasses } = useTheme();
  
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
                <Link to="/" className="py-3 text-left font-medium touch-manipulation" onClick={() => setMobileMenuOpen(false)}>home</Link>
                <Link to="/apps" className="py-3 text-left font-medium touch-manipulation" onClick={() => setMobileMenuOpen(false)}>apps</Link>
              </nav>
            </div>
          )}
        </header>
      )}

      <div className="flex-1 flex justify-center w-full">
        <div className={`flex max-w-4xl w-full ${isMobile ? '' : 'shadow-md rounded-lg overflow-hidden'}`}>
          {/* Desktop Sidebar */}
          {!isMobile && (
            <div className={`w-48 ${themeClasses.bg} p-6 flex flex-col items-start border-r ${themeClasses.border}`}>
              <Link to="/" className="block w-full text-left mb-4 font-medium">home</Link>
              <Link to="/apps" className="block w-full text-left mb-4 font-medium">apps</Link>
              {/* <Link to="/blog" className="block w-full text-left mb-4 font-medium">blog</Link> */}
            </div>
          )}
          <div className={`flex-1 ${isMobile ? 'p-4' : 'p-8'}`}>
            <div className="w-full">
              {/* <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold mb-8`}>Blog</h1> */}
              <div className={`${themeClasses.textSecondary} leading-relaxed space-y-6 ${isMobile ? 'text-sm space-y-4' : 'text-base'}`}>
                <p className={isMobile ? 'text-sm' : ''}>
                  Coming soon! I'm working on sharing insights about web development, 
                  mobile web optimization, and my experiences building various projects.
                </p>
                <p className={isMobile ? 'text-sm' : ''}>
                  Stay tuned for articles about PWA development, performance optimization, 
                  and creating native-like mobile web experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;