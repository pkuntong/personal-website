
import { useState, useEffect } from "react";
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-medium text-lg">Your Name</div>
          <div className="flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Hello, I'm <br />
              <span className="font-medium">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              A passionate designer and developer crafting beautiful digital experiences with attention to detail and user-centered design.
            </p>
            <a 
              href="#work" 
              className="inline-flex items-center text-lg font-medium hover:translate-x-2 transition-transform duration-300"
            >
              View my work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">About Me</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a creative professional with a passion for clean design and elegant code. 
                With over 5 years of experience, I specialize in creating digital experiences 
                that are both beautiful and functional.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                When I'm not designing or coding, you can find me exploring new coffee shops, 
                reading design books, or experimenting with new technologies.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="bg-gray-200 aspect-square rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Selected Work</h2>
          <div className="space-y-20">
            {[
              {
                title: "E-commerce Platform",
                description: "A modern e-commerce platform with clean design and seamless user experience.",
                tech: "React, Node.js, MongoDB"
              },
              {
                title: "Design System",
                description: "Comprehensive design system for a fintech startup with 50+ components.",
                tech: "Figma, React, TypeScript"
              },
              {
                title: "Mobile App",
                description: "iOS and Android app for task management with intuitive interface.",
                tech: "React Native, Firebase"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="bg-gray-100 aspect-video rounded-lg group-hover:bg-gray-200 transition-colors duration-300"></div>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="text-2xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      {project.tech}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's create something amazing together.
          </p>
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center text-lg font-medium bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
