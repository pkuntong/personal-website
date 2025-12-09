import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/contexts/ThemeContext";

const Projects = () => {
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
              <h1 className={`${isMobile ? 'text-2xl mb-4' : 'text-3xl mb-8'} font-bold`}>Projects</h1>
              <div className={`${themeClasses.textSecondary} leading-relaxed space-y-6 ${isMobile ? 'text-sm space-y-4' : 'text-base'}`}>
                <p>
                  Over the past years, I've been working on various projects, from web applications to innovative tools, 
                  each designed to solve real-world problems and improve user experiences.
                </p>

                <div className="space-y-6">
                  <div>
                    <p className={isMobile ? 'text-sm' : ''}>
                      I created{' '}
                      <a
                        href="https://bestlistbay.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium touch-manipulation`}
                      >
                        Best List Bay
                      </a>{' '}
                      as a comprehensive platform for discovering and sharing curated lists. 
                      The application features a clean, modern interface built with React and focuses on 
                      providing users with organized, high-quality content recommendations across various categories.
                    </p>
                  </div>

                  <div>
                    <p className={isMobile ? 'text-sm' : ''}>
                      <a
                        href="https://highlanderhomes.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium touch-manipulation`}
                      >
                        Highlander Homes
                      </a>{' '}
                      is a real estate platform I developed to showcase property listings with an emphasis on 
                      user experience and responsive design. The application includes advanced search functionality, 
                      interactive maps, and detailed property information to help users find their perfect home.
                    </p>
                  </div>

                  <div>
                    <p className={isMobile ? 'text-sm' : ''}>
                      I built{' '}
                      <a
                        href="https://www.gifttracker.cc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium touch-manipulation`}
                      >
                        Gift Tracker
                      </a>{' '}
                      to solve the common problem of managing gift-giving occasions. This application helps users 
                      keep track of birthdays, anniversaries, and other special events, with features for setting 
                      reminders and managing gift ideas throughout the year.
                    </p>
                  </div>

                  <div>
                    <p className={isMobile ? 'text-sm' : ''}>
                      <a
                        href="https://www.livyflow.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium touch-manipulation`}
                      >
                        LivyFlow
                      </a>{' '}
                      represents my work in productivity and workflow optimization. This application streamlines 
                      daily tasks and project management with an intuitive interface designed to reduce friction 
                      in personal and professional workflows.
                    </p>
                  </div>

                  <div>
                    <p className={isMobile ? 'text-sm' : ''}>
                      I developed the{' '}
                      <a
                        href="https://pkuntong.github.io/news-explorer-frontend/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium touch-manipulation`}
                      >
                        News Explorer Frontend
                      </a>{' '}
                      as a modern news aggregation interface. This React-based application demonstrates advanced 
                      frontend development techniques, including dynamic content loading, responsive design, 
                      and efficient state management for handling large datasets.
                    </p>
                  </div>

                  <div>
                    <p className={isMobile ? 'text-sm' : ''}>
                      <a
                        href="https://www.smartinvoiceextract.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium touch-manipulation`}
                      >
                        PDF Extractor Pro
                      </a>{' '}
                      leverages modern AI and document processing technologies to automatically extract and organize 
                      data from PDF documents. This tool significantly reduces manual data entry work and improves 
                      accuracy in document processing workflows.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} ${themeClasses.textMuted}`}>
                    My other projects can be found on{' '}
                    <a 
                      href="https://github.com/pkuntong" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline touch-manipulation`}
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 