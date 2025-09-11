import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const NotFound = () => {
  const location = useLocation();
  const { themeClasses } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center ${themeClasses.bg}`}>
      <div className="text-center">
        <h1 className={`text-4xl font-bold mb-4 ${themeClasses.text}`}>404</h1>
        <p className={`text-xl mb-4 ${themeClasses.textSecondary}`}>Oops! Page not found</p>
        <a href="/" className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline`}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
