
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop`,
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: `https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop`,
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: `https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop`,
      tech: ['React', 'TypeScript', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'A headless CMS built for portfolio websites with drag-and-drop page builder and real-time preview functionality.',
      image: `https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop`,
      tech: ['Next.js', 'Sanity', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Chat Interface',
      description: 'An intelligent chat interface powered by AI with natural language processing and contextual conversations.',
      image: `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop`,
      tech: ['React', 'Python', 'OpenAI API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Data Visualization Tool',
      description: 'Interactive dashboard for data analysis with customizable charts, filters, and real-time data processing.',
      image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop`,
      tech: ['D3.js', 'React', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-lift border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="p-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" className="p-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2" size={20} />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
