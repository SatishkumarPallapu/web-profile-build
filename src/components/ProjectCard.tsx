
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideProps } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl: string;
    githubUrl: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    category: string;
  };
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const IconComponent = project.icon;

  return (
    <Card 
      className={`group hover-lift border-0 shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
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
            <IconComponent size={16} className="sm:w-5 sm:h-5 text-purple-600" />
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
  );
};

export default ProjectCard;
