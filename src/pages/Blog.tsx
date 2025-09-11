import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Blog = () => {
  const { themeClasses } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${themeClasses.bg} ${themeClasses.text}`}>
      <div className="flex-1 flex justify-center items-center w-full px-4">
        <div className="flex max-w-4xl w-full shadow-md rounded-lg overflow-hidden">
          <div className={`w-48 ${themeClasses.bg} p-6 flex flex-col items-start border-r ${themeClasses.border}`}>
            <a href="/#about" className="block w-full text-left mb-4 font-medium">about me</a>
            {/* <Link to="/blog" className="block w-full text-left mb-4 font-medium">blog</Link> */}
            <Link to="/projects" className="block w-full text-left mb-4 font-medium">projects</Link>
          </div>
          <div className="flex-1 p-8">
            <div className="max-w-3xl">
              {/* <h1 className="text-3xl font-bold mb-8">Blog</h1> */}
              <div className={`${themeClasses.textSecondary} leading-relaxed space-y-6 text-base`}>
                <p>
                  Coming soon! I'm working on sharing insights about web development, 
                  mobile web optimization, and my experiences building various projects.
                </p>
                <p>
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