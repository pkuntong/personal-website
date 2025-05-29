import { useState, useEffect } from "react";
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="bg-white text-gray-900 flex">
        <div className="flex flex-1">
          <div className="w-48 bg-white p-4">
            <a href="#about" className="block w-full text-left mb-2">about</a>
            <button className="block w-full text-left mb-2">blog</button>
            <a href="https://github.com/pkuntong?tab=repositories" target="_blank" rel="noopener noreferrer" className="block w-full text-left mb-2">projects</a>
          </div>
          <div className="flex-1">
            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-white">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Hi! My name is Pau Kuntong and I am a Full-Stack Software Engineer based in Washington DC area.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      When I'm not coding, you can find me playing PS5, with my Kids or Playing Soccer with them.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* Footer with social icons and copyright */}
      <footer className="w-full py-8 px-6 text-gray-400 text-center flex flex-col items-center space-y-4 bg-white">
        <div className="flex space-x-6 justify-center">
          <a href="https://github.com/pkuntong" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/paukuntong/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://x.com/gnotnuk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <div>Pau Kuntong @2025</div>
      </footer>
    </>
  );
};

export default Index;
