import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Projects = () => {
  const { themeClasses } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${themeClasses.bg} ${themeClasses.text}`}>
      <div className="flex-1 flex justify-center items-center w-full px-4">
        <div className="flex max-w-4xl w-full shadow-md rounded-lg overflow-hidden">
          <div className={`w-48 ${themeClasses.bg} p-6 flex flex-col items-start border-r ${themeClasses.border}`}>
            <Link to="/" className="block w-full text-left mb-4 font-medium">home</Link>
            <Link to="/apps" className="block w-full text-left mb-4 font-medium">apps</Link>
            {/* <Link to="/blog" className="block w-full text-left mb-4 font-medium">blog</Link> */}
          </div>
          <div className="flex-1 p-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold mb-8">Projects</h1>
              <div className={`${themeClasses.textSecondary} leading-relaxed space-y-6 text-base`}>
                <p>
                  Over the past years, I've been working on various projects, from web applications to innovative tools, 
                  each designed to solve real-world problems and improve user experiences.
                </p>

                <div className="space-y-6">
                  <div>
                    <p>
                      I created{' '}
                      <a
                        href="https://bestlistbay.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium`}
                      >
                        Best List Bay
                      </a>{' '}
                      as a comprehensive platform for discovering and sharing curated lists. 
                      The application features a clean, modern interface built with React and focuses on 
                      providing users with organized, high-quality content recommendations across various categories.
                    </p>
                  </div>

                  <div>
                    <p>
                      <a
                        href="https://highlanderhomes.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium`}
                      >
                        Highlander Homes
                      </a>{' '}
                      is a real estate platform I developed to showcase property listings with an emphasis on 
                      user experience and responsive design. The application includes advanced search functionality, 
                      interactive maps, and detailed property information to help users find their perfect home.
                    </p>
                  </div>

                  <div>
                    <p>
                      I built{' '}
                      <a
                        href="https://www.gifttracker.cc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium`}
                      >
                        Gift Tracker
                      </a>{' '}
                      to solve the common problem of managing gift-giving occasions. This application helps users 
                      keep track of birthdays, anniversaries, and other special events, with features for setting 
                      reminders and managing gift ideas throughout the year.
                    </p>
                  </div>

                  <div>
                    <p>
                      <a
                        href="https://www.livyflow.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium`}
                      >
                        LivyFlow
                      </a>{' '}
                      represents my work in productivity and workflow optimization. This application streamlines 
                      daily tasks and project management with an intuitive interface designed to reduce friction 
                      in personal and professional workflows.
                    </p>
                  </div>

                  <div>
                    <p>
                      I developed the{' '}
                      <a
                        href="https://pkuntong.github.io/news-explorer-frontend/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium`}
                      >
                        News Explorer Frontend
                      </a>{' '}
                      as a modern news aggregation interface. This React-based application demonstrates advanced 
                      frontend development techniques, including dynamic content loading, responsive design, 
                      and efficient state management for handling large datasets.
                    </p>
                  </div>

                  <div>
                    <p>
                      <a
                        href="https://www.smartinvoiceextract.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline font-medium`}
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
                  <p className={`text-sm ${themeClasses.textMuted}`}>
                    My other projects can be found on{' '}
                    <a 
                      href="https://github.com/pkuntong" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline`}
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