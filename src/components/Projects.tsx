
import { ExternalLink, Github, Code, Smartphone, ShoppingCart, Database, BarChart3, Users, Play, GamepadIcon, Briefcase, Music } from 'lucide-react';
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
      title: 'Nxt Trendz (ECommerce Clone)',
      description: 'A comprehensive eCommerce platform clone of Amazon/Flipkart with user authentication, product listings, search functionality, filters, and sorting. Features secure login, JWT token management, and protected routes.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'REST APIs', 'JWT', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#',
      icon: ShoppingCart,
      category: 'E-Commerce'
    },
    {
      title: 'Jobby App',
      description: 'Job search platform with user authentication, job listings with advanced search and filtering by salary range and employment type. Includes detailed job views and protected routing for authenticated users.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Router', 'JWT', 'REST APIs'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Briefcase,
      category: 'Job Portal'
    },
    {
      title: 'Nxt Watch (YouTube Clone)',
      description: 'Video streaming platform clone with features like trending videos, gaming content, saved videos, search functionality, and theme toggle (Light/Dark). Includes user authentication and protected routes.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Router', 'JWT', 'Theme Toggle'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Play,
      category: 'Video Streaming'
    },
    {
      title: 'Movies App (Netflix Clone)',
      description: 'OTT platform clone with popular, trending, and top-rated movies. Features horizontal scrolling, movie search, detailed movie views, and TMDb API integration for rich movie database.',
      image: 'https://images.unsplash.com/photo-1489599763634-a2c3c6e7a3f5?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Slick', 'TMDb API', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Play,
      category: 'Entertainment'
    },
    {
      title: 'COVID-19 Dashboard',
      description: 'Responsive dashboard displaying COVID-19 statistics across Indian states with search functionality, interactive charts (bar and line charts), and state-specific detailed information using Recharts.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Recharts', 'React Router', 'COVID19 API', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: BarChart3,
      category: 'Data Visualization'
    },
    {
      title: 'Tasty Kitchens (Swiggy Clone)',
      description: 'Online food ordering platform with restaurant listings, sorting by ratings, detailed restaurant views, shopping cart functionality, and payment integration. Features carousel images and responsive design.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Slick', 'REST APIs', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: ShoppingCart,
      category: 'Food Delivery'
    },
    {
      title: 'Spotify Remix',
      description: 'Music streaming platform with featured playlists, categories, new releases, and audio playback functionality. Integrated with Spotify Developer APIs for authentic music experience.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'Spotify API', 'HTML Audio', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Music,
      category: 'Music Streaming'
    },
    {
      title: 'Mini Games Collection',
      description: 'Collection of memory games including Emoji Game, Rock Paper Scissors, Memory Matrix, and Card Flip Game. Features game rules modals, progress tracking, and responsive gaming experience.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Modal', 'React Progress', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      icon: GamepadIcon,
      category: 'Gaming'
    },
    {
      title: 'Task Manager (Trello Clone)',
      description: 'Project management tool with drag-and-drop functionality, board management, task organization, and Trello API integration. Features responsive design and collaborative workflow management.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'React Beautiful DND', 'Trello API', 'React Modal'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Users,
      category: 'Productivity'
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 stagger-animation">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover-lift border-0 shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <project.icon size={16} className="sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  </Button>
                  <Button size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium hover:from-purple-200 hover:to-blue-200 transition-colors duration-300"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>🚀 React.js Project</span>
                    <span>📱 Responsive Design</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Want to see more of my work?</h3>
            <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
              Check out my GitHub profile for more projects and contributions to the development community.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm sm:text-base">
                <Github className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
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
