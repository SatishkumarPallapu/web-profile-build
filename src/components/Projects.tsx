
import { ExternalLink, Github, Code, Smartphone, ShoppingCart, Database, BarChart3, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Enterprise SaaS Dashboard',
      description: 'A comprehensive dashboard built with React.js and Angular 11+ featuring real-time data visualization, user management, and responsive design. Implemented lazy loading and reduced API failure rates by 50%.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tech: ['React.js', 'Angular 11+', 'TypeScript', 'Material UI', 'REST APIs'],
      liveUrl: '#',
      githubUrl: '#',
      icon: BarChart3,
      category: 'Enterprise'
    },
    {
      title: 'E-Commerce Shopify Store',
      description: 'Custom Shopify theme development with Liquid templating, headless architecture implementation, and performance optimization. Integrated Storefront API and GraphQL for enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'GraphQL', 'Storefront API'],
      liveUrl: '#',
      githubUrl: '#',
      icon: ShoppingCart,
      category: 'E-Commerce'
    },
    {
      title: 'React Task Management App',
      description: 'A collaborative project management tool with drag-and-drop functionality, real-time updates using WebSocket, JWT authentication, and responsive design following Material Design principles.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Socket.io', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Users,
      category: 'Productivity'
    },
    {
      title: 'Angular CRM System',
      description: 'Customer relationship management system built with Angular 11+, featuring data visualization, customer analytics, and automated reporting. Implemented lazy loading and component reusability.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tech: ['Angular 11+', 'TypeScript', 'RxJs', 'NgRx', 'Chart.js', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Database,
      category: 'Business'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive data visualization platform extracting performance data from CSV files and converting to JSON format. Features real-time charts, filtering, and export functionality.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tech: ['React.js', 'D3.js', 'Python', 'Flask', 'Pandas', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      icon: BarChart3,
      category: 'Analytics'
    },
    {
      title: 'Progressive Web App',
      description: 'PWA with offline capabilities, push notifications, and responsive design. Implemented service workers, caching strategies, and optimized for mobile-first experience.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tech: ['React.js', 'Service Workers', 'IndexedDB', 'Web APIs', 'Webpack'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Smartphone,
      category: 'Mobile'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-display transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            Here are some of my recent projects showcasing 3+ years of experience in React.js, Angular, 
            Shopify development, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover-lift border-0 shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <project.icon size={20} className="text-purple-600" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                  <Button size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium hover:from-purple-200 hover:to-blue-200 transition-colors duration-300"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>🚀 Optimized Performance</span>
                    <span>📱 Responsive Design</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more of my work?</h3>
            <p className="mb-6 opacity-90">
              Check out my GitHub profile for more projects and contributions to open-source communities.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-2" size={20} />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
