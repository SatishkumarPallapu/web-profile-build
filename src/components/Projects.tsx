
import { useEffect, useState } from 'react';
import ProjectGrid from './ProjectGrid';
import ProjectCallToAction from './ProjectCallToAction';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small delay to ensure the component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-display transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            A showcase of my React.js and JavaScript projects built during my journey as a frontend developer, 
            featuring real-world applications and interactive experiences.
          </p>
        </div>

        <ProjectGrid isVisible={isVisible} />
        <ProjectCallToAction isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Projects;
