import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Apps = () => {
  const { themeClasses } = useTheme();

  const apps = [
    {
      name: "RizzGPT 1.0",
      icon: "/apps/rizzgpt.png",
      url: "https://apps.apple.com/us/app/rizzgpt-1-0/id6754542069",
      description: "AI-powered conversation assistant that helps you communicate with confidence and charisma."
    },
    {
      name: "LivyFlow",
      icon: "/apps/livyflow.png",
      url: "https://apps.apple.com/us/app/livyflow-zero-based-budgeting/id6755669004",
      description: "Zero-based budgeting made simple. Take control of your finances with intuitive budget tracking."
    },
    {
      name: "Sales Journal Pro",
      icon: "/apps/salesjournal.png",
      url: "https://apps.apple.com/us/app/sales-journal-pro/id6755369489",
      description: "Professional sales tracking and analytics tool for growing businesses and entrepreneurs."
    },
    {
      name: "Smart Invoice Extract",
      icon: "/apps/smartinvoice.png",
      url: "https://apps.apple.com/us/app/smart-invoice-extract/id6755616919",
      description: "Intelligent document processing that extracts invoice data automatically using AI technology."
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${themeClasses.bg} ${themeClasses.text}`}>
      <div className="flex-1 flex justify-center items-center w-full px-4">
        <div className="flex max-w-4xl w-full shadow-md rounded-lg overflow-hidden">
          <div className={`w-48 ${themeClasses.bg} p-6 flex flex-col items-start border-r ${themeClasses.border}`}>
            <Link to="/" className="block w-full text-left mb-4 font-medium">home</Link>
            <Link to="/apps" className="block w-full text-left mb-4 font-medium">apps</Link>
          </div>
          <div className="flex-1 p-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold mb-8">iOS Apps</h1>
              <div className={`${themeClasses.textSecondary} leading-relaxed space-y-6 text-base`}>
                <p>
                  I've developed several iOS applications available on the App Store, each designed to solve
                  specific problems and enhance user productivity through innovative features and intuitive design.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {apps.map((app, index) => (
                    <a
                      key={index}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-6 rounded-lg border ${themeClasses.border} hover:border-gray-400 transition-all duration-200 group`}
                    >
                      <div className="w-24 h-24 mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                        <img
                          src={app.icon}
                          alt={`${app.name} icon`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 ${themeClasses.text} text-center`}>
                        {app.name}
                      </h3>
                      <p className={`text-sm ${themeClasses.textMuted} text-center`}>
                        {app.description}
                      </p>
                    </a>
                  ))}
                </div>

                <div className="pt-4">
                  <p className={`text-sm ${themeClasses.textMuted}`}>
                    Download these apps on the{' '}
                    <a
                      href="https://apps.apple.com/us/developer/id1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${themeClasses.text} hover:${themeClasses.textSecondary} underline`}
                    >
                      App Store
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

export default Apps;
